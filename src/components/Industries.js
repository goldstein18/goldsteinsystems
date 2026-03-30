import React from 'react';
import './Industries.css';

const Industries = () => {
  const industries = [
    {
      icon: 'fas fa-fighter-jet',
      title: 'Aerospace and Defense',
      description: 'Strengthen mission-critical operations and accelerate secure innovation.'
    },
    {
      icon: 'fas fa-car',
      title: 'Automotive',
      description: 'Advance mobility strategies, connected services, and operational resilience.'
    },
    {
      icon: 'fas fa-university',
      title: 'Banking',
      description: 'Modernize core platforms and improve customer trust in digital channels.'
    },
    {
      icon: 'fas fa-university',
      title: 'Capital Markets',
      description: 'Drive performance across trading, risk, and regulatory transformation.'
    },
    {
      icon: 'fas fa-flask',
      title: 'Chemicals',
      description: 'Optimize supply networks and unlock value through digital operations.'
    },
    {
      icon: 'fas fa-broadcast-tower',
      title: 'Communications and Media',
      description: 'Scale growth through new business models and customer-centric experiences.'
    },
    {
      icon: 'fas fa-shopping-bag',
      title: 'Consumer Goods and Services',
      description: 'Build stronger brands and faster go-to-market capabilities.'
    },
    {
      icon: 'fas fa-heartbeat',
      title: 'Health',
      description: 'Improve care outcomes with efficient, data-driven operating models.'
    },
    {
      icon: 'fas fa-microchip',
      title: 'High Tech',
      description: 'Accelerate product innovation and scale digital-first growth.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Industrial',
      description: 'Boost productivity and transform operations across complex ecosystems.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Insurance',
      description: 'Improve underwriting, claims, and customer engagement through technology.'
    },
    {
      icon: 'fas fa-landmark',
      title: 'Public Service',
      description: 'Deliver better citizen outcomes with modern, resilient public systems.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Private Equity',
      description: 'Create value across the deal lifecycle with focused transformation.'
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'Retail',
      description: 'Create seamless omnichannel journeys and profitable growth.'
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Software and Platforms',
      description: 'Scale product, pricing, and platform strategies for durable growth.'
    },
    {
      icon: 'fas fa-plane',
      title: 'Travel',
      description: 'Enhance traveler experiences while improving operational performance.'
    }
  ];

  return (
    <section id="industries" className="industries">
      <div className="container">
        <div className="section-header">
          <h2>Industries We Serve</h2>
          <p>Deep expertise across diverse sectors</p>
        </div>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon">
                <i className={industry.icon}></i>
              </div>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
