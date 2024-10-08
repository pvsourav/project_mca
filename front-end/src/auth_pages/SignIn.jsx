import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './signin.scss';
import tkmimg from '../assets/tkm4.jpg';
import logo from '../assets/logo.png';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ErrorIcon from '@mui/icons-material/Error';




const SignIn = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate

  const password = watch("password");

  // const API_ENDPOINT = 'http://192.168.72.250:3000/signin'; 
  const API_ENDPOINT = 'http://192.168.1.6:3000/signin'; 

  const onSubmit = async (data) => {
    setIsLoading(true);
    setApiError(null);

    const userData = {
      email: data.email,
      password: data.password
    };

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('API Response:', result);
      
      
      if(result.response.status=='success'){
        navigate('/profile');
      }
      if(result.response.status=='passwordIncorrect'){
        alert('Password incorrect')
      }
      
      if(result.response.status=='userNotExist'){
        alert('User Not Exist')
      }
      
    } catch (error) {
      console.error('Error:', error);
      setApiError('An error occurred while logging in. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="banner">
        <img src={tkmimg} alt="" />
        <span className="overlay"></span>
        <div className="tkm">
          <img src={logo} alt="" />
          <h1 className="tkm_title">TKM College of Engineering, Kollam</h1>
        </div>
        <div className="title_wrapper">
          <h1 className="title">Department of</h1>
          <h1 className="title">Computer</h1>
          <h1 className="title">Applications</h1>
        </div>
      </div>

      <div className="login-form">
        <h1>Hi There!</h1>
        <p>Enter your email and password to access your account</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={errors.email ? 'error' : ''}
              {...register("email", {
                required: "Email is required",
                // pattern: {
                //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                //   message: "Invalid email address"
                // }
              })}
            />
            {errors.email && <span className="error-message"><ErrorIcon className='icon'/>{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={errors.password ? 'error' : ''}
                {...register("password", { required: "Password is required" })}
              />
              {password && (
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Visibility className='icon' /> : <VisibilityOff className='icon' />}
                </button>
              )}
            </div>
            {errors.password && <span className="error-message"><ErrorIcon className='icon' />{errors.password.message}</span>}
          </div>

          {apiError && <p className="api-error-message">{apiError}</p>}

          <div className="form-actions">
            <a href="#forgot-password" className="forgot-password">Forgot Password</a>
          </div>

          <button type="submit" className="sign-in-button" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>

        </form>
        <p className="sign-up-link">
          Don't have an account? <Link to="/sign-up" className="">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
