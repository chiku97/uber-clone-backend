const Rider = require('../models/rider');

// Get Rider Details
exports.getRider = async (req, res) => {
    try {
        const rider = await Rider.findById(req.params.id);
        res.json(rider);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Rider Location
exports.updateLocation = async (req, res) => {
    const { latitude, longitude } = req.body;
    try {
        const rider = await Rider.findByIdAndUpdate(
            req.params.id,
            { currentLocation: { type: "Point", coordinates: [longitude, latitude] } },
            { new: true }
        );
        res.json(rider);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
