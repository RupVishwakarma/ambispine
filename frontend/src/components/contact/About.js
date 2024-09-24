import React from 'react'
import './Contact.css';
import Footer from '../../layouts/footer/Footer'
export default function About() {
  return (
    <div className=' About'>
      <div className=' img-container'>
      <img src='about_1.webp' className=' img-fluid' alt='about_top' />
      <div className='overlap-text  '>
      <h2>Welcome to <span>AmbiSpine Technologies</span></h2>
      <h5>Private Limited Company</h5>
      <div className='top-text'>
      <button className=" mt-5 fs-5 fw-medium bg-primary border-2 border-secondary text-white  pb-1  rounded-2 ">Learn More</button>
      </div>
      </div>
      </div>  
      <div className='row mt-5'>
        <div className='col-lg-5 col-12  gap-5'>
          <img src='about_3.webp' className='img-fluid ms-5 w-100 rounded-2 about_left_img' style={{height:"700px"}}  alt='about_left_img' />
        </div>
        <div className='col-lg-6 col-12 gap-5 ms-5 d-flex align-items-center justify-content-center'>
        <div className=' mx-3 text-center px-3 '>
        <h3 className='fw-bolder fs-1'>Welcome To Our Company Journey</h3>
        <h5 className='mt-4 fs-4'>AmbiSpine Technologies Private Limited registered at 8 March 2024. Aim to solve human problem and create connectivity between them.</h5>
        <h5 className='mt-4 fs-4'>This is an information technology company. Founding Date - 8/04/2024
        founded by Aditya Shrivastava (Founder) Mayank Shrivastava (co-founder). We have 8 (hybrid)  Employees. We are focusing on SaaS product development and management.</h5>
        </div>
        </div>
        <div className='row mt-5'>
        
        <div className='col-lg-6 col-12 gap-5 ms-5 d-flex align-items-center justify-content-center'>
        <div className=' mx-3 text-center px-3 '>
        <h3 className='fw-bolder fs-1'>CEO Profile</h3>
        <h5 className='mt-4 fs-4'>Name: <span className=''>Aditya Shrivastava</span></h5>
        <h5 className='mt-4 fs-4'>I’m Aditya shrivastava SAAS developer and manager I’m
          form Rewa graduated with MCA from Awadhesh Pratap
          SIngh University Rewa my experties to manage Artificial
          Intelligence and Software Development.</h5>
        </div>
        </div>
        <div className='col-lg-5 col-12 d-flex justify-content-center align-item-center gap-5'>
          <div className='mt-3'>
          <img src='https://media.licdn.com/dms/image/D4D03AQEr8c_5s1fung/profile-displayphoto-shrink_800_800/0/1682476639953?e=1728518400&v=beta&t=WKm4Gd26MFkd2vgW4EODzWADncC3xqpLuMYPIFhlnwc'
          className='rounded-circle' width="300px" height="300px" alt='' />
          </div>
        </div>

      </div>
      <div className='text-center fw-normal mx-3 px-lg-5 mt-5'>
        <p className='fs-4'>We are software based tech company and trying to develop next
generation software application and web solutions. We are developing
our web solution and social networking solutions. Our vision to create
India’s best networking site and web solution platform.</p>
      </div>

      </div>
      <Footer />
    </div>
  )
}
