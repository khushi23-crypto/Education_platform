import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '📚',
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience.'
    },
    {
      icon: '🎥',
      title: 'Video Lessons',
      description: 'High-quality video content you can watch anytime, anywhere.'
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Access courses on desktop, tablet, and mobile devices.'
    },
    {
      icon: '💯',
      title: 'Certificate',
      description: 'Earn certificates upon course completion.'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>Why Choose EduPlatform?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
