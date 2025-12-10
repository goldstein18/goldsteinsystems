import React from 'react';
import './Insights.css';

const Insights = () => {
  const insights = [
    {
      category: 'Strategy',
      title: 'The Future of Work: Building Resilient Organizations',
      description: 'How companies can adapt to changing workforce dynamics and build more resilient organizations.',
      date: 'December 2024',
      featured: true
    },
    {
      category: 'Digital',
      title: 'AI Transformation: From Hype to Reality',
      description: 'Practical strategies for implementing AI solutions that deliver real business value.',
      date: 'November 2024',
      featured: false
    },
    {
      category: 'Sustainability',
      title: 'Sustainable Business Models',
      description: 'How companies can create value while addressing environmental and social challenges.',
      date: 'October 2024',
      featured: false
    }
  ];

  return (
    <section id="insights" className="insights">
      <div className="container">
        <div className="section-header">
          <h2>Latest Insights</h2>
          <p>Stay ahead with our latest research and perspectives</p>
        </div>
        <div className="insights-grid">
          {insights.map((insight, index) => (
            <div key={index} className={`insight-card ${insight.featured ? 'featured' : ''}`}>
              <div className="insight-image">
                <div className="placeholder-image"></div>
              </div>
              <div className="insight-content">
                <span className="insight-category">{insight.category}</span>
                <h3>{insight.title}</h3>
                <p>{insight.description}</p>
                <div className="insight-meta">
                  <span className="date">{insight.date}</span>
                  <a href="#" className="read-more">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
