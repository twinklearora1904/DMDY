const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: {
            type: String, required: true, trim: true, lowercase: true
        },
        phone: { type: String, required: true, trim: true },
        company: { type: String },
        website: { type: String, trim: true },
        service: { type: String, required: true },
        message: { type: String },
        status: {
            type: String,
            enum: [
                "New", "Contacted", "Qualified", "Proposal", "Won", "Lost"
            ],
            default: "New"
        }
    }, {
    timestamps: true
});

leadSchema.index({ createdAt: -1 });
leadSchema.index({ status: 1 });
leadSchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model("Lead", leadSchema);
