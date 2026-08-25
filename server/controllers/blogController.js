const Blog = require("../models/Blog");

const createBlog = async (req, res) => {
    try {
        const { title, slug, content, tags, isPublished } = req.body;

        let image = {};
        if (req.file) {
            image.url = req.file.path;
            image.public_id = req.file.filename;
        }

        const blog = new Blog({
            title,
            slug,
            content,
            author: req.user._id,
            tags: tags ? tags.split(",") : [],
            isPublished: isPublished === "true",
            image,
        });

        const createdBlog = await blog.save();
        res.status(201).json(createdBlog);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({}).populate("author", "name email");
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate("author", "name email");
        if (blog) {
            res.json(blog);
        } else {
            res.status(404).json({ message: "Blog not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const updateBlog = async (req, res) => {
    try {
        const { title, slug, content, tags, isPublished } = req.body;
        const blog = await Blog.findById(req.params.id);

        if (blog) {
            blog.title = title || blog.title;
            blog.slug = slug || blog.slug;
            blog.content = content || blog.content;
            if (tags) {
                blog.tags = tags.split(",");
            }
            if (isPublished !== undefined) {
                blog.isPublished = isPublished === "true";
            }

            if (req.file) {
                blog.image.url = req.file.path;
                blog.image.public_id = req.file.filename;
            }

            const updatedBlog = await blog.save();
            res.json(updatedBlog);
        } else {
            res.status(404).json({ message: "Blog not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (blog) {
            await blog.deleteOne();
            res.json({ message: "Blog removed" });
        } else {
            res.status(404).json({ message: "Blog not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog };
