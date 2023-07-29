import React, { useState } from 'react';
import './GlassmorphicNavbar.css';
import SocialButtons from '../SocialButtons/SocialButtons';

const GlassmorphicNavbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <nav className={`responsive-navbar ${isActive ? 'active' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="logo">Logo</span>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <div className={`hamburger ${isActive ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`navbar-links ${isActive ? 'active' : ''}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default GlassmorphicNavbar;
