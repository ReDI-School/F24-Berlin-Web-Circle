import { useState } from 'react'
import styles from './Guest.module.css'

const Guest = ({
  title,
  description,
  descriptionType,
  onClick,
  count: initialCount,
  allowGuestsNumber,
  setGuestCounts,
  currentTotalPeople,
}) => {
  const [count, setCount] = useState(initialCount)
  const { peopleNumber, petsNumber } = allowGuestsNumber
 

  const handleMinusCount = () => {
    if ((title === 'Adults' && count > 1) || (title !== 'Adults' && count > 0)) {
      const newCount = count - 1;
      setCount(newCount);
      onClick({ typeofGuest: title, numberOfGuests: newCount });
      setGuestCounts((prevCounts) => ({
        ...prevCounts,
        [title.toLowerCase()]: newCount,
      }));
    }
  };

  const handlePlusCount = () => {
    if (
      (title === 'Adults' || title === 'Children') &&
      currentTotalPeople < peopleNumber
    ) {
      const newCount = count + 1;
      setCount(newCount);
      onClick({ typeofGuest: title, numberOfGuests: newCount });
      setGuestCounts((prevCounts) => ({
        ...prevCounts,
        [title.toLowerCase()]: newCount,
      }));
    } else if (title === 'Pets' && count < petsNumber) {
      const newCount = count + 1;
      setCount(newCount);
      onClick({ typeofGuest: title, numberOfGuests: newCount });
      setGuestCounts((prevCounts) => ({
        ...prevCounts,
        pets: newCount,
      }));
    } else if (title === 'Infants' && count < 5) {
      const newCount = count + 1;
      setCount(newCount);
      onClick({ typeofGuest: title, numberOfGuests: newCount });
      setGuestCounts((prevCounts) => ({
        ...prevCounts,
        infants: newCount,
      }));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.detailContainer}>
        <div className={styles.title}>{title}</div>
        {descriptionType === 'string' ? (
          <div>{description}</div>
        ) : (
          <div className={styles.descriptionLink}>{description}</div>
        )}
      </div>
      <div className={styles.buttonContainer}>
        <div
          className={
            (count !== 0 && title !== 'Adults') || (count > 1 && title === 'Adults')
              ? styles.button
              : styles.buttonDisable
          }
          onClick={handleMinusCount}
        >
          -
        </div>
        <div className={styles.count}>{count}</div>
        <div
          className={
            ((title === 'Adults' || title === 'Children') && currentTotalPeople < peopleNumber) ||
            (title === 'Pets' && count < petsNumber) ||
            (title === 'Infants' && count < 5)
              ? styles.button
              : styles.buttonDisable
          }
          onClick={handlePlusCount}
        >
          +
        </div>

      </div>
    </div>
  )
}
export default Guest