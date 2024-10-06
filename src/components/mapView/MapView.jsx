import React from "react";
import styles from "./MapView.module.css";

const MapView = ({ address, addressDescription, mapViewSampleImg }) => {
  return (
    <div className={styles.mapWiewContainer}>
      <h2 className={styles.whereYouBe}>Where you’ll be</h2>
      <div className={styles.mapContainer}>
        <img
          src={mapViewSampleImg}
          alt="map view sample"
          className={styles.mapImg}
        />
      </div>
      <div className={styles.addressContainer}>
        <h4 className={styles.addressLocation}>{address}</h4>
        <span className={styles.addressDescription}>{addressDescription}</span>
      </div>
      <div className={styles.arrowRightContainer}>
        <span className={styles.showMore}>Show more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
          aria-label="arrow-right"
          className={styles.arrowRight}
        >
          <path d="M9.29 15.88L13.17 12 9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59a.996.996 0 0 1 0 1.41l-4.59 4.59a.996.996 0 1 1-1.41-1.41z" />
        </svg>
      </div>
    </div>
  );
};

export default MapView;
