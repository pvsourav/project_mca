import React, { useState } from 'react';
import { Search, FileText, Calendar, User, MapPin, Edit, Trash2} from 'lucide-react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './users.scss';

const Users = () => {
  const [organizations] = useState([
    { id: 1, name: 'Alcan Dental Cooperative', email: 'info@alcandental.com', country: 'USA', city: 'New York City', contactPerson: 'John Doe', status: 'Inactive' },
    { id: 2, name: 'SmileCraft Dental', email: 'info@smilecraft.com', country: 'Jordan', city: 'Zarqa', contactPerson: 'Jane Smith', status: 'Active' },
    { id: 3, name: 'MintLeaf Dentistry', email: 'info@mintleaf.com', country: 'Germany', city: 'Frankfurt', contactPerson: 'Anna Muller', status: 'Inactive' },
    { id: 4, name: 'PureSmile', email: 'info@puresmile.co.uk', country: 'UK', city: 'Birmingham', contactPerson: 'William Brown', status: 'Active' },
    { id: 5, name: 'Crown & Root', email: 'info@crownroot.nz', country: 'New Zealand', city: 'Hamilton', contactPerson: 'James White', status: 'Inactive' },
    { id: 6, name: 'Bright Dental Clinic', email: 'info@brightdental.com', country: 'Canada', city: 'Toronto', contactPerson: 'Emily Johnson', status: 'Active' },
    { id: 7, name: 'Smiles Unlimited', email: 'info@smilesunlimited.com', country: 'USA', city: 'Chicago', contactPerson: 'Michael Thompson', status: 'Inactive' },
    { id: 8, name: 'ProDentists Group', email: 'info@prodentists.de', country: 'Germany', city: 'Berlin', contactPerson: 'Lukas Meyer', status: 'Active' },
    { id: 9, name: 'HealthySmile Dental', email: 'info@healthysmile.com', country: 'Australia', city: 'Sydney', contactPerson: 'Olivia Green', status: 'Active' },
    { id: 10, name: 'DentCare Professionals', email: 'info@dentcare.com', country: 'USA', city: 'Los Angeles', contactPerson: 'Sophia Harris', status: 'Inactive' },
    { id: 11, name: 'OrthoDent Clinic', email: 'info@orthodent.co.uk', country: 'UK', city: 'Manchester', contactPerson: 'Daniel Walker', status: 'Active' },
    { id: 12, name: 'BrightSmile Group', email: 'info@brightsmile.ca', country: 'Canada', city: 'Vancouver', contactPerson: 'David Scott', status: 'Inactive' },
    { id: 13, name: 'SmileWave Dental', email: 'info@smilewave.com', country: 'USA', city: 'Miami', contactPerson: 'Grace Lee', status: 'Active' },
    { id: 14, name: 'FamilyDental Care', email: 'info@familydental.com', country: 'UK', city: 'London', contactPerson: 'Sarah King', status: 'Inactive' },
    { id: 15, name: 'DentalWorks', email: 'info@dentalworks.com', country: 'Germany', city: 'Munich', contactPerson: 'Eric Schneider', status: 'Active' },
    { id: 16, name: 'HappyTeeth Dental', email: 'info@happyteeth.com', country: 'Australia', city: 'Melbourne', contactPerson: 'Sophia Adams', status: 'Active' },
    { id: 17, name: 'Prime Dental Clinic', email: 'info@primedental.com', country: 'USA', city: 'San Francisco', contactPerson: 'Jessica Clark', status: 'Inactive' },
    { id: 18, name: 'Tooth Fairy Dental', email: 'info@toothfairy.com', country: 'New Zealand', city: 'Auckland', contactPerson: 'Matthew Jones', status: 'Active' },
    { id: 19, name: 'Elite Dental Care', email: 'info@elitedental.com', country: 'UK', city: 'Leeds', contactPerson: 'Sophia Wilson', status: 'Inactive' },
    { id: 20, name: 'Oral Health Solutions', email: 'info@oralhealth.com', country: 'Canada', city: 'Montreal', contactPerson: 'Ethan Evans', status: 'Active' },
    { id: 21, name: 'Careful Dental Group', email: 'info@carefuldental.com', country: 'USA', city: 'Boston', contactPerson: 'Amelia Brown', status: 'Active' }
  ]);
  
  
  const [searchTerm, setSearchTerm] = useState('');

  const getInitials = (name) => {
    return name.split(' ').map((n) => n[0]).join('').toUpperCase();
  };

  const getRandomColor = () => {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="organization-table">
      <div className="search-filter-bar">
        <div className="search-wrapper">
          <Search className="search-icon" size={20}/>
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
            <User size={16} className='icon' />
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
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Status</th>
            <th>Country</th>
            <th>City</th>
            <th>Contact Person</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map((org) => (
            <tr key={org.id}>
              <td><input type="checkbox" /></td>
              <td>
                <div className="org-info">
                  <div className="org-avatar" style={{ backgroundColor: getRandomColor() }}>
                    {getInitials(org.name)}
                  </div>
                  <div>
                    <div className="org-name">{org.name}</div>
                    <div className="org-email">{org.email}</div>
                  </div>
                </div>
              </td>
              <td>{org.country}</td>
              <td>{org.city}</td>
              <td>{org.contactPerson}</td>
              <td><span className="status-badge">{org.status}</span></td>
              <td>
                <button className="btn btn-icon"><Edit/></button>
                <button className="btn btn-icon"><Trash2/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Footer */}
    </div>
  );
};

export default Users;
