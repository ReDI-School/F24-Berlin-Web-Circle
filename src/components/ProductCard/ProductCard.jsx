
import './ProductCard.css';
import { useState } from 'react';
import SharePopup from '../searchBar/SharePopup/SharePopup'; // Import the SharePopup component

const ProductCard = ({ image, title, host, price }) => {
  
  const [modalisVisible, setModalisVisible] = useState(false);

  const openModal = () => {
setModalisVisible(true)
  }

  const closeModal = () => {
    setModalisVisible(false)
  }

  return (
    <>
    <div className="product-card">

      <button onClick={openModal} className="share-button">
      <span className="share-icon"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
        <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" fill="none"></path></svg>
        </span>
      </button>
      <img src={image} alt={title} className="product-image" />

      <div className="card-content">
        <div className="card-header">
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
      <p className="card-host">{host}</p>
      <p className="card-price">{price}</p>
      
      </div>
       {modalisVisible && <SharePopup onClick={closeModal} />} 
</>
  );
};

export default ProductCard;
