import React from 'react';
import './card.css';

export default function VideoSection({ videoSrc, heading, title }) {
  return (
    <div className='VideoSection'>
      <div className='row d-flex justify-content-between'>
        <div className='col-12 col-md-6 text-white d-flex align-items-center text-start'>
          <div className='ms-5 me-3 top-text'>
            <h2 className="mt-3 text-capitalize fs-1 fw-medium">Get In Touch With Friends And Families</h2>
            <p className='fs-5' >Share your memories with friends and family, get in touch every day.</p>
            <button className="ms-2 px-3 mt-3 rounded-2 fs-5 pb-1 text-white">Learn More</button>
          </div>
        </div>
        <div className='col-12 col-md-6'>
          <div className='video-container p-5 ms-5'>
            <video autoPlay loop muted className="videosection-full-cover">
              <source src="firstvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className='row d-flex justify-content-between'>
        <div className='col-12 col-md-6'>
          <div className='video-container p-5 ms-4'>
            <video autoPlay loop muted className="videosection-full-cover">
              <source src="secondvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className='col-12 col-md-6 text-white d-flex align-items-center text-start'>
          <div className=' me-3 pe-2 top-text'>
            <h2 className="mt-3 text-capitalize fs-1 fw-medium">Get In Touch With Friends And Families</h2>
            <p className='fs-5'>Share your memories with friends and family, get in touch every day.</p>
            <button className="ms-2 px-3 mt-3 rounded-2 fs-5 pb-1 text-white">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
