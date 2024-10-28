import { useState } from 'react';
import styles from './DataIncrementsButtonForTheCalendar.module.css'; 

const DateIncrementsButtonForTheCalendar = () => {

  const [selectedOption, setSelectedOption] = useState('exact');


  const options = [
    { label: 'Exact dates', value: 'exact' },
    { label: '±1 day', value: '1-day' },
    { label: '±2 days', value: '2-days' },
    { label: '±3 days', value: '3-days' },
    { label: '±7 days', value: '7-days' },
    { label: '±14 days', value: '14-days' }
  ];


  const handleOptionChange = (value) => {
    setSelectedOption(value); 
  };

  return (
    <div className= {styles.dateSelectionContainer}>
      {options.map((option) => (
        <div
          key={option.value}
          className={`${styles.option} ${selectedOption === option.value ? styles.selected : ''}`}
          onClick={() => handleOptionChange(option.value)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default DateIncrementsButtonForTheCalendar;
