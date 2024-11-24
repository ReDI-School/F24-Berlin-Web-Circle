export const findNextAvailableDate = (bookedDates, minStay, today = new Date()) => {
  let checkIn = new Date(today);
  let checkOut = new Date(today);
  checkOut.setDate(checkIn.getDate() + minStay);

  const hasConflict = bookedDates.some(({ startDate, endDate }) => {
    const [startMonth, startDay, startYear] = startDate.split('/').map(Number);
    const [endMonth, endDay, endYear] = endDate.split('/').map(Number);
    
    const bookingStart = new Date(startYear, startMonth - 1, startDay).getTime();
    const bookingEnd = new Date(endYear, endMonth - 1, endDay).getTime();
    
    return (
      (checkIn.getTime() >= bookingStart && checkIn.getTime() <= bookingEnd) ||
      (checkOut.getTime() >= bookingStart && checkOut.getTime() <= bookingEnd) ||
      (checkIn.getTime() <= bookingStart && checkOut.getTime() >= bookingEnd)
    );
  });

  if (!hasConflict) {
    return { checkIn, checkOut };
  }

  const sortedBookings = bookedDates
    .map(({ startDate, endDate }) => {
      const [startMonth, startDay, startYear] = startDate.split('/').map(Number);
      const [endMonth, endDay, endYear] = endDate.split('/').map(Number);
      return {
        start: new Date(startYear, startMonth - 1, startDay),
        end: new Date(endYear, endMonth - 1, endDay)
      };
    })
    .sort((a, b) => a.start - b.start);

  let candidateStart = new Date(today);
  
  for (let i = 0; i < sortedBookings.length; i++) {
    const currentBooking = sortedBookings[i];
    const nextBooking = sortedBookings[i + 1];

    if (candidateStart < currentBooking.start) {
      const candidateEnd = new Date(candidateStart);
      candidateEnd.setDate(candidateStart.getDate() + minStay);

      if (candidateEnd <= currentBooking.start) {
        return {
          checkIn: candidateStart,
          checkOut: candidateEnd
        };
      }
    }

    candidateStart = new Date(currentBooking.end);
    candidateStart.setDate(candidateStart.getDate() + 1); 

    if (!nextBooking) {
      const candidateEnd = new Date(candidateStart);
      candidateEnd.setDate(candidateStart.getDate() + minStay);
      return {
        checkIn: candidateStart,
        checkOut: candidateEnd
      };
    }

    const candidateEnd = new Date(candidateStart);
    candidateEnd.setDate(candidateStart.getDate() + minStay);

    if (candidateEnd <= nextBooking.start) {
      return {
        checkIn: candidateStart,
        checkOut: candidateEnd
      };
    }
  }

  if (sortedBookings.length > 0) {
    const lastBooking = sortedBookings[sortedBookings.length - 1];
    checkIn = new Date(lastBooking.end);
    checkIn.setDate(checkIn.getDate() + 1);
    checkOut = new Date(checkIn);
    checkOut.setDate(checkIn.getDate() + minStay);
    return { checkIn, checkOut };
  }

  return {
    checkIn: new Date(today),
    checkOut: new Date(today.setDate(today.getDate() + minStay))
  };
};