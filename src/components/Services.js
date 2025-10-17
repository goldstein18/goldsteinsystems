import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Software Engineering & Product Development',
      description: 'Building scalable, secure, and high-performance digital solutions.',
      link: '#'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Cybersecurity & Risk Management',
      description: 'Protecting digital assets with proactive security strategy and threat mitigation.',
      link: '#'
    },
    {
      icon: 'fas fa-brain',
      title: 'Artificial Intelligence & Data Strategy',
      description: 'Turning data into intelligence with AI-driven insights and automation.',
      link: '#'
    },
    {
      icon: 'fas fa-digital-tachograph',
      title: 'Digital Transformation',
      description: 'Modernizing systems, workflows, and customer experiences to drive growth.',
      link: '#'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Venture & Business Building',
      description: 'From idea to execution, helping enterprises launch new ventures and business models.',
      link: '#'
    },
    {
      icon: 'fas fa-vr-cardboard',
      title: 'Emerging & Immersive Technologies',
      description: 'Exploring the future through Web3, AR/VR, and the Metaverse.',
      link: '#'
    },
    {
      icon: 'fas fa-chess-knight',
      title: 'Technology Strategy & Advisory',
      description: 'Aligning technology investments with strategic business goals.',
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
