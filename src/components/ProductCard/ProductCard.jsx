import { useEffect, useState } from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ 
  images = [], 
  children, 
  onClick, 
  modalIsVisible, 
  setModalIsVisible,
  linkTo
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Function to open the share modal
  const openModal = () => {
    setModalIsVisible(true);
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
        <Link to={linkTo} className={styles.linkWrapper}>
          <>
            <img
              src={images[currentImageIndex]}
              alt=""
              className={styles.productImage}
            />
    
            <div className={styles.cardContent}>
              {children} {/* This will render the title, host, and price */}
            </div>
          </>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
