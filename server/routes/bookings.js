const express = require('express')
const bookings = require('../src/data/bookings.json')
const reservations = require('../src/data/reservations.json')

const { calculateCosts } = require('../src/utils/costs')
const fs = require('fs')
const path = require('path')


const router = express.Router()

router.get('/:id', (req, res) => {
  const bookingId = parseInt(req.params.id)
  const booking = bookings.find((b) => b.id === bookingId)

  if (booking) {
    res.json(booking)
  } else {
    res.status(404).json({ error: `Booking with ID ${bookingId} not found.` })
  }
})

router.post('/reservations/:id', (req, res) => {
  const productId = parseInt(req.params.id)
  const { checkInDate, checkOutDate, guests, totalPrice } = req.body

  const reservation = bookings.find((b) => b.id === productId)
  if (!reservation) {
    return res
      .status(404)
      .json({ message: `Reservation with ID ${productId} not found.` })
  }
  const bookingData = reservation.bookingData
  const alreadyBookedDates = reservation.alreadyBookedDates

  const {
    pricePerNight,
    airbnbServiceFee,
    cleaningFee,
    longStayDiscount,
    nightsCountForLongStayDiscount,
  } = bookingData


  const costs = calculateCosts({
    checkInDate,
    checkOutDate,
    pricePerNight,
    airbnbServiceFee,
    cleaningFee,
    longStayDiscount,
    nightsCountForDiscount: nightsCountForLongStayDiscount,
  })
 
  if (costs.nights <= 0) {
    return res.status(400).json({ message: 'Invalid dates selected.' })
  }

  const newBooking = {
    reservationId: reservations.length + 1,
    productId: productId,
    checkInDate,
    checkOutDate,
    guestCounts: guests,
    totalPrice: costs.totalPrice,
    breakdown: costs.breakdown,
  }


  const isOverlapping = alreadyBookedDates.some(
    (date) =>
      new Date(checkInDate) < new Date(date.endDate) &&
      new Date(checkOutDate) > new Date(date.startDate)
  )

  if (isOverlapping) {
    return res
      .status(400)
      .json({ message: 'Selected dates overlap with existing bookings.' })
  }

  const alreadyBookedDatesObject = {
    startDate: checkInDate,
    endDate: checkOutDate,
  }


  reservations.push(newBooking)
  alreadyBookedDates.push(alreadyBookedDatesObject)

  try {
    fs.writeFileSync(
      path.resolve(__dirname, '../src/data/reservations.json'),
      JSON.stringify(reservations, null, 2)
    )
    fs.writeFileSync(
      path.resolve(__dirname, '../src/data/bookings.json'),
      JSON.stringify(bookings, null, 2)
    )
  } catch (error) {
    console.error('Error saving reservation data:', error)
    return res
      .status(500)
      .json({
        message: 'Internal Server Error. Could not save reservation data.',
      })
  }

  res.status(201).json({ message: 'Reservation successful!', newBooking })
})

module.exports = router










