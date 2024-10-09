import { useState } from "react";
import styles from "./ReviewsSection.module.css";
import Reviews from "../Reviews/Reviews";

const ReviewsSection = ({ reviews }) => {
  const reviewsDisplayed = 3; /**Changes depending on the reviews settigns  */

  const [displayedReviewsCount, setDisplayedReviewsCount] =
    useState(reviewsDisplayed);

  const reviewsToShow = reviews.slice(0, displayedReviewsCount);

  return (
    <div className={styles.reviewsOuterContainer}>
      <div className={styles.reviewsContainer}>
        <div className={styles.reviewsGrid}>
          {reviewsToShow.map((review, index) => (
            <Reviews
              key={index}
              picture={review.picture}
              name={review.name}
              rating={review.rating}
              date={review.date}
              reviewText={review.reviewText}
            />
          ))}

          {reviewsToShow.length % 2 !== 0 && (
            <div className={styles.emptyOddReviews}></div>
          )}
        </div>

        {displayedReviewsCount < reviews.length && (
          <div className={styles.showMoreContainer}>
            <div className={styles.buttonContainer}>
              <button>{`Show all ${reviews.length} reviews`}</button>
            </div>
            <div className={styles.learnAboutReviews}>
              Learn how reviews work
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsSection;
