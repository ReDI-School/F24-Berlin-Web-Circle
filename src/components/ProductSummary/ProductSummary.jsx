import React from "react";
import styles from "./ProductSummary.module.css";

const ProductSummary = ({
  accommodation,
  address,
  guests,
  bedrooms,
  beds,
  baths,
  starGrade,
  reviews,
}) => {
  const ProductSummaryInformation = [guests, bedrooms, beds, baths];
  return (
    <div className={styles.productSummaryContainer}>
      <h2 className={styles.address}>
        {accommodation} in {address}
      </h2>
      <div>
        {ProductSummaryInformation.map((el, index) => (
          <div className={styles.information} key={index}>
            <span>
              {el.value} {el.value > 1 ? el.key + "s" : el.key}
            </span>{" "}
            {index < ProductSummaryInformation.length - 1 && (
              <span>&#183; </span>
            )}
          </div>
        ))}
      </div>
      <div className={styles.reviewsContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          height="15"
          width="15"
        >
          <path
            fillRule="evenodd"
            d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
          ></path>
        </svg>
        <span> {starGrade}</span> <span>&#183;</span>{" "}
        <span className={styles.reviews}>
          {reviews} {reviews > 1 ? "reviews " : "review "}
        </span>
      </div>
    </div>
  );
};

export default ProductSummary;
