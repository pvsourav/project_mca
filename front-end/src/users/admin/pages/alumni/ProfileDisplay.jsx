import React, { useState } from 'react';
import { Search, FileText, Users, Calendar, MapPin } from 'lucide-react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ProfileCard from '../../../../components/ProfileCard';
import './profiledisplay.scss';

const profiles = [
  {
    id: 1,
    name: "John Doe",
    batch: "2021",
    company: "Google",
    location: "California, USA",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "john.doe@gmail.com",
    phoneNumber: "+1 123-456-7890",
    role: "Software Engineer",
    dateJoined: "2022-01-15"
  },
  {
    id: 2,
    name: "Jane Smith",
    batch: "2020",
    company: "Microsoft",
    location: "Washington, USA",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "jane.smith@microsoft.com",
    phoneNumber: "+1 123-654-7890",
    role: "Project Manager",
    dateJoined: "2021-03-20"
  },
  {
    id: 3,
    name: "Michael Johnson",
    batch: "2019",
    company: "Apple",
    location: "California, USA",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    email: "michael.j@apple.com",
    phoneNumber: "+1 321-456-7890",
    role: "Product Designer",
    dateJoined: "2020-07-05"
  },
  {
    id: 4,
    name: "Emily Davis",
    batch: "2022",
    company: "Amazon",
    location: "New York, USA",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    email: "emily.d@amazon.com",
    phoneNumber: "+1 223-456-7890",
    role: "Data Scientist",
    dateJoined: "2023-04-11"
  },
  {
    id: 5,
    name: "Daniel Martinez",
    batch: "2021",
    company: "Facebook",
    location: "Texas, USA",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    email: "daniel.m@fb.com",
    phoneNumber: "+1 231-456-7890",
    role: "Backend Developer",
    dateJoined: "2021-12-01"
  },
  {
    id: 6,
    name: "Olivia Wilson",
    batch: "2018",
    company: "Spotify",
    location: "London, UK",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
    email: "olivia.w@spotify.com",
    phoneNumber: "+44 1234 567890",
    role: "UI/UX Designer",
    dateJoined: "2019-06-15"
  },
  {
    id: 7,
    name: "James Brown",
    batch: "2019",
    company: "Netflix",
    location: "California, USA",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
    email: "james.b@netflix.com",
    phoneNumber: "+1 213-456-7890",
    role: "Full Stack Developer",
    dateJoined: "2020-09-01"
  },
  {
    id: 8,
    name: "Sophia Taylor",
    batch: "2022",
    company: "Tesla",
    location: "California, USA",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
    email: "sophia.t@tesla.com",
    phoneNumber: "+1 323-456-7890",
    role: "Mechanical Engineer",
    dateJoined: "2023-05-20"
  },
  {
    id: 9,
    name: "William Lee",
    batch: "2021",
    company: "Uber",
    location: "San Francisco, USA",
    profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
    email: "william.l@uber.com",
    phoneNumber: "+1 123-765-7890",
    role: "Data Engineer",
    dateJoined: "2022-10-02"
  },
  {
    id: 10,
    name: "Ava White",
    batch: "2020",
    company: "Airbnb",
    location: "California, USA",
    profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
    email: "ava.w@airbnb.com",
    phoneNumber: "+1 323-987-6543",
    role: "Marketing Manager",
    dateJoined: "2021-08-11"
  },
  {
    id: 11,
    name: "Alexander Harris",
    batch: "2019",
    company: "Slack",
    location: "New York, USA",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
    email: "alex.h@slack.com",
    phoneNumber: "+1 323-111-2222",
    role: "Product Manager",
    dateJoined: "2020-01-15"
  },
  {
    id: 12,
    name: "Isabella Clark",
    batch: "2018",
    company: "Zoom",
    location: "San Jose, USA",
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
    email: "isabella.c@zoom.com",
    phoneNumber: "+1 432-555-6666",
    role: "HR Manager",
    dateJoined: "2019-03-22"
  },
  {
    id: 13,
    name: "Ethan Wright",
    batch: "2021",
    company: "LinkedIn",
    location: "California, USA",
    profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
    email: "ethan.w@linkedin.com",
    phoneNumber: "+1 123-789-9876",
    role: "Front-end Developer",
    dateJoined: "2022-04-05"
  },
  {
    id: 14,
    name: "Amelia Walker",
    batch: "2020",
    company: "Salesforce",
    location: "California, USA",
    profilePic: "https://randomuser.me/api/portraits/women/14.jpg",
    email: "amelia.w@salesforce.com",
    phoneNumber: "+1 432-555-7777",
    role: "DevOps Engineer",
    dateJoined: "2021-02-19"
  },
  {
    id: 15,
    name: "Benjamin Scott",
    batch: "2019",
    company: "GitHub",
    location: "Texas, USA",
    profilePic: "https://randomuser.me/api/portraits/men/15.jpg",
    email: "benjamin.s@github.com",
    phoneNumber: "+1 213-654-9876",
    role: "Software Architect",
    dateJoined: "2020-06-10"
  },
  {
    id: 16,
    name: "Mia Green",
    batch: "2021",
    company: "Dropbox",
    location: "California, USA",
    profilePic: "https://randomuser.me/api/portraits/women/16.jpg",
    email: "mia.g@dropbox.com",
    phoneNumber: "+1 123-321-6547",
    role: "Cloud Engineer",
    dateJoined: "2022-11-25"
  },
  {
    id: 17,
    name: "Lucas Lewis",
    batch: "2018",
    company: "Adobe",
    location: "California, USA",
    profilePic: "https://randomuser.me/api/portraits/men/17.jpg",
    email: "lucas.l@adobe.com",
    phoneNumber: "+1 222-555-1234",
    role: "QA Engineer",
    dateJoined: "2019-09-30"
  },
  {
    id: 18,
    name: "Charlotte Hall",
    batch: "2022",
    company: "Shopify",
    location: "Ottawa, Canada",
    profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
    email: "charlotte.h@shopify.com",
    phoneNumber: "+1 613-555-7890",
    role: "Product Designer",
    dateJoined: "2023-06-14"
  },
  {
    id: 19,
    name: "Henry Allen",
    batch: "2020",
    company: "Twitter",
    location: "California, USA",
    profilePic: "https://randomuser.me/api/portraits/men/19.jpg",
    email: "henry.a@twitter.com",
    phoneNumber: "+1 123-432-7654",
    role: "Security Engineer",
    dateJoined: "2021-07-19"
  },
  {
    id: 20,
    name: "Ella Young",
    batch: "2019",
    company: "Pinterest",
    location: "San Francisco, USA",
    profilePic: "https://randomuser.me/api/portraits/women/20.jpg",
    email: "ella.y@pinterest.com",
    phoneNumber: "+1 213-123-8765",
    role: "Social Media Manager",
    dateJoined: "2020-05-22"
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

export default ProfileDisplay;
