import React from 'react';
import ProfileCard from '../../../../components/ProfileCard';
import './batchdisplay.scss';
import { UserData, MeetupsData } from '../../../../DataBase'; // Ensure MeetupsData is imported
import { PlusCircle, Search, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';

const BatchDisplay = () => {
  const filteredUserData = UserData.filter(profile => profile.batch === '2021');

  // Check if there are any meetups for batch '2021'
  const hasMeetupForBatch2021 = MeetupsData.some(meetup => meetup.batch === '2021');
  
  // Get the count of meetups for batch '2021'
  const batch2021MeetupsCount = MeetupsData.filter(meetup => meetup.batch === '2021').length;

  return (
    <div className="profiles-container">
      <div className="search-filter-bar">
        <Link
          to={hasMeetupForBatch2021 ? "/alumni/my-batch/meetup-info" : "/alumni/my-batch/meetup"}
          className="meetup-button"
        >
          <UsersRound size={20} />Meetup
          {hasMeetupForBatch2021 && (
          <div className="meetup-badge">
            <span>{batch2021MeetupsCount}</span>
          </div>
        )}
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
        {filteredUserData.length > 0 ? (
          filteredUserData.map(profile => (
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
