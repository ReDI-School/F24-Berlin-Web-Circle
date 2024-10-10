import styles from "./MeetYourHostRight.module.css";
import paymentWarningIcon from "../../../assets/PaymentWarningIcon.png";

const MeetYourHostRight = ({ name, responseRate, responseTime }) => {
  return (
    <div className={styles.rightContainer}>
      <div className={styles.superHost}>
        <div className={styles.superHostTitle}>
          <h3>{`${name} is a Superhost`}</h3>
        </div>
        <div className={styles.superHostText}>
          Superhosts are experienced, highly rated hosts who are committed to
          providing great stays for guests.
        </div>
      </div>
      <div className={styles.hostDetails}>
        <div className={styles.hostDetailsTitle}>
          <h3>Host details</h3>
        </div>
        <div className={styles.hostDetailsText}>
          <div>{`Response rate: ${responseRate}`}</div>
          <div>{`Responds within ${responseTime}`}</div>
        </div>
      </div>
      <div className={styles.messageHost}>
        <button>Message Host</button>
      </div>
      <div className={styles.paymentInfo}>
        <div className={styles.paymentWarningIcon}>
          <img src={paymentWarningIcon} alt="payment-warning-icon" />
        </div>
        <div className={styles.paymentInfoText}>
          To protect your payment, never transfer money or communicate outside
          of the Airbnb website or app.
        </div>
      </div>
    </div>
  );
};

export default MeetYourHostRight;
