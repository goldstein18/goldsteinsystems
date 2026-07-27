import React, { useEffect, useMemo, useState } from 'react';
import './Insights.css';
import { getSanityClient, getSanityImageUrlBuilder } from '../lib/sanity';

const Insights = () => {
  const fallbackInsights = [
    {
      _id: 'fallback-1',
      category: 'Strategy',
      title: 'The Future of Work: Building Resilient Organizations',
      excerpt: 'How companies can adapt to changing workforce dynamics and build more resilient organizations.',
      publishedAt: '2024-12-01',
      slug: '#',
      featured: true
    },
    {
      _id: 'fallback-2',
      category: 'Digital',
      title: 'AI Transformation: From Hype to Reality',
      excerpt: 'Practical strategies for implementing AI solutions that deliver real business value.',
      publishedAt: '2024-11-01',
      slug: '#',
      featured: false
    },
    {
      _id: 'fallback-3',
      category: 'Sustainability',
      title: 'Sustainable Business Models',
      excerpt: 'How companies can create value while addressing environmental and social challenges.',
      publishedAt: '2024-10-01',
      slug: '#',
      featured: false
    }
  ];
  const [insights, setInsights] = useState(fallbackInsights);
  const [isLoading, setIsLoading] = useState(true);

  const imageBuilder = useMemo(() => {
    const client = getSanityClient();
    return client ? getSanityImageUrlBuilder(client) : null;
  }, []);

  useEffect(() => {
    const fetchInsights = async () => {
      const client = getSanityClient();
      if (!client) {
        setIsLoading(false);
        return;
      }

      try {
        const posts = await client.fetch(`
          *[_type == "insight" && defined(slug.current)] | order(publishedAt desc) {
            _id,
            title,
            "slug": slug.current,
            excerpt,
            publishedAt,
            featured,
            "category": category->title,
            coverImage
          }
        `);

        if (posts?.length) {
          setInsights(posts);
        }
      } catch (error) {
        console.error('Failed to fetch insights from Sanity:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInsights();
  }, []);

  const formatDate = (dateValue) => {
    if (!dateValue) {
      return 'Draft';
    }
    return new Date(dateValue).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section id="insights" className="insights">
      <div className="container">
        <div className="section-header">
          <h2>Latest Insights</h2>
          <p>Stay ahead with our latest research and perspectives</p>
        </div>
        {isLoading ? <p className="insights-loading">Loading insights...</p> : null}
        <div className="insights-grid">
          {insights.map((insight) => (
            <div key={insight._id} className={`insight-card ${insight.featured ? 'featured' : ''}`}>
              <div className="insight-image">
                {insight.coverImage && imageBuilder ? (
                  <img
                    src={imageBuilder.image(insight.coverImage).width(900).height(500).fit('crop').url()}
                    alt={insight.title}
                    className="insight-cover-image"
                  />
                ) : (
                  <div className="placeholder-image"></div>
                )}
              </div>
              <div className="insight-content">
                <span className="insight-category">{insight.category || 'General'}</span>
                <h3>{insight.title}</h3>
                <p>{insight.excerpt || 'Read this insight from our team.'}</p>
                <div className="insight-meta">
                  <span className="date">{formatDate(insight.publishedAt)}</span>
                  <a href={insight.slug ? `/insights/${insight.slug}` : '#'} className="read-more">
                    Read More
                  </a>
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
