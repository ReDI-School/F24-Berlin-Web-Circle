import { useState } from "react";

export const CloseIcon = ({
  width = 36,
  height = 36,
  stroke = "black",
  onClick: closeModal,
  backgroundColor = "transparent",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const iconStyle = {
    display: "block",
    height: `${height}px`,
    width: `${width}px`,
    cursor: "pointer", // Change cursor to pointer on hover
    transition: "background-color 0.3s ease", // Smooth transition for background color
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: `${height}px`,
    width: `${width}px`,
    borderRadius: "50%",
    backgroundColor: isHovered ? "#F5F5F5" : backgroundColor,
    transition: "background-color 0.3s ease, border-radius 0.3s ease",
    padding: "7px", // Smooth transition for background color and border radius
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        onClick={closeModal}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke={stroke}
        style={iconStyle}
      >
        <path strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  );
};