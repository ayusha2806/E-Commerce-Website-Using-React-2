// CartContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Local storage se cart restore karne ke liye useEffect ka use kiya gaya hai
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const findProductIndex = (title) => {
    return cartItems.findIndex((item) => item.title === title);
  };

  const addToCart = (item) => {
    const productIndex = findProductIndex(item.title);

    if (productIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[productIndex].quantity += item.quantity;
      setCartItems(updatedCartItems);
      updateLocalStorage(updatedCartItems);
    } else {
      setCartItems((prevItems) => [...prevItems, item]);
      updateLocalStorage([...cartItems, item]);
    }
  };

  const removeItem = (title) => {
    const productIndex = findProductIndex(title);

    if (productIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(productIndex, 1);
      setCartItems(updatedCartItems);
      updateLocalStorage(updatedCartItems);
    }
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem, showCart, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
