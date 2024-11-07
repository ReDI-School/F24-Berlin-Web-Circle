import { useEffect, useState } from 'react'
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
  setCheckInDate,
  setCheckOutDate,
  checkInDate,
  checkOutDate,
  isSearchBarCalendar,
  minStayNights,
  alreadyBookedDates
}) => {

  function convertStringToDateObject(dateString) {
    const [month, day, year] = dateString.split('/').map(Number)
    return { day, month, year }
  }

  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [animationDirection, setAnimationDirection] = useState("")

  const [pickedCheckIn, setPickedCheckIn] = useState(
    checkInDate && !isSearchBarCalendar ? convertStringToDateObject(checkInDate) : null
  )
  const [pickedCheckOut, setPickedCheckOut] = useState(
    checkOutDate && !isSearchBarCalendar ? convertStringToDateObject(checkOutDate) : null
  )

  useEffect(() => {
    if (!isSearchBarCalendar) {
      if (checkInDate) {
        setPickedCheckIn(convertStringToDateObject(checkInDate));
      } else {
        setPickedCheckIn(null);
      }
    }
  }, [checkInDate, isSearchBarCalendar]);

  useEffect(() => {
    if (!isSearchBarCalendar) {
      if (checkOutDate) {
        setPickedCheckOut(convertStringToDateObject(checkOutDate));
      } else {
        setPickedCheckOut(null);
      }
    }
  }, [checkOutDate, isSearchBarCalendar]);

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
    const selectedDate = { day, month, year }

    function convertDateObjectToString(dateObject) {
      const { day, month, year } = dateObject
      return `${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}/${year}`
    }
    
    const dateString = convertDateObjectToString({ day, month, year })

    if (isSearchBarCalendar) {
      if (!pickedCheckIn || (pickedCheckIn && pickedCheckOut)) {
        setPickedCheckIn(selectedDate);
        setPickedCheckOut(null);
      } else if (pickedCheckIn && !pickedCheckOut) {
        const pickedCheckInDate = new Date(pickedCheckIn.year, pickedCheckIn.month, pickedCheckIn.day).getTime()
        const selectedDateTime = new Date(year, month, day).getTime()
  
        if (selectedDateTime > pickedCheckInDate) {
          setPickedCheckOut(selectedDate)
        } else  {
          setPickedCheckIn(selectedDate)
        }
      }
    } else {
      if (!pickedCheckIn || (pickedCheckIn && pickedCheckOut)) {
        setCheckInDate(dateString);
        setPickedCheckIn(selectedDate);
        setPickedCheckOut(null);
        setCheckOutDate(null)
    } else if (pickedCheckIn && !pickedCheckOut) {
      const pickedCheckInDate = new Date(pickedCheckIn.year, pickedCheckIn.month, pickedCheckIn.day).getTime()
      const selectedDateTime = new Date(year, month, day).getTime()

      if (selectedDateTime > pickedCheckInDate) {
        setPickedCheckOut(selectedDate)
        setCheckOutDate(dateString)
      } else {
        setPickedCheckIn(selectedDate)
        setCheckInDate(dateString)
      }
    }
  }
}

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

    
  const checkInDateTime = pickedCheckIn 
    ? new Date(pickedCheckIn.year, pickedCheckIn.month, pickedCheckIn.day).getTime() 
    : null;

  const dayBeforeBookedDateTime = alreadyBookedDates && alreadyBookedDates.length > 0
  ? alreadyBookedDates
      .map(({ startDate }) => {
        const [startMonth, startDay, startYear] = startDate.split('/').map(Number);
        const previousDay = new Date(startYear, startMonth - 1, startDay - 1);
        return previousDay.getTime();
      })
      .find(time => checkInDateTime && time > checkInDateTime)
  : null;


    const isBooked = (day, month, year) => {
      if (!Array.isArray(alreadyBookedDates)) {
        return false;
    }
    const currentDateString = `${String(month + 1).padStart(2, '0')}/${String(day).padStart(2, '0')}/${year}`;
      
    return alreadyBookedDates.some(({ startDate, endDate }) => {
        const [startMonth, startDay, startYear] = startDate.split('/').map(Number);
        const [endMonth, endDay, endYear] = endDate.split('/').map(Number);
        const [currMonth, currDay, currYear] = currentDateString.split('/').map(Number);

        const start = new Date(startYear, startMonth - 1, startDay); 
        const end = new Date(endYear, endMonth - 1, endDay); 
        const current = new Date(currYear, currMonth - 1, currDay); 

        return current >= start && current <= end;
      });
    };

    const isDayBeforeBooked = (day, month, year) => {
      const currentDate = new Date(year, month, day).getTime();

      return alreadyBookedDates.some(({ startDate }) => {
          const [startMonth, startDay, startYear] = startDate.split('/').map(Number);
          const previousDay = new Date(startYear, startMonth - 1, startDay - 1); 

          return currentDate === previousDay.getTime();
      });
    };

    const isBetweenCheckInAndOut = (day, month, year) => {
      if (pickedCheckIn && pickedCheckOut) {
        const currentDate = new Date(year, month, day).getTime()
        const checkInDate = new Date(pickedCheckIn.year, pickedCheckIn.month, pickedCheckIn.day).getTime()
        const checkOutDate = new Date(pickedCheckOut.year, pickedCheckOut.month, pickedCheckOut.day).getTime()

        return currentDate >= checkInDate && currentDate <= checkOutDate
      }
      return false
    }

    const isWithinMinStay = (day, month, year) => {
      if (pickedCheckIn && minStayNights && !pickedCheckOut) {
        const checkInDate = new Date(pickedCheckIn.year, pickedCheckIn.month, pickedCheckIn.day)
        const minStayEndDate = new Date(checkInDate)
        minStayEndDate.setDate(checkInDate.getDate() + minStayNights)
  
        const currentDate = new Date(year, month, day)
  
        return currentDate > checkInDate && currentDate < minStayEndDate
      }
      return false
    };
    
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(
        <div key={`empty-${i}`} className={styles.emptySlot}></div>
      )
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day).setHours(0, 0, 0, 0)
      const isPastDate = isCurrentMonth && date < today
      const isCheckInDate = pickedCheckIn && pickedCheckIn.day === day && pickedCheckIn.month === month && pickedCheckIn.year === year
      const isCheckOutDate = pickedCheckOut && pickedCheckOut.day === day && pickedCheckOut.month === month && pickedCheckOut.year === year
      const isBetweenDates = isBetweenCheckInAndOut(day, month, year)
      const isInMinStayRange = isWithinMinStay(day, month, year)
      const isAlreadyBooked = isBooked(day, month, year);
      const isDayBeforeBookedDate = isDayBeforeBooked(day, month, year);
      const isInValidRange = dayBeforeBookedDateTime 
      ? (date >= checkInDateTime && date <= dayBeforeBookedDateTime)
      : (checkInDateTime ? date >= checkInDateTime : true);

      const minNightsTooltipClass = `${styles.tooltipText} ${isCheckInDate && !isCheckOutDate && !isBetweenDates ? styles.minNightsToolTip : ''}`
      const checkInTooltipClass = `${styles.tooltipText} ${isCheckInDate && isBetweenDates ? styles.checkInToolTip : ''}`
      const checkOutTooltipClass = `${styles.tooltipText} ${isCheckOutDate && isBetweenDates ? styles.checkOutToolTip : ''}`
      const beforeBookedTooltipClass = `${styles.tooltipText} ${isDayBeforeBookedDate && !checkInDate || checkInDate && checkOutDate && isDayBeforeBookedDate && !isCheckOutDate ? styles.checkoutOnlyToolTip : ''}`;


      daysArray.push(
        <div
          key={day}
          className={`${styles.date} ${isPastDate ? styles.pastDate : ''} 
                      ${isBetweenDates ? styles.betweenDates : ''}
                      ${isCheckInDate ? styles.betweenDatesAndCheckIn : ''}
                      ${isCheckOutDate ? styles.betweenDatesAndCheckOut : ''}
                      ${isInMinStayRange && !isAlreadyBooked ? styles.minStayRange : ''}
                      ${isAlreadyBooked ? styles.pastDate : ''}
                      ${isDayBeforeBookedDate ? styles.dayBeforeBookedDate : ''}
                      ${(!isInValidRange && checkInDateTime && !checkOutDate) ? styles.pastDate : ''}   
                    `}
          style={{
            "--pastDate-line-through": textDecoration,
          }}
          onClick={() => {
            if (isAlreadyBooked || isPastDate || (!checkInDate && isDayBeforeBookedDate) || (checkInDate && checkOutDate && isDayBeforeBookedDate)) return; 
            if (!isInMinStayRange || (isInMinStayRange && isBetweenDates)) {
              handleDateClick(day, month, year);
            }
          }}
          
          tabIndex={isInMinStayRange ? 0 : -1}
          onFocus={(e) => {
            if (isInMinStayRange && !isAlreadyBooked) {
                const tooltip = e.currentTarget.querySelector(`.${styles.tooltipText}`);
                tooltip.style.visibility = 'visible';
                e.currentTarget.classList.add(styles.tooltipVisible);
            }
          }}
          onBlur={(e) => {
            if (isInMinStayRange && !isAlreadyBooked) {
                const tooltip = e.currentTarget.querySelector(`.${styles.tooltipText}`);
                tooltip.style.visibility = 'hidden';
                e.currentTarget.classList.remove(styles.tooltipVisible);
            }
           }}
          onMouseOver={(e) => {
            if (isInMinStayRange && !isAlreadyBooked && e.currentTarget === document.activeElement) {
              const tooltip = e.currentTarget.querySelector(`.${styles.tooltipText}`);
              tooltip.style.visibility = 'visible';
              e.currentTarget.classList.add(styles.tooltipVisible);
            }
          }}
          onMouseLeave={(e) => {
          if (isInMinStayRange && !isAlreadyBooked && e.currentTarget === document.activeElement) {
            const tooltip = e.currentTarget.querySelector(`.${styles.tooltipText}`);
            tooltip.style.visibility = 'hidden';
            e.currentTarget.classList.remove(styles.tooltipVisible);
            }
          }}
        >
          {<div 
            className={`${styles.pickedDay}
            ${isCheckInDate && !isDayBeforeBookedDate ? styles.pickedCheckIn : ''} 
            ${isCheckOutDate ? styles.pickedCheckOut : ''}
            `}
            style={{
              "--pickedDay-item-width": pickedDayWidth,
              "--pickedDay-item-height": pickedDayHeight,
            }}
          >
            {day}
            {!isSearchBarCalendar && (
              <>
                <span className={minNightsTooltipClass}>
                    {minStayNights} night{minStayNights > 1 ? 's' : ''} minimum
                </span>
                <span className={checkInTooltipClass}>
                    Check-in day
                </span>
                <span className={checkOutTooltipClass}>
                    Checkout day
                </span>
                <span className={beforeBookedTooltipClass}>
                    Checkout only
                </span>
              </>
            )}
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
