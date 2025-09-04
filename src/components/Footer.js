import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Bain & Company</h3>
            <p>Helping ambitious leaders define the future.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Strategy</a></li>
              <li><a href="#services">Organization</a></li>
              <li><a href="#services">Transformation</a></li>
              <li><a href="#services">Operations</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Industries</h4>
            <ul>
              <li><a href="#industries">Manufacturing</a></li>
              <li><a href="#industries">Retail</a></li>
              <li><a href="#industries">Financial Services</a></li>
              <li><a href="#industries">Healthcare</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@bain.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 131 Dartmouth St, Boston, MA 02116</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Bain & Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
