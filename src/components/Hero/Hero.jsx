import React from 'react';
import './Hero.css';

const Hero = ({
  titleLine1= "Let",
  highlightText= "AI Manage",
  titleLine2= "YOUR ADS",
  subtitle,
  showEmail = true
}) => {
  return (
    <div className="hero-section">
      <h1 className="hero-title">
        {titleLine1}{' '}
        <span className="highlight">{highlightText}</span>
        <br />
        <span className="dark-text">{titleLine2}</span>
      </h1>

      {subtitle && <p className="hero-subtitle">{subtitle}</p>}

      {showEmail && (
        <div className="email-signup">
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
          />
          <a href="https://app.get-ryze.ai/auth">
            <button className="get-started-button">
              Get started &gt;
            </button>
          </a>
        </div>
      )}

      <div className="social-icons">
        <img src="/adobe.svg" alt="Adobe" className="icon" />
        <img src="/meta.svg" alt="Meta" className="icon" />
        <img src="/chatgpt.png" alt="ChatGPT" className="icon" />
        <img src="/perplexity.webp" alt="Perplexity" className="icon" />
        <img src="/linkedin.png" alt="LinkedIn" className="icon" />
      </div>
    </div>
  );
};

export default Hero;





