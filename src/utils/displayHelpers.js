export const getSuccessHtml = (data) => {
  const breakdownItems = [
    { label: 'Check-in', value: data?.checkInDate, color: 'green' },
    { label: 'Check-out', value: data?.checkOutDate, color: 'green' },
    { label: 'Nights', value: data?.breakdown.nights },
    { label: 'Price per night', value: `€${data?.breakdown.pricePerNight}` },
    { label: 'Airbnb service fee', value: `€${data?.breakdown.airbnbServiceFee}` },
    { label: 'Cleaning fee', value: `€${data?.breakdown.cleaningFee}` },
    { label: 'Long stay discount', value: `€${data?.breakdown.longStayDiscount}` },
    { label: 'Number of adults', value: data?.guestCounts.adults },
    { label: 'Number of children', value: data?.guestCounts.children },
    { label: 'Number of infants', value: data?.guestCounts.infants },
    { label: 'Number of pets', value: data?.guestCounts.pets },
  ];

  const listItems = breakdownItems
    .map(
      (item) => `
      <li style="margin-bottom: 0.5rem; font-weight: 500; ${item.color ? `color: ${item.color};` : ''}">
        <strong style="color: #595959;">${item.label}:</strong> ${item.value}
      </li>
    `
    )
    .join('');

  return `
    <div style="margin: 0 auto; text-align: left; font-size: 1rem;">
      <ul style="text-align: left; list-style: none; padding: 0; font-size: 1rem;">
        ${listItems}
      </ul>
      <p style="margin-top: 1rem; font-size: 1.2rem; color: green; font-weight: bold;">
        Total price: €${data?.totalPrice}
      </p>
      <p style="text-align: center; font-weight: 500;">Thank you for using our service😊</p>
    </div>
  `;
};