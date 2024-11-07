// RegistrationsTable.js
import React from "react";
import { useLocation } from "react-router-dom";
import "./registrations.scss";
import { Search, FileText, Users, Calendar, MapPin } from 'lucide-react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const RegistrationsTable = () => {
  const location = useLocation();
  const registrants = location.state || []; // Use the passed state or default to an empty array

  return (
    <div className="profiles-container">
      <div className="search-filter-bar">
        <div className="search-wrapper">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search People"
            className="search-input"
          />
        </div>
        <div className="filters-wrapper">
          <div className="filter-dropdown">
            <FileText size={16} className='icon' />
            <span>Type</span>
            <ArrowDropDownIcon size={16} className="chevron-down" />
            <select>
              <option value="">All Types</option>
            </select>
          </div>
          <div className="filter-dropdown">
            <Users size={16} className='icon' />
            <span>People</span>
            <ArrowDropDownIcon size={16} className="chevron-down" />
            <select>
              <option value="">All People</option>
            </select>
          </div>
          <div className="filter-dropdown">
            <Calendar size={16} className='icon' />
            <span>Modified</span>
            <ArrowDropDownIcon size={16} className="chevron-down" />
            <select>
              <option value="">Any time</option>
            </select>
          </div>
          <div className="filter-dropdown">
            <MapPin size={16} className='icon' />
            <span>Location</span>
            <ArrowDropDownIcon size={16} className="chevron-down" />
            <select>
              <option value="">Anywhere</option>
            </select>
          </div>
        </div>
      </div>
      <div className="profiles-wrapper">
        <div className="registration-table-container">
          <table className="registration-table">
            <thead>
              <tr>
                <th className="registration-table-header">Sl. No</th>
                <th className="registration-table-header">Name</th>
                <th className="registration-table-header">Email</th>
                <th className="registration-table-header">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {registrants.map((registrant, index) => (
                <tr key={index} className="registration-table-row">
                  <td className="registration-table-cell">{index + 1}</td>
                  <td className="registration-table-cell">{registrant.name}</td>
                  <td className="registration-table-cell">{registrant.email}</td>
                  <td className="registration-table-cell">{registrant.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegistrationsTable;
