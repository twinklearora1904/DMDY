const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const User = require("../models/User");
dotenv.config();
const run = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    const existing = await User.findOne({
        email: process.env.ADMIN_EMAIL
    });
    if (existing) {
        console.log("Admin already exists");
        process.exit();
    }
    const hashedPassword = await bcrypt.hash(
        process.env.ADMIN_PASSWORD, 10
    );
    await User.create({
        name: "DMDY Admin",
        email: process.env.ADMIN_EMAIL,
        password: hashedPassword,
        role: "admin"
    });
    console.log("Admin user created successfully");

    process.exit();
};
run();