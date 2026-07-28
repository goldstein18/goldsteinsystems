import React, { useEffect } from 'react';
import './Booking.css';

const Booking = () => {
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

    document.documentElement.classList.add('booking-no-scroll');
    document.body.classList.add('booking-no-scroll');
    return () => {
      document.documentElement.classList.remove('booking-no-scroll');
      document.body.classList.remove('booking-no-scroll');
    };
  }, []);

  return (
    <div className="booking-shell">
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
              data-url="https://calendly.com/goldsteinsystems/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=c7a256&text_color=0f1d50&background_color=ffffff"
              style={{ minWidth: '320px', height: '100%' }}
            ></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Booking;
