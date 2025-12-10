import React from 'react';
import './Industries.css';

const Industries = () => {
  const industries = [
    {
      icon: 'fas fa-landmark',
      title: 'Government',
      description: 'Modernize public services and enhance citizen engagement.'
    },
    {
      icon: 'fas fa-industry',
      title: 'Manufacturing',
      description: 'Drive operational excellence and digital transformation in manufacturing.'
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'Retail',
      description: 'Navigate digital disruption and create seamless customer experiences.'
    },
    {
      icon: 'fas fa-university',
      title: 'Financial Services',
      description: 'Transform business models and enhance customer engagement.'
    },
    {
      icon: 'fas fa-heartbeat',
      title: 'Healthcare',
      description: 'Improve patient outcomes and operational efficiency.'
    },
    {
      icon: 'fas fa-car',
      title: 'Automotive',
      description: 'Navigate the future of mobility and transportation.'
    },
    {
      icon: 'fas fa-leaf',
      title: 'Energy',
      description: 'Lead the transition to sustainable energy solutions.'
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
