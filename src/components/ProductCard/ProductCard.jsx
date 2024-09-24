import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, host, price }) => {
  const handleShare = () => {
    alert(`Share this experience ${title}`);
  };

  return (
    <div className="product-card">
    
      <button onClick={handleShare} className="share-button">
        
      <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                role="img"
                aria-label="share"
                className="share-icon"
    />
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
  );
};

export default ProductCard;
