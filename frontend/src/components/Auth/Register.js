import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      mobile: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      mobile: Yup.string()
        .matches(/^\d{10}$/, 'Must be a valid 10-digit number')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required')
    }),
    onSubmit: async data => {
      try {
        const response = await axios.post("http://localhost:4000/api/register", data);

        const { refreshToken } = response.data;

        localStorage.setItem("refreshToken", refreshToken);
  
        document.cookie = `refreshToken=${refreshToken}; path=/; secure; samesite=strict`;
   
        alert("Registration successful");
        navigate('/login');
      } catch (error) {
        alert('Error during registration: ', error.message || error);
      }
    }
   
  });
  return (
    <div className="bg-primary" style={{marginTop:"80px", height:"100vh" }}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card mt-3">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Register</h3>
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                    placeholder="Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="invalid-feedback">{formik.errors.name}</div>
                  ) : null}
                </div>

                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">Mobile Number</label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="text"
                    className={`form-control ${formik.touched.mobile && formik.errors.mobile ? 'is-invalid' : ''}`}
                    placeholder="Mobile Number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mobile}
                  />
                  {formik.touched.mobile && formik.errors.mobile ? (
                    <div className="invalid-feedback">{formik.errors.mobile}</div>
                  ) : null}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                    placeholder="Email Address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="invalid-feedback">{formik.errors.email}</div>
                  ) : null}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="invalid-feedback">{formik.errors.password}</div>
                  ) : null}
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className={`form-control ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'is-invalid' : ''}`}
                    placeholder="Confirm Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                  />
                  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div className="invalid-feedback">{formik.errors.confirmPassword}</div>
                  ) : null}
                </div>

                <button type="submit" className="btn btn-primary w-100">Register</button>
              </form>
              <div className="text-center mt-3">
                <p>Already have an account? <Link to="/login">Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
