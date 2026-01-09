import React from 'react';
import './AIMarketerSection.css';


const AIMarketerSection = () => {

  const handleMouseEnter = (e) => {
    e.target.pause();
  };

  const handleMouseLeave = (e) => {
    e.target.play();
  };

  return (
    <section className="ai-marketer-section">
      <h2 className="main-title">An AI marketer that does it all for you</h2>

      <div className="content-grid">
        
        <div className="grid-item">
          <h3 className="item-title">Set up and launch campaigns</h3>
          <img src="/photo.png" alt="Campaign Setup" />
        </div>

        <div className="grid-item">
          <h3 className="item-title">Suggest what to fix and optimize</h3>
          <video
            className="ai-video"
            src="/vvideo1.mov"
            autoPlay
            muted
            loop
            playsInline
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>

        <div className="grid-item">
          <h3 className="item-title">Reports that build themselves</h3>
          <video
            className="ai-video"
            src="/vvdieo2.mov"
            autoPlay
            muted
            loop
            playsInline
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>

      </div>
    </section>
  );
};

export default AIMarketerSection;






