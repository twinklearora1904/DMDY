const mongoose = require("mongoose");
const Blog = require("../models/Blog");
const { uploadStreamToCloudinary, deleteFromCloudinary } = require("../config/cloudinary");
const cache = require("../utils/cache");

const createBlog = async (userId, blogData, file) => {
    const { title, slug, metaDescription, content, tags, isPublished, imageUrl } = blogData;

    let image = {};
    if (imageUrl && typeof imageUrl === "string" && imageUrl.trim()) {
        image = { url: imageUrl.trim(), public_id: "" };
    }

    if (file) {
        try {
            const uploaded = await uploadStreamToCloudinary(file.buffer);
            image = {
                url: uploaded.secure_url,
                public_id: uploaded.public_id,
            };
        } catch (uploadErr) {
            if (!image.url) {
                throw new Error(`Failed to upload image: ${uploadErr.message}`);
            }
        }
    }

    const tagList = Array.isArray(tags)
        ? tags
        : typeof tags === "string"
        ? tags.split(",").map((t) => t.trim()).filter(Boolean)
        : [];

    const publishState = typeof isPublished === "boolean" ? isPublished : isPublished === "true";

    const blog = new Blog({
        title,
        slug: slug ? slug.toLowerCase().trim() : "",
        metaDescription,
        content,
        author: userId,
        tags: tagList,
        isPublished: publishState,
        image,
    });

    const createdBlog = await blog.save();
    await cache.del("blogs:public");
    return createdBlog;
};

const getBlogs = async (isAdmin, allQuery) => {
    const isPublicQuery = !isAdmin || allQuery !== "true";

    if (isPublicQuery) {
        const cachedBlogs = await cache.get("blogs:public");
        if (cachedBlogs) return { data: cachedBlogs, cached: true };
    }

    const filter = {};
    if (isPublicQuery) {
        filter.isPublished = true;
    }

    const blogs = await Blog.find(filter)
        .select("-content")
        .sort({ createdAt: -1 })
        .populate("author", "name email");

    if (isPublicQuery) {
        await cache.set("blogs:public", blogs, 3600);
    }

    return { data: blogs, cached: false };
};

const getBlogByIdOrSlug = async (id) => {
    const normalizedKey = (id || "").toLowerCase().trim();
    const cachedBlog = await cache.get(`blog:item:${normalizedKey}`);
    if (cachedBlog && cachedBlog.isPublished) {
        return { data: cachedBlog, cached: true };
    }

    const isObjectId = mongoose.Types.ObjectId.isValid(id) && id.length === 24;
    let blog = null;
    if (isObjectId) {
        blog = await Blog.findById(id).populate("author", "name email");
    }
    if (!blog) {
        blog = await Blog.findOne({ slug: normalizedKey }).populate("author", "name email");
    }

    if (!blog) return null;

    if (blog.isPublished) {
        await cache.set(`blog:item:${blog._id.toString()}`, blog, 3600);
        if (blog.slug) {
            await cache.set(`blog:item:${blog.slug.toLowerCase().trim()}`, blog, 3600);
        }
        return { data: blog, cached: false };
    }

    return { data: blog, cached: false };
};

const updateBlog = async (userId, id, updateData, file) => {
    const { title, slug, metaDescription, content, tags, isPublished, imageUrl, removeImage } = updateData;
    const isObjectId = mongoose.Types.ObjectId.isValid(id) && id.length === 24;
    let blog = isObjectId ? await Blog.findById(id) : null;
    if (!blog) {
        blog = await Blog.findOne({ slug: id });
    }

    if (!blog) throw new Error("Blog not found");
    if (blog.author.toString() !== userId.toString() && userId.role !== "admin") {
        throw new Error("Not authorized to update this blog");
    }

    if (title !== undefined) blog.title = title;
    if (slug !== undefined) blog.slug = slug.toLowerCase().trim();
    if (metaDescription !== undefined) blog.metaDescription = metaDescription;
    if (content !== undefined) blog.content = content;

    if (tags !== undefined) {
        blog.tags = Array.isArray(tags)
            ? tags
            : typeof tags === "string"
            ? tags.split(",").map((t) => t.trim()).filter(Boolean)
            : blog.tags;
    }

    if (isPublished !== undefined) {
        blog.isPublished = typeof isPublished === "boolean" ? isPublished : isPublished === "true";
    }

    if (removeImage === "true" || removeImage === true) {
        if (blog.image && blog.image.public_id) {
            await deleteFromCloudinary(blog.image.public_id);
        }
        blog.image = { url: "", public_id: "" };
    } else if (imageUrl && typeof imageUrl === "string" && imageUrl.trim()) {
        if (blog.image && blog.image.public_id) {
            await deleteFromCloudinary(blog.image.public_id);
        }
        blog.image = { url: imageUrl.trim(), public_id: "" };
    }

    if (file) {
        if (blog.image && blog.image.public_id) {
            await deleteFromCloudinary(blog.image.public_id);
        }
        try {
            const uploaded = await uploadStreamToCloudinary(file.buffer);
            blog.image = {
                url: uploaded.secure_url,
                public_id: uploaded.public_id,
            };
        } catch (uploadErr) {
            if (!blog.image?.url) {
                throw new Error(`Failed to upload image: ${uploadErr.message}`);
            }
        }
    }

    const updatedBlog = await blog.save();
    await cache.del("blogs:public");
    await cache.del(`blog:item:${blog._id}`);
    if (blog.slug) {
        await cache.del(`blog:item:${blog.slug.toLowerCase().trim()}`);
    }

    return updatedBlog;
};

