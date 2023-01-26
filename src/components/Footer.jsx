import React, { useState } from 'react';
import '../stylesheet/Footer.css';

function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="footer-container">
      <div className="footer-links">
        
        <a href="#contact">Contact</a>
      </div>
      <div className="social-icons">
        <a href="icons">
          <i className="fa fa-facebook-square"></i>
        </a>
        <a href="twitter">
          <i className="fa fa-twitter-square"></i>
        </a>
        <a href="#instagram">
          <i className="fa fa-instagram"></i>
        </a>
      </div>
      <button className="expand-button" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      {isExpanded && (
        <div className="expanded-content">
          Additional content that is shown when the footer is expanded
        </div>
      )}
    </div>
  );
}

export default Footer;
