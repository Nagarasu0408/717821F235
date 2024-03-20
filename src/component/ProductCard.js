import React from 'react';

const ProductCard = ({ productName, companyName, imageSrc, price ,dummy,rating}) => {
  return (
      <div className="product-card">
        <img src={imageSrc} alt={productName} className="product-image" />
        <div className="product-details">
          <h2 className="product-name">{productName}</h2>
          <p>{dummy}</p>
          <p className="company-name">{companyName}</p>
          <p className="price">${price}</p>
          <p>{rating}⭐</p>
        </div>
      </div>
  );
};

export default ProductCard;