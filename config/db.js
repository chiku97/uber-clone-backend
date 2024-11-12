const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // No options needed for latest MongoDB driver
        console.log("MongoDB connected...");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
