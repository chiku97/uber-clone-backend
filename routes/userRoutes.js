const express = require('express');
const router = express.Router();
const { getUser, updateLocation } = require('../controllers/userController');

router.get('/:id', getUser);
router.put('/:id/location', updateLocation);

module.exports = router;
