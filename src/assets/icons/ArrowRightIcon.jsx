import React from "react";

export const ArrowRightIcon = ({ marginTop = 5, width = 24, height = 24, fill = 'white' }) => {
  const iconStyle = {
    marginTop: `${marginTop}px`,
    width: `${width}px`,
    height: `${height}px`,
    fill: `${fill}`,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={iconStyle}
    >
      <path d="M9.29 15.88L13.17 12 9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59a.996.996 0 0 1 0 1.41l-4.59 4.59a.996.996 0 1 1-1.41-1.41z" />
    </svg>
  );
};