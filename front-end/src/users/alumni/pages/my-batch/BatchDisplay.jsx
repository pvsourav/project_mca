import React, { useState, useEffect } from 'react';
import ProfileCard from '../../../../components/ProfileCard';
import './batchdisplay.scss';
import { Search, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { userInstance } from '../../../../UserContext';

const BatchDisplay = () => {
  const [alumniData, setAlumniData] = useState([]);
  const userData = userInstance();
  

  useEffect(() => {
    axios.get('http://localhost:3000/alumnidetails', 
      { withCredentials: true })
      .then(res => {
        console.log('Fetched alumni data:', res.data); // Log the response for debugging
        setAlumniData(res.data); // Set the fetched data to state
      })
      .catch(err => {
        console.error('Error fetching alumni details:', err);
      });
  }, []);

  return (
    <div className="profiles-container">
      <div className="search-filter-bar">
        <Link
          to={"/alumni/my-batch/meetup"}
          className="meetup-button"
        >
          <UsersRound size={20} />Meetup
        </Link>
        <div className="search-wrapper">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search People"
            className="search-input"
          />
        </div>
      </div>
      <div className="profiles-wrapper">
        {alumniData.length > 0 ? (
          alumniData.map(profile => (
            <ProfileCard
              key={profile.id}
              name={profile.name}
              batch={profile.batch}
              company={profile.company}
              location={profile.location}
              profilePic={profile.profilePic}
              email={profile.email}
              phoneNumber={profile.phoneNumber}
              role={profile.role}
              dateJoined={profile.dateJoined}
            />
          ))
        ) : (
          <div className="no-alumni-message">No Alumni found</div>
        )}
      </div>
    </div>
  );
};

export default BatchDisplay;