import { DownArrow, UpArrow } from '../../../icons'
import styles from './GuestCountDisplay.module.css'


const GuestCountDisplay = ({
  showGuests,
  adultsAndChildrenCount,
  infantsCount,
  petsCount,
}) => (
  <div className={styles.guestsPickerSectionContent}>
    <label>Guests</label>
    <div className={styles.guestCountWrapper}>
      <div>
      {adultsAndChildrenCount ? `${adultsAndChildrenCount} guest${adultsAndChildrenCount !== 1 ? 's' : ''}` : ''}
      {infantsCount ? `, ${infantsCount} infant${infantsCount !== 1 ? 's' : ''}` : ''}
      {petsCount ? `, ${petsCount} pet${petsCount !== 1 ? 's' : ''}` : ''}
    </div>
    {showGuests ? <UpArrow /> : <DownArrow />}
    </div>
  </div>
)

export default GuestCountDisplay