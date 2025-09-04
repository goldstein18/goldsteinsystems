import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const handleIndustriesMouseEnter = () => {
    console.log('Mouse entered Industries');
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsIndustriesOpen(true);
  };

  const handleIndustriesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsIndustriesOpen(false);
    }, 100);
    setHoverTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsIndustriesOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsIndustriesOpen(false);
    }, 100);
    setHoverTimeout(timeout);
  };

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
          <li 
            className="nav-item dropdown"
            onMouseEnter={handleIndustriesMouseEnter}
            onMouseLeave={handleIndustriesMouseLeave}
          >
            <a href="#industries" className="nav-link">
              Industries
              <div className="triangle-icon"></div>
            </a>
            {console.log('isIndustriesOpen:', isIndustriesOpen)}
            {isIndustriesOpen && (
              <div 
                className="dropdown-menu"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="dropdown-content">
                  <div className="dropdown-column">
                    <h4>Aerospace & Defense</h4>
                    <h4>Automotive & Mobility</h4>
                    <h4>Aviation</h4>
                    <h4>Construction & Infrastructure</h4>
                    <h4>Consumer Products</h4>
                    <h4>Agribusiness</h4>
                  </div>
                  <div className="dropdown-column">
                    <h4>Financial Services</h4>
                    <ul>
                      <li>Banking</li>
                      <li>Insurance</li>
                      <li>Payments</li>
                      <li>Fintech</li>
                      <li>Digital Assets and Blockchain</li>
                    </ul>
                  </div>
                  <div className="dropdown-column">
                    <h4>Healthcare & Life Sciences</h4>
                    <ul>
                      <li>Pharmaceuticals</li>
                      <li>Medical Technology</li>
                      <li>Healthcare Payers</li>
                      <li>Healthcare Providers and Services</li>
                    </ul>
                    <h4>Machinery & Equipment</h4>
                    <h4>Media & Entertainment</h4>
                  </div>
                  <div className="dropdown-column">
                    <h4>Private Equity</h4>
                    <h4>Real Estate</h4>
                    <h4>Retail</h4>
                    <ul>
                      <li>Grocery</li>
                      <li>Fashion & Luxury</li>
                      <li>Restaurants</li>
                    </ul>
                    <h4>Social Impact</h4>
                    <h4>Technology</h4>
                    <ul>
                      <li>IT Services</li>
                      <li>Software</li>
                    </ul>
                  </div>
                  <div className="dropdown-column">
                    <h4>Transportation</h4>
                    <ul>
                      <li>Freight & Logistics</li>
                      <li>Public Transit</li>
                      <li>Travel & Leisure</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
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
