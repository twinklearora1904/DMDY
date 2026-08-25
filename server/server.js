const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
<<<<<<< HEAD
const { errorHandler } = require("./middleware/errorMiddleware");
const { notFound } = require("./middleware/notFoundMiddleware");

const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const leadRoutes = require("./routes/leadRoutes");

=======
const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
};
>>>>>>> eabece9d887b02563e855b9970fea8fb9a2cae28
dotenv.config();
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

<<<<<<< HEAD
const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
};

=======
>>>>>>> eabece9d887b02563e855b9970fea8fb9a2cae28
const app = express();
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());

// Routes
<<<<<<< HEAD
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/leads", leadRoutes);

=======
>>>>>>> eabece9d887b02563e855b9970fea8fb9a2cae28
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "DMDY API is running",
    });
});

<<<<<<< HEAD
app.use(notFound);
app.use(errorHandler);

=======
>>>>>>> eabece9d887b02563e855b9970fea8fb9a2cae28
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
