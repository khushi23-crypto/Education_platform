import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h2>Knowledge<span>Brewers</span></h2>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
