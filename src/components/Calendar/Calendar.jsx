import { useState } from 'react'
import styles from './Calendar.module.css'
import { CalendarLeftArrowIcon, CalendarRightArrowIcon } from '../../icons'

const Calendar = ({ 
  dayItemWidth, 
  dayItemHeight,
  pickedDayWidth,
  pickedDayHeight,
  textDecoration, 
  monthContainerPadding,
  buttonRightMargin,
  buttonLeftMargin,
  pickedCheckIn,
  pickedCheckOut,
  setPickedCheckIn,
  setPickedCheckOut

}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [animationDirection, setAnimationDirection] = useState("")

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate()
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay()

  const goToNextMonth = () => {
    setAnimationDirection("flip-right")
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    )
    resetAnimation()
  }
  const goToPrevMonth = () => {
    setAnimationDirection("flip-left")
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    )
    resetAnimation()
  }

  const resetAnimation = () => {
    setTimeout(() => setAnimationDirection(""), 300)
  }

  const handleDateClick = (day, month, year) => {
    const selectedDate = { day, month, year };

    if (!pickedCheckIn || (pickedCheckIn && pickedCheckOut)) {
      setPickedCheckIn(selectedDate);
      setPickedCheckOut(null);
    } else if (pickedCheckIn && !pickedCheckOut) {
      const checkInDate = new Date(pickedCheckIn.year, pickedCheckIn.month, pickedCheckIn.day).getTime();
      const selectedDateTime = new Date(year, month, day).getTime();

      if (selectedDateTime > checkInDate) {
        setPickedCheckOut(selectedDate);
      } else {
        setPickedCheckIn(selectedDate);
      }
    }
  };

  const renderDaysOfWeek = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return days.map((day, index) => (
      <div key={index} className={styles.dayHeader}>
        {day}
      </div>
    ))
  }

  const renderDays = (year, month, isCurrentMonth) => {
    const today = new Date().setHours(0, 0, 0, 0)
    const daysInMonth = getDaysInMonth(year, month)
    const firstDayOfMonth = getFirstDayOfMonth(year, month)
    const daysArray = []

    const isBetweenCheckInAndOut = (day, month, year) => {
      if (pickedCheckIn && pickedCheckOut) {
        const currentDate = new Date(year, month, day).getTime();
        const checkInDate = new Date(pickedCheckIn.year, pickedCheckIn.month, pickedCheckIn.day).getTime();
        const checkOutDate = new Date(pickedCheckOut.year, pickedCheckOut.month, pickedCheckOut.day).getTime();

        return currentDate >= checkInDate && currentDate <= checkOutDate;
      }
      return false;
    };
    
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(
        <div key={`empty-${i}`} className={styles.emptySlot}></div>
      )
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day).setHours(0, 0, 0, 0)
      const isPastDate = isCurrentMonth && date < today
      const isCheckInDate = pickedCheckIn && pickedCheckIn.day === day && pickedCheckIn.month === month && pickedCheckIn.year === year;
      const isCheckOutDate = pickedCheckOut && pickedCheckOut.day === day && pickedCheckOut.month === month && pickedCheckOut.year === year;
      const isBetweenDates = isBetweenCheckInAndOut(day, month, year);

      daysArray.push(
        <div
          key={day}
          className={`${styles.date} ${isPastDate ? styles.pastDate : ''} 
                      ${isBetweenDates ? styles.betweenDates : ''}
                      ${isCheckInDate ? styles.betweenDatesAndCheckIn : ''}
                      ${isCheckOutDate ? styles.betweenDatesAndCheckOut : ''}
                    `}
          style={{
            "--pastDate-line-through": textDecoration,
          }}
          onClick={() => handleDateClick( day, month, year )}
        >
          {<div 
            className={`${styles.pickedDay}
            ${isCheckInDate ? styles.pickedCheckIn : ''} 
            ${isCheckOutDate ? styles.pickedCheckOut : ''}
            `}
            style={{
              "--pickedDay-item-width": pickedDayWidth,
              "--pickedDay-item-height": pickedDayHeight,
            }}
          >
            {day}
          </div>
          }
        </div>
      )
    }
    return daysArray
  }

  const renderCalendarForMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const monthName = date.toLocaleString('default', { month: 'long' })
    const isCurrentMonth =
      currentMonth.getFullYear() === year && currentMonth.getMonth() === month

    return (
      <div className={`${styles.monthContainer} ${styles[animationDirection]}`}         
           style={{
             "--day-item-width": dayItemWidth,
             "--day-item-height": dayItemHeight,
             "--month-container-padding": monthContainerPadding
           }}
      >
        <h3>{`${monthName} ${year}`}</h3>
        <div className={styles.calendarGrid}>
          {renderDaysOfWeek()}
          {renderDays(year, month, isCurrentMonth)}
        </div>
      </div>
    )
  }

  const getNextMonth = () =>
    new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)

  return (
    <div className={styles.calendarPopUp}>
      <div className={styles.calendar}>
        <div className={styles.calendarRow}>
          <button
            className={styles.prevButton}
            style={{"--button-right-margin": buttonRightMargin}}
            onClick={goToPrevMonth}
            disabled={currentMonth <= new Date()}
          >
            <CalendarLeftArrowIcon />
          </button>

          {renderCalendarForMonth(currentMonth)}
          {renderCalendarForMonth(getNextMonth())}

          <button 
            className={styles.nextButton} 
            style={{"--button-left-margin": buttonLeftMargin}}
            onClick={goToNextMonth}
          >
            <CalendarRightArrowIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Calendar
