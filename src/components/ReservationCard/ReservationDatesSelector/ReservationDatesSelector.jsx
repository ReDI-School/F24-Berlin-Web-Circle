import useOutsideClick from '../../../hooks/useOutsideClick'
import styles from './ReservationDatesSelector.module.css'

const ReservationDatesSelector = ({
  setCheckInDate,
  setCheckOutDate,
  checkInDate,
  checkOutDate,
  toggleShowCalendar,
}) => {
  
  const calendarRef = useOutsideClick(() => toggleShowCalendar(false));
  
  return (
    <div className={styles.selectorContainer} ref={calendarRef}>
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
      <div>
        <button onClick={() => toggleShowCalendar(false)} className={styles.cancelButton}>Close</button>
      </div>
    </div>
  )
}

export default ReservationDatesSelector
