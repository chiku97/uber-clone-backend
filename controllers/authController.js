// controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const Rider = require('../models/rider');

// Register a new user
exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        if(role === 'rider'){
            const rider = await Rider.create({name, email, password, role});
            res.status(201).json({ message: 'Rider registered successfully' });
        }else{
            const user = await User.create({ name, email, password, role });
            res.status(201).json({ message: 'User registered successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Login user and return JWT
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid ucredentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
