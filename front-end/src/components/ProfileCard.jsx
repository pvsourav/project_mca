import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, User, MessageSquare, BadgeCheck } from 'lucide-react';
import MessageBox from './MessageBox';
import './profilecard.scss';

const ProfileCard = ({ id, name, batch, company, location, profilePic, email, phoneNumber, role, dateJoined }) => {
  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);

  const toggleMessageBox = () => {
    setIsMessageBoxOpen(!isMessageBoxOpen);
    // Prevent scrolling on the body when the overlay is active
    document.body.style.overflow = isMessageBoxOpen ? 'auto' : 'hidden';
  };

  const userData = {
    id,
    name,
    batch,
    company,
    location,
    profilePic,
    email,
    phoneNumber,
    role,
    dateJoined
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-image-container">
          <img src={profilePic} alt={name} className="profile-image" />
        </div>
        <div className="profile-info">
          <span className="batch-badge">Batch: {batch}</span>
          <div className="name-wrapper">
            <div className='profile-name'>{name}</div>
            <BadgeCheck className="badge-icon" size={20} />
          </div>
          <div className="profile-details">
            <div className="detail-item">
              <Briefcase size={16} className="detail-icon" />
              <span>{company}</span>
            </div>
            <div className="detail-item">
              <MapPin size={16} className="detail-icon" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-actions">
        <Link 
          to="/alumni/my-batch/userprofile" 
          state={{ userData }}
          className="action-button view-profile"
        >
          <User size={16} className="button-icon" />
          View Profile
        </Link>
        <button 
          className="action-button send-message"
          onClick={toggleMessageBox}
        >
          <MessageSquare size={16} className="button-icon" />
          Message
        </button>
      </div>

      {isMessageBoxOpen && (
        <>
          <div className="overlay" onClick={toggleMessageBox}></div>
          <div className="popover-container">
            <MessageBox toggleMessageBox={toggleMessageBox} recipientName={name} profilePic={profilePic}/>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileCard;