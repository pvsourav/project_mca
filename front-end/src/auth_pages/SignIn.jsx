import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './signin.scss';
import tkmimg from '../assets/tkm4.jpg';
import logo from '../assets/logo.png';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ErrorIcon from '@mui/icons-material/Error';
import axios from 'axios';


const SignIn = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState(null);
  
  const navigate = useNavigate(); // Initialize useNavigate
  const password = watch("password");

  // Function to handle form submission
  const onSubmit = async (data) => {
    setIsLoading(true);
    setApiError(null);

    const userData = {
      email: data.email,
      password: data.password
    };

    try {
      const response = await axios.post('http://localhost:3000/signin', userData, {
        withCredentials: true, // This ensures cookies (sessions) are sent along with the request
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const result = response.data; // Extracting the data from the axios response

      console.log('API Response:', result);

      // Check the response status and handle accordingly
      if(result.response.status === 'success' ){
        if(result.response.userType==='admin'){
          navigate('/admin');
        }
         // Redirect to profile on successful login
      } else if(result.response === 'passwordIncorrect'){
        alert('Password incorrect');
      } else if(result.response === 'userNotExist'){
        alert('User does not exist');
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
          Don't have an account? <Link to="/sign-up" className="">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
