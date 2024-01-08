// Header.js
import React, { useState, useEffect } from "react";
import { useCart } from "../CartContext";
import { useAuth } from "../AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toggleCart, cartItems } = useCart();
  const { token } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleStoreClick = () => {
    if (!isLoggedIn) {
      alert("Please login first!");
      navigate("/login");
    } else {
      navigate("/");
    }
  };

  const isStorePage = location.pathname === "/"; // Adjust the path as per your store page

  return (
    <div className="container-fluid bg-dark text-light py-3">
      <div className="row d-flex align-items-center justify-content-between">
        <div className="col-auto">
          <Link
            to={isLoggedIn ? "/" : "/login"}
            className="text-light text-decoration-none"
          >
            Store
          </Link>
        </div>
        <div className="col-auto">
          <Link to="/login" className="text-light text-decoration-none">
            Login
          </Link>
        </div>
        <div className="col-auto">
          <Link to="/home" className="text-light text-decoration-none">
            Home
          </Link>
        </div>
        <div className="col-auto">
          <Link to="/about" className="text-light text-decoration-none">
            About
          </Link>
        </div>
        <div className="col-auto">
          <Link to="/contactus" className="text-light text-decoration-none">
            Contact Us
          </Link>
        </div>
        <div className="col-auto">
          <button className="btn btn-outline-light" onClick={toggleCart}>
            CART{" "}
            {totalQuantity > 0 && (
              <span className="badge bg-danger">{totalQuantity}</span>
            )}
          </button>
        </div>
        {isStorePage && (
          <div className="col-auto">
            <button
              className="btn btn-outline-light"
              onClick={handleStoreClick}
            >
              Store
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
