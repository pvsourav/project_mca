import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorIcon from '@mui/icons-material/Error';
import './userdetails.scss'

const UserDetails = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      course: 'Master of Computer Application'
    }
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({length: 75}, (_, i) => currentYear - i);

  return (
    <div className="user-details-container">
      <h1>User Details</h1>
      <p>Please fill in your information</p>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            className={errors.fullName ? 'error' : ''}
            {...register("fullName", { 
              required: "Full name is required"
            })}
          />
          {errors.fullName && <span className="error-message"><ErrorIcon className='icon'/>{errors.fullName.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="course">Course</label>
          <input
            id="course"
            type="text"
            className={errors.course ? 'error' : ''}
            {...register("course", { 
              required: "Course is required"
            })}
          />
          {errors.course && <span className="error-message"><ErrorIcon className='icon'/>{errors.course.message}</span>}
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

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserDetails;