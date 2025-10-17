import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Goldstein Systems is built on a foundation of unity—a cohesive global team bound by shared values and unwavering commitment. We are dedicated to both pillars of our purpose: cultivating exceptional talent from diverse backgrounds and empowering our clients to drive transformative, enduring change.
            </p>
            <p>
              From executive leadership to operational teams, we collaborate closely with clients to foster innovation that stands the test of time, unlock sustainable performance improvements, and build resilient organizations prepared for today's challenges and tomorrow's opportunities.
            </p>
          </div>
          <div className="about-image">
            <img src="/image.jpg" alt="Goldstein Systems" className="about-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
