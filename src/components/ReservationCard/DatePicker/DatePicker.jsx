import styles from './DatePicker.module.css'

const DatePicker = ({ checkInDate, checkOutDate, onToggle }) => {
  return (
      <button className={styles.datesPickerSection} onClick={onToggle}>
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
  )
}

export default DatePicker
