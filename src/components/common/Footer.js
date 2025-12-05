import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Knowledge Brewers</h3>
            <p>Learn anything, anywhere. Your journey to knowledge starts here.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: hello@knowledgebrewers.com</p>
            <p>Phone: +91 9771234567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Knowledge Brewers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
