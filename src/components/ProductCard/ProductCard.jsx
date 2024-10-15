import "./ProductCard.css";
import SharePopup from "../SharePopup/SharePopup"; // Correct import for SharePopup;
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ images, title, host, price }) => {
  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // State to control the visibility of the modal
  const [modalisVisible, setModalisVisible] = useState(false);

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


const ProductCard = ({ place }) => {

  const placeId = place.id ? place.id : `dummy-${Date.now()}`;
  };

  console.log(place)
  return (
    <>
      <div className="product-card">
        {/* Button to trigger the share popup */}
        <button onClick={openModal} className="share-button">
          <span className="share-icon">

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
  
        {/* Product image carousel */}
        <img
          src={images[currentImageIndex]}
          alt={title}
          className="product-image"
        />

        {/* Arrows to navigate the images */}
        <div>
          <button onClick={handlePreviousImage} className="arrow-button">
            &lt;
          </button>
          <button onClick={handleNextImage} className="arrow-button">
            &gt;
          </button>
        </div>

    <Link to={`/rooms/${placeId}`}>
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">{title}</h2>
          </div>
        </div>
        <p className="card-host">{host}</p>
        <p className="card-price">{price}</p>
      </div>
          </Link>
          
      {modalisVisible && <SharePopup onClick={closeModal} />}
    </>
  );
};

export default ProductCard;