import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Ensure axios is imported
import { Search, ChevronDown, FileText, Users, Calendar, MapPin } from 'lucide-react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ProfileCard from '../../components/ProfileCard';
import './profiledisplay.scss';
import dp from '../../assets/tkm3.jpeg';
import { useNavigate } from 'react-router-dom';

const ProfileDisplay = () => {
  const [profiles, setAlumniData] = useState([]); // State to hold alumni data
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBatch, setFilterBatch] = useState('');
  const [filterCompany, setFilterCompany] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is signed in

    // Fetch alumni details
    axios.get('http://localhost:3000/alumnidetails', { withCredentials: true })
      .then(res => {
        console.log('Fetched alumni data:', res.data); // Log the response for debugging
        setAlumniData(res.data); // Set the fetched data to state
      })
      .catch(err => {
        console.error('Error fetching alumni details:', err);
      });
  }, [navigate]);

  const filteredProfiles = profiles.filter(profile => 
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterBatch === '' || profile.batch === filterBatch) &&
    (filterCompany === '' || profile.company === filterCompany)
  );

  const uniqueBatches = [...new Set(profiles.map(profile => profile.batch))];
  const uniqueCompanies = [...new Set(profiles.map(profile => profile.company))];

  return (
    <div className="profiles-container">
      <div className="search-filter-bar">
        <div className="search-wrapper">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search People"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="filters-wrapper">
          <div className="filter-dropdown">
            <FileText size={16} className='icon' />
            <span>Type</span>
            <ArrowDropDownIcon size={16} className="chevron-down" />
            <select onChange={(e) => setFilterCompany(e.target.value)}>
              <option value="">All Types</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="filter-dropdown">
            <Users size={16} className='icon' />
            <span>People</span>
            <ArrowDropDownIcon size={16} className="chevron-down" />
            <select onChange={(e) => setFilterCompany(e.target.value)}>
              <option value="">All People</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="filter-dropdown">
            <Calendar size={16} className='icon' />
            <span>Modified</span>
            <ArrowDropDownIcon size={16} className="chevron-down" />
            <select onChange={(e) => {}}>
              <option value="">Any time</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="filter-dropdown">
            <MapPin size={16} className='icon' />
            <span>Location</span>
            <ArrowDropDownIcon size={16} className="chevron-down" />
            <select onChange={(e) => {}}>
              <option value="">Anywhere</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
      </div>
      <div className="profiles-wrapper">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile, index) => (
            <ProfileCard
              key={index} // Use a unique identifier if available
              name={profile.name}
              batch={profile.batch}
              company={profile.company}
              location={profile.location}
              profilePic={profile.profilePic}
            />
          ))
        ) : (
          <div className="no-alumni-message">No Alumni found</div>
        )}
      </div>
    </div>
  );
};

export default ProfileDisplay;
