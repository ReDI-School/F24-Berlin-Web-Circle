import React from 'react'

/* rating vlaue to be obtained from DB */
const StarRating = ({ rating = 0 }) => {
  const StarIcon = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="8px"
    height="8px"
    aria-hidden="true"
    role="presentation"
    focusable="false"
  >
    <path d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
  </svg>
  );

  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: rating }, (_, starIndex) => (
        <StarIcon key={starIndex}  />
      ))}
    </div>
  );
};

export default StarRating;
