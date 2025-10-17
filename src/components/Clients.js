import React from 'react';
import './Clients.css';

const Clients = () => {
  const clients = [
    {
      name: 'Aeromexico',
      logo: '/clients/Aeromexico.png',
      alt: 'Aeromexico Logo'
    },
    {
      name: 'Google',
      logo: '/clients/google.png',
      alt: 'Google Logo'
    },
    {
      name: 'United Airlines',
      logo: '/clients/unitedairlines.png',
      alt: 'United Airlines Logo'
    }
  ];

  return (
    <section className="clients-section">
      <div className="container">
        <div className="clients-header">
          <h3>Trusted by Leading Companies</h3>
          <p>We've had the privilege of working with industry leaders</p>
        </div>
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-logo">
              <img 
                src={client.logo} 
                alt={client.alt}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="client-fallback" style={{display: 'none'}}>
                <span>{client.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
