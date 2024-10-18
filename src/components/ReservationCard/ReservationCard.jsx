import styles from './ReservationCard.module.css'
import CostsSummary from '../CostsSummary/CostsSummary'
import AddGuestsPopUp from '../AddGuestsPopUp/AddGuestsPopUp'
import ReservationDatesSelector from './ReservationDatesSelector/ReservationDatesSelector'
import DatePicker from './DatePicker/DatePicker'
import GuestCountDisplay from './GuestCountDisplay/GuestCountDisplay'
import useOutsideClick from '../../hooks/useOutsideClick'
import { fetchCalculatedCosts } from '../../utils/fetchCalculatedCosts'
import { calculateGuestCounts } from '../../utils/guestCounts'
import { useState } from 'react'

function ReservationCard({
  defaultCheckInDate,
  defaultCheckOutDate,
  pricePerNight,
  cleaningFee,
  airbnbServiceFee,
  longStayDiscount,
  nightsCountForDiscount,
  guestsData,
  onGuestChange,
  guestsList,
  allowGuestsNumber,
  minStayNights,
  isBookingOpen,
}) {
  const [showGuests, setShowGuests] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [checkInDate, setCheckInDate] = useState(defaultCheckInDate)
  const [checkOutDate, setCheckOutDate] = useState(defaultCheckOutDate)
  // const [calculatedCosts, setCalculatedCosts] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const toggleShowGuests = () => {
    setShowGuests((prevState) => !prevState)
  }

  const toggleShowCalendar = (show) => {
    setShowCalendar(show)
  }

  const {
    adultsCount,
    childrenCount,
    infantsCount,
    petsCount,
    adultsAndChildrenCount,
  } = calculateGuestCounts(guestsList)

  const checkInOut = checkInDate && checkOutDate

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (checkInOut && adultsAndChildrenCount > 0) {
      fetchCalculatedCosts(
        checkInDate,
        checkOutDate,
        {
          adults: adultsAndChildrenCount,
          infants: infantsCount,
          pets: petsCount,
        },
        // setCalculatedCosts,
        setLoading,
        setError
      )
    } else {
      // setError('Please select valid dates and guests.');
    }
  }

  const closeGuestsPopup = () => setShowGuests(false)
  const guestsRef = useOutsideClick(closeGuestsPopup)

  const addGuestPopUpStyles = {
    borderRadius: '4px',
    width: '100% !important',
    position: 'absolute !important',
    border: '1px solid var(--palette-deco)',
    zIndex: '99 !important',
  }

  return (
    <div className={styles.reservationCard}>
      <div className={styles.reservationSection}>
        <form onSubmit={handleFormSubmit}>
          {isBookingOpen ? (
            <div className={styles.pricingGuestSection}>
              {checkInOut && !loading ? (
                <>
                  <strong>{`€ ${pricePerNight} `}</strong>
                  night
                </>
              ) : (
                <span>Add dates for prices</span>
              )}
            </div>
          ) : (
            <h1 className={styles.soldOutGuestSection}>Booking closed</h1>
          )}
          {isBookingOpen && (
            <div className={styles.reservationForm} ref={guestsRef}>
              <DatePicker
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                onToggle={toggleShowCalendar}
                setCheckInDate={setCheckInDate}
                setCheckOutDate={setCheckOutDate}
                renderAsButton={true}
                toggleShowCalendar={toggleShowCalendar}
              />
              {showCalendar && (
                <ReservationDatesSelector
                  setCheckInDate={setCheckInDate}
                  setCheckOutDate={setCheckOutDate}
                  checkInDate={checkInDate}
                  checkOutDate={checkOutDate}
                  toggleShowCalendar={toggleShowCalendar}
                  minStayNights={minStayNights}
                />
              )}
              <button
                className={styles.guestsNumberPickerSection}
                ref={guestsRef}
                onClick={() => toggleShowGuests()}
              >
                <GuestCountDisplay
                  showGuests={showGuests}
                  adultsAndChildrenCount={adultsAndChildrenCount}
                  infantsCount={infantsCount}
                  petsCount={petsCount}
                />
              </button>
              <div className={styles.guestDropdown}>
                {showGuests && (
                  <AddGuestsPopUp
                    guestsData={guestsData}
                    onGuestChange={onGuestChange}
                    style={addGuestPopUpStyles}
                    allowGuestsNumber={allowGuestsNumber}
                    toggleShowGuests={toggleShowGuests}
                    adultsCount={adultsCount}
                    childrenCount={childrenCount}
                    infantsCount={infantsCount}
                    petsCount={petsCount}
                  />
                )}
              </div>
            </div>
          )}
          {isBookingOpen ? (
            <div className="buttonContainer">
              <button
                type={checkInOut && !loading ? 'submit' : 'button'}
                onClick={
                  !checkInOut && !loading
                    ? () => toggleShowCalendar(true)
                    : undefined
                }
                className={styles.reserveButton}
              >
                {checkInOut && !loading ? 'Reserve' : 'Check availability'}
              </button>
            </div>
          ) : (
            <div className="buttonContainer">
              <button className={styles.soldOutButton} disabled>
                Sold Out
              </button>
            </div>
          )}
          {error && <p className={styles.errorMessage}>{error}</p>}
        </form>
        {isBookingOpen && (
          <div className={styles.noDatesMessage}>
            {!checkInOut && (
              <p>Enter your travel dates to see the total price per night.</p>
            )}
          </div>
        )}
      </div>

      {checkInOut && !loading && (
        <CostsSummary
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          pricePerNight={pricePerNight}
          cleaningFee={cleaningFee}
          airbnbServiceFee={airbnbServiceFee}
          longStayDiscount={longStayDiscount}
          nightsCountForDiscount={nightsCountForDiscount}
          // calculatedCosts={calculatedCosts}
        />
      )}
    </div>
  )
}

export default ReservationCard