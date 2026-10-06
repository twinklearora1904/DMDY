const errorHandler = (err, req, res, _next) => {
    let statusCode = err.status || err.statusCode || (res.statusCode === 200 ? 500 : res.statusCode);
    let message = err.message || "An unexpected server error occurred.";

    // Handle Multer upload errors
    if (err.name === "MulterError") {
        statusCode = 400;
        if (err.code === "LIMIT_FILE_SIZE") {
            message = "Uploaded file exceeds the maximum allowed limit of 5MB.";
        } else {
            message = `File upload error: ${err.message}`;
        }
    }

    // Handle invalid Mongoose ObjectId
    if (err.name === "CastError") {
        statusCode = 400;
        message = `Invalid ID format for resource: ${err.value}`;
    }

    // Handle Mongoose Validation Error
    if (err.name === "ValidationError") {
        statusCode = 400;
        message = Object.values(err.errors)
            .map((val) => val.message)
            .join(", ");
    }

    // Handle MongoDB duplicate key
    if (err.code === 11000) {
        statusCode = 400;
        const field = Object.keys(err.keyValue || {})[0];
        message = field ? `A record with this ${field} already exists.` : "Duplicate entry detected.";
    }

    res.status(statusCode).json({
        success: false,
        message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};

module.exports = { errorHandler };
