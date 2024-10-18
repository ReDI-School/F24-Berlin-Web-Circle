import styles from './AddGuestsPopUp.module.css'
import Guest from './Guest/Guest'

const AddGuestsPopUp = ({
  guestsData,
  onGuestChange,
  style,
  toggleShowGuests,
  adultsCount = 1,
  childrenCount,
  infantsCount,
  petsCount,
  allowGuestsNumber = { peopleNumber: 0, petsNumber: 0 },
  setGuestCounts,
  currentTotalPeople,
}) => {
  const { peopleNumber, petsNumber } = allowGuestsNumber

  return (
    <div className={styles.popup} style={style}>
      {guestsData?.map((guest) => {
        let count
        if (guest.title === 'Adults') {
          count = adultsCount
        } else if (guest.title === 'Children') {
          count = childrenCount
        } else if (guest.title === 'Infants') {
          count = infantsCount
        } else if (guest.title === 'Pets') {
          count = petsCount
        }
        return (
          <Guest
            key={guest.index}
            title={guest.title}
            description={guest.description}
            descriptionType={guest.descriptionType}
            onClick={onGuestChange}
            count={count}
            allowGuestsNumber={allowGuestsNumber}
            setGuestCounts={setGuestCounts}
            currentTotalPeople={currentTotalPeople}
          />
        )
      })}

      <div className={styles.popupText}>
        This place has a maximum of {peopleNumber} {peopleNumber !== 1 ? 'guests' : 'guest'},
        not including infants.
        {petsNumber > 0
          ? ` If you're bringing more than ${petsNumber} pet${
            petsNumber !== 1 ? 's' : ''
            }, please let your host know.`
          : " Pets aren't allowed."}
      </div>
      <div className={styles.closePopUp}>
        <button onClick={toggleShowGuests}>Close</button>
      </div>
    </div>
  )
}

export default AddGuestsPopUp
