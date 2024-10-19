export const calculateGuestCounts = (guestsList) => {
  const adultsCount =
    guestsList.find((guest) => guest.typeofGuest === 'Adults')?.numberOfGuests || 0;
  const childrenCount =
    guestsList.find((guest) => guest.typeofGuest === 'Children')?.numberOfGuests || 0;
  const infantsCount =
    guestsList.find((guest) => guest.typeofGuest === 'Infants')?.numberOfGuests || 0;
  const petsCount =
    guestsList.find((guest) => guest.typeofGuest === 'Pets')?.numberOfGuests || 0;

  const adultsAndChildrenCount = adultsCount + childrenCount;

  return { adultsCount, childrenCount, infantsCount, petsCount, adultsAndChildrenCount };
};