// routes/userRoutes.js
const express = require('express');
const { getUser, updateLocation } = require('../controllers/userController');
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/:id', authenticateToken, getUser); // Only authenticated users
router.put('/:id/location', authenticateToken, authorizeRoles('user', 'admin'), updateLocation);

module.exports = router;
