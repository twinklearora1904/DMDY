const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const { notFound } = require("./middleware/notFoundMiddleware");

const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const leadRoutes = require("./routes/leadRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

dotenv.config();
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

const clientUrls = (process.env.CLIENT_URL || "")
    .split(",")
    .map((url) => url.trim().replace(/\/$/, ""))
    .filter(Boolean);

const allowedOrigins = [
    ...clientUrls,
    "http://localhost:5173",
    "http://localhost:5174",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5174",
];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        const normalizedOrigin = origin.replace(/\/$/, "");
        if (
            (process.env.CLIENT_URL === "*" && process.env.NODE_ENV !== "production") ||
            allowedOrigins.includes(normalizedOrigin) ||
            (process.env.NODE_ENV === "production" && normalizedOrigin.endsWith(".vercel.app"))
        ) {
            return callback(null, true);
        }
        return callback(new Error(`CORS policy does not allow access from this origin: ${origin}`));
    },
    credentials: true,
};

const app = express();
app.set("trust proxy", 1);
app.use(
    helmet({
        crossOriginResourcePolicy: { policy: "cross-origin" },
    })
);
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/analytics", analyticsRoutes);


app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "DMDY API is running",
    });
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
