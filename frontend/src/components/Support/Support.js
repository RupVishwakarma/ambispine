import React from 'react'
import './Support.css';
import Footer from './../../layouts/footer/Footer';
export default function Support() {
  return (
    <div className='Support bg-secondary' style={{marginTop:"80px"}}>
  <div className='text-end d-block d-lg-flex justify-content-center align-items-center m-4 p-3'>
    <div className='support-header text-start text-white ms-5 w-75 d-flex flex-column justify-content-center align-items-start px-4 py-3 mt-2'>
      <h3 className=' '>We’re in it for good, driving positive change for the benefit of all. Our expert, committed team put our shared beliefs into action – every day. Together,</h3>
      <p className='mt-3 pt-3'>every day. Together, we combine innovation and collective knowledge to create the extraordinary.</p>
    </div>
    <div className='pt-3 me-4'>
      <img src="img_3.jpg" className='img-fluid mt-5  rounded-3' height="470px" width="470px" />
    </div>   
  </div>
  <Footer />
</div>



  )
}
