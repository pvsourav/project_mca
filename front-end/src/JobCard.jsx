import React from 'react';
import './jobcard.scss'; // Import the CSS file for styling

function JobCard() {
  return (
    <div className="job-card">
      <div className="job-title">
        <span>Mobile Application Developer - React Native</span>
        {/* <img src="zepto-logo.png" alt="Zepto Logo" className="company-logo" /> */}
      </div>

      <div className="job-details">
        <p className="company-name">Zeptonow</p>
        <div className="job-info">
          <div className="experience">
            {/* <i className="fas fa-briefcase"></i> */}
            <span>5-8 Yrs</span>
          </div>
          <div className="location">
            {/* <i className="fas fa-map-marker-alt"></i> */}
            <span>Bangalore</span>
          </div>
        </div>
        <button className="apply-button">Apply Now</button>
      </div>
    </div>
  );
}

export default JobCard;