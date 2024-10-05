import React from 'react';
import './alumni.scss';

const Alumni = () => {
  return (
    <div className="my-profile">
      <div className="sidebar">
        <div className="logo">MCA Alumni Forum</div>
        <nav>
          <ul>
            <li><a href="#" className="active">Dashboard <span className="badge">54</span></a></li>
            <li><a href="#">News & Updates</a></li>
            <li><a href="#">Contribute</a></li>
            <li><a href="#">My Connections</a></li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <header>
          <div className="breadcrumb">
            Home &gt; My Profile
          </div>
          <div className="user-info">
            <span>John Doe</span>
            <img src="/api/placeholder/32/32" alt="User Avatar" className="avatar" />
          </div>
        </header>
        <h1>My Profile</h1>
        <div className="profile-section">
          <div className="section-header">
            <h2>User Info</h2>
            <button className="btn-edit">Edit</button>
          </div>
          <div className="user-details">
            <div className="user-avatar">
              <div className="avatar-large">JD</div>
              <div className="status-indicator"></div>
            </div>
            <div className="user-info">
              <h3>John Doe</h3>
              <p className="status">Public</p>
              <div className="contact-info">
                <div><strong>Contact Number:</strong> +91 96548XXXXX</div>
                <div><strong>Email ID:</strong> johndoe@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-section">
          <h2>Organization and Role</h2>
          <div className="organization-details">
            <div className="org-logo">
              <img src="/api/placeholder/48/48" alt="ABC Software Systems Logo" />
            </div>
            <div className="org-info">
              <h3>ABC Software Systems</h3>
              <p className="org-website">abcsoftwaresystems.com</p>
              <div className="role-info">
                <div><strong>Role:</strong> Senior Technical Lead</div>
                <div><strong>Date Joined:</strong> July 2001</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;