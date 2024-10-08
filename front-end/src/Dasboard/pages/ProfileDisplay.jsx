import React, { useState } from 'react';
import { Search, ChevronDown, FileText, Users, Calendar, MapPin } from 'lucide-react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ProfileCard from '../../components/ProfileCard';
import './profiledisplay.scss';
import dp from '../../assets/tkm3.jpeg';

const profiles = [
  {
    id: 1,
    name: "Anand",
    batch: "2021-25",
    company: "TCS",
    location: "Texas, USA",
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    name: "Priya",
    batch: "2020-24",
    company: "Google",
    location: "California, USA",
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    id: 3,
    name: "Raj kumar",
    batch: "2022-26",
    company: "Microsoft",
    location: "Washington, USA",
    profilePic: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    id: 4,
    name: "Anand Prakash",
    batch: "2021-25",
    company: "TCS",
    location: "Texas, USA",
    profilePic: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    id: 5,
    name: "John Doe",
    batch: "2020-24",
    company: "Google",
    location: "California, USA",
    profilePic: 'https://randomuser.me/api/portraits/men/4.jpg'
  },
  {
    id: 6,
    name: "Raj",
    batch: "2022-26",
    company: "Microsoft",
    location: "Washington, USA",
    profilePic: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    id: 7,
    name: "Sara",
    batch: "2021-25",
    company: "Amazon",
    location: "New York, USA",
    profilePic: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 8,
    name: "Vikram",
    batch: "2020-24",
    company: "Facebook",
    location: "Los Angeles, USA",
    profilePic: 'https://randomuser.me/api/portraits/men/6.jpg'
  },
  {
    id: 9,
    name: "Sneha",
    batch: "2022-26",
    company: "IBM",
    location: "Chicago, USA",
    profilePic: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
  {
    id: 10,
    name: "Ravi",
    batch: "2021-25",
    company: "Oracle",
    location: "San Francisco, USA",
    profilePic: 'https://randomuser.me/api/portraits/men/7.jpg'
  },
  {
    id: 11,
    name: "Deepa",
    batch: "2020-24",
    company: "Cisco",
    location: "Austin, USA",
    profilePic: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    id: 12,
    name: "Karan",
    batch: "2022-26",
    company: "Intel",
    location: "Seattle, USA",
    profilePic: 'https://randomuser.me/api/portraits/men/8.jpg'
  },
  {
    id: 13,
    name: "Meena",
    batch: "2021-25",
    company: "NVIDIA",
    location: "Miami, USA",
    profilePic: 'https://randomuser.me/api/portraits/women/5.jpg'
  },
  {
    id: 14,
    name: "Suresh",
    batch: "2020-24",
    company: "Qualcomm",
    location: "Denver, USA",
    profilePic: 'https://randomuser.me/api/portraits/men/9.jpg'
  },
  {
    id: 15,
    name: "Pooja",
    batch: "2022-26",
    company: "Samsung",
    location: "Phoenix, USA",
    profilePic: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
];

const ProfileDisplay = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBatch, setFilterBatch] = useState('');
  const [filterCompany, setFilterCompany] = useState('');

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
            <select onChange={(e) => {}}>
              <option value="">All Types</option>
            </select>
          </div>
          <div className="filter-dropdown">
            <Users size={16} className='icon' />
            <span>People</span>
            <ArrowDropDownIcon size={16} className="chevron-down" />
            <select onChange={(e) => {}}>
              <option value="">All People</option>
            </select>
          </div>
          <div className="filter-dropdown">
            <Calendar size={16} className='icon' />
            <span>Modified</span>
            <ArrowDropDownIcon size={16} className="chevron-down" />
            <select onChange={(e) => {}}>
              <option value="">Any time</option>
            </select>
          </div>
          <div className="filter-dropdown">
            <MapPin size={16} className='icon' />
            <span>Location</span>
            <ArrowDropDownIcon size={16} className="chevron-down" />
            <select onChange={(e) => {}}>
              <option value="">Anywhere</option>
            </select>
          </div>
        </div>
      </div>
      <div className="profiles-wrapper">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map(profile => (
            <ProfileCard
              key={profile.id}
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
