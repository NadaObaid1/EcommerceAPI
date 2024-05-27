import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState, useContext } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';
import { AuthContext } from '../../AuthContext';

export default function LogIn() {
  const [errors, setErrors] = useState([]);
  const [statusErrors, setStatusErrors] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);

  const schema = Yup.object({
    email: Yup.string().required("Email is required").email("Not a valid email"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: sendDataRegister,
  });

  async function sendDataRegister(values) {
    try {
      const { data } = await axios.post("https://ecommerce-node4-five.vercel.app/auth/signin", values);
      if (data.message === 'success') {
        setErrors([]);
        setStatusErrors('');
        setWelcomeMessage("Welcome! We're glad to have you here.");
        setToken(data.token);  // Store the token in context
        setTimeout(() => {
          navigate('/ProductsScreen');
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
      <h2 className="mt-5 mb-5">Login</h2>

      {errors.map((error, index) => (
        <div key={index} className='text-danger'>{error.message}</div>
      ))}

      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" name="email" id="email" className="form-control"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-danger">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name="password" id="password" className="form-control"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-danger">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="mb-3 text-danger">{statusErrors}</div>

        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <button type="submit" className="btn btn-primary btn-burgundy my-5">Login</button>
          <a href='/ForgetPassword'>forget password?</a>
        </div>
      </form>

      {welcomeMessage && (
        <div className="alert alert-success mt-4" role="alert">
          {welcomeMessage}
        </div>
      )}
    </div>
  );
}
