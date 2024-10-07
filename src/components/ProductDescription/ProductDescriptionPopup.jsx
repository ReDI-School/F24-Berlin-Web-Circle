import React from "react";
import styles from "./ProductDescriptionPopup.module.css";
const ProductDescriptionPopup = ({
  showPopupHandler,
  descriptionPlace,
  descriptionSpace,
  guestAccess,
  otherThings,
}) => {
  return (
    <div className={styles.popupContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.popupContainerElememts}>
          <svg
            onClick={showPopupHandler}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="Black"
            aria-label="close-button"
          >
            <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.12 5.71a.996.996 0 1 0-1.41 1.41L10.59 12l-4.88 4.88a.996.996 0 1 0 1.41 1.41L12 13.41l4.88 4.88a.996.996 0 1 0 1.41-1.41L13.41 12l4.88-4.88a.996.996 0 0 0 0-1.41z" />
          </svg>

          <h3 className={styles.popupTitle}>About this space </h3>
          <span>{descriptionSpace}</span>
          <h4 className={styles.titles}>The Space</h4>
          <span>{descriptionPlace}</span>
          <h4 className={styles.titles}>Guest access</h4>
          <span>{guestAccess}</span>
          <h4 className={styles.titles}>Other things to note</h4>
          <span>{otherThings}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionPopup;
