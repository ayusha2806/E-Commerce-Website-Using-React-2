// CartItem.js
import React from 'react';
import { useCart } from '../CartContext';

const CartItem = ({ title, price, quantity }) => {
  const { addToCart, removeItem } = useCart();

  const handleIncrement = () => {
    addToCart({
      title,
      price,
      quantity: 1,
    });
  };

  const handleDecrement = () => {
    // You may want to add additional logic to handle decrementing to zero
    // For simplicity, I'm assuming the minimum quantity is 1
    addToCart({
      title,
      price,
      quantity: -1,
    });
  };

  return (
    <div className="row cart-item p-2">
      <div className="col">{title}</div>
      <div className="col">${price}</div>
      <div className="col">
        <button className="btn btn-outline-danger btn-sm" onClick={handleDecrement}>
          -
        </button>{' '}
        {quantity}{' '}
        <button className="btn btn-outline-success btn-sm" onClick={handleIncrement}>
          +
        </button>
      </div>
      <div className="col">
        <button className="btn btn-danger btn-sm" onClick={() => removeItem(title)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;