const deleteBlog = async (userId, id) => {
    const isObjectId = mongoose.Types.ObjectId.isValid(id) && id.length === 24;
    let blog = isObjectId ? await Blog.findById(id) : null;
    if (!blog) {
        blog = await Blog.findOne({ slug: id });
    }

    if (!blog) throw new Error("Blog not found");
    if (blog.author.toString() !== userId.toString() && userId.role !== "admin") {
        throw new Error("Not authorized to delete this blog");
    }

    if (blog.image && blog.image.public_id) {
        await deleteFromCloudinary(blog.image.public_id);
    }

    await blog.deleteOne();
    await cache.del("blogs:public");
    if (blog.slug) {
        await cache.del(`blog:item:${blog._id}`);
        await cache.del(`blog:item:${blog.slug.toLowerCase().trim()}`);
    }

    return { message: "Blog removed successfully" };
};

const searchBlogs = async (params) => {
    const { q = "", tag = "All", sort = "relevance", limit = 20, page = 1 } = params;
    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(50, Math.max(1, parseInt(limit, 10) || 20));
    const skip = (pageNum - 1) * limitNum;

    const baseFilter = { isPublished: true };
    if (tag && tag !== "All") {
        baseFilter.tags = tag;
    }

    const trimmedQuery = q.trim();
    let blogs = [];
    let total = 0;

    if (trimmedQuery) {
        try {
            const textFilter = { ...baseFilter, $text: { $search: trimmedQuery } };
            let sortQuery = { score: { $meta: "textScore" } };
            if (sort === "newest") sortQuery = { createdAt: -1 };
            if (sort === "popular") sortQuery = { views: -1, createdAt: -1 };
            if (sort === "oldest") sortQuery = { createdAt: 1 };

            blogs = await Blog.find(textFilter, { score: { $meta: "textScore" } })
                .select("-content")
                .sort(sortQuery)
                .skip(skip)
                .limit(limitNum)
                .populate("author", "name email");
            total = await Blog.countDocuments(textFilter);
        } catch (e) {
            blogs = [];
            total = 0;
        }

        if (total === 0) {
            const escaped = trimmedQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const regex = new RegExp(escaped, "i");
            const regexFilter = {
                ...baseFilter,
                $or: [{ title: regex }, { tags: regex }, { metaDescription: regex }, { content: regex }]
            };
            let sortQuery = { createdAt: -1 };
            if (sort === "popular") sortQuery = { views: -1, createdAt: -1 };
            if (sort === "oldest") sortQuery = { createdAt: 1 };

            blogs = await Blog.find(regexFilter)
                .select("-content")
                .sort(sortQuery)
                .skip(skip)
                .limit(limitNum)
                .populate("author", "name email");
            total = await Blog.countDocuments(regexFilter);
        }
    } else {
        let sortQuery = { createdAt: -1 };
        if (sort === "popular") sortQuery = { views: -1, createdAt: -1 };
        if (sort === "oldest") sortQuery = { createdAt: 1 };

        blogs = await Blog.find(baseFilter)
            .select("-content")
            .sort(sortQuery)
            .skip(skip)
            .limit(limitNum)
            .populate("author", "name email");
        total = await Blog.countDocuments(baseFilter);
    }

    return {
        results: blogs,
        total,
        page: pageNum,
        totalPages: Math.ceil(total / limitNum) || 1,
        query: trimmedQuery,
        tag,
        sort
    };
};

const getSearchSuggestions = async (q) => {
    const trimmed = q.trim();
    if (!trimmed || trimmed.length < 2) return { suggestions: [], tags: [] };

    const escaped = trimmed.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escaped, "i");

    const blogs = await Blog.find({ isPublished: true, $or: [{ title: regex }, { tags: regex }] })
        .select("title slug tags views image metaDescription")
        .sort({ views: -1, createdAt: -1 })
        .limit(6);

    const matchedTags = [];
    blogs.forEach(b => {
        (b.tags || []).forEach(t => {
            if (regex.test(t) && !matchedTags.includes(t)) matchedTags.push(t);
        });
    });

    return { suggestions: blogs, tags: matchedTags.slice(0, 5) };
};

const recordBlogView = async (id) => {
    const isObjectId = mongoose.Types.ObjectId.isValid(id) && id.length === 24;
    const normalizedId = (id || "").toLowerCase().trim();

    let blog = null;
    if (isObjectId) {
        blog = await Blog.findOneAndUpdate({ _id: id, isPublished: true }, { $inc: { views: 1 } }, { new: true }).select("views");
    }
    if (!blog && normalizedId) {
        blog = await Blog.findOneAndUpdate({ slug: normalizedId, isPublished: true }, { $inc: { views: 1 } }, { new: true }).select("views");
    }

    if (!blog) throw new Error("Article not found");
    return { success: true, views: blog.views };
};

module.exports = {
    createBlog,
    getBlogs,
    getBlogByIdOrSlug,
    updateBlog,
    deleteBlog,
    searchBlogs,
    getSearchSuggestions,
    recordBlogView
};
