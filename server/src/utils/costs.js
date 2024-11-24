
function calculateCosts({
    checkInDate,
    checkOutDate,
    pricePerNight,
    airbnbServiceFee,
    cleaningFee,
    longStayDiscount,
    nightsCountForDiscount
}) {
 
  const nights = (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24);
  const isDiscount = nights >= nightsCountForDiscount;

  const basePrice = nights * pricePerNight;
  const totalPrice =
    basePrice +
    airbnbServiceFee +
    cleaningFee -
    (isDiscount ? longStayDiscount : 0);

  return {
    nights,
    basePrice,
    totalPrice,
    breakdown: {
      nights,
      pricePerNight,
      basePrice,
      airbnbServiceFee,
      cleaningFee,
      longStayDiscount: isDiscount ? longStayDiscount : 0,
    },
  };
}

module.exports = { calculateCosts };
