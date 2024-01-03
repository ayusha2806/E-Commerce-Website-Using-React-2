// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Header from './Header/Header';
import Cart from './Cart/Cart';
import Product from './Product';
import AboutUs from './AboutUs';
import Home from './Home';
import Heading from './Header/Heading';


const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />
          <span className="text-center mt-4 mb-4"><Heading /></span>
          <div className="container">
            <Routes>
              <Route path="/" element={<div className="row">
                <Product title="Colors" price={100} imageUrl="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" />
                <Product title="Black and white Colors" price={50} imageUrl="https://prasadyash2411.github.io/ecom-website/img/Album%202.png" />
                <Product title="Yellow and Black Colors" price={70} imageUrl="https://prasadyash2411.github.io/ecom-website/img/Album%203.png" />
              </div>} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Cart />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
