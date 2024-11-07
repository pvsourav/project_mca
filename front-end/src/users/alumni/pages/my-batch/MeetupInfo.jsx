import React from 'react';
import './meetupinfo.scss';
import { MeetupsData } from '../../../../DataBase';

const MeetupInfo = () => {
  return (
    <div className="meetup-list-container">
      <h1 className="meetup-list-title">Upcoming Meetups</h1>
      <div className="meetup-cards-container">
        {MeetupsData.length > 0 ? (
          MeetupsData.map((meetup) => (
            <div className="meetup-card" key={meetup.organiser}>
              <div className="meetup-card-header">
                <h2 className="meetup-card-title">{meetup.title}</h2>
                <div className="meetup-card-meta">
                  <div className="meetup-card-date">
                    <span className="meetup-card-label">Date:</span>
                    <span className="meetup-card-value">{meetup.date}</span>
                  </div>
                  <div className="meetup-card-time">
                    <span className="meetup-card-label">Time:</span>
                    <span className="meetup-card-value">{meetup.time}</span>
                  </div>
                  <div className="meetup-card-venue">
                    <span className="meetup-card-label">Venue:</span>
                    <span className="meetup-card-value">{meetup.venue}</span>
                  </div>
                  <div className="meetup-card-batch">
                    <span className="meetup-card-label">Batch:</span>
                    <span className="meetup-card-value">{meetup.batch}</span>
                  </div>
                </div>
              </div>
              <div className="meetup-card-description">
                <span className="meetup-card-label">Description:</span>
                <p className="meetup-card-value">{meetup.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-meetups-message">No upcoming meetups available.</p>
        )}
      </div>
    </div>
  );
};

export default MeetupInfo;