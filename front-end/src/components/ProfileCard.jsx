import React from 'react';
import { MapPin, Briefcase, User, MessageSquare, BadgeCheck } from 'lucide-react';
import './profilecard.scss';
// import profile_pic from '../assets/tkm3.jpeg'

const ProfileCard = ({ name, batch, company, location, profilePic }) => {
  return (
    <div className="profile-card">
      <div className="image-wrapper">
        <img
          src={profilePic}
          alt={name}
          className="profile-image"
        />
      </div>
      <div className="profile-info">
        <div className="badge">
          <span>Batch: {batch}</span>
        </div>
        <div className="profile-name">
          <h2>{name}</h2>
          <BadgeCheck className='icon'/>
        </div>
        <div className="detail-wrapper">
          <div className="detail">
            <Briefcase size={16} className="icon" />
            <span>{company}</span>
          </div>
          <div className="detail">
            <MapPin size={16} className="icon" />
            <span>{location}</span>
          </div>
        </div>
          <div className="button-group">
            <button className="profile-button">
              <User size={16} className="button-icon" />
              View Profile
            </button>
            <button className="message-button">
              <MessageSquare size={16} className="button-icon" />
              <span>Message</span>
            </button>
          </div>
        </div>
    </div>
  );
};

export default ProfileCard;