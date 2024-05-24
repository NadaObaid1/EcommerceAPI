import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import image from '../assets/w.jpg'

export default function SendCode() {
  const [errors, setErrors] = useState([]);
  const [statusErrors, setStatusErrors] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const navigate = useNavigate();

  const schema = Yup.object({
    email: Yup.string().required("Email is required").email("Not a valid email"),
    password: Yup.string().required("Password is required"),
    code: Yup.string().required("code is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      code: ''
    },
    validationSchema: schema,
    onSubmit: sendDataRegister,
  });

  async function sendDataRegister(values) {
    try {
      const { data } = await axios.patch("https://ecommerce-node4-five.vercel.app/auth/forgotPassword", values);
      if (data.message === 'success') {
        setErrors([]);
        setStatusErrors('');
        setWelcomeMessage("The password has been changed successfully. You can now log in using your new password.");
        setTimeout(() => {
          navigate('/LogIn');
        }, 3000);
      } else {
        setErrors(data.errors);
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setStatusErrors(err.response.data.message);
      } else {
        setStatusErrors('An error occurred. Please try again.');
      }
    }
  }
  return (
    <div className='w-75 m-auto'>
  
      {errors.map((error, index) => (
        <div key={index} className='text-danger'>{error.message}</div>
      ))}
  
      <form onSubmit={formik.handleSubmit} className="d-flex align-items-center form-container">
        <div className="mb-3 me-3">
          <label htmlFor="email" className="form-label" style={{ fontSize: '1.2rem' }}>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-danger">{formik.errors.email}</div>
          )}

          <label htmlFor="password" className="form-label" style={{ fontSize: '1.2rem' }}>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-danger">{formik.errors.password}</div>
          )}
          
          <label htmlFor="code" className="form-label" style={{ fontSize: '1.2rem' }}>Code</label>
          <input
            type="code"
            name="code"
            id="code"
            className="form-control"
            value={formik.values.code}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.code && formik.errors.code && (
            <div className="text-danger">{formik.errors.code}</div>
          )}
  
          <button type="submit" className="btn1 btn-burgundy my-5">Reset Password</button>
        </div>

        <div className="me-3 image-container" style={{ width: '70%' }}>
          <img src={image} alt="Description of the image" />
        </div>
      </form>
  
      {statusErrors && (
        <div className="mb-3 text-danger">{statusErrors}</div>
      )}
  
      {welcomeMessage && (
        <div className="alert alert-success mt-4" role="alert">
          {welcomeMessage}
        </div>
      )}
    </div>
  );
}  
