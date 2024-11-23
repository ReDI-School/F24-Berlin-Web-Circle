const express = require('express');
const bookings = require("../src/data/bookings.json");
const reservations = require("../src/data/reservations.json");

const { calculateCosts } = require('../src/utils/costs');
// const fs = require('fs'); 

const router = express.Router();

router.get("/:id", (req, res) => {
    const bookingId = parseInt(req.params.id);
    const booking = bookings.find(b => b.id === bookingId);

    if (booking) {
        res.json(booking);
    } else {
        res.status(404).json({ error: `Booking with ID ${bookingId} not found.` });
    }
});


//
router.post('/reservations/:id', (req, res) => {
    const reservationId = parseInt(req.params.id);
    const { checkInDate, checkOutDate, guests, totalPrice } = req.body;
  console.log('bookingData', checkInDate, checkOutDate, guests, reservationId, totalPrice );

    const reservation = bookings.find(b => b.id === reservationId);
    if (!reservation) {
        return res.status(404).json({ message: `Reservation with ID ${reservationId} not found.` });
      }
    const bookingData = reservation.bookingData;
    const alreadyBookedDates = reservation.alreadyBookedDates;

    const {
        pricePerNight,
        airbnbServiceFee,
        cleaningFee,
        longStayDiscount,
        nightsCountForLongStayDiscount
      } = bookingData;

    const costs = calculateCosts({
        checkInDate,
        checkOutDate,
        pricePerNight,
        airbnbServiceFee,
        cleaningFee,
        longStayDiscount,
        nightsCountForDiscount: nightsCountForLongStayDiscount,
    });
  console.log('costs', costs);
     if (costs.nights <= 0) {
       return res.status(400).json({ message: 'Invalid dates selected.' });
     }
 
    const newBooking = {
      id: reservationId,
      checkInDate,
      checkOutDate,
      guestCounts: guests,
      totalPrice: costs.totalPrice,
      breakdown: costs.breakdown,
    };

    const alreadyBookedDatesObject = {
          startDate: {checkInDate},
          endDate: {checkOutDate}
        }
  console.log('alreadyBookedDatesObject', alreadyBookedDatesObject);
    reservations.push(newBooking);
    alreadyBookedDates.push(alreadyBookedDatesObject);
  
  
    // fs.writeFileSync('../src/data/bookings.json', JSON.stringify(bookings, null, 2));
  
    // res.status(201).json({ message: 'Reservation successful!', newBooking });
  });

module.exports = router;
