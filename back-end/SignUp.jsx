import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './signup.scss';
import tkmimg from '../assets/tkm4.jpg';
import logo from '../assets/logo.png';
import student from '../assets/student.png';
import alumni from '../assets/alumni.png';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ErrorIcon from '@mui/icons-material/Error';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



const SignUp = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Added state
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  const { register, handleSubmit, formState: { errors }, watch } = useForm();


  const password = watch("password");
  const confirmPassword = watch("confirmPassword"); // Watch confirm password field


  // const API_ENDPOINT = 'http://192.168.72.250:3000/signup'; 
  const API_ENDPOINT = 'http://localhost:3000/signup'; 



  const handleUserSelection = (user) => {
    setSelectedUser(user);
    setShowLoginForm(true);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    setApiError(null);

    const userData = {
      userType: selectedUser,
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
      // Handle successful signup here (e.g., show success message, redirect user)
    } catch (error) {
      console.error('Error:', error);
      setApiError('An error occurred while signing up. Please try again.');
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

      <div className="form-container">
        {!showLoginForm ? (
          <div className="user-form">
            <h1>Hi There!</h1>
            <p>Let us know who you are </p>

            <div className="user-types">
              <div className="user-type" onClick={() => handleUserSelection('student')}>
                <img src={student} alt="" className='user-icon'/>
                <div className="user-content">
                  <h2>Student</h2>
                </div>
                <ArrowForwardIosIcon className="arrow-icon" />
              </div>

              <div className="user-type" onClick={() => handleUserSelection('faculty')}>
                <img src={alumni} alt="" className='user-icon'/>
                <div className="user-content">
                  <h2>Faculty</h2>
                </div>
                <ArrowForwardIosIcon className="arrow-icon" />
              </div>

              <div className="user-type" onClick={() => handleUserSelection('alumni')}>
                <img src={alumni} alt="" className='user-icon'/>
                <div className="user-content">
                  <h2>Alumni</h2>
                </div>
                <ArrowForwardIosIcon className="arrow-icon" />
              </div>
            </div>
            <p className="login-link">
              Already have an account? <a href="#sign-up">Sign In</a>
            </p>
          </div>
        ) : (
          <div className="register-form">
            <h1>Create an Account</h1>
            <p>Enter your details to register</p>
            
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
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
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
                    placeholder="Enter new password"
                    className={errors.password ? 'error' : ''}
                    {...register("password", { 
                      required: "Password is required",
                      // minLength: {
                      //   value: 8,
                      //   message: "Password must be at least 8 characters long"
                      // },
                      // pattern: {
                      //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/,
                      //   message: "Password must contain a lowercase, an uppercase, and a special character"
                      // }
                    })}
                  />
                  {password && (
                    <button 
                      type="button" 
                      className="toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Visibility className='icon'/> : <VisibilityOff className='icon'/>}
                    </button>
                  )}
                </div>
                {errors.password && <span className="error-message"><ErrorIcon className='icon'/>{errors.password.message}</span>}
              </div>

              <div className="form-group">
                <div className="password-input">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className={errors.confirmPassword ? 'error' : ''}
                    {...register("confirmPassword", { 
                      required: "Please confirm your password",
                      validate: value => value === password || "Passwords do not match"
                    })}
                  />
                  {confirmPassword && (
                    <button 
                      type="button" 
                      className="toggle-password"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <Visibility className='icon'/> : <VisibilityOff className='icon'/>}
                    </button>
                  )}
                </div>
                {errors.confirmPassword && <span className="error-message"><ErrorIcon className='icon'/>{errors.confirmPassword.message}</span>}
              </div>

              <button type="submit" className="register-button" disabled={isLoading}>
                {isLoading ? 'Saving...' : 'Next'}
              </button>
            </form>
            <p className="login-link">
              Already have an account? <a href="/sign-in">Sign In</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
