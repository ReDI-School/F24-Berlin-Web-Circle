import Popup from '../PopUp/PopUp'
import { CloseIcon } from '../../../icons'
import AnimalServiceImg from '../../../assets/images/service-images/animal-service.jpg'
import styles from './GuestCountPopUp.module.css'

const GuestCountPopUp = ({ isVisible, onClose, showGuests, setShowGuests }) => {

  if (!showGuests) {
    setShowGuests(true)
  } 

  return (
    <Popup isVisible={isVisible} onClose={onClose}>
      <div className={styles.header}>
        <button className={styles.button} onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      <section className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <img
            src={AnimalServiceImg}
            className={styles.image}
            alt="Animal Service"
          />
        </div>
        <div className={styles.text}>
          <h2 className={styles.title}>Service animals</h2>
          <p>
            Service animals aren&apos;t pets, so there&apos;s no need to add
            them here.
          </p>
          <p>
            Traveling with an emotional support animal? Check out our
            accessibility policy.
          </p>
        </div>
      </section>
    </Popup>
  )
}

export default GuestCountPopUp
