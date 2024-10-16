import { useState } from "react";
import styles from "./ProductCard.module.css";
import SharePopup from "../SharePopup/SharePopup"; // Correct import for SharePopup
import { Link } from "react-router-dom";

const ProductCard = ({ images = [], title, host, price, place }) => {
  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // State to control the visibility of the share modal
  const [modalisVisible, setModalisVisible] = useState(false);
  // State to track if the card is hovered
  const [hovered, setHovered] = useState(false);

  // Function to open the share modal
  const openModal = () => {
    setModalisVisible(true);
  };

  // Function to close the share modal
  const closeModal = () => {
    setModalisVisible(false);
  };

  // Function to navigate to the next image
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to navigate to the previous image
  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Ensure placeId is generated even if place.id is not provided
  const placeId = place?.id ? place.id : `dummy-${Date.now()}`;

  return (
    <>
      <div
        className={styles.productCard}
        onMouseEnter={() => setHovered(true)} // Set hovered to true on mouse enter
        onMouseLeave={() => setHovered(false)} // Set hovered to false on mouse leave
      >
        {/* Button to trigger the share popup */}
        <button onClick={openModal} className={styles.shareButton}>
          <span className={styles.shareIcon}>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path
                d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289"
                fill="none"
              ></path>
            </svg>
          </span>
        </button>

        {/* Product image carousel */}
        <img
          src={images[currentImageIndex]}
          alt={title}
          className={styles.productImage}
        />

        {/* Navigation buttons, which appear on hover */}
        {hovered && (
          <div className={styles.imageNavigation}>
            <button onClick={handlePreviousImage} className={styles.arrowButton}>
              &lt; {/* Left arrow */}
            </button>
            <button onClick={handleNextImage} className={styles.arrowButton}>
              &gt; {/* Right arrow */}
            </button>
          </div>
        )}

        {/* Product information */}
        <Link to={`/rooms/${placeId}`} className={styles.cardLink}>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardHost}>{host}</p>
            <p className={styles.cardPrice}>{price}</p>
          </div>
        </Link>
      </div>

      {/* Share popup modal */}
      {modalisVisible && <SharePopup onClick={closeModal} />}
    </>
  );
};

export default ProductCard;