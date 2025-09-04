import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-chart-line',
      title: 'Strategy',
      description: 'Develop winning strategies that create sustainable competitive advantage and drive growth.',
      link: '#'
    },
    {
      icon: 'fas fa-users',
      title: 'Organization',
      description: 'Build high-performing organizations that can execute strategy and drive results.',
      link: '#'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Transformation',
      description: 'Lead large-scale change initiatives that deliver breakthrough performance improvements.',
      link: '#'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Operations',
      description: 'Optimize operations to improve efficiency, reduce costs, and enhance customer experience.',
      link: '#'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>We help organizations achieve extraordinary results</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link} className="learn-more">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
