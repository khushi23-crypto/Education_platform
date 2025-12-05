import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Learn Anything, <span>Anywhere</span></h1>
          <p>Join thousands of students mastering new skills with our expert-led courses. Start your learning journey today.</p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn btn-primary">Browse Courses</Link>
            <Link to="/login" className="btn btn-secondary">Get Started Free</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="gradient-bg"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
