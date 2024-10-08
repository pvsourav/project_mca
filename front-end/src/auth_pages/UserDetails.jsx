import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ErrorIcon from '@mui/icons-material/Error';
import './userdetails.scss'

const UserDetails = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [profilePhoto, setProfilePhoto] = useState(null);

  const onSubmit = (data) => {
    console.log({ ...data, profilePhoto });
    // Handle form submission
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({length: 75}, (_, i) => currentYear - i);

  const countries = ["United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "Japan", "India", "Brazil", "South Africa"];

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className="user-details-container">
      <h1>User Details</h1>
      <p>Please fill in your information</p>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="profile-photo-container">
          <input
            id="profilePhoto"
            type="file"
            accept="image/*"
            onChange={handleProfilePhotoChange}
            className={errors.profilePhoto ? 'error' : ''}
          />
          <label htmlFor="profilePhoto" className="profile-photo-label">
            {profilePhoto ? (
              <img src={profilePhoto} alt="Profile" className="profile-photo-preview" />
            ) : (
              <div className="profile-photo-placeholder">
                <span>Upload Photo</span>
              </div>
            )}
          </label>
          {errors.profilePhoto && <span className="error-message"><ErrorIcon className='icon'/>{errors.profilePhoto.message}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              className={errors.firstName ? 'error' : ''}
              {...register("firstName", { 
                required: "First name is required"
              })}
            />
            {errors.firstName && <span className="error-message"><ErrorIcon className='icon'/>{errors.firstName.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              className={errors.lastName ? 'error' : ''}
              {...register("lastName", { 
                required: "Last name is required"
              })}
            />
            {errors.lastName && <span className="error-message"><ErrorIcon className='icon'/>{errors.lastName.message}</span>}
          </div>
        </div>

        <div className="form-group">
          <label>Batch</label>
          <div className="batch-inputs">
            <div className="batch-input">
              <select
                className={errors.batchFrom ? 'error' : ''}
                {...register("batchFrom", { 
                  required: "Batch start year is required"
                })}
              >
                <option value="">From</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              {errors.batchFrom && <span className="error-message"><ErrorIcon className='icon'/>{errors.batchFrom.message}</span>}
            </div>
            <div className="batch-input">
              <select
                className={errors.batchTo ? 'error' : ''}
                {...register("batchTo", { 
                  required: "Batch end year is required"
                })}
              >
                <option value="">To</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              {errors.batchTo && <span className="error-message"><ErrorIcon className='icon'/>{errors.batchTo.message}</span>}
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firm">Firm</label>
            <input
              id="firm"
              type="text"
              placeholder="Enter your firm name"
              className={errors.firm ? 'error' : ''}
              {...register("firm", { 
                required: "Firm name is required"
              })}
            />
            {errors.firm && <span className="error-message"><ErrorIcon className='icon'/>{errors.firm.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="mobNumber">Mobile Number</label>
            <input
              id="mobNumber"
              type="tel"
              placeholder="Enter your mobile number"
              className={errors.mobNumber ? 'error' : ''}
              {...register("mobNumber", { 
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid mobile number"
                }
              })}
            />
            {errors.mobNumber && <span className="error-message"><ErrorIcon className='icon'/>{errors.mobNumber.message}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="residence">Current Place of Residence</label>
            <input
              id="residence"
              type="text"
              placeholder="Enter your current place of residence"
              className={errors.residence ? 'error' : ''}
              {...register("residence", { 
                required: "Current place of residence is required"
              })}
            />
            {errors.residence && <span className="error-message"><ErrorIcon className='icon'/>{errors.residence.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select
              id="country"
              className={errors.country ? 'error' : ''}
              {...register("country", { 
                required: "Country is required"
              })}
            >
              <option value="">Select a country</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            {errors.country && <span className="error-message"><ErrorIcon className='icon'/>{errors.country.message}</span>}
          </div>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserDetails;