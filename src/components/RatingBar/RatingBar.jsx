import styles from "./RatingBar.module.css";

const RatingBar = ({ starTotals }) => {
  const totalStarsRange = starTotals.fiveStar + starTotals.fourStar + starTotals.threeStar + starTotals.twoStar + starTotals.oneStar;

  const fiveStarPercentage = Math.round((starTotals.fiveStar / totalStarsRange) * 100);
  const fourStarPercentage = Math.round((starTotals.fourStar / totalStarsRange) * 100);
  const threeStarPercentage = Math.round((starTotals.threeStar / totalStarsRange) * 100);
  const twoStarPercentage = Math.round((starTotals.twoStar / totalStarsRange) * 100);
  const oneStarPercentage = Math.round((starTotals.oneStar / totalStarsRange) * 100);

  console.log(fiveStarPercentage, fourStarPercentage, threeStarPercentage, twoStarPercentage, oneStarPercentage);

  return (
    <div className={styles.ratingBarContainer}>
      <div className={styles.ratingBar}>
        <div style={{ width: `${fiveStarPercentage}%` }} className={styles.ratingBarFill}>
          5
        </div>
      </div>
      <div className={styles.ratingBar}>
        <div style={{ width: `${fourStarPercentage}%` }} className={styles.ratingBarFill}>
          4
        </div>
      </div>
      <div className={styles.ratingBar}>
        <div style={{ width: `${threeStarPercentage}%` }} className={styles.ratingBarFill}>
          3
        </div>
      </div>
      <div className={styles.ratingBar}>
        <div style={{ width: `${twoStarPercentage}%` }} className={styles.ratingBarFill}>
          2
        </div>
      </div>
      <div className={styles.ratingBar}>
        <div style={{ width: `${oneStarPercentage}%` }} className={styles.ratingBarFill}>
          1
        </div>
      </div>
    </div>
  );
};

export default RatingBar;


