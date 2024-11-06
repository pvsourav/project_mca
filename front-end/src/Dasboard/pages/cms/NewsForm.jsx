import React, { useState } from 'react';
import './newsform.scss';

const EditRoleForm = () => {
  const [formData, setFormData] = useState({
    roleName: 'Dental Hygienist',
    roleCategory: 'DFI',
    roleDescription: 'This healthcare professional carries out dental treatments that are concerned with the prevention of oral diseases and oral hygiene under the supervision of the dentist. For example, these include tasks such as sealing fissures, applying fluoride to prevent tooth decay, performing dental cleaning, etc.'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
                value={formData.roleName}
                onChange={(e) => handleInputChange('roleName', e.target.value)}
                />
            </div>

            <div className="form-field">
                <label>News Date</label>
                <input
                    type="date"
                    value={formData.roleDescription}
                    onChange={(e) => handleInputChange('roleDescription', e.target.value)}
                />
            </div>

            <div className="form-field">
                <label>News Description</label>
                <textarea
                value={formData.roleDescription}
                onChange={(e) => handleInputChange('roleDescription', e.target.value)}
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

export default EditRoleForm;