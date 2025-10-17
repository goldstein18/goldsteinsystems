import React from 'react';
import './Accessibility.css';

const Accessibility = () => {
  return (
    <div className="accessibility-page">
      <div className="accessibility-hero">
        <div className="container">
          <p className="breadcrumb">About Goldstein Systems</p>
          <h1>Accessibility Statement</h1>
        </div>
      </div>

      <div className="accessibility-container">
        <div className="accessibility-content">
          <p className="main-statement">
            Goldstein Systems is committed to digital accessibility, and to conforming to the Web Content Accessibility Guidelines (WCAG) 2.1, Level A and AA and complying with Americans with Disabilities Act (ADA) effective communication requirements.
          </p>

          <p className="main-statement">
            To accomplish this, we have partnered with Level Access to administer our accessibility program and oversee its governance. Their accessibility program evaluates our digital products on an ongoing basis in accordance with best practices and is supported by a diverse team of accessibility professionals, including users of assistive technologies.
          </p>

          <p className="main-statement">
            We want to hear from you if you encounter any accessibility barriers on our digital properties. Please contact us at <a href="mailto:accessibility@goldsteinsystems.com">accessibility@goldsteinsystems.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
