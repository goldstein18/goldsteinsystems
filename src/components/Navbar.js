import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Navbar.css';

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(!isHomePage);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const industriesLeft = [
    'Aerospace and Defense',
    'Automotive',
    'Banking',
    'Capital Markets',
    'Chemicals',
    'Communications and Media',
    'Consumer Goods and Services',
    'Health',
    'High Tech'
  ];

  const industriesRight = [
    'Industrial',
    'Insurance',
    'Public Service',
    'Private Equity',
    'Retail',
    'Software and Platforms',
    'Travel'
  ];

  const capabilitiesLeft = [
    'Cloud',
    'Customer Service',
    'Cybersecurity',
    'Data and Artificial Intelligence',
    'Digital Engineering and Manufacturing',
    'Ecosystem Partners',
    'Emerging Technology',
    'Finance and Risk Management',
    'Infrastructure and Capital Projects'
  ];

  const capabilitiesRight = [
    'Metaverse',
    'Strategy',
    'Supply Chain',
    'Sustainability',
    'Technology Transformation'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (isHomePage) {
        setIsScrolled(scrollTop > 50);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout, isHomePage]);

  const handleDropdownMouseEnter = (menuName) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setOpenDropdown(menuName);
  };

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 120);
    setHoverTimeout(timeout);
  };

  const handleComingSoon = (e) => {
    e.preventDefault();
    alert('Coming Soon');
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
        <div className="nav-left">
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <a href="/" className="nav-logo">
            <img src="/logo.png" alt="Goldstein Systems Logo" className="logo-image" />
          </a>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li 
            className="nav-item dropdown"
            onMouseEnter={() => handleDropdownMouseEnter('industries')}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <a href="#industries" className="nav-link">
              Industries
              <span className={`triangle-icon ${openDropdown === 'industries' ? 'open' : ''}`}></span>
            </a>
            {openDropdown === 'industries' && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <h4 className="dropdown-title">Industries</h4>
                  <div className="dropdown-columns">
                    <div className="dropdown-column">
                      <ul>
                        {industriesLeft.map((industry) => (
                          <li key={industry}>{industry}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="dropdown-column">
                      <ul>
                        {industriesRight.map((industry) => (
                          <li key={industry}>{industry}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li
            className="nav-item dropdown"
            onMouseEnter={() => handleDropdownMouseEnter('capabilities')}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <a href="#services" className="nav-link">
              Capabilities
              <span className={`triangle-icon ${openDropdown === 'capabilities' ? 'open' : ''}`}></span>
            </a>
            {openDropdown === 'capabilities' && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <h4 className="dropdown-title">Capabilities</h4>
                  <div className="dropdown-columns">
                    <div className="dropdown-column">
                      <ul>
                        {capabilitiesLeft.map((capability) => (
                          <li key={capability}>{capability}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="dropdown-column">
                      <ul>
                        {capabilitiesRight.map((capability) => (
                          <li key={capability}>{capability}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li className="nav-item">
            <a href="#digital" className="nav-link" onClick={handleComingSoon}>
              Digital
            </a>
          </li>
          <li className="nav-item">
            <a href="#insights" className="nav-link" onClick={handleComingSoon}>
              Insights
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/careers" className="nav-link">
              Careers
            </a>
          </li>
        </ul>
        <div className="nav-right">
          <a href="https://wa.me/524421143497" target="_blank" rel="noopener noreferrer" className="contact-link">Contact</a>
        </div>
      </div>
    </nav>
    <Sidebar isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Navbar;
