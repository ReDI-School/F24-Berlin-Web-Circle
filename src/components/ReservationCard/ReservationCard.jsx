import styles from './ReservationCard.module.css'
import CostsSummary from '../CostsSummary/CostsSummary'
import AddGuestsPopUp from '../AddGuestsPopUp/AddGuestsPopUp'
import ReservationDatesSelector from './ReservationDatesSelector/ReservationDatesSelector'
import DatePicker from './DatePicker/DatePicker'
import GuestCountDisplay from './GuestCountDisplay/GuestCountDisplay'
import useOutsideClick from '../../hooks/useOutsideClick'
import { fetchCalculatedCosts } from '../../api/pricingApi'
import { calculateGuestCounts } from '../../utils/guestCounts'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { calculateNights } from '../../utils/dateUtils'
import Swal from 'react-sweetalert2'
import { useNavigate } from 'react-router-dom';
import { getSuccessHtml } from '../../utils/displayHelpers';


function ReservationCard({
  toggleShortcutsPopup,
  toggleGuestCountPopup,
  setShowGuests,
  showGuests,
  showCalendar,
  setShowCalendar,
  checkInDate,
  checkOutDate,
  setCheckInDate,
  setCheckOutDate,
  booking,
  isInitializedRef
}) {

  const navigate = useNavigate();

  const {
    bookingData: {
      pricePerNight,
      cleaningFee,
      airbnbServiceFee,
      longStayDiscount,
      nightsCountForLongStayDiscount,
      allowGuestsNumber,
      minStayNights,
      isBookingOpen,
    },
    guestCounts: defaultGuestCounts,
    alreadyBookedDates,
  } = booking || {};

  const [guestCounts, setGuestCounts] = useState(defaultGuestCounts || {});
  const [guestsList, setGuestsList] = useState([
    { typeofGuest: 'Adults', numberOfGuests: 1 },
    { typeofGuest: 'Children', numberOfGuests: 0 },
    { typeofGuest: 'Infants', numberOfGuests: 0 },
    { typeofGuest: 'Pets', numberOfGuests: 0 },
  ])
  const [successData, setSuccessData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('');
  const { productId } = useParams();

  const currentTotalPeople = guestCounts.adults + guestCounts.children;

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

  const handleGuestClick = (updatedGuest) => {
    setGuestsList((prevList) =>
      prevList.map((guest) =>
        guest.typeofGuest === updatedGuest.typeofGuest
          ? { ...guest, numberOfGuests: updatedGuest.numberOfGuests }
          : guest
      )
    )
  }

  const checkInOut = checkInDate && checkOutDate

  const nights =
  checkInDate && checkOutDate ? calculateNights(checkInDate, checkOutDate) : 0
  const isDiscount = nights >= nightsCountForLongStayDiscount
  const basePrice = nights * pricePerNight
  const totalPrice =
    basePrice +
    airbnbServiceFee +
    cleaningFee -
    (isDiscount ? longStayDiscount : 0)

  
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccessMessage('')

    if (!checkInOut || adultsCount === 0) {
      setError('Please select valid dates and at least one adult.')
      return
    }

    const reservationData = {
      checkInDate,
      checkOutDate,
      guests: {
        adults: adultsCount,
        children: childrenCount,
        infants: infantsCount,
        pets: petsCount,
      },
      totalPrice
    };

    try {
      setLoading(true);

      const response = await axios.post(
        (`http://localhost:8800/bookings/reservations/${productId}`),
        reservationData
      );

      setSuccessMessage('Reservation submitted successfully!');
      setSuccessData(response.data.newBookingToClient);
    } catch (err) {
      console.error('Error submitting reservation:', err);
      setError('Failed to submit the reservation. Please try again later.');
    } finally {
      setLoading(false);
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
      <Swal
        show={!!successData}
        title="Reservation Successful!"
        html={getSuccessHtml(successData)}
        icon="success"
        confirmButtonText="OK"
        onConfirm={() => {
          setSuccessData(null)
          navigate('/')
        }}
      />
      <div className={styles.reservationSection}>
        <div>
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
            <div 
              className={styles.reservationForm} 
              ref={guestsRef}
            >
              <DatePicker
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                onToggle={toggleShowCalendar}
                setCheckInDate={setCheckInDate}
                setCheckOutDate={setCheckOutDate}
                renderAsButton={true}
                alreadyBookedDates={alreadyBookedDates}
              />
              {showCalendar && (
                <ReservationDatesSelector
                  setCheckInDate={setCheckInDate}
                  setCheckOutDate={setCheckOutDate}
                  checkInDate={checkInDate}
                  checkOutDate={checkOutDate}
                  toggleShowCalendar={toggleShowCalendar}
                  minStayNights={minStayNights}
                  toggleShortcutsPopup={toggleShortcutsPopup}
                  alreadyBookedDates={alreadyBookedDates}
                  isInitializedRef={isInitializedRef}
                />
              )}
              <button
                type="button"
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
                    onGuestChange={handleGuestClick}
                    style={addGuestPopUpStyles}
                    allowGuestsNumber={allowGuestsNumber}
                    toggleShowGuests={toggleShowGuests}
                    adultsCount={adultsCount}
                    childrenCount={childrenCount}
                    infantsCount={infantsCount}
                    petsCount={petsCount}
                    setGuestCounts={setGuestCounts}
                    currentTotalPeople={currentTotalPeople}
                    toggleGuestCountPopup={toggleGuestCountPopup}
                  />
                )}
              </div>
            </div>
          )}
          {isBookingOpen ? (
          <form onSubmit={handleFormSubmit}>
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
                {loading ? 'Submitting...' : checkInOut ? 'Reserve' : 'Check availability'}
              </button>
            </div>
          </form>
          ) : (
            <div className="buttonContainer">
              <button className={styles.soldOutButton} disabled>
                Sold Out
              </button>
            </div>
          )}
          {error && <p className={styles.errorMessage}>{error}</p>}
          {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
        </div>
        {isBookingOpen && (
          <div className={styles.noDatesMessage}>
            {!checkInOut && (
              <p>Enter your travel dates to see the total price per night.</p>
            )}
          </div>
        )}
      </div>

      {checkInOut && !loading && isBookingOpen && (
        <CostsSummary
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          pricePerNight={pricePerNight}
          cleaningFee={cleaningFee}
          airbnbServiceFee={airbnbServiceFee}
          longStayDiscount={longStayDiscount}
          nightsCountForDiscount={nightsCountForLongStayDiscount}
          // calculatedCosts={calculatedCosts}
          nights={nights}
          basePrice={basePrice}
          isDiscount={isDiscount}
          totalPrice={totalPrice}
        />
      )}
    </div>
  )
}

export default ReservationCard