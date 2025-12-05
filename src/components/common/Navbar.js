import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';
  
  // Theme state - DEFAULT TO 'dark'
  const [theme, setTheme] = useState('dark'); // ✅ Changed from 'light' to 'dark'
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Load theme from localStorage on mount - default to dark if none exists
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // ✅ Default to 'dark'
    setTheme(savedTheme);
    document.body.classList.toggle('dark-theme', savedTheme === 'dark');
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.toggle('dark-theme', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <nav className={`navbar ${theme}`}>
        <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
        <Link to="/courses" className={`nav-link ${isActive('/courses')}`}>Courses</Link>
        <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
        <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
        <Link to="/login" className={`nav-link login-btn ${isActive('/login')}`}>Login</Link>
        
        {/* Theme Toggle Button */}
        <button className="theme-toggle" onClick={toggleTheme} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </nav>

      {/* Mobile Menu Toggle */}
      <button className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
};

export default Navbar;
