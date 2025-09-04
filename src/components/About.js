import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { number: '65+', label: 'Cities' },
    { number: '40+', label: 'Countries' },
    { number: '10,000+', label: 'Professionals' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Bain & Company</h2>
            <p>
              Bain & Company is a global consultancy that helps the world's most ambitious change makers define the future.
            </p>
            <p>
              Across 65 cities in 40 countries, we work alongside our clients as one team with a shared ambition to achieve extraordinary results, outperform the competition, and redefine industries.
            </p>
            <div className="stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <div className="about-visual">
              <div className="world-map">
                <div className="map-dot dot-1"></div>
                <div className="map-dot dot-2"></div>
                <div className="map-dot dot-3"></div>
                <div className="map-dot dot-4"></div>
                <div className="map-dot dot-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
