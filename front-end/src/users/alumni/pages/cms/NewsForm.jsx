import React, { useState } from 'react';
import { NewsData } from '../../../../DataBase';
import './newsform.scss';

const NewsForm = () => {
  const [formData, setFormData] = useState({
    newsTitle: '',
    newsDate: '',
    newsDescription: '',
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

    // Create a new news item
    const newNewsItem = {
      id: NewsData.length + 1, // Generate a unique ID
      title: formData.newsTitle,
      date: formData.newsDate,
      time: new Date().toLocaleTimeString(),
      description: formData.newsDescription,
      image: 'https://example.com/placeholder.jpg', // You can add a placeholder image here
      visibility: formData.visibility
    };

    // Update the NewsData array
    NewsData.push(newNewsItem);

    // Reset the form
    setFormData({
      newsTitle: '',
      newsDate: '',
      newsDescription: '',
      visibility: 'off'
    });

    console.log('Form submitted:', newNewsItem);
  };

  return (
    <div className="news-form-container">
      <div className="form-header">
        <h3>Enter news details</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-info-text">
            <label>News Info</label>
            <p>This will be displayed on your page</p>
          </div>

          <div className="fields-wrapper">
            <div className="form-field">
              <label>News Title</label>
              <input
                type="text"
                value={formData.newsTitle}
                onChange={(e) => handleInputChange('newsTitle', e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>News Date</label>
              <input
                type="date"
                value={formData.newsDate}
                onChange={(e) => handleInputChange('newsDate', e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>News Description</label>
              <textarea
                value={formData.newsDescription}
                onChange={(e) => handleInputChange('newsDescription', e.target.value)}
                rows={4}
              />
            </div>
          </div>

          <div className="toggle-text">
              <h3>Visibility</h3>
              <p>This will be displayed on the landing page</p>
          </div>

          <div className="toggle-switch-wrapper">
            <h3>Show in landing page</h3>
            <div className="toggle-switch">
                <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) => handleInputChange('isActive', e.target.checked)}
                id="status-toggle"
                />
                <label className="slider" htmlFor="status-toggle"></label>
            </div>
          </div>

        </div>

        <div className="form-actions">
          <button type="button" className="cancel">
            Cancel
          </button>
          <button type="submit" className="submit">
            Add news
            <span>+</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsForm;






