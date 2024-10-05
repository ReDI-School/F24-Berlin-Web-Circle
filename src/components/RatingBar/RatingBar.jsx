import styles from './RatingBar.module.css'

const RatingBar = ({ starTotals, title }) => {
  const totalStarsRange = Object.values(starTotals).reduce(
    (acc, val) => acc + val,
    0
  )
  const calculatePercentage = (starCount) =>
    Math.ceil((starCount / totalStarsRange) * 100)

  const starRatings = [
    { star: 5, count: starTotals.fiveStar },
    { star: 4, count: starTotals.fourStar },
    { star: 3, count: starTotals.threeStar },
    { star: 2, count: starTotals.twoStar },
    { star: 1, count: starTotals.oneStar },
  ]
  
  return (
    <div className={styles.ratingBarContainer}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.ratingBarList}>
        {starRatings.map(({ star, count }) => (
          <li key={star} className={styles.ratingBarItem}>
            <span className={styles.starLabel}>{star}</span>
            <div className={styles.ratingBar}>
              <div
                style={{ width: `${calculatePercentage(count)}%` }}
                className={styles.ratingBarFill}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RatingBar
