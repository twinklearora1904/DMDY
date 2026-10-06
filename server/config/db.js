const mongoose = require("mongoose");

const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
        console.error("[FATAL] MONGO_URI is missing from environment variables. Please configure MONGO_URI in your environment.");
        process.exit(1);
    }

    try {
        const connection = await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 10000,
        });
        console.log(`[MongoDB] Connected successfully to host: ${connection.connection.host}`);
    } catch (error) {
        console.error(`[MongoDB] Connection failed: ${error.message}`);
        process.exit(1);
    }
};

mongoose.connection.on("disconnected", () => {
    console.warn("[MongoDB] Connection lost. Attempting reconnection...");
});

mongoose.connection.on("error", (err) => {
    console.error("[MongoDB Runtime Error]:", err.message);
});

module.exports = connectDB;