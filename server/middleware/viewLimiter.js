const rateLimit = require("express-rate-limit");

const viewLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 30, // Limit each IP to 30 view tracking requests per 5 minutes
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        message: "Too many view requests. Please try again later.",
    },
});

module.exports = viewLimiter;
