import { useState, useEffect } from "react";
import styles from "./ProductCard.module.css";
import SharePopup from "../SharePopup/SharePopup";
import { Link } from "react-router-dom";

const ProductCard = ({ images = [], title, host, price, place }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalisVisible, setModalisVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const openModal = () => {
    setModalisVisible(true);
  };

  const closeModal = () => {
    setModalisVisible(false);
  };

  // Disable scrolling when modal is visible
  useEffect(() => {
    if (modalisVisible) {
      document.body.classList.add("no-scroll"); // Add class to body
    } else {
      document.body.classList.remove("no-scroll"); // Remove class from body
    }

    // Clean up function to remove class if component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [modalisVisible]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const placeId = place?.id ? place.id : `dummy-${Date.now()}`;

  return (
    <>
      <div
        className={styles.productCard}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
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

        <img
          src={images[currentImageIndex]}
          alt={title}
          className={styles.productImage}
        />

        {hovered && (
          <div className={styles.imageNavigation}>
            <button onClick={handlePreviousImage} className={styles.arrowButton}>
              &lt;
            </button>
            <button onClick={handleNextImage} className={styles.arrowButton}>
              &gt;
            </button>
          </div>
        )}

        <div className={styles.dotsContainer}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentImageIndex ? styles.activeDot : ""
              }`}
            ></span>
          ))}
        </div>

        <Link to={`/rooms/${placeId}`} className={styles.cardLink}>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardHost}>{host}</p>
            <p className={styles.cardPrice}>{price}</p>
          </div>
        </Link>
      </div>

      {/* Render Overlay and SharePopup */}
      {modalisVisible && (
        <>
          <div className={styles.overlay} onClick={closeModal}></div>
          <SharePopup onClick={closeModal} />
        </>
      )}
    </>
  );
};

export default ProductCard;