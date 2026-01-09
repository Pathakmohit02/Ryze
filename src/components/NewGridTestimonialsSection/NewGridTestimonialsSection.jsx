import React from 'react';
import './NewGridTestimonialsSection.css';

const NewGridTestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="wall-of-love-header">
        <h2 className="wall-title">Wall of Love</h2>
        <div className="heart-icon">♥</div>
      </div>
      
      <div className="grid-container">
        
        <div className="grid-item image-1">
          <img src="/image1.avif" alt="Conference speaker" />
        </div>
        
        <div className="grid-item quote-card">
          <p className="quote-text">
            RYZE'S AI-DRIVEN ADS OUTPERFORM 
            HUMAN OPTIMIZATION BY A HUGE MARGIN.
          </p>
          <p className="quote-author">
            MATHILDE BIGGS, CEO MOTIFDIGITAL AGENCE
          </p>
          
        </div>
        
        <div className="grid-item image-2">
          <img src="/image3.avif" alt="Conference speaker" />
        </div>

        
        <div className="grid-item testimonial-1">
          <div className="author-section">
            <img src="/roger.png" alt="Roger Dunn" className="avatar" />
            <div>
              <p className="author-name">Roger Dunn</p>
              <p className="author-role">Global Performance Lead - Rivert</p>
            </div>
          </div>
          <p className="testimonial-text">
            We were drowning with 7 people. Got back so many hours each week from reporting. Finally have bandwidth to focus on actual strategy
          </p>
          <div className="rating">★★★★★</div>
        </div>

        <div className="grid-item stat-card">
          <div className="stat-number">+63%</div>
          <div className="stat-label">better ROAS after switching to AI agents</div>
        </div>

        <div className="grid-item company-card">
          <div className="company-logo">Speedy</div>
          <div className="company-text">Got the whole team up and running in a day. Super easy to pick up</div>
        </div>

        <div className="grid-item testimonial-2">
          <div className="author-section">
          </div>
          <p className="testimonial-text">
            Broke down performance by asset—thumbnails, headlines, everything. Suggested swaps based on real data. Our CTR basically doubled.
          </p>
          <div className="social-proof">
            <span>👍 245</span>
            <span>💬 42</span>
          </div>
        </div>

        
        <div className="grid-item testimonial-3">
          <div className="author-section">
            <img src="/g.jpg" alt="Gabriela K." className="avatar" />
            <div>
              <p className="author-name">Gabriela K.</p>
              <p className="author-role">@gabri_isleia · 3h</p>
            </div>
          </div>
          <p className="testimonial-text">
            Our agency does audits for potential clients 5x faster now. Used to take days, now it's like an hour. Way easier to win new business
          </p>
          <div className="social-proof">
            <span>🔄 2</span>
            <span>🔄 2</span>
            <span>💾 102</span>
          </div>
        </div>

        <div className="grid-item large-image">
          <img src="/image4.avif" alt="Team meeting" />
        </div>

        <div className="grid-item testimonial-4">
          <div className="author-section">
            <img src="/d.png" alt="Daniel Roser" className="avatar" />
            <div>
              <p className="author-name">Daniel Roser </p>
              <p className="author-role">GB • 7 reviews</p>
            </div>
          </div>
          <p className="testimonial-text">
            Found wasted spend in search terms we'd never have caught manually. Cut those, reallocated budget. ROAS up 45%
          </p>
          <div className="rating">★★★★★</div>
        </div>
      </div>
    </section>
  );
};

export default NewGridTestimonialsSection;








