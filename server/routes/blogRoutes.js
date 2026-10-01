const express = require("express");
const router = express.Router();
const {
    createBlog,
    getBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
    getBlogOgMeta,
} = require("../controllers/blogController");
const { protect, admin } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const { check } = require("express-validator");
const { validate } = require("../middleware/validateMiddleware");

router.route("/")
    .get(getBlogs)
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

router.get("/:id/meta", getBlogOgMeta);

router.route("/:id")
    .get(getBlogById)
    .put(protect, admin, upload.single("image"), updateBlog)
    .delete(protect, admin, deleteBlog);

module.exports = router;
