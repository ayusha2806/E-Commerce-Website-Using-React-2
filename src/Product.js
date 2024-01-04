// Product.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Product = ({ title, price, imageUrl }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      title,
      price,
      imageUrl,
      quantity: 1,
    });
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <Link to={`/product/${encodeURIComponent(title)}`} className="text-decoration-none text-dark">
          <img src={imageUrl} alt={title} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">₹{price}</p>
          </div>
        </Link>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
