import React from 'react';
import './FooterSection.css';

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://www.linkedin.com/company/get-ryze-ai/" className="footer-link">LinkedIn</a>
          <a href="https://www.get-ryze.ai/privacy" className="footer-link">Privacy</a>
          <a href="https://www.get-ryze.ai/term-services" className="footer-link">Terms</a>
          <a href="mailto:hello@get-ryze.ai" className="footer-link">Contact us:hello@get-ryze.ai</a>
        </div>
        <div className="crafted-info">
          Crafted in San Francisco
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

