import { useState } from 'react'
import styles from './Guest.module.css'

const Guest = ({
  title,
  description,
  descriptionType,
  onClick,
  count: initialCount,
}) => {
  const [count, setCount] = useState(initialCount)

  console.log(title, description, descriptionType)
  const handelMinusCount = () => {
    if (title === 'Adults' && count > 1) {
      setCount(count - 1)
      onClick({ typeofGuest: title, numberOfGuests: count - 1 })
    } else if (title !== 'Adults' && count > 0) {
      setCount(count - 1)
      onClick({ typeofGuest: title, numberOfGuests: count - 1 })
    }
  }
  const handelPlusCount = () => {
    setCount(count + 1)
    onClick({ typeofGuest: title, numberOfGuests: count + 1 })
  }

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
            (count !== 0 && title !== 'Adults') ||
            (count > 1 && title === 'Adults')
              ? styles.button
              : styles.buttonDisable
          }
          onClick={handelMinusCount}
        >
          -
        </div>
        <div className={styles.count}>{count}</div>
        <div className={styles.button} onClick={handelPlusCount}>
          +
        </div>
      </div>
    </div>
  )
}
export default Guest