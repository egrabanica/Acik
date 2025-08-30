 import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-frame">
        {/* Background Pattern */}
        <img 
          className="pattern-background" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/b85668e3f3c5022ad1dcc7d61782e903770ecf8f?width=3456" 
          alt="" 
        />
        
        {/* Decorative Lines */}
        <div className="vertical-right"></div>
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/1d3055e7831751f376410030e9cd3715ad65fe5c?width=2234" 
          className="vertical-left" 
          alt="" 
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/368230bec312fcb53e0d540c8edc67c461115305?width=3482" 
          className="horizontal-top" 
          alt="" 
        />
        
        {/* Navigation Menu */}
        <nav className="main-navigation">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#reservations" className="nav-link">Reservations</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        
        {/* Hamburger Menu */}
        <div className="hamburger-menu">
          <svg width="81" height="65" viewBox="0 0 81 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.034 2.09963L63.0339 2M0.0370095 20.6992L50.0369 20.5996" stroke="#D76A2D" strokeWidth="4"/>
            <path d="M30.034 44.0996L80.0339 44M17.037 62.6993L67.0369 62.5996" stroke="#D76A2D" strokeWidth="4"/>
          </svg>
        </div>
        
        {/* Logo */}
        <img 
          className="logo" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/b13c7e544a2fda3fbc9b79514c7dc659e025557b?width=460" 
          alt="Logo" 
        />
        
        {/* Video Section */}
        <div className="video-space"></div>
        <div className="video-section-text">VideoSection</div>
      </div>
    </div>
  );
};

export default Homepage;
