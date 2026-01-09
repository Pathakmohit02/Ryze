import React from 'react';
import './AutonomousChatSection.css';

const AutonomousChatSection = () => {
  return (
    <section className="autonomous-chat-section">
      <div className="autonomous-ai-marketer">
        <h2 className="section-title">Autonomous AI marketer</h2>
        <ul>
          <li>24/7 performance audits</li>
          <li>AI creative generation</li>
          <li>Suggests tweaks to improve ROAS</li>
        </ul>
        <div className="video-container-left">
          
          <div className="video-place">
                 <video autoPlay muted loop>
  <source src="/videoo1.mov" type="video/mp4" />
  Your browser does not support the video tag.
</video>
          </div>
        </div>
      </div>

      <div className="chatgpt-paid-ads">
        <h2 className="section-title-gray">ChatGPT for</h2>
        <h2 className="section-title-gray">paid ads</h2>
        <ul>
          <li>"How can I improve ROAS?"</li>
          <li>"What are my best-performing assets?"</li>
          <li>"Which campaigns are wasting spend?"</li>
        </ul>
        <div className="video-container-right">
          
          <div className="video-place">
                 <video autoPlay muted loop>
  <source src="/videoo2.mov" type="video/mp4" />
  Your browser does not support the video tag.
</video>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default AutonomousChatSection;

