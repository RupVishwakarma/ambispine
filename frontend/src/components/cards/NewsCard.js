import React, { useState } from 'react'
import './card.css'
export default function NewsCard() {
        return(
          <div className='row mx-5 my-3'>
            <div className="col-12 col-lg-4 col-md-6 mb-4">
              <Card /> 
            </div>
            <div className="col-12 col-lg-4 col-md-6 mb-4">
              <Card />            
            </div><div className="col-12 col-lg-4 col-md-6 mb-4">
              <Card />
             
            </div><div className="col-12 col-lg-4 col-md-6 mb-4">
              <Card />
             
            </div><div className="col-12 col-lg-4 col-md-6 mb-4">
              <Card />
             
            </div>
          </div>
        );
}

export function Card() {        
  return (
    <div className='Card me-3 ms-5'>
  <div className="card border-0 " style={{width: "90%"}}>
  <img src="hero_4.jpg" height="200" className="card-img-top rounded-2" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Send us your image</h5>
    <p className="card-text">Want to get in on the action? The next UH News Image of the Week could be yours! Submit a photo, drawing, painting,</p>
  </div>
</div>
    </div>
  )
}

