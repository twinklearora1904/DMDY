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
        isPublished: { type: Boolean, default: false }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
