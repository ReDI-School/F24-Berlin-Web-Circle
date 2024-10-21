const express = require('express');
const places = require("../src/data/places.json");

const router = express.Router();

router.get("/:destination/homes", (req, res) => {
	const {destination} = req.params;
	const {checkIn, checkOut, guests = 1} = req.query;
	const filteredResult = [];

	const filteredDestinations = destination ? places.filter(place => place.destination === destination && place.guests >= guests) : places;
	if (filteredDestinations.length)
	{
		filteredDestinations.forEach(destination => {
			let isPlaceNotAvailable = destination.reservations.some((reservation)=> {
				const [reservationCheckIn, reservationCheckOut] = reservation.dates;
				return ((reservationCheckIn <= checkIn && reservationCheckOut > checkIn) ||
					(reservationCheckIn < checkOut && reservationCheckOut >= checkOut) ||
					reservationCheckIn === checkIn ||
					reservationCheckOut === checkOut)
			})
			if (isPlaceNotAvailable == false)
				filteredResult.push(destination);
		})
	}
    res.json(filteredResult);
  });

module.exports = router;