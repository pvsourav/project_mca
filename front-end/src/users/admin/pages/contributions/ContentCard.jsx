// ContentCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';
import './contentcard.scss';

const ContentCard = ({ content }) => {
  const { eventId, owner, title, description, type } = content;

  return (
    <div className="content-card">
      <div className="content-card__header">
        <div className="content-card__profile">
          <p>Posted by :</p>
          <h3 className="content-card__name">{owner.name}</h3>
        </div>
      </div>
      <div className="content-card__content">
        <h2 className="content-card__title">{title}</h2>
        <p className="content-card__description">{description}</p>
        <p className="content-card__type">{type}</p>
      </div>
      <div className="content-card__footer">
        <Link
          className="content-card__button"
          to={`/admin/contributions/${encodeURIComponent(title)}`}
          state = {{content}}
        >
          Know More <ArrowRight className='icon'/>
        </Link>
        <Link
          className="content-card__register-button"
          to={`/admin/contributions/${encodeURIComponent(title)}/registrations`}
          state = {content.registrations}
        >
          <Users className="icon" /> Registrations
        </Link>
      </div>
    </div>
  );
};

export default ContentCard;
