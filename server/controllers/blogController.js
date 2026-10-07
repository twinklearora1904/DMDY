const mongoose = require("mongoose");
const blogService = require("../services/blogService");

const createBlog = async (req, res) => {
    try {
        const blog = await blogService.createBlog(req.user._id, req.body, req.file);
        res.status(201).json(blog);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "A blog post with this slug already exists." });
        }
        if (error.message && error.message.includes("Failed to upload image")) {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: "Internal server error" });
    }
};

const getBlogs = async (req, res) => {
    try {
        const isAdmin = req.user && req.user.role === "admin";
        const { data, cached } = await blogService.getBlogs(isAdmin, req.query.all);

        if (cached) {
            res.setHeader("X-Cache", "HIT");
            res.setHeader("Cache-Control", "public, max-age=3600, stale-while-revalidate=600");
        } else {
            res.setHeader("X-Cache", "MISS");
            res.setHeader("Cache-Control", "public, max-age=3600, stale-while-revalidate=600");
        }

        res.json(data);
    } catch (error) {
        console.error("[Blog Controller] Error fetching blogs:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data: blog, cached } = await blogService.getBlogByIdOrSlug(id);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        if (!blog.isPublished) {
            const isAdmin = req.user && req.user.role === "admin";
            if (!isAdmin) {
                return res.status(404).json({ message: "Blog not found" });
            }
        } else if (cached) {
            res.setHeader("X-Cache", "HIT");
            res.setHeader("Cache-Control", "public, max-age=3600, stale-while-revalidate=600");
        } else {
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
        const updatedBlog = await blogService.updateBlog(req.user._id, id, req.body, req.file);
        res.json(updatedBlog);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "A blog post with this slug already exists." });
        }
        if (error.message === "Blog not found") {
            return res.status(404).json({ message: error.message });
        }
        if (error.message === "Not authorized to update this blog") {
            return res.status(403).json({ message: error.message });
        }
        res.status(500).json({ message: "Internal server error" });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await blogService.deleteBlog(req.user._id, id);
        res.json(result);
    } catch (error) {
        if (error.message === "Blog not found") {
            return res.status(404).json({ message: error.message });
        }
        if (error.message === "Not authorized to delete this blog") {
            return res.status(403).json({ message: error.message });
        }
        res.status(500).json({ message: "Internal server error" });
    }
};

const getBlogOgMeta = async (req, res) => {
    try {
        const { id } = req.params;
        const { data: blog } = await blogService.getBlogByIdOrSlug(id);

        if (!blog || !blog.isPublished) {
            return res.status(404).send("Article not found");
        }

        const clientUrl = (process.env.CLIENT_URL || "https://dmdy.in").split(",")[0].trim().replace(/\/$/, "");
        const blogUrl = `${clientUrl}/blog/${encodeURIComponent(blog.slug || blog._id)}`;

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

const searchBlogs = async (req, res) => {
    try {
        const result = await blogService.searchBlogs(req.query);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Search execution error", error: error.message });
    }
};

const getSearchSuggestions = async (req, res) => {
    try {
        const result = await blogService.getSearchSuggestions(req.query.q);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Suggestion fetch error", error: error.message });
    }
};

const recordBlogView = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await blogService.recordBlogView(id);
        res.json(result);
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
