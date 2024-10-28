const express = require('express');
const bookings = require("../src/data/bookings.json");

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

module.exports = router;
