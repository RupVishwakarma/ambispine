import React from 'react'
import './Contact.css';
import { FaAngleLeft } from "react-icons/fa6";
import { PiChatCircleDotsFill } from "react-icons/pi";
import {Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function Feedback() {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      feedback: '',
      acceptProcess: false,
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required('First name is required'),
      lastname: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      feedback: Yup.string().required('Feedback is required'),
      acceptProcess: Yup.boolean().oneOf([true], 'You must accept the process'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:4000/api/feedback', values);
        alert('Form submitted successfully');

      } catch (error) {
        alert('Error submitting form: ', error.response?.data || error.message);
      } 
    },
  });
  return (
    <div className='Contact-Option '>
      <div className='contacts_heros_sectin'>
          <img src='about_5.jpg' className=''/>
      </div>
      <div className='feed-back-content '>
        <p className='fs-5 mt-4 fw-semibold ms-3'><Link to='/contact' className="text-decoration-none text-black"><FaAngleLeft />Back</Link></p>
        <div className='ms-5 ps-5 mt-5'>
          <p className='text-white'><PiChatCircleDotsFill className='text-primary fs-4 '/><span className='fw-semibold ms-2'>WEBSITE FEEDBACK </span> </p>
          <h6 className='fs-5 fw-normal pt-2 pb-4 '>
          Let us know what you think of the ambiSpine.com. We welcome your suggestions, comments, and opinions.
          </h6>
          <form onSubmit={formik.handleSubmit}>
        <div className="row g-4">
          <div className="col-6">
            <input
              type="text"
              className={`form-control ${formik.touched.firstname && formik.errors.firstname ? 'is-invalid' : ''}`}
              name="firstname"
              placeholder="First name"
              aria-label="First name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstname}
            />
            {formik.touched.firstname && formik.errors.firstname ? (
              <div className="invalid-feedback">{formik.errors.firstname}</div>
            ) : null}
          </div>
          <div className="col-6">
            <input  type="text"
              className={`form-control ${formik.touched.lastname && formik.errors.lastname ? 'is-invalid' : ''}`}
              name="lastname"
              placeholder="Last name"
              aria-label="Last name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastname}
            />
            {formik.touched.lastname && formik.errors.lastname ? (
              <div className="invalid-feedback">{formik.errors.lastname}</div>
            ) : null}
          </div>
          <div className="col-12">
            <input  type="email"
              className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
              name="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email} />
            {formik.touched.email && formik.errors.email ? (
              <div className="invalid-feedback">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="col-12">
            <label htmlFor="feedback" className="form-label fw-semibold">HOW CAN WE HELP YOU?</label>
            <textarea
              className={`form-control ${formik.touched.feedback && formik.errors.feedback ? 'is-invalid' : ''}`}
              id="feedback"
              name="feedback"  rows="5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.feedback}
            ></textarea>
            {formik.touched.feedback && formik.errors.feedback ? (
              <div className="invalid-feedback">{formik.errors.feedback}</div>
            ) : null}
          </div>
          <div className="col-12 d-flex flex-column">
                <div className={`form-check ${formik.touched.acceptProcess && formik.errors.acceptProcess ? 'is-invalid' : ''}`}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="acceptProcess"
                    name="acceptProcess"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.acceptProcess} />
                  <label className="form-check-label text-white ms-2" htmlFor="acceptProcess">I consent to the processing of my personal data entered above for the purpose of recording the feedback *</label>
                </div>
                {formik.touched.acceptProcess && formik.errors.acceptProcess ? (
                  <div className="invalid-feedback d-block">{formik.errors.acceptProcess}</div>
                ) : null}
              </div>
        </div>
        <p className='fw-semibold text-white mt-4'>For further details on how your personal data will be processed and how your consent can be managed, refer to the <a href='#' className='text-primary'>TCS Privacy Notice.</a>​</p>
        <h6 className='text-white'>Mandatory fields*</h6>
        <button type="submit" className="bg-secondary border-0 fs-5 px-4 mb-4 py-1 mt-3 text-white rounded-pill" >
          Send
        </button>
      </form>  
        </div>
      </div>
    </div>
  )
}
