const calculateCosts = ({ checkInDate, checkOutDate, pricePerNight, airbnbServiceFee, cleaningFee, longStayDiscount, nightsCountForDiscount }) => {
  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);
  const nightsCount = (checkOut - checkIn) / (1000 * 60 * 60 * 24);

  let totalPrice = nightsCount * pricePerNight + cleaningFee + airbnbServiceFee;

  if (nightsCount >= nightsCountForDiscount) {
    totalPrice -= longStayDiscount;
  }

  return { totalPrice };
};

module.exports = calculateCosts;
