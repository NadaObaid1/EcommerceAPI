import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export default function Register() {
  let [errors, setErrors] = useState([]);
  let navigate = useNavigate();
  let [statusErrors, setStatusErrors] = useState("");

  const schema = Yup.object({
    userName: Yup.string().required("Name is required").min(3, "min is 3 char").max(12, "max is 12 char"),
    email: Yup.string().required("Email is required").email("not valid email"),
    password: Yup.string().required("Password is required"),
  });

  let formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      image: null,
    },
    validationSchema: schema,
    onSubmit: sendDataRegister,
  });

  async function sendDataRegister(values) {
    const formData = new FormData();
    formData.append('userName', values.userName);
    formData.append('email', values.email);
    formData.append('password', values.password);
    if (values.image) {
      formData.append('image', values.image);
    }

    try {
      const { data } = await axios.post("https://ecommerce-node4-five.vercel.app/auth/signup", formData);
      if (data.message === 'success') {
        setErrors([]);
        setStatusErrors('');
        navigate('/LogIn');
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
      <h2 className="mt-5 mb-5">Register</h2>

      {errors.map((error, index) => (
        <div key={index} className='text-danger'>{error.message}</div>
      ))}

      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">Name</label>
          <input type="text" name="userName" id="userName" className="form-control"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.userName && formik.errors.userName ? (
            <div className="text-danger">{formik.errors.userName}</div>
          ) : null}
        </div>

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

        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image</label>
          <input type="file" name="image" id="image" className="form-control"
            onChange={(event) => {
              formik.setFieldValue("image", event.currentTarget.files[0]);
            }}
          />
        </div>

        <div className="mb-3 text-danger">{statusErrors}</div>

        <button type="submit" className="btn btn-primary btn-burgundy my-5">Register</button>
      </form>
    </div>
  );
}
