import React, { useState } from 'react';
import './BlogSection.css';

const BlogSection = () => {
  const [showMore, setShowMore] = useState(false);

  const particles = [
    {
      title: "AdSpend—the first AI agent to manage",
      date: "Dec 4, 2024",
      readTime: "5 min read"
    },
    {
      title: "Account Structure 2025: Simplicity",
      date: "Dec 3, 2024",
      readTime: "7 min read"
    },
    {
      title: "When AI Clicks: Search Clicks",
      date: "Dec 1, 2024",
      readTime: "6 min read"
    },
    {
      title: "Don't Complicate 2025, Learn DSA",
      date: "Nov 28, 2024",
      readTime: "8 min read"
    },
    {
      title: "Ad Creative for Earning Clicks",
      date: "Nov 25, 2024",
      readTime: "4 min read"
    },
    {
      title: "AI Answers First: CTR Boost",
      date: "Nov 22, 2024",
      readTime: "9 min read"
    },
    {
      title: "PPC Trends 2025: What to Expect",
      date: "Nov 20, 2024",
      readTime: "10 min read"
    },
    {
      title: "Smart Bidding Deep Dive",
      date: "Nov 18, 2024",
      readTime: "12 min read"
    },
    {
      title: "Performance Max Optimization",
      date: "Nov 15, 2024",
      readTime: "11 min read"
    }
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="section-title">Insights</h2>
        <div className="particles-grid">
          {particles.slice(0, showMore ? 9 : 3).map((particle, index) => (
            <article key={index} className="particle-card">
              <h3 className="card-title">{particle.title}</h3>
              <p className="card-meta">
                {particle.date} • {particle.readTime}
              </p>
            </article>
          ))}
        </div>
        {!showMore && (
          <button 
            className="see-more-btn" 
            onClick={() => setShowMore(true)}
          >
            See more
          </button>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
