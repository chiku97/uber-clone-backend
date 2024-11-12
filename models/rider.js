const mongoose = require('mongoose');

const riderSchema = new mongoose.Schema({
    name: String,
    email: String,
    currentLocation: {
        type: { type: String, default: "Point" },
        coordinates: { type: [Number], default: [0, 0] }
    },
    isAvailable: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Rider', riderSchema);
