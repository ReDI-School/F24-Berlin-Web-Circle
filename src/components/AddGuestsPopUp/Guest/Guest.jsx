import { useState } from 'react'
import styles from './Guest.module.css'

const Guest = ({
  title,
  description,
  descriptionType,
  onGuestChange,
  count: initialCount,
  allowGuestsNumber,
  setGuestCounts,
  currentTotalPeople,
  toggleGuestCountPopup,
  isSearchWhoDropdown,
  setGuestSearchCounts,
  currentSearchTotalPeople,
  handleGuestSearchClick,
}) => {
  const [count, setCount] = useState(initialCount)
  const { peopleNumber, petsNumber } = allowGuestsNumber

  const petsSearchNumber = 5
  const searchTotalPeopleNumber = 16

  const handleMinusCount = () => {
    if (
      (title === 'Adults' && count > 1) ||
      (title !== 'Adults' && count > 0)
    ) {
      const newCount = count - 1
      setCount(newCount)
      if (!isSearchWhoDropdown) {
        onGuestChange({ typeofGuest: title, numberOfGuests: newCount })
        setGuestCounts((prevCounts) => ({
          ...prevCounts,
          [title.toLowerCase()]: newCount,
        }))
      } else {
        handleGuestSearchClick({ typeofGuest: title, numberOfGuests: newCount })
        setGuestSearchCounts((prevCounts) => ({
          ...prevCounts,
          [title.toLowerCase()]: newCount,
        }))
      }
    }
  }

  const handlePlusCount = () => {
    if (
      !isSearchWhoDropdown
        ? (title === 'Adults' || title === 'Children') &&
          currentTotalPeople < peopleNumber
        : (title === 'Adults' || title === 'Children') &&
          currentSearchTotalPeople < searchTotalPeopleNumber
    ) {
      const newCount = count + 1
      setCount(newCount)
      if (!isSearchWhoDropdown) {
        onGuestChange({ typeofGuest: title, numberOfGuests: newCount })
        setGuestCounts((prevCounts) => ({
          ...prevCounts,
          [title.toLowerCase()]: newCount,
        }))
      } else {
        handleGuestSearchClick({ typeofGuest: title, numberOfGuests: newCount })
        setGuestSearchCounts((prevCounts) => ({
          ...prevCounts,
          [title.toLowerCase()]: newCount,
        }))
      }
    } else if (
      !isSearchWhoDropdown
        ? title === 'Pets' && count < petsNumber
        : title === 'Pets' && count < petsSearchNumber
    ) {
      const newCount = count + 1
      setCount(newCount)
      if (!isSearchWhoDropdown) {
        onGuestChange({ typeofGuest: title, numberOfGuests: newCount })
        setGuestCounts((prevCounts) => ({
          ...prevCounts,
          pets: newCount,
        }))
      } else{
        handleGuestSearchClick({ typeofGuest: title, numberOfGuests: newCount })
        setGuestSearchCounts((prevCounts) => ({
          ...prevCounts,
          pets: newCount,
        }))
      }
    } else if (title === 'Infants' && count < 5) {
      const newCount = count + 1
      setCount(newCount)
      if (!isSearchWhoDropdown) {
        onGuestChange({ typeofGuest: title, numberOfGuests: newCount })
        setGuestCounts((prevCounts) => ({
          ...prevCounts,
          infants: newCount,
        }))
      } else {
        handleGuestSearchClick({ typeofGuest: title, numberOfGuests: newCount })
        setGuestSearchCounts((prevCounts) => ({
          ...prevCounts,
          infants: newCount,
        }))
      }
    }
  }

  return (
    <div
      className={`${styles.container} ${
        isSearchWhoDropdown ? styles.whoDropdownContainer : ''
      }`}
    >
      <div
        className={`${styles.detailContainer} ${
          isSearchWhoDropdown ? styles.whoDropdownDetailContainer : ''
        }`}
      >
        <div className={styles.title}>{title}</div>
        {descriptionType === 'string' ? (
          <div>{description}</div>
        ) : (
          !isSearchWhoDropdown && (
            <div
              className={styles.descriptionLink}
              onClick={toggleGuestCountPopup}
            >
              {description}
            </div>
          )
        )}
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={
            (count !== 0 && title !== 'Adults') ||
            (count > 1 && title === 'Adults')
              ? styles.button
              : styles.buttonDisable
          }
          onClick={handleMinusCount}
        >
          -
        </button>
        <div className={styles.count}>{count}</div>
        <button
          className={
            !isSearchWhoDropdown
              ? ((title === 'Adults' || title === 'Children') &&
                  (currentTotalPeople < peopleNumber ||
                    currentSearchTotalPeople < peopleNumber)) ||
                (title === 'Pets' && count < petsNumber) ||
                (title === 'Infants' && count < 5)
                ? styles.button
                : styles.buttonDisable
              : (title === 'Pets' && count < petsSearchNumber) ||
                (title === 'Infants' && count < 5) ||
                ((title === 'Adults' || title === 'Children') &&
                  (currentSearchTotalPeople < searchTotalPeopleNumber ||
                    currentSearchTotalPeople < searchTotalPeopleNumber))
                ? styles.button
                : styles.buttonDisable
          }
          onClick={handlePlusCount}
        >
          +
        </button>
      </div>
    </div>
  )
}
export default Guest

