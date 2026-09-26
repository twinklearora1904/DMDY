const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Blog = require("../models/Blog");
const User = require("../models/User");
const { uploadStreamToCloudinary, deleteFromCloudinary } = require("../config/cloudinary");

/**
 * Helper to check whether the incoming request is authenticated as an admin.
 */
const checkIsAdmin = async (req) => {
    if (req.user && req.user.role === "admin") return true;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            if (!token) return false;
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.id).select("role");
            return Boolean(user && user.role === "admin");
        } catch {
            return false;
        }
    }
    return false;
};

const createBlog = async (req, res) => {
    try {
        const { title, slug, metaDescription, content, tags, isPublished, imageUrl } = req.body;

        let image = {};
        if (imageUrl && typeof imageUrl === "string" && imageUrl.trim()) {
            image = { url: imageUrl.trim(), public_id: "" };
        }

        if (req.file) {
            try {
                const uploaded = await uploadStreamToCloudinary(req.file.buffer);
                image = {
                    url: uploaded.secure_url,
                    public_id: uploaded.public_id,
                };
            } catch (uploadErr) {
                if (!image.url) {
                    return res.status(400).json({
                        message: "Failed to upload image. Please verify Cloudinary credentials or provide an Image URL.",
                        error: uploadErr.message,
                    });
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
            author: req.user._id,
            tags: tagList,
            isPublished: publishState,
            image,
        });

        const createdBlog = await blog.save();
        res.status(201).json(createdBlog);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "A blog post with this slug already exists." });
        }
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const getBlogs = async (req, res) => {
    try {
        const isAdmin = await checkIsAdmin(req);
        const filter = {};
        // Only verified admins can view unpublished/draft posts with ?all=true
        if (!isAdmin || req.query.all !== "true") {
            filter.isPublished = true;
        }

        const blogs = await Blog.find(filter)
            .select("-content")
            .sort({ createdAt: -1 })
            .populate("author", "name email");

        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const isObjectId = mongoose.Types.ObjectId.isValid(id) && id.length === 24;

        let blog = null;
        if (isObjectId) {
            blog = await Blog.findById(id).populate("author", "name email");
        }

        // If not found by ObjectId or if param is a slug, search by slug
        if (!blog) {
            blog = await Blog.findOne({ slug: id }).populate("author", "name email");
        }

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        // If blog is a draft, only authenticated admins may access it
        if (!blog.isPublished) {
            const isAdmin = await checkIsAdmin(req);
            if (!isAdmin) {
                return res.status(404).json({ message: "Blog not found" });
            }
        }

        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, slug, metaDescription, content, tags, isPublished, imageUrl, removeImage } = req.body;

        const isObjectId = mongoose.Types.ObjectId.isValid(id) && id.length === 24;
        let blog = isObjectId ? await Blog.findById(id) : null;
        if (!blog) {
            blog = await Blog.findOne({ slug: id });
        }

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
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

        if (req.file) {
            // Remove previous image from Cloudinary if exists
            if (blog.image && blog.image.public_id) {
                await deleteFromCloudinary(blog.image.public_id);
            }
            try {
                const uploaded = await uploadStreamToCloudinary(req.file.buffer);
                blog.image = {
                    url: uploaded.secure_url,
                    public_id: uploaded.public_id,
                };
            } catch (uploadErr) {
                if (!blog.image?.url) {
                    return res.status(400).json({
                        message: "Failed to upload image. Please verify Cloudinary credentials or provide an Image URL.",
                        error: uploadErr.message,
                    });
                }
            }
        }

        const updatedBlog = await blog.save();
        res.json(updatedBlog);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "A blog post with this slug already exists." });
        }
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const isObjectId = mongoose.Types.ObjectId.isValid(id) && id.length === 24;

        let blog = isObjectId ? await Blog.findById(id) : null;
        if (!blog) {
            blog = await Blog.findOne({ slug: id });
        }

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        if (blog.image && blog.image.public_id) {
            await deleteFromCloudinary(blog.image.public_id);
        }

        await blog.deleteOne();
        res.json({ message: "Blog removed successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog };
