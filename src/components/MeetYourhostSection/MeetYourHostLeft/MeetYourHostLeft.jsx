import styles from "./MeetYourHostLeft.module.css";
import ArrowRightIcon from "../../../icons/ArrowRightIcon";
import {
  BusinessIcon,
  LanguageIcon,
  ReviewsNumberIcon,
  RoleIcon,
  VerifiedIcon
} from "../../../icons";

const MeetYourHostLeft = ({
  image,
  name,
  role,
  verified,
  reviews,
  rating,
  yearsHosting,
  profileText,
}) => {
  const languagesAndBusinessData = [
    { icon: LanguageIcon, text: "Speaks German and English" },
    { icon: BusinessIcon, text: "Business" },
  ];

  return (
    <div className={styles.hostInfoContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.leafSide}>
          <div className={styles.roundPhotoComponent}>
            <img className={styles.personImg} src={image} alt={name} />
          </div>
          {verified && (
            <div className={styles.verifiedContainer}>
              <VerifiedIcon />
            </div>
          )}
          <div className={styles.personRoleContainer}>
            <h2 className={styles.personInfo}>{name}</h2>
            <div className={styles.roleContainer}>
              {role === "Superhost" ? <RoleIcon /> : ""} {/** change role to boolean so that it includes "Superhosts"  */}
              <span className={styles.role}>{role}</span>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.reviewsContainer}>
            <span className={styles.reviewsNumbers}>{reviews}</span>
            <span className={styles.reviewsText}>Reviews</span>
          </div>
          <hr className={styles.borders} />
          <div className={styles.reviewsContainer}>
            <div className={styles.reviewsAndStar}>
              <span className={styles.reviewsNumbers}>{rating}</span>
              <ReviewsNumberIcon />
            </div>
            <span className={styles.reviewsText}>Rating</span>
          </div>
          <hr className={styles.borders} />
          <div className={styles.reviewsContainer}>
            <span className={styles.reviewsNumbers}>{yearsHosting}</span>
            <span className={styles.reviewsText}>Year hosting</span>
          </div>
        </div>
      </div>
      <div className={styles.personTextContainer}>
        <div className={styles.personText}>
          <div className={styles.languagesAndBusiness}>
            {languagesAndBusinessData.map((item, index) => (
              <div key={index} className={styles.lgAndBsText}>
                <div className={styles.lgIcon}>
                  <item.icon />
                </div>
                <div className={styles.lgText}>{item.text}</div>
              </div>
            ))}
          </div>
          <div className={styles.profileText}>{profileText}</div>
        </div>
        <div className={styles.arrowRightContainer}>
          <span className={styles.showMore}>Show more</span>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
};

export default MeetYourHostLeft;
