const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const dotenv = require("dotenv");

dotenv.config();

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB for seeding...");

        const adminEmail = process.env.ADMIN_EMAIL || "admin@dmdy.in";
        const adminPassword = process.env.ADMIN_PASSWORD || "admin@1234";

        const adminExists = await User.findOne({ email: adminEmail });

        if (adminExists) {
            console.log("Admin user already exists!");
            process.exit();
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(adminPassword, salt);

        const admin = new User({
            name: "Admin",
            email: adminEmail,
            password: hashedPassword,
            role: "admin",
        });

        await admin.save();
        console.log("Admin user seeded successfully!");
        process.exit();
    } catch (error) {
        console.error("Error seeding admin:", error);
        process.exit(1);
    }
};

seedAdmin();
