import { KeyboardIcon } from '../../icons/KeyboardIcon'
import styles from './CalendarBlock.module.css'
import { calculateNights, getStayPeriod } from '../../utils/dateUtils'
import  Calendar  from '../Calendar/Calendar' 
import { useState } from 'react'

const CalendarBlock = ({
  setCheckInDate,
  setCheckOutDate,
  checkInDate,
  checkOutDate,
  minStayNights,
  toggleKeyboardPopup  
}) => {

  const [userSelectedCheckIn, setUserSelectedCheckIn] = useState(false)
  const [userSelectedCheckOut, setUserSelectedCheckOut] = useState(false)
  const [inputCheckInDate, setInputCheckInDate] = useState(
    checkInDate ? checkInDate : ''
  )
  const [inputCheckOutDate, setInputCheckOutDate] = useState(
    checkOutDate ? checkOutDate : ''
  )
  const [checkInError, setCheckInError] = useState('')
  const [checkOutError, setCheckOutError] = useState('')

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
            monthContainerPadding="13px" 
            textDecoration="line-through" 
            buttonRightMargin="-46px"
            buttonLeftMargin="-46px"
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
                setInputCheckInDate('')
                setInputCheckOutDate('')
                setCheckInError('')
                setCheckOutError('')
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