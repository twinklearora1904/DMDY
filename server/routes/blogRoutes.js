const express = require("express");
const router = express.Router();
const {
    createBlog,
    getBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
    getBlogOgMeta,
    searchBlogs,
    getSearchSuggestions,
    recordBlogView,
} = require("../controllers/blogController");
const { protect, admin, optionalProtect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const viewLimiter = require("../middleware/viewLimiter");

const { check } = require("express-validator");
const { validate } = require("../middleware/validateMiddleware");

router.route("/")
    .get(optionalProtect, getBlogs)
    .post(
        protect,
        admin,
        upload.single("image"),
        [
            check("title", "Title is required").not().isEmpty(),
            check("slug", "Slug is required").not().isEmpty(),
            check("content", "Content is required").not().isEmpty(),
        ],
        validate,
        createBlog
    );

// Advanced Search & Autocomplete suggestions (must be before /:id)
router.get("/search", searchBlogs);
router.get("/search/suggest", getSearchSuggestions);

router.get("/:id/meta", getBlogOgMeta);
router.post("/:id/view", viewLimiter, recordBlogView);

router.route("/:id")
    .get(optionalProtect, getBlogById)
    .put(protect, admin, upload.single("image"), updateBlog)
    .delete(protect, admin, deleteBlog);

module.exports = router;

