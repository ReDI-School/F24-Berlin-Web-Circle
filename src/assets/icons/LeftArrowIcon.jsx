import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import React from "react";

const LeftArrowIcon = ({ showPopupHandler }) => {
  const iconStyles = {
    width: "20px",
    height: "20px",
    fill: "black",
    cursor: "pointer",
  };
  return (
    <svg
      onClick={showPopupHandler}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 330 330"
      xmlSpace="preserve"
      style={iconStyles}
    >
      <path
        id="XMLID_92_"
        d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
      l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996
      C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"
      />
    </svg>
  );
};

export default LeftArrowIcon;
