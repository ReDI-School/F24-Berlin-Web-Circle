import MeetYourHostRight from "./MeetYourHostRight/MeetYourHostRight";
import styles from "./MeetYourHostSection.module.css";
import MeetYourHostLeft from "./MeetYourHostLeft/MeetYourHostLeft";

const MeetYourHostSection = () => {
  return (
    <div className={styles.meetYourHostSection}>
      <div className={styles.meetYourHostSectionContainer}>
      <div className={styles.meetYourHostTitle}>
            <h2>Meet your Host</h2>
        </div>
      <div className={styles.meetYourHostSectionInnerContainer}>
        <MeetYourHostLeft
          image="https://a0.muscache.com/im/pictures/user/d62627ea-ea22-4cf1-b38a-152f1f86a9ed.jpg"
          name="Raus"
          role="Superhost"
          verified={true}
          reviews={74}
          rating={4.85}
          yearsHosting={1}
          profileText={
            "Find your nature retreat in Cabins in pristine places not far from your home."
          }
        />
        <MeetYourHostRight name="Raus" responseRate="100%" responseTime="an hour" />
      </div>
    </div>
    </div>
  );
};

export default MeetYourHostSection;
