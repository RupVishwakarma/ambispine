import React, { useState, useEffect } from 'react';
import './NextVision.css';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
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
    <div className=' NextVision-container py-4'>
      <div className='text-center fs-1 text-secondary '>Our Vision</div>
      <div id="NextVision" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='row justify-content-center align-items-center' style={{margin:"0px 80px", height: "80vh"}}>
              {getDisplayImages().map((image, index) => (
                <div
                  className={`col pb-5 img-container ${index === 1 ? 'large' : ''}`}
                  key={index}
                >
                  <img src={image.src} alt={image.alt} className='img-fluid rounded-3 pb-3' />
                  {index === 1 && (
                    <div className='text-center pt-4 pb-5 '>
                   <button className="see-more-btn  " onClick={() => handleSeeMore(image.info)} >Learn More</button>
                 </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)}>
          <span className="carousel-control-prev-icon" aria-hidden="true">
            <FaChevronLeft />
          </span>
        </button>
        <button className="carousel-control-next" type="button" onClick={() => setActiveIndex((activeIndex + 1) % images.length)}>
          <span className="carousel-control-next-icon" aria-hidden="true">
            <FaChevronRight />
          </span>
        </button>
      </div>
    </div>
  );
}
