// Index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './AuthContext'; // Import AuthContextProvider
import { CartProvider } from './CartContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider> {/* Wrap App with AuthContextProvider */}
      <CartProvider>
        <App />
      </CartProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
