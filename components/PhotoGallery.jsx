import React from 'react';
import './PhotoGallery.css';

const PhotoGallery = () => {
  return (
    <div className="photo-gallery">
      <div className="gallery-frame">
        {/* Background Pattern */}
        <img 
          className="pattern-background" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/b85668e3f3c5022ad1dcc7d61782e903770ecf8f?width=3456" 
          alt="" 
        />
        
        {/* Decorative Lines */}
        <div className="vertical-right"></div>
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/931b339053f69a4dd5d7f0fd5996016616405294?width=2234" 
          className="vertical-left" 
          alt="" 
        />
        
        {/* Photo Grid */}
        <div className="photo-grid">
          <img 
            className="gallery-photo photo-1" 
            src="https://api.builder.io/api/v1/image/assets/TEMP/05f62a3c7c3771d2b2e78a0376af28be2984272b?width=614" 
            alt="Gallery image 1" 
          />
          <img 
            className="gallery-photo photo-2" 
            src="https://api.builder.io/api/v1/image/assets/TEMP/05f62a3c7c3771d2b2e78a0376af28be2984272b?width=614" 
            alt="Gallery image 2" 
          />
          <img 
            className="gallery-photo photo-3" 
            src="https://api.builder.io/api/v1/image/assets/TEMP/05f62a3c7c3771d2b2e78a0376af28be2984272b?width=614" 
            alt="Gallery image 3" 
          />
          <img 
            className="gallery-photo photo-4" 
            src="https://api.builder.io/api/v1/image/assets/TEMP/05f62a3c7c3771d2b2e78a0376af28be2984272b?width=614" 
            alt="Gallery image 4" 
          />
          <img 
            className="gallery-photo photo-5" 
            src="https://api.builder.io/api/v1/image/assets/TEMP/05f62a3c7c3771d2b2e78a0376af28be2984272b?width=614" 
            alt="Gallery image 5" 
          />
          <img 
            className="gallery-photo photo-6" 
            src="https://api.builder.io/api/v1/image/assets/TEMP/05f62a3c7c3771d2b2e78a0376af28be2984272b?width=614" 
            alt="Gallery image 6" 
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
