import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './registerpage.scss';
import tkmimg from '../assets/tkm4.jpg'
import logo from '../assets/logo.png'

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ErrorIcon from '@mui/icons-material/Error';

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch("password");

  const onSubmit = async (data) => {
    setIsLoading(true);
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    setIsLoading(false);
  };

  return (
    <div className="register-container">
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
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long"
                  }
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
              {watch("confirmPassword") && (
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
          Already have an account? <a href="#sign-up">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;