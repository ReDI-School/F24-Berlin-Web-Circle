import MeetYourHostRight from "./MeetYourHostRight/MeetYourHostRight";
import styles from "./MeetYourHostSection.module.css";
import MeetYourHostLeft from "./MeetYourHostLeft/MeetYourHostLeft";

const MeetYourHostSection = ({
  name,
  image,
  role,
  verified,
  reviews,
  rating,
  yearsHosting,
  profileText
}) => {
  return (
    <div className={styles.meetYourHostSection}>
      <div className={styles.meetYourHostSectionContainer}>
        <div className={styles.meetYourHostTitle}>
          <h2>Meet your Host</h2>
        </div>
        <div className={styles.meetYourHostSectionInnerContainer}>
          <MeetYourHostLeft
            name={name}
            image={image}
            role={role}
            verified={verified}
            reviews={reviews}
            rating={rating}
            yearsHosting={yearsHosting}
            profileText={profileText}
          />
          <MeetYourHostRight
            name={name}
            responseRate="100%"
            responseTime="an hour"
          />
        </div>
      </div>
    </div>
  );
};

export default MeetYourHostSection;
