import React from "react";
import styles from "./MapView.module.css";
import MapDisplay from "../MapDisplay/MapDisplay";
import ArrowRightIcon from "../../icons/ArrowRightIcon";

const MapView = ({ address, addressDescription, mapViewSampleImg }) => {
  return (
    <div className={styles.mapWiewContainer}>
      <h2 className={styles.whereYouBe}>Where you’ll be</h2>
      <div className={styles.mapContainer}>
        <MapDisplay lat={52.520008} lng={13.404954} />
      </div>
      <div className={styles.addressContainer}>
        <h4 className={styles.addressLocation}>{address}</h4>
        <span className={styles.addressDescription}>{addressDescription}</span>
      </div>
      <div className={styles.arrowRightContainer}>
        <span className={styles.showMore}>Show more</span>
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default MapView;
