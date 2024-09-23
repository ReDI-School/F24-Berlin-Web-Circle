import React from "react";
import "./MapView.css";

const MapView = ({ address, addressDescription }) => {
  return (
    <div className="map-wiew-container">
      <h2 className="where-you-be">Where you’ll be</h2>
      <div className="map-container"></div>
      <div className="address-container">
        <h4 className="address-location">{address}</h4>
        <span className="address-description">{addressDescription}</span>
      </div>
      <div className="arrow-right-container">
        <span className="show-more">Show more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
          aria-label="arrow-right"
          className="arrow-right"
        >
          <path d="M9.29 15.88L13.17 12 9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59a.996.996 0 0 1 0 1.41l-4.59 4.59a.996.996 0 1 1-1.41-1.41z" />
        </svg>
      </div>
    </div>
  );
};

export default MapView;
