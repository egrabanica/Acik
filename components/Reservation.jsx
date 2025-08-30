import React from 'react';
import './Reservation.css';

const Reservation = () => {
  return (
    <div className="reservation">
      <div className="reservation-frame">
        <div className="reservation-basic-look">
          <img 
            className="pattern-background" 
            src="https://api.builder.io/api/v1/image/assets/TEMP/47f485366097c747f1f7aba9acec18a7de87ffb1?width=3456" 
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
          
          <div className="book-button-container">
            <div className="book-button">
              <div className="button-border-top"></div>
              <div className="button-border-bottom"></div>
              <div className="button-border-right"></div>
              <div className="button-border-left"></div>
              <div className="book-text">Book</div>
            </div>
          </div>
        </div>
        
        <div className="main-title">Reserve a Memory</div>
      </div>
    </div>
  );
};

export default Reservation;
