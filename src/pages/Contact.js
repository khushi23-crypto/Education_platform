import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();

  // Dark mode detection
  const isDarkMode = document.documentElement.classList.contains('dark-theme') || 
                    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const textColor = isDarkMode ? '#ffffff' : '#1f2937';
  const bgColor = isDarkMode ? '#1e293b' : '#f9fafb';
  const inputBg = isDarkMode ? '#334155' : '#ffffff';
  const borderColor = isDarkMode ? '#475569' : '#e5e7eb';
  const errorColor = isDarkMode ? '#f87171' : '#ef4444';

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setStatus('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus('✅ Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('❌ Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section className="contact-page" style={{ 
      padding: '4rem 2rem', 
      background: bgColor,
      minHeight: '100vh'
    }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            marginBottom: '1rem', 
            color: textColor,
            fontWeight: '800'
          }}>
            Get In Touch
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: isDarkMode ? '#94a3b8' : '#6b7280'
          }}>
            Have questions? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className="form-grid" style={{ display: 'grid', gap: '1.5rem' }}>
            
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name" style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: '600', 
                color: textColor 
              }}>
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  border: `2px solid ${borderColor}`,
                  borderRadius: '12px',
                  background: inputBg,
                  color: textColor,
                  fontSize: '1rem',
                  transition: 'all 0.2s ease',
                  outline: 'none'
                }}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && (
                <span style={{ 
                  color: errorColor, 
                  fontSize: '0.875rem', 
                  marginTop: '0.25rem', 
                  display: 'block' 
                }}>
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email" style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: '600', 
                color: textColor 
              }}>
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  border: `2px solid ${borderColor}`,
                  borderRadius: '12px',
                  background: inputBg,
                  color: textColor,
                  fontSize: '1rem',
                  transition: 'all 0.2s ease',
                  outline: 'none'
                }}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && (
                <span style={{ 
                  color: errorColor, 
                  fontSize: '0.875rem', 
                  marginTop: '0.25rem', 
                  display: 'block' 
                }}>
                  {errors.email}
                </span>
              )}
            </div>

            {/* Subject Field */}
            <div className="form-group">
              <label htmlFor="subject" style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: '600', 
                color: textColor 
              }}>
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  border: `2px solid ${borderColor}`,
                  borderRadius: '12px',
                  background: inputBg,
                  color: textColor,
                  fontSize: '1rem',
                  transition: 'all 0.2s ease',
                  outline: 'none'
                }}
                className={errors.subject ? 'error' : ''}
              />
              {errors.subject && (
                <span style={{ 
                  color: errorColor, 
                  fontSize: '0.875rem', 
                  marginTop: '0.25rem', 
                  display: 'block' 
                }}>
                  {errors.subject}
                </span>
              )}
            </div>

            {/* Message Field */}
            <div className="form-group">
              <label htmlFor="message" style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: '600', 
                color: textColor 
              }}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  border: `2px solid ${borderColor}`,
                  borderRadius: '12px',
                  background: inputBg,
                  color: textColor,
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  transition: 'all 0.2s ease',
                  outline: 'none',
                  minHeight: '140px'
                }}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && (
                <span style={{ 
                  color: errorColor, 
                  fontSize: '0.875rem', 
                  marginTop: '0.25rem', 
                  display: 'block' 
                }}>
                  {errors.message}
                </span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '1.25rem 2rem',
              background: isDarkMode ? '#3b82f6' : '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1.125rem',
              fontWeight: '600',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: isDarkMode ? '0 10px 20px rgba(59,130,246,0.4)' : '0 10px 20px rgba(37,99,235,0.4)'
            }}
          >
            {isSubmitting ? '📤 Sending...' : '📧 Send Message'}
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            borderRadius: '12px',
            textAlign: 'center',
            fontSize: '1.1rem',
            fontWeight: '500',
            background: status.includes('successfully') ? 
              (isDarkMode ? '#10b98126' : '#d1fae526') : 
              (isDarkMode ? '#ef444426' : '#fecaca26'),
            color: status.includes('successfully') ? 
              (isDarkMode ? '#34d399' : '#059669') : errorColor
          }}>
            {status}
          </div>
        )}
      </div>

      <style jsx>{`
        .error {
          border-color: ${errorColor} !important;
          box-shadow: 0 0 0 3px rgba(${errorColor === '#ef4444' ? '239,68,68' : '248,113,113'}, 0.1) !important;
        }
        
        input:focus, textarea:focus {
          border-color: ${isDarkMode ? '#3b82f6' : '#2563eb'} !important;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.1) !important;
        }
        
        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
