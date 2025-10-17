import React from 'react';
import './Careers.css';

const handleButtonClick = () => {
  alert('Coming Soon! This feature will be available soon.');
};

const Careers = () => {
  const careerAreas = [
    {
      title: 'Software Engineering',
      description: 'Build cutting-edge applications and systems that drive digital transformation for our clients.',
      explore: 'EXPLORE'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect digital assets and implement robust security strategies across enterprise environments.',
      explore: 'EXPLORE'
    },
    {
      title: 'Data Science & Analytics',
      description: 'Transform data into actionable insights using AI, machine learning, and advanced analytics.',
      explore: 'EXPLORE'
    },
    {
      title: 'Product Management',
      description: 'Lead product development from concept to launch, driving innovation and user experience.',
      explore: 'EXPLORE'
    },
    {
      title: 'DevOps & Infrastructure',
      description: 'Design and maintain scalable cloud infrastructure and deployment pipelines.',
      explore: 'EXPLORE'
    },
    {
      title: 'Business Analysis',
      description: 'Bridge the gap between business needs and technical solutions through strategic analysis.',
      explore: 'EXPLORE'
    },
    {
      title: 'Quality Assurance',
      description: 'Ensure software quality and reliability through comprehensive testing and automation.',
      explore: 'EXPLORE'
    },
    {
      title: 'Project Management',
      description: 'Lead complex technology projects and ensure successful delivery within scope and budget.',
      explore: 'EXPLORE'
    }
  ];

  const careerStories = [
    {
      title: 'From Startup to Enterprise',
      description: 'How I transitioned from building MVPs to architecting enterprise-scale solutions.',
      author: 'Sarah Chen, Senior Software Engineer'
    },
    {
      title: 'Securing the Future',
      description: 'Leading cybersecurity initiatives that protect millions of users worldwide.',
      author: 'Michael Rodriguez, Cybersecurity Lead'
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Using AI and analytics to transform how organizations make critical business decisions.',
      author: 'Dr. Emily Watson, Data Science Director'
    }
  ];

  return (
    <div className="careers-page">
      <div className="careers-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Be more <span className="highlight">inspired</span></h1>
              <h1>At Goldstein Systems</h1>
            </div>
            <div className="hero-text">
              <h1>Be more <span className="highlight">confident</span></h1>
              <h1>At Goldstein Systems</h1>
            </div>
            <div className="hero-text">
              <h1>Be more <span className="highlight">motivated</span></h1>
              <h1>At Goldstein Systems</h1>
            </div>
            <div className="hero-text">
              <h1>Be more <span className="highlight">you</span></h1>
              <h1>At Goldstein Systems</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="careers-main">
        <div className="container">
          <div className="careers-intro">
            <h2>Careers <span className="highlight">at</span> Goldstein Systems</h2>
            <p>
              What are you striving towards? Whether you plan to work in cybersecurity, software development, 
              data science, or something else, we'll bet there's a way you can do it here. Apply your skills 
              alongside uniquely talented people in an environment where you'll be supported along the way.
            </p>
          </div>

          <div className="career-areas">
            {careerAreas.map((area, index) => (
              <div key={index} className="career-card">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <button className="explore-button" onClick={handleButtonClick}>{area.explore}</button>
              </div>
            ))}
          </div>

          <div className="career-stories-section">
            <div className="section-header">
              <h2>CAREER STORIES</h2>
              <h3>Build the career you never imagined</h3>
              <p>
                No two paths at Goldstein Systems are the same, and many of us find ourselves in roles 
                far from where we started. The opportunity is endless.
              </p>
              <button className="explore-stories-button" onClick={handleButtonClick}>Explore Career Stories</button>
            </div>

            <div className="career-stories">
              {careerStories.map((story, index) => (
                <div key={index} className="story-card">
                  <h4>{story.title}</h4>
                  <p>{story.description}</p>
                  <span className="author">{story.author}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="people-section">
            <div className="people-content">
              <div className="people-text">
                <h2>Our people</h2>
                <h3>Meet your future peers</h3>
                <button className="people-button" onClick={handleButtonClick}>Our people</button>
              </div>
              <div className="people-text">
                <h2>Students</h2>
                <h3>Get your start</h3>
                <button className="people-button" onClick={handleButtonClick}>Students</button>
              </div>
            </div>
          </div>

          <div className="awards-section">
            <div className="awards-content">
              <h2>Awards & recognition</h2>
              <h3>Outside experts agree - people love it here</h3>
              <p>
                There are many reasons we're frequently ranked a top place to work, and a top place to work 
                for women, the LGBTQ community, and underrepresented groups. The main reason is the people.
              </p>
            </div>
          </div>

          <div className="job-alert">
            <div className="alert-content">
              <div className="alert-icon">⚠</div>
              <div className="alert-text">
                <h4>Job Scam Alert</h4>
                <p>
                  Goldstein Systems is aware of fraudulent job offers made through fake websites, social media, 
                  and spoofed emails. These scams are not affiliated with Goldstein Systems. Our hiring process 
                  happens only through this website. We never ask for personal or financial information outside 
                  of our official platform.
                </p>
              </div>
            </div>
          </div>

          <div className="newsletter-section">
            <div className="newsletter-content">
              <h3>Want to stay in touch?</h3>
              <p>Join our monthly newsletter to learn about Goldstein Systems and hear about upcoming events.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button className="subscribe-button" onClick={handleButtonClick}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
