import React from 'react';
import { GoSearch } from 'react-icons/go';
import { PiTrademarkLight } from "react-icons/pi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary position-fixed top-0 w-100 ">
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center ms-4" style={{ height: '80px' }}>
          <Link to='/'>
            <img src="AmbiSpine_logo.png" width="150" className="h-100" alt="AmbiSpine Logo" />
          </Link>
          <PiTrademarkLight className='trade-mark fs-5 ms-1'/>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-center"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav mb-2 fs-5 text-white mb-lg-0 text-center">
            <li className="nav-item mx-4">
            <Link to='/support' className="nav-link text-white fw-medium">
                Support
              </Link>      
            </li>
            <li className="nav-item mx-4">
            <Link to='/about' className="nav-link text-white fw-medium">
                About
              </Link>  
            </li>
            <li className="nav-item mx-4">
              <Link to='/career' className="nav-link text-white fw-medium">
                Career
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to='/contact' className="nav-link text-white fw-medium">
                Contact Us
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to='/login' className="nav-link text-white fw-medium">
                  Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
