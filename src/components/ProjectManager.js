import React, { useEffect } from 'react';
import './Booking.css';

const ProjectManager = () => {
  useEffect(() => {
    const scriptId = 'calendly-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'text/javascript';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <header className="booking-header">
        <a href="/" className="booking-logo-link">
          <img src="/logo.png" alt="Goldstein Systems" className="booking-logo" />
        </a>
      </header>
      <main className="booking-page">
        <div className="booking-container">
          <div className="booking-widget-wrap">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/goldsteinsystems/project-manager?hide_gdpr_banner=1&primary_color=c7a256"
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectManager;
