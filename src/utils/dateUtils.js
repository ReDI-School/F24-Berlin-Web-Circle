export const calculateNights = (checkIn, checkOut) => {
  return ((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)) | 0;
};

export const formatDate = (date) => {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

export const getStayPeriod = (checkIn, checkOut) => {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  if (isNaN(checkInDate) || isNaN(checkOutDate)) {
    return '';
  }

  const formattedCheckIn = formatDate(checkInDate);
  const formattedCheckOut = formatDate(checkOutDate);

  return `${formattedCheckIn} - ${formattedCheckOut}`;
};