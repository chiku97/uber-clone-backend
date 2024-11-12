const express = require('express');
const router = express.Router();
const { getRider, updateLocation } = require('../controllers/riderController');
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');


router.get('/:id', authenticateToken, getRider); // Only authenticated users
router.put('/:id/location', authenticateToken, authorizeRoles('rider', 'admin'), updateLocation);

module.exports = router;
