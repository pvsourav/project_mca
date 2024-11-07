import React from 'react';
import { useLocation } from 'react-router-dom';
import './userprofile.scss';
import org_logo from '../../../../assets/organisation_logo.png'

const UserProfile = () => {
  const location = useLocation();
  const { userData } = location.state || {};

  if (!userData) {
    return <div>No user data available</div>;
  }

  const { name, batch, email, phoneNumber, company, role, dateJoined, profilePic } = userData;

  return (
    <div className="container">
      <div className="section">
        <div className="top-title">
          <h2>User info</h2>
        </div>
        <div className="info-content">
          <div className="display-picture">
            <div className="avatar">
                <img src={profilePic} alt="" />
            </div>
            <div className="title">
              <h3>{name}</h3>
              <span className="sub">Batch : {batch}</span>
            </div>
          </div>
          <div className="details-wrapper">
            <div className="details">
              <p className='field'>Contact Number</p>
              <p className='value'>{phoneNumber}</p>
            </div>
            <div className="details">
              <p className='field'>Email ID</p>
              <p className='value'>{email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="top-title">
          <h2>Organisation info</h2>
        </div>
        <div className="info-content">
          <div className="display-picture">
            <div className="org-logo">
              <img src={org_logo} alt="logo" />
            </div>
            <div className="title">
              <h3>{company}</h3>
              <span className="sub">abcsystems.com</span>
            </div>
          </div>
          <div className="details-wrapper">
            <div className="details">
              <p className='field'>Role</p>
              <p className='value'>{role}</p>
            </div>
            <div className="details">
              <p className='field'>Date Joined</p>
              <p className='value'>{dateJoined}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default UserProfile;




