import React, { useState } from "react";
import styles from "./Calendar.module.css"

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handleNextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  const handlePrevMonth = () => {
    const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1);
    if (newMonth >= new Date()) setCurrentMonth(newMonth);
  };

  const renderDaysOfWeek = () => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => <div key={index} className={styles.dayHeader}>{day}</div>);

  const renderDates = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const daysArray = [];

    for (let i = 0; i < firstDay; i++) daysArray.push(<div key={`empty-${i}`} className={styles.emptySlot}></div>);
    for (let day = 1; day <= daysInMonth; day++) daysArray.push(<div key={day} className={styles.Date}>{day}</div>);

    return daysArray;
  };

  const renderCalendarForMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const monthName = date.toLocaleString("default", { month: "long" });

    return (
      <div className={styles.monthContainer}>
        <h3>{`${monthName} ${year}`}</h3>
        <div className={styles.calendarGrid}>
          {renderDaysOfWeek()}
          {renderDates(year, month)}
        </div>
      </div>
    );
  };

  const getNextMonth = () => new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1);

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarHeader}>
        <button onClick={handlePrevMonth} disabled={currentMonth <= new Date()}>←</button>
        <button onClick={handleNextMonth}>→</button>
      </div>
      
    
      <div className={styles.calendarRow}>
        {renderCalendarForMonth(currentMonth)}
        {renderCalendarForMonth(getNextMonth())}
      </div>
    </div>
  );
};

export default Calendar;
