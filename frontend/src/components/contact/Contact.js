import React from 'react'
import "./Contact.css";
import { FaRegBuilding } from "react-icons/fa";
import { CgMediaPodcast } from "react-icons/cg";
import { FaLongArrowAltRight } from "react-icons/fa";
import {Link } from "react-router-dom";
import Footer from './../../layouts/footer/Footer'

export default function Contact() {
  return (
    <div className=' Contact bg-secondary'>
      <div className='  p-5 text-white'>
        <div className='row '>
          <div className='col-12 col-lg-6  '>
            <div className='m-lg-3 m-sm-2 p-sm-2 p-lg-5 '>
            <h3 className="fw-semibold fs-2">Get Connect With Us</h3>
            <p className="fw-semibold fs-2 mt-3">What's in Your Mind? We are here to solve your problems ?</p>
            </div>        
          </div>
          <div className='col-12 col-lg-6 '>
            <div className='m-lg-3 m-sm-2 p-sm-2 p-lg-5'>
            <p className="fw-medium fs-5 ms-3 mt-4">We’re here to help! Tell us what you’re looking for and we’ll get you connected to the right people.</p>       
            </div>           
          </div>
        </div>
        <div className='row gx-5 mt-3'>
          <div className='col-lg-6 col-12 '>
            <div className='contact-text-link ms-lg-4 ms-3'>
            <Link to="/request-service" className='text-decoration-none'>
          <div className='text-center text-white m-1 p-2'>
          <FaRegBuilding className='fs-4 '/>
          <p className='text-white fs-5 mt-1'>Request for Services</p>
          </div>
          </Link>
            </div>       
          </div>
          <div className='col-lg-6 col-12 '>
            <div className='contact-text-link ms-lg-4 ms-2'>
            <Link to="/media-contact" className='text-decoration-none'>
            <div className='text-center text-white m-1 p-2'>
            <CgMediaPodcast className='fs-4' />
            <p className='text-white fs-5 mt-1'>media contacts</p>
            </div>
            </Link>
            </div>           
          </div>
        </div>
        <p className='fs-4 mt-4 ms-lg-4 ms-sm-2'>Looking for something else?</p>
        <p className='ms-lg-4 mt-4 ms-sm-2'><Link to="/web-site-feedback" className='text-decoration-none text-white fs-5'>Website feedback <FaLongArrowAltRight className='bg-white text-black fs-5 px-1 rounded-circle'/></Link></p>    
       </div>
       <div className='mt-5 pt-1'>
       <Footer />
       </div>
    </div>
       
    
  )
}
