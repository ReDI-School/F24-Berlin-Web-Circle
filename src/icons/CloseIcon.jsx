import { useState } from 'react';

export const CloseIcon = ({ width = 36, height = 36, stroke = "black", backgroundColor = "transparent" }) => {
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
    height: `${height}px`, // Match height of icon
    width: `${width}px`, // Match width of icon
    borderRadius: "50%", // Make it round
    backgroundColor: isHovered ? "#F5F5F5"
 : backgroundColor, // Change background color on hover
    transition: "background-color 0.3s ease, border-radius 0.3s ease", padding: "7px", // Smooth transition for background color and border radius
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke={stroke} // Use stroke prop here
        style={iconStyle}
      >
        <path
          strokeWidth={1}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};