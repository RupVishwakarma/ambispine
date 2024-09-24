import React, { useState, useEffect } from 'react';
import './NextVision.css';

export default function NextVision() {
  const images = [
    { src: 'robotics_1.jpg', alt: 'Advanced Robotics', info: 'Information about Advanced Robotics' },
    { src: 'sws.png', alt: 'Software Solutions', info: 'Information about Software Solutions' },
    { src: 'Pluto.png', alt: 'Web Solution Platform', info: 'Information about Web Solution Platform' },

  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const getDisplayImages = () => {
    if (images.length < 3) {
      return images;
    }
    const prevIndex = (activeIndex - 1 + images.length) % images.length;
    const nextIndex = (activeIndex + 1) % images.length;
    return [images[prevIndex], images[activeIndex], images[nextIndex]];
  };

  const handleSeeMore = (info) => {
    alert(info);
  };

  return (
    <div className=' NextVision-container'>
      <div className='text-center fs-3 text-primary-emphasis py-3'>Our Vision</div>
      <div id="NextVision" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='row justify-content-center align-items-center ' style={{margin:"0px 100px"}}>
              {getDisplayImages().map((image, index) => (
                <div
                  className={`col img-container ${index === 1 ? 'large' : ''}`}
                  key={index}
                >
                  <img src={image.src} alt={image.alt} className='img-fluid rounded-3' />
                  {index === 1 && (
                    <div className='text-center see-more-btn top-text mt-4'>
                   <button className=" ms-3 mt-5 fs-5  text-white fw-medium border-2 border-secondary px-3 pb-1 rounded-2 " onClick={() => handleSeeMore(image.info)} >Learn More</button>
                 </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={() => setActiveIndex((activeIndex + 1) % images.length)}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
