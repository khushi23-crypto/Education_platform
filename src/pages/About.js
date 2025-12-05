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
                src="https://images.unsplash.com/photo-1587614382346-4ecf823c41c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
