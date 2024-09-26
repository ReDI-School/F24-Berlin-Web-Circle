import styles from "./ReservationCard.module.css";
import CostsSummary from "../CostsSummary/CostsSummary";

function ReservationCard() {
  const checkInDate = new Date("2025-01-01");
  const checkOutDate = new Date("2025-01-16");
  const pricePerNight = 146;
  const cleaningFee = 10;
  const airbnbServiceFee = 10;

  const handleReservation = () => {
    console.log(typeof checkInDate);
  };

  return (
    <div className={styles.reservationCard}>
      <div className={styles.reservationSection}>
        <div className={styles.pricingGuestSection}>
          <span>{`€ ${pricePerNight} `}</span>
          night
        </div>
        <div className={styles.reservationForm}>
          <button className={styles.datesPickerSection}>
            <div className={styles.checkinSection}>
              <label>Check-in</label>
              <div>10/12/2024</div>
            </div>
            <div className={styles.checkoutSection}>
              <label>Checkout</label>
              <div>10/12/2024</div>
            </div>
          </button>
          <button className={styles.guestsNumberPickerSection}>
            <label>Guests</label>
            <div>1 guest</div>
          </button>
        </div>
        <div className="buttonContainer">
          <button onClick={handleReservation} className={styles.reserveButton}>
            Reserve
          </button>
        </div>
      </div>

      {checkInDate && checkOutDate && (
        <CostsSummary
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          pricePerNight={pricePerNight}
          cleaningFee={cleaningFee}
          airbnbServiceFee={airbnbServiceFee}
        />
      )}
    </div>
  );
}

export default ReservationCard;
