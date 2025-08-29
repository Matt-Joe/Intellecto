import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/logo-light.png';
import '../../styles/LandingPage.css'; // already loaded globally, but safe here

const Navbar = () => {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left" onClick={() => navigate('/')}>
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-title">Intellecto</span>
      </div>

      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/faq">FAQ</Link>
      </div>

      <div className="navbar-right">
        <button className="nav-auth-button" onClick={() => navigate('/auth')}>
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
