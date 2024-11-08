import React, { useState } from 'react';
import axios from 'axios';
import './meetupform.scss';

const MeetupForm = () => {

  
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    venue: '',
    description: '',
    organiser: userData.email,
    approval: 'false',
  });

  

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleToggleChange = (checked) => {
    setFormData((prevData) => ({
      ...prevData,
      visibility: checked ? 'true' : 'false',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.29.250:3000/addmeetup', formData);
      console.log('Meetup added:', response.data);
    } catch (error) {
      console.error('Error adding meetup:', error);
    }
  };

  return (
    <div className="meetup-form-container">
      <div className="form-header">
        <h3>Schedule a meetup</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-info-text">
            <label>Meetup Info</label>
            <p>Please provide the meetup details</p>
          </div>

          <div className="fields-wrapper">
            <div className="form-field">
              <label>Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>Time</label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => handleInputChange('time', e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>Venue</label>
              <input
                type="text"
                value={formData.venue}
                onChange={(e) => handleInputChange('venue', e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
              />
            </div>
          </div>

          <div className="toggle-text">
            <h3>Institution Approval</h3>
            <p>This requires approval from the department</p>
          </div>

          <div className="toggle-switch-wrapper">
            <h3>Meetup at College</h3>
            <div className="toggle-switch">
              <input
                type="checkbox"
                checked={formData.visibility === 'true'}
                onChange={(e) => handleToggleChange(e.target.checked)}
                id="status-toggle"
              />
              <label className="slider" htmlFor="status-toggle"></label>
            </div>
            {/* <p>{formData.visibility === 'on' ? 'true' : 'false'}</p> */}
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="cancel">
            Cancel
          </button>
          <button type="submit" className="submit">
            Add meetup
            <span>+</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MeetupForm;
