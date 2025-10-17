import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#contact">Contact us</a>
            <a href="#careers">Careers</a>
            <a href="/accessibility">Accessibility</a>
            <a href="/terms">Terms of use</a>
            <a href="/privacy">Privacy</a>
            <a href="/cookies">Cookie Policy</a>
            <a href="#sitemap">Sitemap</a>
            <a href="/login">Log In</a>
          </div>
          <div className="footer-copyright">
            © 2017-2025 Goldstein Systems, LTD
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
