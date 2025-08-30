import React from 'react';
import './HomePage3.css';

const HomePage3 = () => {
  return (
    <div className="homepage3">
      <div className="homepage3-frame">
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
        
        {/* Left Image */}
        <img 
          className="left-image" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/e8f70b37a9a9dfe294aa6c5bd1171eb36b2e9749?width=976" 
          alt="Kitchen scene" 
        />
        
        {/* Right Image */}
        <img 
          className="right-image" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/b993af8b51900662c70901ab3af735fdf6369b80?width=982" 
          alt="Bar scene" 
        />
        
        {/* Central Logo */}
        <img 
          className="central-logo" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/546b329ed3a83175fb2c0cd53d9e2c93c7c30777?width=692" 
          alt="Acik Lounge Logo" 
        />
        
        {/* Go To Kitchen Button */}
        <div className="kitchen-button-container">
          <div className="button-borders">
            <div className="border-top"></div>
            <div className="border-bottom"></div>
            <div className="border-right"></div>
            <div className="border-left"></div>
          </div>
          <div className="kitchen-button-text">Go To Kitchen</div>
        </div>
        
        {/* Go To Bar Button */}
        <div className="bar-button-container">
          <div className="button-borders">
            <div className="border-top"></div>
            <div className="border-bottom"></div>
            <div className="border-right"></div>
            <div className="border-left"></div>
          </div>
          <div className="bar-button-text">Go To Bar</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage3;
