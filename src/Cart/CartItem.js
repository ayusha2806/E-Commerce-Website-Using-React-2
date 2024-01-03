// CartItem.js
import React from 'react';

const CartItem = ({ title, price, quantity }) => {
  return (
    <div className="row cart-item">
      <div className="col">{title}</div>
      <div className="col">${price}</div>
      <div className="col">{quantity}</div>
      <div className="col">${price * quantity}</div>
    </div>
  );
};

export default CartItem;