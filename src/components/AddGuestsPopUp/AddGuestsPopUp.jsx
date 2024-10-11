import styles from './AddGuestsPopUp.module.css'
import Guest from './Guest/Guest'

const AddGuestsPopUp = ({
  guestsData,
  onGuestChange,
  style,
  toggleShowGuests,
  allowGuestsNumber = {peopleNumber: 0, petsNumber: 0},
}) => {
  const { peopleNumber, petsNumber } = allowGuestsNumber
  return (
    <div className={styles.popup} style={style}>
      {guestsData?.map((guest) => (
        <Guest
          key={guest.index}
          title={guest.title}
          description={guest.description}
          descriptionType={guest.descriptionType}
          onClick={onGuestChange}
        />
      ))}
      <div className={styles.popupText}>
        This place has a maximum of {peopleNumber} guests, not including
        infants. If you&apos;re  bringing more than {petsNumber} pets, please let
        your host know.
      </div>
      <div className={styles.closePopUp}>
        <button onClick={toggleShowGuests}>Close</button>
      </div>
    </div>
  )
}

export default AddGuestsPopUp
