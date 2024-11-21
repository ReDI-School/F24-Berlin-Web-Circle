const express = require('express');
const filterPlaces = require('../src/utils/filter');;


const router = express.Router();

router.get("/:region/homes", (req, res) => {
	const {region} = req.params;
	const {guests = 1} = req.query;

	// checkIn and checkOut values are passed as strings. If the given string is not valid it will return 'Invalid Date'
	const checkIn = new Date(req?.query?.checkIn);
	let checkOut = new Date(req?.query?.checkOut);

	const filteredPlaces = filterPlaces(region, checkIn, checkOut, guests);
	return res.json(filteredPlaces);
  });

module.exports = router;
