import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus">
      {/* Footer Section */}
      <div className="footer-section">
        <div className="footer-frame">
          <div className="footer-basic-look">
            <img 
              className="pattern-background" 
              src="https://api.builder.io/api/v1/image/assets/TEMP/b85668e3f3c5022ad1dcc7d61782e903770ecf8f?width=3456" 
              alt="" 
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/1d3055e7831751f376410030e9cd3715ad65fe5c?width=2234" 
              className="vertical-left" 
              alt="Vertical left decoration" 
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/9bf4ac0a2eb14d48c243efe148095a033dc515df?width=2234" 
              className="vertical-right" 
              alt="Vertical right decoration" 
            />
          </div>
          
          <img 
            className="footer-logo-left" 
            src="https://api.builder.io/api/v1/image/assets/TEMP/fdc47a3adf66deeb84e105a47e6dac692c451ec5?width=864" 
            alt="Acik Lounge Logo" 
          />
          <img 
            className="footer-logo-right" 
            src="https://api.builder.io/api/v1/image/assets/TEMP/fdc47a3adf66deeb84e105a47e6dac692c451ec5?width=864" 
            alt="Acik Lounge Logo" 
          />
          
          <div className="footer-text">
            <div className="restaurant-name">
              <span>Acik Lounge</span>
            </div>
            <div className="restaurant-address">
              <span>Dijari Residence, Vushtrri, Kosovo, 42000</span>
            </div>
            <div className="contact-info">
              <span>+386 48 557 559<br />acikrestaurant@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="aboutus-section">
        <div className="aboutus-basic-look">
          <img 
            className="pattern-background" 
            src="https://api.builder.io/api/v1/image/assets/TEMP/b85668e3f3c5022ad1dcc7d61782e903770ecf8f?width=3456" 
            alt="" 
          />
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
        </div>

        <img 
          className="aboutus-logo-large-left" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/8257f97fa4815ec4f0129b99ac5bc5629be1748e?width=1030" 
          alt="Acik Lounge Logo" 
        />
        <img 
          className="aboutus-logo-large-right" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/6699265e45610a14de5d368c0fdffb17ff018032?width=1030" 
          alt="Acik Lounge Logo" 
        />
        <img 
          className="aboutus-logo-small-top" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/1bb7ef14ea7dabfdc1744ff16f77c7c9238ec02b?width=398" 
          alt="Acik Lounge Logo" 
        />
        <img 
          className="aboutus-logo-small-bottom" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/feddcb32d7e2a74a8d840ed19f70859b87e26b77?width=398" 
          alt="Acik Lounge Logo" 
        />

        <div className="intro-text">
          <span>We are a cozy, family-friendly sanctuary. The name "Acik" means "aside" in Turkish, reflecting our philosophy: to be a special place away from the ordinary.</span>
        </div>

        <div className="philosophy-text">
          <span>We created Acik Lounge to be a place where you can relax, connect, and feel right at home. Every detail is designed for your comfort, making it the perfect spot to unwind with loved ones.</span>
        </div>

        <div className="experience-text">
          <span>More than just a restaurant, we offer a welcoming atmosphere where every meal is a celebration. We invite you to experience a place that feels like coming home.</span>
        </div>

        <div className="closing-text">
          <span>At Acik Lounge, a meal is more than just food; it's an experience. We invite you to join us and discover what makes us special—a place where every visit feels like coming home.</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
