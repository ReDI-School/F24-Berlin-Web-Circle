import React, { useState } from "react";
import styles from "./ProductGallery.module.css";

const ProductGallery = ({
  bigImage,
  smallTopLeftImage,
  smallTopRightImage,
  smallBottomLeftImage,
  smallBottomRightImage,
}) => {
  const [showPopupProductGallery, setShowPopupProductGallery] = useState(false);
  const showPopupHandler = () => {
    setShowPopupProductGallery((prevState) => !prevState);
  };

  return (
    <div className={styles.productGalleryMain}>
      <div className={styles.bigImgContainer}>
        <img
          onClick={showPopupHandler}
          src={bigImage}
          alt="bigImage"
          className={styles.bigImage}
        />
      </div>
      <div className={styles.smallImgsContainer}>
        <img
          onClick={showPopupHandler}
          src={smallTopLeftImage}
          alt="small top left image"
          className={styles.smallImgLeft}
        />
        <img
          onClick={showPopupHandler}
          src={smallTopRightImage}
          alt="small top right image"
          className={styles.smallImgRightTop}
        />
        <img
          onClick={showPopupHandler}
          src={smallBottomLeftImage}
          alt="small bottom left image"
          className={styles.smallImgLeft}
        />
        <div className={styles.showPhotosBtnContainer}>
          <img
            onClick={showPopupHandler}
            src={smallBottomRightImage}
            alt="small bottom right image"
            className={styles.smallImgRightBottom}
          />
          <div className={styles.showPhotosBtn} onClick={showPopupHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className={styles.showPhotosBtnSvg}
            >
              <path
                fillRule="evenodd"
                d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
              ></path>
            </svg>
            <span>Show all photos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
