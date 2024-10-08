import React from 'react';
import { MapPin, Briefcase, User, MessageSquare, BadgeCheck } from 'lucide-react';
import './profilecard.scss';

const ProfileCard = ({ name, batch, company, location, profilePic }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-image-container">
          <img src={profilePic} alt={name} className="profile-image" />
        </div>
        <div className="profile-info">
          <span className="batch-badge">Batch: {batch}</span>
          <h2 className="profile-name">
            {name}
            <BadgeCheck className="badge-icon" size={20} />
          </h2>
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
        <button className="action-button view-profile">
          <User size={16} className="button-icon" />
          View Profile
        </button>
        <button className="action-button send-message">
          <MessageSquare size={16} className="button-icon" />
          Message
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;