import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Assuming Link is imported for routing
import { Calendar, Clock, MapPin } from 'lucide-react';
import './meetups.scss'
import { format } from 'date-fns'

const MeetupsPage = () => {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeetups = async () => {
      try {
        const response = await axios.get('http://192.168.29.250:3000/meetupdetails');
        setMeetups(response.data); // Store fetched meetups in state
        setLoading(false);
      } catch (err) {
        setError('Error fetching meetups');
        setLoading(false);
      }
    };

    fetchMeetups();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (meetups.length === 0) {
    return <div>No meetups available.</div>;
  }

  return (
    <div className='cards-wrapper'>
      {meetups.map((meetup) => (
        <div key={meetup.id} className="meetup_card">
          <div className="head">
            <div>
              <i className="fa-regular fa-user"></i>
              <span className="assigned">Created by :</span>
              <span className="handler">{meetup.organiser}</span>
            </div>
          </div>
          <div className="content">
            <h1 className="meetup_title">{meetup.title}</h1>
            <div id="description_id" className="description">
              <p>{meetup.description}</p>
            </div>
            <div className="info_div">
              <div className="info">
                <Calendar className="icons" />
                <span>{format(new Date(meetup.date), 'dd-MM-yyyy')}</span>
              </div>
              <div className="info">
                <Clock className="icons" />
                <span>{meetup.time}</span>
              </div>
              <div className="info">
                <MapPin className="icons" />
                <span>{meetup.venue}</span>
              </div>
            </div>
            <div className="footer-div">
              <Link to={`/meetups/${meetup.id}`} className="view-button">View</Link>
              <i id="saved" className="bi bi-bookmark-fill"></i>
              <i id="save" className="bi bi-bookmark"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeetupsPage;
