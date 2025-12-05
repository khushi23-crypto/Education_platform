import React from 'react';

const About = () => {
  // Dark mode detect karo
  const isDarkMode = document.documentElement.classList.contains('dark-theme') || 
                    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const textColor = isDarkMode ? '#ffffff' : '#1f2937';
  const bgColor = isDarkMode ? '#1e293b' : '#f9fafb';
  const secondaryColor = isDarkMode ? '#94a3b8' : '#4b5563';
  const listColor = isDarkMode ? '#e2e8f0' : '#374151';

  return (
    <section 
      className="about-page" 
      style={{ 
        padding: '4rem 2rem', 
        background: bgColor,
        minHeight: '100vh'
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Hero Section */}
        <div className="hero-section" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            marginBottom: '1rem', 
            color: textColor,
            fontWeight: '800'
          }}>
            About Knowledge Brewers
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: secondaryColor,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Revolutionizing online education with world-class courses
          </p>
        </div>

        <div className="about-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Content */}
          <div className="about-text">
            <p style={{ 
              fontSize: '1.125rem', 
              color: textColor, 
              lineHeight: 1.7, 
              marginBottom: '2rem'
            }}>
              EduPlatform is transforming the online education landscape by connecting motivated students with world-class instructors and delivering comprehensive, up-to-date learning materials.
            </p>
            <p style={{ 
              fontSize: '1.125rem', 
              color: secondaryColor, 
              lineHeight: 1.7, 
              marginBottom: '2.5rem'
            }}>
              Founded in 2023, our mission is to democratize access to quality education, empowering learners from all backgrounds and locations to achieve their academic and professional goals.
            </p>
            
            {/* Stats */}
            <div className="stats-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ textAlign: 'center', padding: '1.5rem', background: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', borderRadius: '16px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: textColor }}>10,000+</div>
                <div style={{ color: secondaryColor, fontSize: '0.95rem' }}>Active Students</div>
              </div>
              <div style={{ textAlign: 'center', padding: '1.5rem', background: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', borderRadius: '16px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: textColor }}>500+</div>
                <div style={{ color: secondaryColor, fontSize: '0.95rem' }}>Courses Available</div>
              </div>
              <div style={{ textAlign: 'center', padding: '1.5rem', background: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', borderRadius: '16px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: textColor }}>50+</div>
                <div style={{ color: secondaryColor, fontSize: '0.95rem' }}>Expert Instructors</div>
              </div>
              <div style={{ textAlign: 'center', padding: '1.5rem', background: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', borderRadius: '16px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: textColor }}>98%</div>
                <div style={{ color: secondaryColor, fontSize: '0.95rem' }}>Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="about-image" style={{ textAlign: 'center' }}>
            <div style={{ 
              position: 'relative', 
              borderRadius: '24px', 
              overflow: 'hidden',
              boxShadow: isDarkMode ? '0 20px 40px rgba(0,0,0,0.4)' : '0 20px 40px rgba(0,0,0,0.15)'
            }}>
              <img 
                src="data:image/jpeg;base64,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" 
                alt="Online learning community" 
                style={{ 
                  width: '100%', 
                  height: '400px', 
                  objectFit: 'cover',
                  transition: 'opacity 0.3s ease'
                }} 
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                padding: '2rem',
                color: 'white'
              }}>
                <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Join Our Community</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
