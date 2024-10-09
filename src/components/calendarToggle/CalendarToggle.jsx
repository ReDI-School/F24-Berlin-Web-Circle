import React, { useState } from 'react';
import "./CalendarToggle.css";

const CalendarToggle = () => {
    const [activeToggle, setActiveToggle] = useState('Dates');
    
    const handleToggle = (option) => {
        setActiveToggle(option);
    };

  return (
    <div className="calendertoggle-wrapper">
    <div className="calendertoggle-container">
      <div 
        className={`calendertoggle-option ${activeToggle === 'Dates' ? 'active' : ''}`}
        onClick={() => handleToggle('Dates')}
      >
        Dates
      </div>
      <div 
        className={`calendertoggle-option ${activeToggle === 'Months' ? 'active' : ''}`}
        onClick={() => handleToggle('Months')}
      >
        Months
      </div>
      <div 
        className={`calendertoggle-option ${activeToggle === 'Flexible' ? 'active' : ''}`}
        onClick={() => handleToggle('Flexible')}
      >
        Flexible
      </div>
    </div>
    </div>
  )
}

export default CalendarToggle