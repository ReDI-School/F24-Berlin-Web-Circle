import React from 'react';
import * as Icons from 'react-icons/fa'; 
import styles from './DestinationPopup.module.css'; 

const DestinationPopup = ({ suggestions, onSelect }) => {
  return (
    <div className={styles.popupContainer}>
      {suggestions.map((destination, index) => {
        const IconComponent = Icons[destination.icon] || Icons.FaCity; 

        return (
          <div
            key={index}
            className={styles.suggestionItem}
            onClick={() => onSelect(destination)}
          >
            <IconComponent className={styles.icon} />
            <div>
              <div className={styles.name}>{destination.name}</div>
              <div className={styles.description}>{destination.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DestinationPopup;
