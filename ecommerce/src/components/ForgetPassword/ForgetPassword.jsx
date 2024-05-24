import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './ForgetPassword.css'
import image from '../assets/ww.jpg'

export default function ForgetPassword() {
  const [errors, setErrors] = useState([]);
  const [statusErrors, setStatusErrors] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const navigate = useNavigate();

  const schema = Yup.object({
    email: Yup.string().required("Email is required").email("Not a valid email"),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: schema,
    onSubmit: sendDataRegister,
  });

  async function sendDataRegister(values) {
    try {
      const { data } = await axios.patch("https://ecommerce-node4-five.vercel.app/auth/sendcode", values);
      if (data.message === 'success') {
        setErrors([]);
        setStatusErrors('');
        setWelcomeMessage("The code has been successfully sent to your email");
        setTimeout(() => {
          navigate('/SendCode');
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
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control1"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-danger">{formik.errors.email}</div>
          )}
          <button type="submit" className="btn btn-burgundy my-5" style={{backgroundColor: '#151613', color: '#fff', fontSize: 14}}>Reset Password</button>
        </div>
  
        <div className="me-3 image-container" style={{ width: '70%', marginBottom: '100px' }}>
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