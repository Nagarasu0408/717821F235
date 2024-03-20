import React from 'react';

const ProductDetails = ({ productName, companyName, imageSrc, price }) => {
  return (
    <div>
      <h1>Product Details</h1>
      <div>
        <img src={imageSrc} alt={productName} />
        <h2>{productName}</h2>
        <p>Company: {companyName}</p>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;