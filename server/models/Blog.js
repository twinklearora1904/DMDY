const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },
        slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
        metaDescription: { type: String, trim: true },
        content: { type: String, required: true },
        author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        image: {
            url: { type: String },
            public_id: { type: String }
        },
        tags: [{ type: String, trim: true }],
        isPublished: { type: Boolean, default: false },
        views: { type: Number, default: 0 }
    },
    { timestamps: true }
);

// MongoDB Atlas-compatible Full-Text Search Index with field weightings
blogSchema.index(
    {
        title: "text",
        tags: "text",
        metaDescription: "text",
        content: "text"
    },
    {
        weights: {
            title: 10,
            tags: 6,
            metaDescription: 4,
            content: 1
        },
        name: "BlogFullTextSearchIndex"
    }
);

// Fast sort and filter compound indexes
blogSchema.index({ isPublished: 1, createdAt: -1 });
blogSchema.index({ isPublished: 1, views: -1 });
blogSchema.index({ tags: 1, isPublished: 1 });

module.exports = mongoose.model("Blog", blogSchema);

