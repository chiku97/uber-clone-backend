const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    currentLocation: {
        type: { type: String, default: "Point" },
        coordinates: { type: [Number], default: [0, 0] } // [longitude, latitude]
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
