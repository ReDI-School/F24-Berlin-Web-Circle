import Styles from "./Reviews.module.css";
import StarRating from "../StarRating/StarRating";

const formattedReviewDate = (reviewedDateString) => {
    const reviewedDate = new Date(reviewedDateString);
    const currentDate = new Date();

    const timeDifference = currentDate - reviewedDate;
    const differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (differenceInDays <= 21) {
        const differenceInWeeks = Math.floor(differenceInDays / 7);
        if (differenceInWeeks === 1) {
            return "1 week ago";
        } else {
            return `${differenceInWeeks} weeks ago`
        }
    } else {
        const monthAndYear =  { year: 'numeric', month: 'long' };
        return reviewedDate.toLocaleDateString(undefined, monthAndYear);
    }
}

const Reviews = ({ name, picture, rating, reviewText, date }) => {
  let limit = 125; //to be edited (around 125)
  const isReviewTextLong = reviewText.length > limit;
  const displayedReviewText = isReviewTextLong
    ? reviewText.slice(0, limit) + "..."
    : reviewText;
    const dateReviewed = formattedReviewDate(date)

  return (
    <div className={Styles.reviewsContainer}>
      <div className={Styles.reviewerAndRatingContainer}>
        <div className={Styles.reviewerContainer}>
          <div className={Styles.reviewerPicture}>
            <img src={picture} alt="reviewerPicture" />
          </div>
          <div className={Styles.reviewerDetails}>
            <h3>{name}</h3>
            <p>3 years on Airbnb</p> {/*TODO make this dynamic*/}
          </div>
        </div>
        <div className={Styles.ratingContainer}>
          <StarRating rating={rating} />
          <span>&#183;</span>
          <h4>{dateReviewed}</h4>
        </div>
      </div>
      <div className={Styles.reviewText}>
        <p>{displayedReviewText}</p>
        {isReviewTextLong && (
          <div className={Styles.showMore}>
            <button>Show more</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
