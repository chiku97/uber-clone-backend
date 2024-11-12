const mongoose = require('mongoose');

const riderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    currentLocation: {
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: { type: [Number], default: [0, 0] }
    },
    role: { type: String, enum: ['user', 'rider', 'admin'], default: 'user' }
});

// Hash password before saving user
riderSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('Rider', riderSchema);
