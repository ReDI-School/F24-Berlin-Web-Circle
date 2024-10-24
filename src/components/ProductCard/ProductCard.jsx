import { useEffect, useState } from "react";
import styles from "./ProductCard.module.css";
import SharePopup from "../SharePopup/SharePopup";

const ProductCard = ({ images = [], children, onClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Function to open the share modal
  const openModal = () => {
    setModalIsVisible(true);
  };

  // Function to close the share modal
  const closeModal = () => {
    setModalIsVisible(false);
  };

  // Disable scrolling when the modal is visible
  useEffect(() => {
    if (modalIsVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up function to remove class if component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [modalIsVisible]);

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

  return (
    <>
      <div
        className={styles.productCard}
        onClick={onClick}
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
          alt=""
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

        <div className={styles.cardContent}>
          {children} {/* This will render the title, host, and price */}
        </div>
      </div>

      {/* Render Overlay and SharePopup */}
      {modalIsVisible && (
        <>
          <div className={styles.overlay} onClick={closeModal}></div>
          <SharePopup onClick={closeModal} />
        </>
      )}
    </>
  );
};

export default ProductCard;