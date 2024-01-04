// Header.js
import React from "react";
import { useCart } from '../CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Header = () => {
  const { toggleCart, cartItems } = useCart();

  // Calculate total quantity in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="container-fluid bg-dark text-light py-3">
      <div className="row d-flex align-items-center justify-content-between">
        <div className="col-auto">
          <Link to='/' className="text-light text-decoration-none">Store</Link>
        </div>
        <div className="col-auto">
          <Link to='/home' className="text-light text-decoration-none">Home</Link>
        </div>
        <div className="col-auto">
          <Link to='/about' className="text-light text-decoration-none">About</Link>
        </div>
        <div className="col-auto">
          <Link to='/contactus' className="text-light text-decoration-none">Contact Us</Link>
        </div>
        <div className="col-auto">
          <button className="btn btn-outline-light" onClick={toggleCart}>
            CART {totalQuantity > 0 && <span className="badge bg-danger">{totalQuantity}</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
