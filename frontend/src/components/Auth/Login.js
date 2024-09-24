import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const formik = useFormik({  
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async data => {
      try {
        const response = await axios.post('http://localhost:4000/api/login', data);
        const { refreshToken } = response.data;
        localStorage.setItem("refreshToken", refreshToken);
        alert("Login successful");
        navigate("/");
      } catch (error) {
        console.error('Login error:', error.response?.data || error.message);
      }
    },
  });

  return (
    <div className="bg-primary" style={{marginTop:"80px", height:"100vh"}}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card mt-3">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3  ">
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
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
            <div className="text-center mt-3">
                <p>Create a new account <Link to="/register">Register</Link></p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
