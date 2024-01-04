// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const findProductIndex = (title) => {
    return cartItems.findIndex((item) => item.title === title);
  };

  const addToCart = (item) => {
    const productIndex = findProductIndex(item.title);

    if (productIndex !== -1) {
      // Product already exists in the cart, update quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[productIndex].quantity += item.quantity;
      setCartItems(updatedCartItems);
    } else {
      // Product is not in the cart, add a new entry
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  const removeItem = (title) => {
    const productIndex = findProductIndex(title);

    if (productIndex !== -1) {
      // Product found in the cart, remove it
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(productIndex, 1);
      setCartItems(updatedCartItems);
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
