const express = require('express');
const router = express.Router();
const { getRider, updateLocation } = require('../controllers/riderController');

router.get('/:id', getRider);
router.put('/:id/location', updateLocation);

module.exports = router;
