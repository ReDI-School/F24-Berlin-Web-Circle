const normalizeDate = (date) => new Date(date.setHours(0, 0, 0, 0));

const isOverlapping = (start, end, bookedStart, bookedEnd) =>
  start < bookedEnd && end > bookedStart;

const adjustDatesForBooking = (booking) => {
  const today = new Date();
  let checkInDate = normalizeDate(new Date(today));
  const minStayNights = booking.bookingData.minStayNights || 1; 
  let checkOutDate = new Date(checkInDate);
  checkOutDate.setDate(checkInDate.getDate() + minStayNights);

  console.log("Initial check-in and check-out:", { checkInDate, checkOutDate });

  let adjusted = false;
  do {
    adjusted = false;

    for (const bookedDate of booking.alreadyBookedDates) {
      const bookedStartDate = normalizeDate(new Date(bookedDate.startDate));
      const bookedEndDate = normalizeDate(new Date(bookedDate.endDate));

      if (isOverlapping(checkInDate, checkOutDate, bookedStartDate, bookedEndDate)) {
        console.log("Overlap detected with:", { bookedStartDate, bookedEndDate });

        checkInDate = new Date(bookedEndDate);
        checkInDate.setDate(checkInDate.getDate() + 1);

        checkOutDate = new Date(checkInDate);
        checkOutDate.setDate(checkInDate.getDate() + minStayNights);

        checkInDate = normalizeDate(checkInDate);
        checkOutDate = normalizeDate(checkOutDate);

        adjusted = true; 
        break;
      }
    }
  } while (adjusted);

  if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
    console.error("Invalid calculated dates:", { checkInDate, checkOutDate });
    return { checkInDate: null, checkOutDate: null };
  }

  const formatDate = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month < 10 ? '0' : ''}${month}/${day < 10 ? '0' : ''}${day}/${year}`;
  };

  return {
    checkInDate: formatDate(checkInDate),
    checkOutDate: formatDate(checkOutDate),
  };
};

module.exports = adjustDatesForBooking;





