// CartItem.js
import React from 'react';

const CartItem = ({ title, price, quantity }) => {
  return (
    <div className="row cart-item p-2">
      <div className="col">{title}</div>
      <div className="col">${price}</div>
      <div className="col">{quantity}</div>
      <div className="col">
        <button className="btn btn-danger">REMOVE</button>
      </div>
    </div>
  );
};

export default CartItem;
