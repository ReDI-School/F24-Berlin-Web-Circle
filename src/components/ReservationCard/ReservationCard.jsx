import styles from './ReservationCard.module.css'
import CostsSummary from '../CostsSummary/CostsSummary'
import AddGuestsPopUp from '../AddGuestsPopUp/AddGuestsPopUp'
import { useState } from 'react'
import { DownArrow, UpArrow } from '../../icons'

function ReservationCard({
  checkInDate,
  checkOutDate,
  pricePerNight,
  cleaningFee,
  airbnbServiceFee,
  longStayDiscount,
  nightsCountForDiscount,
  guestsData,
  onGuestChange,
  guestsList,
  allowGuestsNumber
}) {
  const [showGuests, setShowGuests] = useState(false)

  const toggleShowGuests = () => {
    setShowGuests((prevState) => !prevState)
  }

  const addGuestPopUpStyles = {
    borderRadius: '4px',
    width: '100% !important',
    position: 'absolute !important',
    border: '1px solid var(--palette-deco)',
    zIndex: '99 !important',
  }

  const adultsAndChildrenCount =
  (guestsList.find(guest => guest.typeofGuest === 'Adults')?.numberOfGuests || 0) +
  (guestsList.find(guest => guest.typeofGuest === 'Children')?.numberOfGuests || 0);

const infantsCount = guestsList.find(guest => guest.typeofGuest === 'Infants')?.numberOfGuests || 0;
const petsCount = guestsList.find(guest => guest.typeofGuest === 'Pets')?.numberOfGuests || 0;

const checkInOut = checkInDate && checkOutDate;

  return (
    <div className={styles.reservationCard}>
      <div className={styles.reservationSection}>
        <div className={styles.pricingGuestSection}>
          {checkInOut ? (
            <>
              <strong>{`€ ${pricePerNight} `}</strong>
              night
            </>
          ) : (
            <span>Add dates for prices</span>
          )}
        </div>
        <div className={styles.reservationForm}>
          <button className={styles.datesPickerSection}>
            <div className={styles.checkinSection}>
              <div className={styles.checkinSectionContent}>
                <label>Check-in</label>
                <div>{checkInDate ? checkInDate : <span>Add date</span>}</div> 
              </div>
            </div>
            <div className={styles.checkoutSection}>
              <div className={styles.checkoutSectionContent}>
                <label>Checkout</label>
                <div>{checkOutDate ? checkOutDate : <span>Add date</span>}</div>
              </div>
            </div>
          </button>

          <button
            className={styles.guestsNumberPickerSection}
            onClick={toggleShowGuests}
          >
            <div className={styles.guestsPickerSectionContent}>
              <label>Guests</label>
              <div className={styles.guestCountWrapper}>
                <div>
                  {adultsAndChildrenCount ? `${adultsAndChildrenCount} guest${adultsAndChildrenCount !== 1 ? 's' : ''}` : ''} 
                  {infantsCount ? `, ${infantsCount} infant${infantsCount !== 1 ? 's' : ''}` : ''}
                  {petsCount ? `, ${petsCount} pet${petsCount !== 1 ? 's' : ''}` : ''}
                </div>
                <>{showGuests ? <UpArrow /> : <DownArrow />}</>
              </div>
            </div>
          </button>
          <div className={styles.guestDropdown}>
            {showGuests && (
              <AddGuestsPopUp
                guestsData={guestsData}
                onGuestChange={onGuestChange}
                style={addGuestPopUpStyles}
                allowGuestsNumber={allowGuestsNumber}
                toggleShowGuests={toggleShowGuests}
              />
            )}
          </div>
        </div>
        <div className="buttonContainer">
          <button className={styles.reserveButton}>{checkInOut ? 'Reserve' : 'Check availability'}</button> 
        </div>
        <div className={styles.noDatesMessage}>
          {!checkInOut && <p>Enter your travel dates to see the total price per night.</p>}
        </div>
      </div>

      {checkInOut && (
        <CostsSummary
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          pricePerNight={pricePerNight}
          cleaningFee={cleaningFee}
          airbnbServiceFee={airbnbServiceFee}
          longStayDiscount={longStayDiscount}
          nightsCountForDiscount={nightsCountForDiscount}
        />
      )}
    </div>
  )
}

export default ReservationCard
