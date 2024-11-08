import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, AlertCircle } from "lucide-react";
import axios from 'axios';
import logo from '../assets/logo.png';
import back1 from '../assets/back1.jpg';
import './signin.scss';

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setApiError(null);
  
    try {
      const response = await axios.post(
        'http://192.168.29.250:3000/signin',
        {
          email: data.email,
          password: data.password,
        },
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        }
      );
  
      const { status, userType } = response.data.response;
  
      if (status === 'success') {
        if (userType === 'admin') {
          navigate('/admin');
        } else if (userType === 'alumni') {
          navigate('/alumni');
        } else {
          navigate('/dashboard');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        switch (error.response.data.response) {
          case 'passwordIncorrect':
            setApiError('Password incorrect');
            break;
          case 'userNotExist':
            setApiError('User does not exist');
            break;
          default:
            setApiError('An error occurred while logging in. Please try again.');
        }
      } else {
        setApiError('An error occurred while logging in. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="profile-form">
      <div className="form-container">
        <div className="banner">
          <img src={back1} alt="Background" />
          <span className="overlay"></span>
          <div className="tkm">
            <img src={logo} alt="TKM Logo" />
            <h1 className="tkm_title">TKM College of Engineering, Kollam</h1>
          </div>
          <div className="title_wrapper">
            <h1 className="title">Department of</h1>
            <h1 className="title">Computer</h1>
            <h1 className="title">Applications</h1>
          </div>
        </div>

        <div className="form-content">
          <div className="welcome-text">
            <h1>Hi There!</h1>
            <p>Let us know who you are </p>
          </div>

          <div className="form-wrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <User className="icon" />
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
                </div>
                {errors.email && <span className="error-message"><AlertCircle className='icon'/>{errors.email.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <Lock className="icon" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className={errors.password ? 'error' : ''}
                    {...register("password", { required: "Password is required" })}
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className='icon' /> : <Eye className='icon' />}
                  </button>
                </div>
                {errors.password && <span className="error-message"><AlertCircle className='icon' />{errors.password.message}</span>}
              </div>

              {apiError && <p className="api-error-message"><AlertCircle className='icon' />{apiError}</p>}

              <div className="form-actions">
                <a href="#forgot-password" className="forgot-password">Forgot Password</a>
              </div>

              <button type="submit" className="sign-in-button" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>

            </form>
            <p className="sign-up-link">
              Don't have an account? <Link to="/sign-up">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
