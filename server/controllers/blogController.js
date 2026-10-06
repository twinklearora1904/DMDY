const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Blog = require("../models/Blog");
const User = require("../models/User");
const { uploadStreamToCloudinary, deleteFromCloudinary } = require("../config/cloudinary");
const cache = require("../utils/cache");

/**
 * Helper to check whether the incoming request is authenticated as an admin.
 * Inspects req.user or req.headers.authorization so public endpoints
 * (such as GET /api/blogs?all=true and GET /api/blogs/:id) grant access to drafts for admins.
 */
const checkIsAdmin = async (req) => {
    if (req.user && req.user.role === "admin") return true;

    if (req.headers && req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            if (!token) return false;

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (!decoded || !decoded.id) return false;

            const user = await User.findById(decoded.id).select("-password");
            if (user && user.role === "admin") {
                req.user = user;
                return true;
            }
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

        // Invalidate blogs cache so fresh content appears immediately
        await cache.delByPrefix("blog");

        res.status(201).json(createdBlog);
    } catch (error) {
        // Clean up uploaded Cloudinary image if database save failed to prevent orphaned media
        if (req.file && image && image.public_id) {
            await deleteFromCloudinary(image.public_id).catch(() => {});
        }
        if (error.code === 11000) {
            return res.status(400).json({ message: "A blog post with this slug already exists." });
        }
        res.status(500).json({ message: "Internal server error" });
    }
};

