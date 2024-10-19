import styles from './PopUp.module.css'
import useOutsideClick from '../../../hooks/useOutsideClick'
import { useEffect } from 'react'

const Popup = ({ isVisible, onClose, children, popupStyles }) => {
  const popupRef = useOutsideClick(onClose)

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className={styles.overlay}>
      <div
        className={styles.popup}
        style={popupStyles}
        ref={popupRef}
      >
        {children}
      </div>
    </div>
  )
}

export default Popup
