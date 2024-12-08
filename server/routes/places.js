const express = require('express');
const places = require("../src/data/places.json");
const filterPlaces = require('../src/utils/filter');

const router = express.Router();

router.get("/", (req, res) => {
	const {region, guests = 1, category} = req.query;

	// checkIn and checkOut values are passed as strings. If the given string is not valid it will return 'Invalid Date'
	const checkIn = new Date(req?.query?.checkIn);
	let checkOut = new Date(req?.query?.checkOut);

	const filteredPlaces = filterPlaces(region, checkIn, checkOut, guests, category);
	return res.json(filteredPlaces);
  });

module.exports = router;