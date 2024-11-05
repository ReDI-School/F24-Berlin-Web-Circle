import { KeyboardIcon } from '../../icons/KeyboardIcon'
import styles from './CalendarBlock.module.css'
import { calculateNights, getStayPeriod } from '../../utils/dateUtils'
import  Calendar  from '../Calendar/Calendar' 

const CalendarBlock = ({
  setCheckInDate,
  setCheckOutDate,
  checkInDate,
  checkOutDate,
  minStayNights,
  toggleKeyboardPopup,
}) => {

  const nightsCount =
    checkInDate && checkOutDate ? calculateNights(checkInDate, checkOutDate) : 0

  const stayPeriod =
    checkInDate && checkOutDate ? getStayPeriod(checkInDate, checkOutDate) : ''

  return (
    <div className={styles.selectorContainer}>
      <div className={styles.datePickerWrapper}>
        <div className={styles.selectorTitle}>
          <h2>
            {nightsCount > 0
              ? `${nightsCount} ${nightsCount > 1 ? 'nights' : 'night'}`
              : 'Select dates'}
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
      </div>
      <div className={styles.calendarWrapper}>
        <Calendar 
            dayItemWidth="44px" 
            dayItemHeight="42px"
            pickedDayWidth="42px"
            pickedDayHeight="42px"  
            monthContainerPadding="13px" 
            textDecoration="line-through" 
            buttonRightMargin="-46px"
            buttonLeftMargin="-46px"
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            setCheckInDate={setCheckInDate}
            setCheckOutDate={setCheckOutDate}
            minStayNights={minStayNights}
          />
        </div>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.shortcutsPopupButton}
          onClick={toggleKeyboardPopup}
        >
          <KeyboardIcon />
        </button>
        <div className={styles.clearToggleBtnWrapper}>
          <div className={styles.clearDatesButton}>
            <button
              className={styles.clearDatesButton}
              onClick={() => {
                setCheckInDate('')
                setCheckOutDate('')
              }}
            >
              Clear dates
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarBlock