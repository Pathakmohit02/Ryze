import React from 'react';
import './AuditSection.css';

const AuditSection = () => {
  const floatingContent = [
    "2000+ CLIENTS",
    "700+ AGENCIES",
    "23+ COUNTRIES",
    "$500M+ AD SPEND MANAGED",
    
    "2000+ CLIENTS",
    "700+ AGENCIES",
    "23+ COUNTRIES",
    "$500M+ AD SPEND MANAGED",
  ];

  return (
    <section className="audit-section">
      <div className="floating-bars-top">
        {floatingContent.map((content, index) => (
          <span key={index} className="floating-text">{content} • </span>
        ))}
      </div>

      <div className="audit-content">
        <h2 className="audit-title">
          Audit your <span className="highlight-text">ad account</span> instantly.
        </h2>
        <div className="audit-form">
          <input type="email" placeholder="name@company.com" className="email-input" />
          <a href="https://app.get-ryze.ai/auth">
          <button className="audit-button">
            <img src="/scan.png" alt="Audit Icon" className="audit-icon" />
            Audit Account
          </button>
          </a>
        </div>
      </div>

      <div className="floating-bars-bottom">
        {floatingContent.map((content, index) => (
          <span key={index} className="floating-text">{content} • </span>
        ))}
      </div>
    </section>
  );
};

export default AuditSection;

