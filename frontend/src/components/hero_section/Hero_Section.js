import React from 'react';
import './../../layouts/ambiheader/Header.css';
import Video from './../cards/Video';

function Hero_Section() {
  return (
    <div className='mt-5 '>
      <div id="Hero_Section" className="carousel slide " data-bs-ride="carousel" direction="top">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#Hero_Section" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#Hero_Section" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            
            <Video videoSrc="video1.mp4" heading="Lets Hangout And With Us Explore Future" />
              
          </div>
          <div className="carousel-item" data-bs-interval="10000">
              <Video videoSrc="video2.mp4" heading="Lets Hangout And With Us Explore Future" /> 
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#Hero_Section" data-bs-slide="prev">
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#Hero_Section" data-bs-slide="next">
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Hero_Section;
