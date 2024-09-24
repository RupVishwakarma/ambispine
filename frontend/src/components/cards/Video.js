import React from 'react';
import './card.css';

export default function Video({ videoSrc, heading }) {
  return (
  <div className='Helo_Section-video'>
     <div className="video-container  position-relative">
      <div className=" position-relative">
        <video autoPlay loop muted className="video-full-cover"  >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="position-absolute text-white ms-5 response-text-position " >
          <h1 className="mt-lg-3 mt-1 text-capitalize  ms-4 fw-lg-bold fw-sm-normal">{heading}</h1>
          <p className=' w-100 ms-4 w-lg-75'>
            Try The beet of opportunities create connect and carrier
          </p>
          <div className='top-text'>
            <button className="ms-5 mt-1 mt-lg-3 fs-5 px-3 pb-1 text-white  rounded-2">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
