import React from 'react';
import './FloatingLogos.css';

const FloatingLogos = () => {
  const logos = [];
  for (let i = 1; i <= 7; i++) {
    logos.push(`logo${i}.avif`);
  }
  logos.push('logo8.svg');
  for (let i = 9; i <= 10; i++) {
    logos.push(`logo${i}.avif`);
  }

  return (
    <section className="floating-logos-section">
      <div className="logos-container">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={`/${logo}`}
            alt={`Logo ${index + 1}`}
            className="floating-logo"
          />
        ))}
      </div>
    </section>
  );
};

export default FloatingLogos;

