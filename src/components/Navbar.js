import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-left">
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className="nav-logo">
            <img src="/logo.png" alt="Goldstein Systems Logo" className="logo-image" />
          </div>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#industries" className="nav-link">
              Industries
              <div className="triangle-icon"></div>
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              Consulting Services
              <div className="triangle-icon"></div>
            </a>
          </li>
          <li className="nav-item">
            <a href="#digital" className="nav-link">
              Digital
              <div className="triangle-icon"></div>
            </a>
          </li>
          <li className="nav-item">
            <a href="#insights" className="nav-link">
              Insights
              <div className="triangle-icon"></div>
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
              <div className="triangle-icon"></div>
            </a>
          </li>
          <li className="nav-item">
            <a href="#careers" className="nav-link">
              Careers
              <div className="triangle-icon"></div>
            </a>
          </li>
        </ul>
        <div className="nav-right">
          <a href="#contact" className="contact-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
