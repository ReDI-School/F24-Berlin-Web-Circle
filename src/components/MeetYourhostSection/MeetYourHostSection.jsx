import MeetYourHostRight from "./MeetYourHostRight/MeetYourHostRight";
import styles from "./MeetYourHostSection.module.css";
import MeetYourHostLeft from "./MeetYourHostLeft/MeetYourHostLeft";

const MeetYourHostSection = ({
  image,
  name,
  role,
  verified,
  reviews,
  rating,
  yearsHosting,
  profileText,
  responseRate,
  responseTime,
  isSuperhost
}) => {
  return (
    <div className={styles.meetYourHostSection}>
      <div className={styles.meetYourHostSectionContainer}>
        <div className={styles.meetYourHostTitle}>
          <h2>Meet your Host</h2>
        </div>
        <div className={styles.meetYourHostSectionInnerContainer}>
          <MeetYourHostLeft
            image={image}
            name={name}
            role={role}
            verified={verified}
            reviews={reviews}
            rating={rating}
            yearsHosting={yearsHosting}
            profileText={profileText}
          />
          <MeetYourHostRight
            name={name}
            responseRate={responseRate}
            responseTime={responseTime}
            isSuperhost={isSuperhost}
          />
        </div>
      </div>
    </div>
  );
};


export default MeetYourHostSection;
