import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext';
import { AuthContextProvider } from './AuthContext';
import Header from './Header/Header';
import Cart from './Cart/Cart';
import Product from './Product';
import AboutUs from './AboutUs';
import Home from './Home';
import Heading from './Header/Heading';
import ProductDetail from './ProductDetails';
import ContactUs from './ContactUs';
import Login from './Login';

const App = () => {
  return (
    <AuthContextProvider>
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
                  {/* Add more products as needed */}
                </div>} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/home" element={<Home />} />
                <Route path="/product/:title" element={<ProductDetail />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
            <Cart />
          </div>
        </Router>
      </CartProvider>
    </AuthContextProvider>
  );
};

export default App;