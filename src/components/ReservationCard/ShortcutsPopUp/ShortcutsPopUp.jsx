import Popup from '../PopUp/PopUp'
import ShortcutItem from './ShortcutItem/ShortcutItem'
import styles from './ShortcutsPopUp.module.css'

const ShortcutsPopUp = ({ isVisible, onClose, showCalendar, setShowCalendar }) => {

if (!showCalendar) {
  setShowCalendar(true)
}

  return (
    <Popup isVisible={isVisible} onClose={onClose}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <h2>Keyboard shortcuts</h2>
        </div>
        <main className={styles.main}>
          <ShortcutItem
            symbols="&crarr;"
            description="Select the date in focus"
          />
          <ShortcutItem
            symbols={['\u2190', '\u2192']}
            description="Move backward (left) and forward (right) by one day"
          />
          <ShortcutItem
            symbols={['\u2191', '\u2193']}
            description="Move backward (up) and forward (down) by one week"
          />
          <ShortcutItem symbols="PGUP/PGDN" description="Switch months" />
          <ShortcutItem
            symbols="HOME/END"
            description="Go to the first or last day of a week"
          />
          <ShortcutItem symbols="?" description="Open this panel" />
        </main>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={onClose}>
            Back to calendar
          </button>
        </div>
      </div>
    </Popup>
  )
}

export default ShortcutsPopUp
