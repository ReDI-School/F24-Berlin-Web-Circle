import useOutsideClick from '../../../hooks/useOutsideClick'
import DatePicker from '../DatePicker/DatePicker'
import { KeyboardIcon } from '../../../icons/KeyboardIcon'
import styles from './ReservationDatesSelector.module.css'
import { useEffect, useState } from 'react'

const ReservationDatesSelector = ({
  setCheckInDate,
  setCheckOutDate,
  checkInDate,
  checkOutDate,
  toggleShowCalendar,
  minStayNights,
}) => {
  const calendarRef = useOutsideClick(() => toggleShowCalendar(false))

  const [userSelectedCheckIn, setUserSelectedCheckIn] = useState(false)
  const [userSelectedCheckOut, setUserSelectedCheckOut] = useState(false)

  const handleCheckInChange = (date) => {
    setCheckInDate(date)
    setUserSelectedCheckIn(true)
  }

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date)
    setUserSelectedCheckOut(true)
  }

  useEffect(() => {
    if (
      userSelectedCheckIn &&
      userSelectedCheckOut &&
      checkInDate < checkOutDate
    ) {
      if (checkInDate > checkOutDate) {
        alert('Check-in date must be before check-out date')
      }
      toggleShowCalendar(false)
      resetSelectionFlags()
    }
  }, [
    checkInDate,
    checkOutDate,
    toggleShowCalendar,
    userSelectedCheckIn,
    userSelectedCheckOut,
  ])

  const resetSelectionFlags = () => {
    setUserSelectedCheckIn(false)
    setUserSelectedCheckOut(false)
  }

  const calculateNights = (checkIn, checkOut) => {
    return (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
  }

  const nightsCount =
    checkInDate && checkOutDate ? calculateNights(checkInDate, checkOutDate) : 0

  const formatDate = (date) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' }
    return new Date(date).toLocaleDateString('en-US', options)
  }

  const getStayPeriod = (checkIn, checkOut) => {
    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)

    if (isNaN(checkInDate) || isNaN(checkOutDate)) {
      return ''
    }

    const formattedCheckIn = formatDate(checkInDate)
    const formattedCheckOut = formatDate(checkOutDate)

    return `${formattedCheckIn} - ${formattedCheckOut}`
  }

  const stayPeriod =
    checkInDate && checkOutDate ? getStayPeriod(checkInDate, checkOutDate) : ''

  return (
    <div className={styles.selectorContainer} ref={calendarRef}>
      <div className={styles.datePickerWrapper}>
        <div className={styles.selectorTitle}>
          <h2>
            {nightsCount > 0
              ? `${nightsCount} ${nightsCount > 1 ? 'nights' : 'night'}`
              : 'Select your dates'}
          </h2>
          <span>
            {stayPeriod ? (
              <span>{stayPeriod}</span>
            ) : minStayNights ? (
              `Minimum stay: ${minStayNights} ${
                minStayNights > 1 ? 'nights' : 'night'
              }`
            ) : (
              'Add your travel dates for exact pricing'
            )}
          </span>
        </div>
        <DatePicker
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          setCheckInDate={setCheckInDate}
          setCheckOutDate={setCheckOutDate}
          setUserSelectedCheckIn={setUserSelectedCheckIn}
          setUserSelectedCheckOut={setUserSelectedCheckOut}
        />
      </div>
      <div className={styles.inputsContainer}>
        <input
          type="date"
          className={styles.dateInput}
          value={checkInDate}
          onChange={(e) => handleCheckInChange(e.target.value)}
          required
        />
        {checkInDate && (
          <input
            type="date"
            className={styles.dateInput}
            value={checkOutDate}
            onChange={(e) => handleCheckOutChange(e.target.value)}
            required
            min={checkInDate}
          />
        )}
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.shortcutsPopupButton}>
          <KeyboardIcon />
        </button>
        <div className={styles.clearToggleBtnWrapper}>
          <div className={styles.clearDatesButton}>
            <button
              className={styles.clearDatesButton}
              onClick={() => {
                setCheckInDate('')
                setCheckOutDate('')
                resetSelectionFlags()
              }}
            >
              Clear dates
            </button>
          </div>
          <div className={styles.cancelButton}>
            <button onClick={() => toggleShowCalendar(false)}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReservationDatesSelector
