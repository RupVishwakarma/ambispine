import React from 'react';
import { IoLocationSharp, IoCallSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { PiTrademarkLight } from "react-icons/pi";
import './Footer.css'
export default function Footer() {
  return (  
      <footer className="footer">
          <div className="container-fluid text-center text-md-start py-1 ">
            <div className="row  text-white footer-link ">            
              <div className="col-lg-3 col-md-6   text-center ">                
               <img src="AmbiSpine_logo.png" className='' width="180" />
              <PiTrademarkLight className='fs-5 trade-mark'/>
              <div className='ms-2 '>
              <a  href='https://www.linkedin.com/company/ambispine-technologies/'><FaLinkedinIn className='fa-I  rounded-1 p-1 fs-3' /></a> 
              <a  href='https://www.youtube.com/@AmbiSpineTechnologies/' > <FaYoutube  className='fa-y rounded-1 p-1 ms-3 fs-3' /></a>
              <a  href='https://www.instagram.com/' ><FaInstagramSquare className='fa-Is p-1 rounded-1 p-1 ms-3 fs-3' /> </a>
              <a href='https://x.com/' ><FaTwitter  className='fa-I rounded-1 ms-3 p-1 fs-3' /> </a>
              <a href=''><FaFacebookF className=' fa-b rounded-1 p-1 ms-3 fs-3'/></a>
              </div>  
              </div>
              <div className="col-lg-2 col-md-6 mx-auto pt-3 pb-1">            
                <h6 className=" fw-semibold pt-2 ">Our Company</h6>
                <p><a href="#!" className="text-reset">About Us</a></p>
                <p><a href="#!" className="text-reset">Career</a></p>
                <p><a href="#!" className="text-reset">Newsroom</a></p>
                <p><a href="#!" className="text-reset">Spreads</a></p>
                <p><a href="#!" className="text-reset">Spreads Web Solutions</a></p>
              </div>

             
              <div className="col-lg-2 col-md-4 mx-auto pt-3 pb-1">            
                <h6 className=" fw-semibold pt-2 ">Services</h6>
                <p><a href="#!" className="text-reset">Digital marketing</a></p>
                <p><a href="#!" className="text-reset">Cloud Solutions</a></p>
               
              </div>            
              <div className="col-lg-2 col-md-4 mx-auto pt-3 pb-1">               
                <h6 className=" fw-semibold pt-2"> Support</h6>
                <p><a href="#!" className="text-reset">Terms of Use</a></p>
                <p><a href="#!" className="text-reset">Privacy Statement</a></p>
                <p><a href="#!" className="text-reset">Cookie Policy</a></p>
                <p><a href="#!" className="text-reset">Spreads Support</a></p>
                <p><a href="#!" className="text-reset">Spreads ADs Support</a></p>
                <p><a href="#!" className="text-reset">Spreads Web Support</a></p>
                
                
              </div>
              <div className="col-lg-3 col-md-4  mb-md-0 pt-3 pb-1">
                <h6 className=" fw-bold ">Contact</h6>
                <p><IoLocationSharp className="me-3" /> Rewa(M.P.), India</p>
                <p><MdOutlineMailOutline className="me-3" /> ambispinetechnolog@gmail.com</p>
                <p><IoCallSharp className=" p-1 me-2 bg-white text-black rounded-circle" />+91 9685221056</p>
                <p><IoCallSharp className=" p-1 me-2 bg-white text-black rounded-circle" />+91 8368140262 </p>
              </div>
             
            </div>
          
          </div>

       
        <div className="text-center p-4 text-white " style={{fontSize:"14px"}}>
         All Rights Reserved <span className='fs-4 mt-1'>©</span> 2024 Copyright: Taken by AmbiSpine Technologies Private Limited
         
        </div>
       
      </footer>
  )
}
