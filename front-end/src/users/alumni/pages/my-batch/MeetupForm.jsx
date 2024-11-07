import React, { useState } from 'react';
import { MeetupsData } from '../../../../DataBase'; // Assuming MeetupsData is imported here
import './meetupform.scss';

const MeetupForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    venue: '',
    description: '',
    visibility: 'off' // Initialize visibility as 'off'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleToggleChange = (checked) => {
    setFormData(prev => ({
      ...prev,
      visibility: checked ? 'on' : 'off' // Set to 'on' if checked, 'off' otherwise
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new meetup item
    const newMeetupItem = {
      organiser: MeetupsData.length + 101, // Generating a unique organiser ID
      title: formData.title,
      date: formData.date,
      time: formData.time,
      venue: formData.venue,
      description: formData.description,
      approval: formData.visibility === 'on' ? 'required' : 'not required'
    };

    // Add the new meetup item to the MeetupsData array
    MeetupsData.push(newMeetupItem);
    console.log(newMeetupItem);
    

    // Reset the form
    setFormData({
      newsTitle: '',
      newsDate: '',
      newsTime: '',
      newsVenue: '',
      newsDescription: '',
      visibility: 'off'
    });

    console.log('Form submitted:', newMeetupItem);
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
                value={formData.newsTitle}
                onChange={(e) => handleInputChange('newsTitle', e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>Date</label>
              <input
                type="date"
                value={formData.newsDate}
                onChange={(e) => handleInputChange('newsDate', e.target.value)}
              />
            </div>

            {/* Added Time Field */}
            <div className="form-field">
              <label>Time</label>
              <input
                type="time"
                value={formData.newsTime}
                onChange={(e) => handleInputChange('newsTime', e.target.value)}
              />
            </div>

            {/* Added Venue Field */}
            <div className="form-field">
              <label>Venue</label>
              <input
                type="text"
                value={formData.newsVenue}
                onChange={(e) => handleInputChange('newsVenue', e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>Description</label>
              <textarea
                value={formData.newsDescription}
                onChange={(e) => handleInputChange('newsDescription', e.target.value)}
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
                checked={formData.visibility === 'on'} // Bind visibility to checkbox
                onChange={(e) => handleToggleChange(e.target.checked)}
                id="status-toggle"
              />
              <label className="slider" htmlFor="status-toggle"></label>
            </div>
            {/* Display the text based on the toggle state */}
            <p>{formData.visibility === 'on' ? 'Required' : 'Not Required'}</p>
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
