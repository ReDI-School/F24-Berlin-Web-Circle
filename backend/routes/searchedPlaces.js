const express = require('express');
const places = require("../src/data/places.json");
const constants = require('../src/constants/constants');

const router = express.Router();

router.get("/:region/homes", (req, res) => {
	const {region} = req.params;
	const {guests = 1} = req.query;
	const DEFAULT_NO_OF_DAYS_PER_STAY = 1;

	// checkIn and checkOut values are passed as strings. If the given string is not valid it will return 'Invalid Date'
	const checkIn = new Date(req?.query?.checkIn);
	let checkOut = new Date(req?.query?.checkOut);
	const filteredResult = [];

	let filteredDestinations;
	if (!region) {
		filteredDestinations = places;
	}
	else {
		filteredDestinations = places.filter(place => place?.productSummary?.address?.toLowerCase().includes(region.toLowerCase()) && place?.productSummary?.guests?.value >= guests);
	}

	// If checkOut date is not given. By default checkOut date is taken as the immediate next day.
	// getDate() Returns NaN if the date is invalid.
	if (checkIn && !isNaN(checkIn.getDate()) && (!checkOut || isNaN(checkOut.getDate())))
	{
		checkOut = new Date(checkIn);
		checkOut.setDate(checkIn.getDate() + DEFAULT_NO_OF_DAYS_PER_STAY);
	}

	if (filteredDestinations.length && checkIn && checkOut)
	{
		filteredDestinations.forEach(destination => {
			let isPlaceNotAvailable = destination.reservations.some((reservation)=> {

				// In a JSON file dates are saved as strings. Hence to perform date operations, they are converted to dates.
				const reservationCheckIn = new Date(reservation.dates[0]);
				const reservationCheckOut = new Date(reservation.dates[1]);

				if (isNaN(reservationCheckIn.getDate()) || isNaN(reservationCheckOut.getDate()))
				{
					console.error(constants.ERROR_IN_RESERVATION_DETAILS);
					return (false);
				}

				// checkIn/ checkOut cannot be in between another reservation stay.
				// Two checkOuts cannot be on the same date.
				// Two checkIns cannot be on the same date.
				return ((reservationCheckIn <= checkIn && reservationCheckOut > checkIn) ||
					(reservationCheckIn < checkOut && reservationCheckOut >= checkOut) ||
					reservationCheckIn === checkIn ||
					reservationCheckOut === checkOut)
			});
			if (isPlaceNotAvailable == false)
				filteredResult.push(destination);
		})
		res.json(filteredResult);
	}
	else {
		res.json(filteredDestinations);
	}
    
  });

module.exports = router;