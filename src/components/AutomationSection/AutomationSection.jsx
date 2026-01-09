import './AutomationSection.css';


function AutomationSection() {
  return (
    <div className="automation-container">
      <div className="main-headline">What's every day without you</div>
      
      <div className="content-wrapper">
        <div className="text-section">
          <p className="description-text">
            It watches your campaigns, fixes what's broken, scales what works. Every day. Without you.
          </p>
          <p className="tagline">
            Not magic. Just boring stuff faster and better than any human can.
          </p>
        </div>
        
        <div className="image-section">
          <img src="/auto.png" alt="Warehouse automation" className="main-image" />
          <div className="image-caption">
            One of our customers, on autopilot
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutomationSection;
