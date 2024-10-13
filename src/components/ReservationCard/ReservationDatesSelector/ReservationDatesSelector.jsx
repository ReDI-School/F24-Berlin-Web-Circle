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
  console.log('checkInDate', checkInDate)
  console.log('checkoutDate', checkOutDate)
  console.log('userSelectedCheckIn', userSelectedCheckIn)
  console.log('userSelectedCheckOut', userSelectedCheckOut)

  return (
    <div className={styles.selectorContainer} ref={calendarRef}>
      <div className={styles.datePickerWrapper}>
        <div className={styles.selectorTitle}>
          <h2>Select dates</h2>
          <span>Add your travel dates for exact pricing</span>
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
        )
      }
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
