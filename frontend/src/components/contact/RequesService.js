import React from 'react'
import './Contact.css';
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { MdOutlineLocalLaundryService } from "react-icons/md";

export default function RequestService() {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      orgaization: '',
      region: '',
      industry: '',
      feedback: '',
      acceptProcess: false,
      product_details: false,
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required('First name is required'),
      lastname: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      orgaization: Yup.string().required('Organization is required'),
      region: Yup.string().required('Region is required'),
      industry: Yup.string().required('Industry is required'),
      feedback: Yup.string().required('Feedback is required'),
      acceptProcess: Yup.boolean().oneOf([true], 'You must accept the process'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:4000/api/request-service', values);
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
        <p className='fs-5 mt-4 fw-semibold ms-3'>
          <Link to='/contact' className="text-decoration-none text-black"><FaAngleLeft />Back</Link>
        </p>
        <div className='ms-5 ps-5 mt-5'>
          <p className='text-white'>
            <MdOutlineLocalLaundryService className='text-primary fs-4 '/>
            <span className='fw-semibold ms-2'>Request for Services</span>
          </p>
          <h6 className='fs-5 fw-normal pt-2 pb-4 '>
            We’ve driven growth and purposeful transformation across every industry and we’re excited to build on your belief. Tell us a bit more about yourself, so we can get the ball rolling.
          </h6>
          <form onSubmit={formik.handleSubmit}>
            <div className="row g-4">
              <div className="col-6">
                <input
                  type="text"
                  className={`form-control ${formik.touched.firstname && formik.errors.firstname ? 'is-invalid' : ''}`}
                  name="firstname"
                  placeholder="First name*"
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
                <input
                  type="text"
                  className={`form-control ${formik.touched.lastname && formik.errors.lastname ? 'is-invalid' : ''}`}
                  name="lastname"
                  placeholder="Last name*"
                  aria-label="Last name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastname}
                />
                {formik.touched.lastname && formik.errors.lastname ? (
                  <div className="invalid-feedback">{formik.errors.lastname}</div>
                ) : null}
              </div>

              <div className="col-6">
                <input
                  type="email"
                  className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                  name="email"
                  placeholder="Email*"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className={`form-control ${formik.touched.orgaization && formik.errors.orgaization ? 'is-invalid' : ''}`}
                  name="orgaization"
                  placeholder="Organization*"
                  aria-label="Organization"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.orgaization}
                />
                {formik.touched.orgaization && formik.errors.orgaization ? (
                  <div className="invalid-feedback">{formik.errors.orgaization}</div>
                ) : null}
              </div>

              <div className='col-12'>
                <select
                  className={`form-select ${formik.touched.region && formik.errors.region ? 'is-invalid' : ''}`}
                  name="region"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.region}
                >
                  <option value="" label="Region*" />
                  <option value="India" label="India" />
                  <option value="Australia & New Zeeland" label="Australia & New Zeeland" />
                  <option value="USA & Canada" label="USA & Canada" />
                </select>
                {formik.touched.region && formik.errors.region ? (
                  <div className="invalid-feedback">{formik.errors.region}</div>
                ) : null}
              </div>

              <div className='col-12'>
                <select
                  className={`form-select ${formik.touched.industry && formik.errors.industry ? 'is-invalid' : ''}`}
                  name="industry"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.industry}
                >
                  <option value="" label="Industry*" />
                  <option value="High Tech" label="High Tech" />
                  <option value="Public Services" label="Public Services" />
                  <option value="Education" label="Education" />
                </select>
                {formik.touched.industry && formik.errors.industry ? (
                  <div className="invalid-feedback">{formik.errors.industry}</div>
                ) : null}
              </div>

              <div className="col-12">
                <label htmlFor="request_service" className="form-label fw-semibold text-white">HOW CAN WE HELP YOU?</label>
                <textarea
                  className={`form-control ${formik.touched.feedback && formik.errors.feedback ? 'is-invalid' : ''}`}
                  id="request_service"
                  name="feedback"
                  rows="5"
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
                  <label className="form-check-label text-white ms-2" htmlFor="acceptProcess">
                    I consent to the processing of my personal data entered above for AMBISPINE TECHNOLOGIES to C *
                  </label>
                </div>
                {formik.touched.acceptProcess && formik.errors.acceptProcess ? (
                  <div className="invalid-feedback d-block">{formik.errors.acceptProcess}</div>
                ) : null}
              </div>

              <div className="col-12 d-flex flex-column">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="product_details"
                    name="product_details"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.product_details}
                  />
                  <label className="form-check-label text-white ms-2" htmlFor="product_details">
                    I would like to receive details about products, services, and events from TCS to contact me.
                  </label>
                </div>
              </div>
            </div>
            <p className='fw-semibold text-white mt-4'>
              For further details on how your personal data will be processed and how your consent can be managed, refer to the <a href='#' className='text-primary'>TCS Privacy Notice.</a>
            </p>
            <h6 className='text-white'>Mandatory fields*</h6>
            <button type="submit" className="bg-secondary border-0 fs-5 rounded-pill px-4 py-2 text-white">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
