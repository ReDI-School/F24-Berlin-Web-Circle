
import StarRating from "../StarRating/StarRating";
import "./FavoriteStay.css"
import Left from "../../assets/fav-badge-left.png";
import Right from "../../assets/fav-badge-right.png";

/* rating vlaue to be obtained from DB */
const FavoriteStay = ({ rating = 5, reviews = 71 }) => {
  return (
    <div className="fav-stay-container">
      <div className="fav-stay-grid-container">
        {/* badge */}
        <div></div>
        <div className="host-badge-container">
          <div className="host-badge-left">
            <img className="left" src={Left} 
            alt="fav-badge-left" />
          </div>

          <div className="host-badge-text">Guest{<br></br>}favorite</div>

          <div className="host-badge-right">
          <img className="right" src={Right}
            alt="fav-badge-right" />
          </div>
        </div>

        <div></div>
        <div className="fav-stay-seperator"></div>

        {/* Start ratings */}
        <div></div>
        <div className="ratings-container">
          <span className="space-above"></span>
          <div className="rating-value">{rating.toFixed(1)}</div>
          <div className="rating-stars">
            <StarRating rating={rating} />
          </div>
        </div>

        <div></div>
        <div className="fav-stay-seperator"></div>

        {/* reviews */}
        <div></div>
        <div className="reviews-container">
        <span className="space-above"></span>
          <div className="review-value">{reviews}</div>
          <div className="reviews-link">
            <a href="#"></a>Reviews
          </div>
        </div>
        <div></div>
        <div className="fav-stay-seperator"></div>
      </div>
    </div>
  );
};

export default FavoriteStay;
