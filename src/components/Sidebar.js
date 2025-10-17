import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="sidebar-overlay" onClick={onClose}></div>
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img src="/logo.png" alt="Goldstein Systems" className="sidebar-logo-img" />
            <span className="sidebar-company-name">GOLDSTEIN SYSTEMS</span>
          </div>
          <button className="sidebar-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="sidebar-content">
          <nav className="sidebar-nav">
            <ul className="sidebar-menu">
              <li className="sidebar-item">
                <a href="#industries" className="sidebar-link" onClick={onClose}>
                  Industries
                  <i className="fas fa-chevron-right"></i>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#services" className="sidebar-link" onClick={onClose}>
                  Consulting Services
                  <i className="fas fa-chevron-right"></i>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#digital" className="sidebar-link" onClick={(e) => { e.preventDefault(); onClose(); alert('Coming Soon'); }}>
                  Digital
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#insights" className="sidebar-link" onClick={(e) => { e.preventDefault(); onClose(); alert('Coming Soon'); }}>
                  Insights
                  <i className="fas fa-chevron-right"></i>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#about" className="sidebar-link" onClick={onClose}>
                  About
                  <i className="fas fa-chevron-right"></i>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="/careers" className="sidebar-link">
                  Careers
                  <i className="fas fa-chevron-right"></i>
                </a>
              </li>
            </ul>

            <div className="sidebar-divider"></div>

            <ul className="sidebar-menu">
              <li className="sidebar-item">
                <a href="#contact" className="sidebar-link" onClick={onClose}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="sidebar-footer-content">
            <span>© 2017-2025 Goldstein Systems, LTD</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
