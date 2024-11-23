const express = require('express');
const { getAllDestinations } = require('../controllers/destinationController');
const router = express.Router();

// Define the destinations endpoint
router.get('/destinations', getAllDestinations);

module.exports = router;
