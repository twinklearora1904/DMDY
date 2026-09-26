const rateLimit = require("express-rate-limit");

const leadLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 5, // Limit each IP to 5 contact requests per windowMs
    message: {
        success: false,
        message: "Too many inquiries submitted from this connection. Please try again after 10 minutes.",
    },
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = leadLimiter;
