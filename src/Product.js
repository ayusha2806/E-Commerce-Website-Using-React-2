// Product.js
import React from 'react';
import { useCart } from './CartContext';

const Product = ({ title, price, imageUrl }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      title,
      price,
      imageUrl,
      quantity: 1, // Set initial quantity to 1
    });
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="product">
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>₹{price}</p>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;