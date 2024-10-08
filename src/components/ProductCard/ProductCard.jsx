import React from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom"

const ProductCard = ({ image, title, host, price, place }) => {
  const handleShare = () => {
    alert(`Share this experience ${title}`);
  };

  return (
    <div className={styles.productCard}>
      <button onClick={handleShare} className={styles.shareButton}>
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


      <Link to={`/rooms/${place.id}`}>
        <img src={image} alt={title} className={styles.productImage} />

        <div className={styles.cardContent}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>{title}</h2>
          </div>
        </div>
        <p className={styles.cardHost}>{host}</p>
        <p className={styles.cardPrice}>{price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
