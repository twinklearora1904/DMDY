const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const { notFound } = require("./middleware/notFoundMiddleware");

const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const leadRoutes = require("./routes/leadRoutes");

dotenv.config();
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
};

const app = express();
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/leads", leadRoutes);

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
