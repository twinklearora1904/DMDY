const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const User = require("../models/User");

dotenv.config();

const run = async () => {
    try {
        const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/dmdy";
        await mongoose.connect(mongoUri);
        console.log("Connected to MongoDB for seeding...");

        const adminEmail = (process.env.ADMIN_EMAIL || "admin@dmdy.in").trim().toLowerCase();
        const adminPassword = process.env.ADMIN_PASSWORD || "admin@1234";

        const existing = await User.findOne({ email: adminEmail });
        if (existing) {
            console.log(`Admin user already exists (${adminEmail}).`);
            await mongoose.disconnect();
            process.exit(0);
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(adminPassword, salt);

        await User.create({
            name: "DMDY Admin",
            email: adminEmail,
            password: hashedPassword,
            role: "admin",
        });

        console.log(`Admin user created successfully: ${adminEmail}`);
        await mongoose.disconnect();
        process.exit(0);
    } catch (err) {
        console.error("Error seeding admin user:", err.message);
        await mongoose.disconnect().catch(() => {});
        process.exit(1);
    }
};

run();