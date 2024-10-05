import React from 'react';
import './newsform.scss';

const NewsForm = () => {
  return (
    <div className="edit-role">
      <div className="sidebar">
        <div className="logo">First Principles</div>
        <nav>
          <ul>
            <li><a href="#" className="active">Dashboard</a></li>
            <li><a href="#">Organization</a></li>
            <li><a href="#">Users</a></li>
            <li><a href="#">Roles</a></li>
            <li><a href="#">Observations</a></li>
            <li><a href="#">Learning Materials</a></li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <header>
          <div className="breadcrumb">
            Home &gt; Roles &gt; Edit Role
          </div>
          <div className="user-info">
            <span>John Doe</span>
            <img src="/api/placeholder/32/32" alt="User Avatar" className="avatar" />
          </div>
        </header>
        <h1>Edit Role</h1>
        <div className="edit-role-form">
          <h2>Edit Role Details</h2>
          <div className="form-group">
            <label>Role Info</label>
            <span className="info-text">This will be displayed on your profile</span>
          </div>
          <div className="form-group">
            <label>Role Name</label>
            <input type="text" value="Dental Hygienist" />
          </div>
          <div className="form-group">
            <label>Select Role Category</label>
            <select>
              <option>DFI</option>
            </select>
          </div>
          <div className="form-group">
            <label>Role Description</label>
            <textarea rows="4">
              This healthcare professional carries out dental treatments that are concerned with the prevention of oral diseases and oral hygiene under the supervision of the dentist. For example, these include tasks such as sealing fissures, applying fluoride to prevent tooth decay, performing dental cleaning, etc.
            </textarea>
          </div>
          <div className="form-group">
            <label>Visibility</label>
            <span className="info-text">Lorem ipsum dolor sit amet</span>
          </div>
          <div className="form-group">
            <label>Mark Status as Active</label>
            <div className="toggle-switch">
              <input type="checkbox" id="status-toggle" checked />
              <label htmlFor="status-toggle"></label>
            </div>
          </div>
          <div className="form-actions">
            <button className="btn-cancel">Cancel</button>
            <button className="btn-update">Update Role</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsForm;