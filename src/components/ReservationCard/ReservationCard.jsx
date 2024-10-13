import styles from './ReservationCard.module.css'
import CostsSummary from '../CostsSummary/CostsSummary'
import AddGuestsPopUp from '../AddGuestsPopUp/AddGuestsPopUp'
import { useCallback, useState } from 'react'
import { DownArrow, UpArrow } from '../../icons'
import axios from 'axios'
import ReservationDatesSelector from './ReservationDatesSelector/ReservationDatesSelector'
import DatePicker from './DatePicker/DatePicker'
import useOutsideClick from '../../hooks/useOutsideClick'

function ReservationCard({
  // checkInDate,
  // checkOutDate,
  pricePerNight,
  cleaningFee,
  airbnbServiceFee,
  longStayDiscount,
  nightsCountForDiscount,
  guestsData,
  onGuestChange,
  guestsList,
  allowGuestsNumber,
}) {
  const [showGuests, setShowGuests] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [calculatedCosts, setCalculatedCosts] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const toggleShowGuests = () => {
    setShowGuests((prevState) => !prevState)
  }

  const toggleShowCalendar = useCallback((show) => {
    setShowCalendar(show);
  }, []);

  const addGuestPopUpStyles = {
    borderRadius: '4px',
    width: '100% !important',
    position: 'absolute !important',
    border: '1px solid var(--palette-deco)',
    zIndex: '99 !important',
  }

  const adultsAndChildrenCount =
    (guestsList.find((guest) => guest.typeofGuest === 'Adults')
      ?.numberOfGuests || 0) +
    (guestsList.find((guest) => guest.typeofGuest === 'Children')
      ?.numberOfGuests || 0)

  const infantsCount =
    guestsList.find((guest) => guest.typeofGuest === 'Infants')
      ?.numberOfGuests || 0
  const petsCount =
    guestsList.find((guest) => guest.typeofGuest === 'Pets')?.numberOfGuests ||
    0
  const checkInOut = checkInDate && checkOutDate

  const fetchCalculatedCosts = async () => {
    if (checkInOut) {
      setLoading(true)
      try {
        const response = await axios.post(
          'http://localhost:4000/api/calculate-pricing',
          {
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            numberOfGuests: {
              adults: adultsAndChildrenCount,
              infants: infantsCount,
              pets: petsCount,
            },
          }
        )
        setCalculatedCosts(response.data)
        setError('')
      } catch (error) {
        console.error('Error calculating pricing:', error)
        setError('Error calculating pricing. Please try again.')
      } finally {
        setLoading(false)
      }
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (checkInOut && adultsAndChildrenCount > 0) {
      fetchCalculatedCosts()
    } else {
      setError('')
    }
  }

  const closeGuestsPopup = () => {
    setShowGuests(false);
  };

  const guestsRef = useOutsideClick(closeGuestsPopup);

  return (
    <div className={styles.reservationCard}>
      <div className={styles.reservationSection}>
        <form onSubmit={handleFormSubmit}>
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
          <div className={styles.reservationForm} ref={guestsRef}>
            <DatePicker 
              checkInDate={checkInDate} 
              checkOutDate={checkOutDate} 
              onToggle={toggleShowCalendar} 
              setCheckInDate={setCheckInDate}
              setCheckOutDate={setCheckOutDate}
              renderAsButton={true}
            />
            {showCalendar && (
              <ReservationDatesSelector
                setCheckInDate={setCheckInDate}
                setCheckOutDate={setCheckOutDate}
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                toggleShowCalendar={toggleShowCalendar}
              />
            )}
            <button
              className={styles.guestsNumberPickerSection}
              ref={guestsRef}
              onClick={() => toggleShowGuests()}
            >
              <div className={styles.guestsPickerSectionContent}>
                <label>Guests</label>
                <div className={styles.guestCountWrapper}>
                  <div>
                    {adultsAndChildrenCount
                      ? `${adultsAndChildrenCount} guest${
                          adultsAndChildrenCount !== 1 ? 's' : ''
                        }`
                      : ''}
                    {infantsCount
                      ? `, ${infantsCount} infant${
                          infantsCount !== 1 ? 's' : ''
                        }`
                      : ''}
                    {petsCount
                      ? `, ${petsCount} pet${petsCount !== 1 ? 's' : ''}`
                      : ''}
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
          {error && <p className={styles.errorMessage}>{error}</p>}
        </form>
        <div className={styles.noDatesMessage}>
          {!checkInOut && (
            <p>Enter your travel dates to see the total price per night.</p>
          )}
        </div>
      </div>

      {checkInOut && calculatedCosts && !loading && (
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