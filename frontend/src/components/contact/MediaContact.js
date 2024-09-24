import React, { useState } from 'react';
import { CgMediaPodcast } from "react-icons/cg";
import { FaAngleLeft } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function MediaContact() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const industries = [
    {
      value: 'India', label: 'India', data: [
        {
          name: "Vanshika Sood",
          email: "vanshika.sood@amb.com",
          mobile: "+91 2278468371"
        },
        {
          name: "Kritika Saxena",
          email: "Kritika@amb.com",
          mobile: "+91 2270069071"
        },
        
      ]
    },
    {
      value: 'Australia', label: 'Australia', data: [
        {
          name: "Vanshika Sood",
          email: "vanshika.sood@amb.com",
          mobile: "+91 2278468371"
        }
      ]
    },
    {
      value: 'UK', label: 'UK', data: [
        {
          name: "Vanshika Sood",
          email: "vanshika.sood@amb.com",
          mobile: "+91 2278468371"
        }
      ]
    },
  ];
 
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const selectedData = industries.find(industry => industry.value === selectedValue);
    setSelectedIndustry(selectedData);
  };

  return (
    <div className='Contact-Option'>
      <div className='contacts_heros_sectin'>
        <img src='about_5.jpg' className='' alt='Media' />
      </div>
      <div className='feed-back-content'>
        <p className='fs-5 mt-4 fw-semibold ms-3'>
          <Link to='/contact' className="text-decoration-none text-black"><FaAngleLeft />Back</Link>
        </p>
        <div className='ms-5 ps-5 mt-5'>
          <p className='text-white'>
            <CgMediaPodcast className='text-primary fs-4' />
            <span className='fw-semibold ms-2'>PRESS AND MEDIA</span>
          </p>
          <h6 className='fs-5 fw-normal pt-2 pb-4'>
            We’re so glad you reached out! Connecting you to our experts on the ground is a priority for us. Tell us which region you’re looking to find out more about, and we’ll put you in touch.
          </h6>
          <div className='row'>
            <div className='col-12'>
              <select
                className={`form-select ${selectedIndustry ? 'is-valid' : ''}`}
                name="Region"
                onChange={handleChange}>
                <option value="" label="Region" />
                {industries.map((industry) => (
                  <option key={industry.value} value={industry.value} label={industry.label} />
                ))}
              </select>
            </div>
          </div>
          {selectedIndustry && (
            <div className='mt-4'>
              <h6 className='text-white'>Region:</h6>
              <div className='row text-white'>
                {selectedIndustry.data.map((person, index) => (
                  <div key={index} className={`col-12 ${selectedIndustry.data.length > 1 ? 'col-md-6' : ''} mb-3`}>
                    <h5><strong className='me-3'>Name:</strong> {person.name}</h5>
                    <h5><strong>Email:</strong><MdEmail className='fw-semibold ms-3'/>  {person.email}</h5>
                    <h5><strong>Mobile:</strong> <FiPhoneCall className='fw-semibold ms-3'/> {person.mobile}</h5>
                  </div>
                ))}
              </div>
              <div>
                <Link to='/contact' className="btn btn-primary">Home</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

