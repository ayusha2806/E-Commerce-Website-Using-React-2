// Cart.js
import React from 'react';
import { useCart } from '../CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems, showCart, toggleCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className={`cart ${showCart ? 'open' : 'closed'}`}>
      {showCart && (
        <div className="position-absolute top-0 end-0 p-3 bg-light border rounded">
          <h2>Your Cart</h2>
          {cartItems.length === 0 ? (
            <p className="p-3">Your cart is empty.</p>
          ) : (
            <>
              <div className="row cart-item header bg-light p-2">
                <div className="col">Item</div>
                <div className="col">Price</div>
                <div className="col">Quantity</div>
                <div className="col">Total</div>
              </div>
              {cartItems.map((item, index) => (
                <CartItem key={index} {...item} />
              ))}
              <div className="row cart-item total mt-3 p-2 bg-light">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col font-weight-bold">Total:</div>
                <div className="col font-weight-bold">${calculateTotal()}</div>
              </div>
            </>
          )}
          <button type="button" className="btn-close position-absolute top-0 end-0 m-3" aria-label="Close" onClick={toggleCart}></button>
        </div>
      )}
    </div>
  );
};

export default Cart;
