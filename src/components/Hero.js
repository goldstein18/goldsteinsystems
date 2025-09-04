import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="video-background">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          onError={(e) => console.error('Video error:', e)}
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play')}
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Building the future, today</h1>
          <p className="hero-subtitle">
            Goldstein Systems is a leading cybersecurity and software development firm that helps organizations secure their digital assets and build innovative solutions for tomorrow's challenges.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">Explore Our Services</a>
            <a href="#insights" className="btn btn-secondary">Read Our Insights</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-visual">
            <div className="floating-card card-1">
              <i className="fas fa-shield-alt"></i>
              <h4>Cybersecurity</h4>
            </div>
            <div className="floating-card card-2">
              <i className="fas fa-code"></i>
              <h4>Development</h4>
            </div>
            <div className="floating-card card-3">
              <i className="fas fa-rocket"></i>
              <h4>Innovation</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
