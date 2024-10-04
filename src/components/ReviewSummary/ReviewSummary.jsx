import styles from './ReviewSummary.module.css'
import {
  AccuracyIcon,
  CleanlinessIcon,
  CheckInIcon,
  CommunicationIcon,
  Location,
  Value,
  AggregateRatingStarIcon,
} from '../../icons'
import RatingBar from '../RatingBar/RatingBar';


const ReviewSummary = ({
  totalAvgRating,
  totalReviewsCount,
  ratings: {
    cleanlinessAvgRating,
    accuracyAvgRating,
    checkInAvgRating,
    communicationAvgRating,
    locationAvgRating,
    valueAvgRating,
    starTotals,
  },
}) => {

  const categories = [
    { title: 'Overall rating', rating: totalAvgRating, Icon: AggregateRatingStarIcon },
    { title: 'Cleanliness', rating: cleanlinessAvgRating, Icon: CleanlinessIcon },
    { title: 'Accuracy', rating: accuracyAvgRating, Icon: AccuracyIcon },
    { title: 'Check-in', rating: checkInAvgRating, Icon: CheckInIcon },
    { title: 'Communication', rating: communicationAvgRating, Icon: CommunicationIcon },
    { title: 'Location', rating: locationAvgRating, Icon: Location },
    { title: 'Value', rating: valueAvgRating, Icon: Value },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span aria-hidden="true">
          <AggregateRatingStarIcon />
        </span>
        <p>
          <span>
            <h2 className={styles.summary}>
              {totalAvgRating} &#183; {totalReviewsCount}{' '}
              {`${totalReviewsCount > 1 ? ' reviews' : 'review'}`}
            </h2>
          </span>
        </p>
      </header>
      <main className={styles.main}>
        <RatingBar starTotals={starTotals} />
         {categories.map(({ title, rating, Icon }) => (
          <div key={title} className={styles.ratingItem}>
            <div className={styles.ratingItemSummary}>
              <h3>{title}</h3>
              <p>{rating}</p>
            </div>
            <span aria-hidden="true">
              <Icon />
            </span>
          </div>
        ))}
      </main>
    </div>
  )
}

export default ReviewSummary
