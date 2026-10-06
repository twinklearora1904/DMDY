const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    });
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!password || typeof password !== "string") {
            return res.status(400).json({ message: "Password is required" });
        }

        const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
        const user = await User.findOne({ email: normalizedEmail });

        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error("[Auth Login Error]:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("[Auth Profile Error]:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { loginUser, getProfile };
