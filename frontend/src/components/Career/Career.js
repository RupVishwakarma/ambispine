import React from 'react'
import './Career.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from './../../layouts/footer/Footer';
export default function Career() {
  return (
    <div className='Career container-fluid '>
          <div className='text-center text-top '>
          <h3 className='fs-1 fw-light'>Our Latest Vacancies</h3>
          <p className='fs-5 mx-5'>With exposure to the nodes as low as 14nm/7nm, AnEdge team can drive projects with full esteem for customer goal. Coopeartion in limitless bounderies, AnEdge can offer below to describe a few:</p>
          <hr className='mx-5' />
          </div>
          <div className='overflow-y-auto ' style={{height:"500px"}}> 
          <JobProfile jobname="Engineer Trainee(fresher)" date="July 20th, 2022 Posted By AnEdge" />
          <JobProfile jobname="INTERNSHIP PROGRAM (1- Year)" date="July 20th, 2022 Posted By AnEdge" />
          <JobProfile jobname="INTERNSHIP PROGRAM (3-months)" date="July 20th, 2022 Posted By AnEdge" />
          <JobProfile jobname="INTERNSHIP PROGRAM (1- Year)" date="July 20th, 2022 Posted By AnEdge" />
          <JobProfile jobname="INTERNSHIP PROGRAM (3-months)" date="July 20th, 2022 Posted By AnEdge" />
          </div>
          <hr className='mx-5' />
          <Footer />
    </div>
  )
}


function JobProfile({ jobname, date }) {
  const formik = useFormik({
    initialValues: {
      name: '',
      mobile: '',
      email: '',
      resume: null,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      mobile: Yup.string()
        .matches(/^\d{10}$/, 'Must be a valid 10-digit number')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      resume: Yup.mixed()
        .required('Required')
        .test('fileFormat', 'Unsupported Format', value => {
          return value && (value.type === 'application/pdf' || value.type === 'application/msword');
        }),
    }),
    onSubmit: values => {
      alert("Form submitted successfully");
    },
  });

  return (
    <React.Fragment>
      <div className='row mb-4 mx-5 px-5 mt-5'>
        <div className='col-12 col-md-6 mx-auto px-auto'>
          <h5 className='text-primary'>{jobname}</h5>
          <h3 className='text-primary fs-4'>{date}</h3>
          <span><b className='fw-bold'>Location</b>: SATNA <b className='fw-bold'>No of Post: 4</b></span>
        </div>
        <div className='col-12 col-md-6 text-center mx-auto px-auto'>
          <button className="bg-warning fs-5 text-black border-0 rounded-1 px-2" data-bs-toggle="modal" data-bs-target="#ApplyJob">Apply Now</button>
          <div className="modal fade mt-5" id="ApplyJob" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered mt-5">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5 mt-3" id="exampleModalLabel">Apply Now</h1>
                </div>
                <div className="modal-body text-start">
                  <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="name" className="form-label mt-2">Applicant Name</label>
                    <input
                      id="name" name="name" type="text" className='form-control'
                      placeholder='Applicant Name'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="text-danger">{formik.errors.name}</div>
                    ) : null}

                    <label htmlFor="mobile" className="form-label mt-2">Mobile Number</label>
                    <input
                      id="mobile"
                      name="mobile"
                      type="text"
                      className='form-control'
                      placeholder='Mobile Number'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.mobile}
                    />
                    {formik.touched.mobile && formik.errors.mobile ? (
                      <div className="text-danger">{formik.errors.mobile}</div>
                    ) : null}

                    <label htmlFor="email" className='form-label mt-2'>Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className='form-control'
                      placeholder='Email Address'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-danger">{formik.errors.email}</div>
                    ) : null}

                    <label htmlFor="resume" className="form-label mt-2">Upload Resume</label> <br />
                    <input
                      id="resume" name="resume" type="file" className='form-control'
                      onChange={(event) => {
                        formik.setFieldValue("resume", event.target.files[0]);
                      }}
                      onBlur={formik.handleBlur}
                    />
                    <p className='small'>file format in doc or pdf</p>
                    {formik.touched.resume && formik.errors.resume ? (
                      <div className="text-danger">{formik.errors.resume}</div>
                    ) : null}
                    
                    <br />
                    <button type="submit" className="btn btn-primary px-3 ms-4 mt-2">Save</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
;
