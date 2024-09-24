// src/components/calendar/Calendar.jsx
import React, { useState } from "react";
import "./Calendar.css"; 

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handleNextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  const handlePrevMonth = () => {
    const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1);
    if (newMonth >= new Date()) setCurrentMonth(newMonth);
  };

  const renderDaysOfWeek = () => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => <div key={index} className="day-header">{day}</div>);

  const renderDates = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const daysArray = [];

    for (let i = 0; i < firstDay; i++) daysArray.push(<div key={`empty-${i}`} className="empty-slot"></div>);
    for (let day = 1; day <= daysInMonth; day++) daysArray.push(<div key={day} className="date">{day}</div>);

    return daysArray;
  };

  const renderCalendarForMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const monthName = date.toLocaleString("default", { month: "long" });

    return (
      <div className="month-container">
        <h3>{`${monthName} ${year}`}</h3>
        <div className="calendar-grid">
          {renderDaysOfWeek()}
          {renderDates(year, month)}
        </div>
      </div>
    );
  };

  const getNextMonth = () => new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1);

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth} disabled={currentMonth <= new Date()}>←</button>
        <button onClick={handleNextMonth}>→</button>
      </div>
      
    
      <div className="calendar-row">
        {renderCalendarForMonth(currentMonth)}
        {renderCalendarForMonth(getNextMonth())}
      </div>
    </div>
  );
};

export default Calendar;
