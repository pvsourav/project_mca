// ContentDetails.js
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './contentdetails.scss';

const ContentDetails = () => {
  const { eventId } = useParams();
  const location = useLocation();
  const content = location.state?.content;

  if (!content) {
    return (
      <div className="content-not-available">
        <p>Content not available.</p>
      </div>
    );
  }

  return (
    <div className="content-details">
      <h1 className="content-details__title">{content.title}</h1>
      <p className="content-details__description">{content.description}</p>
      <div className="content-details__owner">
        <div className="content-details__owner-photo">
          <img src={content.owner.profilePhoto} alt={content.owner.name} />
        </div>
        <span className="content-details__owner-name">{content.owner.name}</span>
      </div>
      <p className="content-details__type">Type: {content.type || 'No type specified'}</p>
      <h2 className="content-details__registrations-title">Registrations</h2>
      <div className="content-details__registrations">
        {content.registrations.map((registration, index) => (
          <div key={index} className="content-details__registrations-item">
            <p className="content-details__registrations-item-name">{registration.name}</p>
            <p className="content-details__registrations-item-email">{registration.email}</p>
            <p className="content-details__registrations-item-phone">{registration.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentDetails;
