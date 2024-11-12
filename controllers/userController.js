const User = require('../models/user');

// Get User Details
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update User Location
exports.updateLocation = async (req, res) => {
    const { latitude, longitude } = req.body;
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { currentLocation: { type: "Point", coordinates: [longitude, latitude] } },
            { new: true }
        );
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
