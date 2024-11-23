const fs = require('fs');
const path = require('path');
const adjustDatesForBooking = require('./adjustDates');
const calculateCosts = require('./calculateCosts');


const updateBookings = () => {
  const bookingsFilePath = path.resolve(__dirname, '../data/bookings.json');

  let data;
  try {
    data = fs.readFileSync(bookingsFilePath, 'utf8');
  } catch (error) {
    console.error('Error reading bookings.json:', error);
    return;
  }

  let parsedData;
  try {
    parsedData = JSON.parse(data);
  } catch (error) {
    console.error('Error parsing JSON data:', error);
    return;
  }

  if (!Array.isArray(parsedData) || parsedData.length === 0) {
    console.error('Bookings data is not available or not structured properly.');
    return;
  }

  const [lastUpdateEntry, ...bookings] = parsedData;
  if (!lastUpdateEntry.lastUpdateDate) {
    console.error('Missing lastUpdateDate in the first entry of bookings data.');
    return;
  }

  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0];

  if (lastUpdateEntry.lastUpdateDate !== formattedToday) {
    console.log('It\'s a new day, updating bookings.');

    bookings.forEach((booking) => {
      if (booking.checkInDate <= formattedToday) {
        const { checkInDate, checkOutDate } = adjustDatesForBooking(booking);

        booking.checkInDate = checkInDate;
        booking.checkOutDate = checkOutDate;

        const { pricePerNight, airbnbServiceFee, cleaningFee, longStayDiscount, nightsCountForLongStayDiscount } = booking.bookingData;
        const costs = calculateCosts({
          checkInDate,
          checkOutDate,
          pricePerNight,
          airbnbServiceFee,
          cleaningFee,
          longStayDiscount,
          nightsCountForDiscount: nightsCountForLongStayDiscount,
        });

        booking.totalPrice = costs.totalPrice;
      }
    });

    lastUpdateEntry.lastUpdateDate = formattedToday;

    try {
      const updatedData = [lastUpdateEntry, ...bookings];
      fs.writeFileSync(bookingsFilePath, JSON.stringify(updatedData, null, 2));
      console.log('Bookings updated successfully!');
    } catch (error) {
      console.error('Error saving bookings data:', error);
    }
  } else {
    console.log('No update needed. Today is the same as the last update date.');
  }
};

module.exports = updateBookings;





