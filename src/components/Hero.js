import React from 'react';
import './Hero.css';
import heroMainGold from '../assets/heromaingold.jpg';

const Hero = () => {
  return (
    <section className="hero">
      {/* <div className="video-background">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          onError={(e) => console.error('Video error:', e)}
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play')}
        >
          <source src="https://customer-ayxnluzj1q25r5ea.cloudflarestream.com/b740b953d7f0b6639744cb7e3c0c9927/manifest/video.m3u8" type="application/vnd.apple.mpegurl" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div> */}
      <div className="image-background">
        <img src={heroMainGold} alt="Hero Background" className="hero-image" />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
