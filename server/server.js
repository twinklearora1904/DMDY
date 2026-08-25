const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
};
dotenv.config();
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

const app = express();
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "DMDY API is running",
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
