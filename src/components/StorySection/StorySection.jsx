import './StorySection.css';


function StorySection() {
  return (
    <div className="story-container">
      <div className="story-block">
        <div className="text-content first-text">
          <p>We've run ads at Google, DTC brands, big companies, small agencies. Late nights. Tight budgets. Impossible targets.</p>
          <p>We know the truth: most ads lose money. Not because people are bad at marketing. Because the work is too manual, too slow, too scattered.</p>
        </div>
        <div className="image-content">
          <img src="story1.png" alt="Agencies team" className="story-image" />
        </div>
      </div>

      
      <div className="story-block">
        <div className="text-content second-text">
          <p>So we moved to San Francisco and built Ryze.</p>
          <p>Worked with the best agencies. Learned what actually moves the needle. Then built AI to do exactly that.</p>
        </div>
        <div className="image-content">
          <img src="story2.png" alt="Team in San Francisco" className="story-image" />
        </div>
      </div>
    </div>
  );
}

export default StorySection;
