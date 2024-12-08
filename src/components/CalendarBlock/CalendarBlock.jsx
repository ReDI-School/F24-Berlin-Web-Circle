import { KeyboardIcon } from '../../icons/KeyboardIcon'
import styles from './CalendarBlock.module.css'
import { calculateNights, getStayPeriod } from '../../utils/dateUtils'
import  Calendar  from '../Calendar/Calendar' 
import { useWindowSize } from '../../hooks/useWindowSize'

const CalendarBlock = ({
  setCheckInDate,
  setCheckOutDate,
  checkInDate,
  checkOutDate,
  toggleKeyboardPopup,
  booking,
  isInitializedRef,
  isCalendarBlock = true
}) => {

  const windowWidth = useWindowSize();

    const {
      bookingData: {
        minStayNights,
      },
      alreadyBookedDates
    } = booking || {};

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
        {isCalendarBlock && (windowWidth >= 1140) && (
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
            alreadyBookedDates={alreadyBookedDates}
            isInitializedRef={isInitializedRef}
            isCalendarBlock={isCalendarBlock}
          />
        )} 
        {isCalendarBlock && (windowWidth <= 1139 && windowWidth > 519) && (
          <Calendar 
            dayItemWidth="54px" 
            dayItemHeight="52px"
            pickedDayWidth="52px"
            pickedDayHeight="52px"  
            monthContainerPadding="16px" 
            textDecoration="line-through" 
            buttonRightMargin="-46px"
            buttonLeftMargin="-46px"
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            setCheckInDate={setCheckInDate}
            setCheckOutDate={setCheckOutDate}
            minStayNights={minStayNights}
            alreadyBookedDates={alreadyBookedDates}
            isInitializedRef={isInitializedRef}
            isCalendarBlock={isCalendarBlock}
          />
        )}
         {isCalendarBlock && (windowWidth < 520) && (
          <Calendar 
            dayItemWidth="40px" 
            dayItemHeight="38px"
            pickedDayWidth="38px"
            pickedDayHeight="38px"  
            monthContainerPadding="10px" 
            textDecoration="line-through" 
            buttonRightMargin="-46px"
            buttonLeftMargin="-46px"
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            setCheckInDate={setCheckInDate}
            setCheckOutDate={setCheckOutDate}
            minStayNights={minStayNights}
            alreadyBookedDates={alreadyBookedDates}
            isInitializedRef={isInitializedRef}
            isCalendarBlock={isCalendarBlock}
          />
        )}
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