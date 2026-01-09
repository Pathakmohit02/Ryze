import React from 'react';
import './OrangeSection.css';

const OrangeSection = () => {


  return (
    <section className="orange-section">
       <div className="main-content">
        <div className="left-blocks">
          
          <div className="content-block">
            <h3 className="block-title">Manages all your accounts</h3>
            <video src="/f1.mov" autoPlay muted loop className="account-management-video"></video>
          </div>

          
          <div className="content-block">
            <h3 className="block-title">Creatives optimization</h3>
            <video src="/f2.mov" autoPlay muted loop className="creative-optimization-video"></video>
          </div>

          
          <div className="content-block">
            <h3 className="block-title">24/7 ROAS improvements</h3>
            <video src="/f3.mov" autoPlay muted loop className="roas-improvements-video"></video>
          </div>
        </div>

        <div className="right-content">
          <p className="next-gen">• NEXT GEN OF MARKETING</p>
          <h1 className="right-title">Let AI <br /> Run Your <br /> Ads</h1>
          <div className="email-signup-right">
            <input type="email" placeholder="work@email.com" className="email-input" />
            <a href="https://app.get-ryze.ai/auth"><button className="submit-email-button">&#8594;</button></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrangeSection;

