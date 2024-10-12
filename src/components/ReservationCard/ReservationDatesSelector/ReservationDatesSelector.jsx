import useOutsideClick from '../../../hooks/useOutsideClick'
import DatePicker from '../DatePicker/DatePicker'
import { KeyboardIcon } from '../../../icons/KeyboardIcon'
import styles from './ReservationDatesSelector.module.css'

const ReservationDatesSelector = ({
  setCheckInDate,
  setCheckOutDate,
  checkInDate,
  checkOutDate,
  toggleShowCalendar,
}) => {
  const calendarRef = useOutsideClick(() => toggleShowCalendar(false))

  return (
    <div className={styles.selectorContainer} ref={calendarRef}>
      <div className={styles.datePickerWrapper}>
        <div className={styles.selectorTitle}>
          <h2>Select dates</h2>
          <span>Add your travel dates for exact pricing</span>
        </div>
        <DatePicker />
      </div>
      <div className={styles.inputsContainer}>
        <input
          type="date"
          className={styles.dateInput}
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          required
        />
        <input
          type="date"
          className={styles.dateInput}
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          required
          min={checkInDate}
        />
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.shortcutsPopupButton}>
          <KeyboardIcon />
        </button>
        <div className={styles.clearToggleBtnWrapper}>
          <div className={styles.clearDatesButton}>
            <button className={styles.clearDatesButton}>Clear dates</button>
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