const getBlogs = async (req, res) => {
    try {
        const isAdmin = await checkIsAdmin(req);
        const isPublicQuery = !isAdmin || req.query.all !== "true";

        // For public requests, check cache first (1-hour TTL)
        if (isPublicQuery) {
            const cachedBlogs = await cache.get("blogs:public");
            if (cachedBlogs) {
                res.setHeader("X-Cache", "HIT");
                res.setHeader("Cache-Control", "public, max-age=3600, stale-while-revalidate=600");
                return res.json(cachedBlogs);
            }
        }

        const filter = {};
        if (isPublicQuery) {
            filter.isPublished = true;
        }

        const blogs = await Blog.find(filter)
            .select("-content")
            .sort({ createdAt: -1 })
            .populate("author", "name email");

        // Cache public response for 1 hour
        if (isPublicQuery) {
            await cache.set("blogs:public", blogs, 3600);
            res.setHeader("X-Cache", "MISS");
            res.setHeader("Cache-Control", "public, max-age=3600, stale-while-revalidate=600");
        }

        res.json(blogs);
    } catch (error) {
        console.error("[Blog Controller] Error fetching blogs:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const normalizedKey = (id || "").toLowerCase().trim();

        // Check cache first for published single blog
        const cachedBlog = await cache.get(`blog:item:${normalizedKey}`);
        if (cachedBlog && cachedBlog.isPublished) {
            res.setHeader("X-Cache", "HIT");
            res.setHeader("Cache-Control", "public, max-age=3600, stale-while-revalidate=600");
            return res.json(cachedBlog);
        }

        const isObjectId = mongoose.Types.ObjectId.isValid(id) && id.length === 24;
        const normalizedId = (id || "").toLowerCase().trim();

        let blog = null;
        if (isObjectId) {
            blog = await Blog.findById(id).populate("author", "name email");
        }

        if (!blog) {
            blog = await Blog.findOne({ slug: normalizedId }).populate("author", "name email");
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
        } else {
            // Cache published blog both by ID and by slug for instant subsequent loads
            await cache.set(`blog:item:${blog._id.toString()}`, blog, 3600);
            if (blog.slug) {
                await cache.set(`blog:item:${blog.slug.toLowerCase().trim()}`, blog, 3600);
            }
            res.setHeader("X-Cache", "MISS");
            res.setHeader("Cache-Control", "public, max-age=3600, stale-while-revalidate=600");
        }

        res.json(blog);
    } catch (error) {
        console.error("[Blog Controller] Error fetching blog by ID:", error.message);
        res.status(500).json({ message: "Internal server error" });
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

        if (blog.author.toString() !== req.user._id.toString() && req.user.role !== "admin") {
            return res.status(403).json({ message: "Not authorized to update this blog" });
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

        // Invalidate blogs cache
        await cache.delByPrefix("blog");

        res.json(updatedBlog);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "A blog post with this slug already exists." });
        }
        res.status(500).json({ message: "Internal server error" });
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

        if (blog.author.toString() !== req.user._id.toString() && req.user.role !== "admin") {
            return res.status(403).json({ message: "Not authorized to delete this blog" });
        }

        if (blog.image && blog.image.public_id) {
            await deleteFromCloudinary(blog.image.public_id);
        }

        await blog.deleteOne();

        // Invalidate blogs cache
        await cache.delByPrefix("blog");

        res.json({ message: "Blog removed successfully" });
    } catch (error) {
        console.error("[Blog Controller] Error deleting blog:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

/**
 * OpenGraph HTML Scraper Handler
 * Returns rich OG meta tags for social media bots (WhatsApp, LinkedIn, Twitter, Facebook).
 */
const getBlogOgMeta = async (req, res) => {
    try {
        const { id } = req.params;
        const isObjectId = mongoose.Types.ObjectId.isValid(id) && id.length === 24;

        let blog = isObjectId ? await Blog.findById(id) : null;
        if (!blog) {
            blog = await Blog.findOne({ slug: id });
        }

        if (!blog || !blog.isPublished) {
            return res.status(404).send("Article not found");
        }

        const clientUrl = (process.env.CLIENT_URL || "https://dmdy.in").split(",")[0].trim().replace(/\/$/, "");
        const blogUrl = `${clientUrl}/blog/${encodeURIComponent(blog.slug || blog._id)}`;
        
        // Escape special HTML characters to prevent XSS / markup breakage
        const escapeHtml = (str) =>
            String(str || "")
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");

        const rawTitle = `${blog.title} — DMDY Intelligence`;
        const title = escapeHtml(rawTitle);
        const description = escapeHtml(
            blog.metaDescription ||
            (blog.content ? blog.content.substring(0, 160).replace(/[#*`_]/g, "").trim() : "")
        );
        const imageUrl = escapeHtml(blog.image?.url || `${clientUrl}/favicon.png`);

        res.set("Content-Type", "text/html");
        res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="DMDY — Digi Me Digi You">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${imageUrl}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="${escapeHtml(blogUrl)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${imageUrl}">
  <meta http-equiv="refresh" content="0; url=${escapeHtml(blogUrl)}">
</head>
<body>
  <p>Redirecting to <a href="${escapeHtml(blogUrl)}">${title}</a>...</p>
</body>
</html>`);
    } catch (error) {
        console.error("[Blog Controller] Error generating OG meta:", error.message);
        res.status(500).send("Error generating social preview");
    }
};

/**
 * Advanced Search Engine with MongoDB Text Search & Intelligent Substring Fallback
 */
const searchBlogs = async (req, res) => {
    try {
        const { q = "", tag = "All", sort = "relevance", limit = 20, page = 1 } = req.query;
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
            // Attempt 1: Full-Text search with textScore relevance
            try {
                const textFilter = {
                    ...baseFilter,
                    $text: { $search: trimmedQuery }
                };

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
            } catch {
                // If text index not yet built or text query fails, continue to regex fallback
                blogs = [];
                total = 0;
            }

            // Attempt 2: If text search yielded no results across collection (e.g. partial substring / prefix), fallback to Regex
            if (total === 0) {
                const escaped = trimmedQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                const regex = new RegExp(escaped, "i");

                const regexFilter = {
                    ...baseFilter,
                    $or: [
                        { title: regex },
                        { tags: regex },
                        { metaDescription: regex },
                        { content: regex }
                    ]
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
            // No search query: standard filtered listing
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

        res.json({
            results: blogs,
            total,
            page: pageNum,
            totalPages: Math.ceil(total / limitNum) || 1,
            query: trimmedQuery,
            tag,
            sort
        });
    } catch (error) {
        res.status(500).json({ message: "Search execution error", error: error.message });
    }
};

/**
 * Autocomplete / Live Search Suggestions
 */
const getSearchSuggestions = async (req, res) => {
    try {
        const { q = "" } = req.query;
        const trimmed = q.trim();
        if (!trimmed || trimmed.length < 2) {
            return res.json({ suggestions: [], tags: [] });
        }

        const escaped = trimmed.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(escaped, "i");

        const blogs = await Blog.find({
            isPublished: true,
            $or: [{ title: regex }, { tags: regex }]
        })
            .select("title slug tags views image metaDescription")
            .sort({ views: -1, createdAt: -1 })
            .limit(6);

        // Extract matching tags
        const matchedTags = [];
        blogs.forEach(b => {
            (b.tags || []).forEach(t => {
                if (regex.test(t) && !matchedTags.includes(t)) {
                    matchedTags.push(t);
                }
            });
        });

        res.json({
            suggestions: blogs,
            tags: matchedTags.slice(0, 5)
        });
    } catch (error) {
        res.status(500).json({ message: "Suggestion fetch error", error: error.message });
    }
};

/**
 * Atomically Record Article View
 */
const recordBlogView = async (req, res) => {
    try {
        const { id } = req.params;
        const isObjectId = mongoose.Types.ObjectId.isValid(id) && id.length === 24;
        const normalizedId = (id || "").toLowerCase().trim();

        let blog = null;
        if (isObjectId) {
            blog = await Blog.findOneAndUpdate(
                { _id: id, isPublished: true },
                { $inc: { views: 1 } },
                { new: true }
            ).select("views");
        }

        if (!blog && normalizedId) {
            blog = await Blog.findOneAndUpdate(
                { slug: normalizedId, isPublished: true },
                { $inc: { views: 1 } },
                { new: true }
            ).select("views");
        }

        if (!blog) {
            return res.status(404).json({ message: "Article not found" });
        }

        res.json({ success: true, views: blog.views });
    } catch (error) {
        res.status(500).json({ message: "Failed to record view", error: error.message });
    }
};

module.exports = { 
    createBlog, 
    getBlogs, 
    getBlogById, 
    updateBlog, 
    deleteBlog, 
    getBlogOgMeta,
    searchBlogs,
    getSearchSuggestions,
    recordBlogView
};

