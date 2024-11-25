const formatDate = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month < 10 ? '0' : ''}${month}/${day < 10 ? '0' : ''}${day}/${year}`;
};

const parseBookingDate = (dateStr) => {
  const [month, day, year] = dateStr.split('/').map(Number);
  return new Date(year, month - 1, day);
};

export const findNextAvailableDate = (bookedDates, minStay, today = new Date()) => {
  const normalizedToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  
  const sortedBookings = bookedDates
    .map(({ startDate, endDate }) => ({
      start: parseBookingDate(startDate),
      end: parseBookingDate(endDate)
    }))
    .sort((a, b) => a.start - b.start);

  let candidateStart = new Date(normalizedToday);
  let candidateEnd = new Date(candidateStart);
  candidateEnd.setDate(candidateStart.getDate() + minStay);

  const hasOverlap = (start, end) => {
    return sortedBookings.some(booking => 
      (start >= booking.start && start <= booking.end) ||
      (end >= booking.start && end <= booking.end) ||
      (start <= booking.start && end >= booking.end)
    );
  };

  while (true) {
    if (!hasOverlap(candidateStart, candidateEnd)) {
      return {
        checkIn: candidateStart,
        checkOut: candidateEnd,
        formattedDates: {
          checkIn: formatDate(candidateStart),
          checkOut: formatDate(candidateEnd)
        }
      };
    }

    const nextStart = sortedBookings.find(booking => 
      booking.start >= candidateStart || booking.end >= candidateStart
    );

    if (!nextStart) {
      const lastBooking = sortedBookings[sortedBookings.length - 1];
      candidateStart = new Date(lastBooking.end);
      candidateStart.setDate(candidateStart.getDate() + 1);
      candidateEnd = new Date(candidateStart);
      candidateEnd.setDate(candidateStart.getDate() + minStay);
      
      return {
        checkIn: candidateStart,
        checkOut: candidateEnd,
        formattedDates: {
          checkIn: formatDate(candidateStart),
          checkOut: formatDate(candidateEnd)
        }
      };
    }

    candidateStart = new Date(nextStart.end);
    candidateStart.setDate(candidateStart.getDate() + 1);
    candidateEnd = new Date(candidateStart);
    candidateEnd.setDate(candidateStart.getDate() + minStay);
  }
};