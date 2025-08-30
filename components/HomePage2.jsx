import React from 'react';
import './HomePage2.css';

const HomePage2 = () => {
  return (
    <div className="homepage2">
      <div className="homepage2-frame">
        {/* Background Pattern */}
        <img 
          className="pattern-background" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/b85668e3f3c5022ad1dcc7d61782e903770ecf8f?width=3456" 
          alt="" 
        />
        
        {/* Decorative Vertical Lines */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/1d3055e7831751f376410030e9cd3715ad65fe5c?width=2234" 
          className="vertical-left" 
          alt="Vertical left decoration" 
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/1d3055e7831751f376410030e9cd3715ad65fe5c?width=2234" 
          className="vertical-right" 
          alt="Vertical right decoration" 
        />
        
        {/* Main Logo */}
        <img 
          className="main-logo" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/311bbd25fe1b2b1a267571fed6f5c227f27958cf?width=674" 
          alt="Acik Lounge Logo" 
        />
        
        {/* Main Description */}
        <div className="description-text">
          <span>Acik Lounge: more than a restaurant. It's your cozy, family haven—a special place set aside from the ordinary.</span>
        </div>
        
        {/* About Us Button */}
        <div className="about-button-container">
          <div className="button-borders">
            <div className="border-top"></div>
            <div className="border-bottom"></div>
            <div className="border-right"></div>
            <div className="border-left"></div>
          </div>
          <div className="about-button-text">About Us</div>
        </div>
        
        {/* Logo Transparent Placeholder */}
        <div className="logo-transparent"></div>
      </div>
    </div>
  );
};

export default HomePage2;
