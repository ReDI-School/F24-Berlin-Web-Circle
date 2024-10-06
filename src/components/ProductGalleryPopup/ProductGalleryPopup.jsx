import React from "react";
import styles from "./ProductGalleryPopup.module.css";
import LeftArrowIcon from "../../icons/LeftArrowIcon";
import ShareIcon from "../../icons/ShareIcon";
import HeartIcon from "../../icons/HeartIcon";

const ProductGalleryPopup = ({
  showPopupHandler,
  livingArea,
  kitchen,
  bathroom,
  exterior,
  Bedroom,
}) => {
  const galleryImgs = [livingArea, kitchen, bathroom, exterior, Bedroom];

  function handleShare() {
    alert("Share this experience");
  }
  function handleSave() {
    alert("Save this experience");
  }

  return (
    <div className={styles.popupMainCntainer}>
      <div className={styles.header}>
        <LeftArrowIcon showPopupHandler={showPopupHandler} />
        <div className={styles.saveShareIconContainer}>
          <div
            className={styles.shareContainer}
            onClick={() => {
              alert("At the moment, this button is not linked!");
            }}
          >
            <ShareIcon height={30} width={30} fill="black" />
            <span className={styles.shareSaveText}>Share</span>
          </div>
          <div
            className={styles.SaveContainer}
            onClick={() => {
              alert("At the moment, this button is not linked!");
            }}
          >
            <HeartIcon height={20} width={20} fill="black" />
            <span className={styles.shareSaveText}>Save</span>
          </div>
        </div>
      </div>

      <div className={styles.subheaderContainer}>
        <div className={styles.smallTopImgsContainer}>
          <span className={styles.photoTourText}>Photo tour</span>
          <div className={styles.smallTopImgsAllContainers}>
            {galleryImgs.map((el) => (
              <a
                href={`#${el.name}`}
                key={el.id}
                className={styles.smallTopImgsMain}
              >
                <img
                  src={el.image}
                  alt={el.name}
                  className={styles.smallTopImgs}
                />
                <span className={styles.smallTopImgsName}>{el.name}</span>
              </a>
            ))}
          </div>

          {galleryImgs.map((el) => (
            <a
              id={el.name}
              key={el.id}
              className={styles.bottomImagesContainer}
            >
              <span className={styles.photoTourText}>{el.name}</span>
              <img
                src={el.image}
                alt={el.name}
                className={styles.bottomImages}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGalleryPopup;
