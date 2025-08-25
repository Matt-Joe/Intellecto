// src/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-light.png'; 
import xlogo from '../assets/x.png';
import iglogo from '../assets/ig.png';
import linlogo from '../assets/lin.png';
import '../styles/Layout.css';

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Intellecto Logo" />
        <p>© 2025 Intellecto. All rights reserved.</p>
      </div>

      <div className="footer-links">
        <h2>Useful Links</h2>
        <ul>
          <li><Link to="/" className="footer-link">Home</Link></li>
          <li><Link to="#" className="footer-link">About Us</Link></li>
          <li><Link to="#" className="footer-link">Contact Us</Link></li>
          <li><Link to="#" className="footer-link">FAQ</Link></li>
        </ul>
      </div>

      <div className="footer-connect">
        <h2>Connect with us</h2>
        <ul>
          <li><img src={xlogo} alt="Link to our X"></img></li>
          <li><img src={iglogo} alt="Link to our Instagram"></img></li>
          <li><img src={linlogo} alt="Link to our LinkedIn"></img></li>
        </ul>
      </div>
    </footer>
  );
};

// Layout Component (Wraps pages with Footer only)
const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
