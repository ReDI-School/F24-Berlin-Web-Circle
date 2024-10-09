import styles from "./ReservationCard.module.css";
import CostsSummary from "../CostsSummary/CostsSummary";
import AddGuestsPopUp from "../AddGuestsPopUp/AddGuestsPopUp"
import { useState} from "react";
import { DownArrow, UpArrow } from "../../icons";

function ReservationCard() {
  const [showGuests, setShowGuests] = useState(false);
  const checkInDate = new Date("2025-01-01");
  const checkOutDate = new Date("2025-01-16");
  const pricePerNight = 146;
  const cleaningFee = 10;
  const airbnbServiceFee = 10;
  const longStayDiscount = 30;
  const nightsCountForDiscount = 5;

  const toggleShowGuests = () => {
    setShowGuests((prevState)=> (!prevState));
  }

  const addGuestPopUpStyles = {borderRadius: "4px",
    width: "100% !important",
    maxWidth: "20rem",
    position: "absolute !important",
    border: "1px solid var(--palette-deco)",
    zIndex: "99 !important"};

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
              <div className={styles.checkinSectionContent}>
                <label>Check-in</label>
                <div>01/01/2024</div>
              </div>
            </div>
            <div className={styles.checkoutSection}>
              <div className={styles.checkoutSectionContent}>
                <label>Checkout</label>
                <div>10/12/2024</div>
              </div>
            </div>
          </button>
         
          <button className={styles.guestsNumberPickerSection} onClick={toggleShowGuests}>
            <div className={styles.guestsPickerSectionContent}>
              <label>Guests</label>
              <div className={styles.guestCountWrapper}>
                <div>1 guest</div>
                <>
                  {showGuests ? <UpArrow/> : <DownArrow/>}
                </>
              </div>
            </div>
          </button>
          <div className={styles.guestDropdown}>
            {showGuests && <AddGuestsPopUp style={addGuestPopUpStyles}/>}
          </div>
        </div>
        <div className="buttonContainer">
          <button className={styles.reserveButton}>Reserve</button>
        </div>
      </div>

      {checkInDate !== null && checkOutDate !== null && (
        <CostsSummary
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          pricePerNight={pricePerNight}
          cleaningFee={cleaningFee}
          airbnbServiceFee={airbnbServiceFee}
          longStayDiscount={longStayDiscount}
          nightsCountForDiscount={nightsCountForDiscount}
        />
      )}
    </div>
  );
}

export default ReservationCard;
