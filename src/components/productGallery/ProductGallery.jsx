import React, { useState } from "react";
import "./ProductGallery.css";
import ProductGalleryPopup from "../ProductGalleryPopup/ProductGalleryPopup";

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

  const livingArea = {
    id: 1,
    name: "Living area",
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNDc1NzYxMjc3MDc0NzgxMg%3D%3D/original/f9c21627-6dbb-49b5-9f3f-b57401e8bb1c.jpeg?im_w=1200",
  };
  const kitchen = {
    id: 2,
    name: "Kitchen",
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNDc1NzYxMjc3MDc0NzgxMg%3D%3D/original/78ed3027-a197-4043-9b7e-8fc79a5425fc.jpeg?im_w=480",
  };

  const bathroom = {
    id: 3,
    name: "Full bathroom",
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNDc1NzYxMjc3MDc0NzgxMg%3D%3D/original/2ca9c23e-85db-48f8-bd21-0718c286dcdf.jpeg?im_w=480",
  };

  const exterior = {
    id: 4,
    name: "Exterior",
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNDc1NzYxMjc3MDc0NzgxMg%3D%3D/original/253a0690-2a1e-4c34-ae7f-968b869be4b5.jpeg?im_w=480",
  };

  const Bedroom = {
    id: 5,
    name: "Bedroom area",
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNDc1NzYxMjc3MDc0NzgxMg%3D%3D/original/5ad7780d-76b5-428f-9219-432243a83a03.jpeg?im_w=480",
  };

  return (
    <div className="product-gallery-main">
      <div className="big-img-container">
        <img
          onClick={showPopupHandler}
          src={bigImage}
          alt="bigImage"
          className="big-image"
        />
      </div>
      <div className="small-imgs-container">
        <img
          onClick={showPopupHandler}
          src={smallTopLeftImage}
          alt="small top left image"
          className="small-img-left"
        />
        <img
          onClick={showPopupHandler}
          src={smallTopRightImage}
          alt="small top right image"
          className="small-img-right-top"
        />
        <img
          onClick={showPopupHandler}
          src={smallBottomLeftImage}
          alt="small bottom left image"
          className="small-img-left"
        />
        <div className="show-photos-btn-container">
          <img
            onClick={showPopupHandler}
            src={smallBottomRightImage}
            alt="small bottom right image"
            className="small-img-right-bottom"
          />
          <div className="show-photos-btn" onClick={showPopupHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="show-photos-btn-svg"
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
      {showPopupProductGallery && (
        <ProductGalleryPopup
          showPopupHandler={showPopupHandler}
          livingArea={livingArea}
          kitchen={kitchen}
          bathroom={bathroom}
          exterior={exterior}
          Bedroom={Bedroom}
        />
      )}
    </div>
  );
};

export default ProductGallery;
