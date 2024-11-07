import React from 'react';
import { Search, FileText, Users, Calendar, MapPin, PlusCircle } from 'lucide-react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './contributions.scss';
import ContentCard from './ContentCard';
import { Link } from 'react-router-dom';
import { contentData } from '../../../../DataBase';

const Contributions = () => {
  return (
    <div className="profiles-container">
      <div className="search-filter-bar">
        <Link to="/admin/cms/addnews" className="action-button-primary"><PlusCircle size={20} />Add News</Link>
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
        {contentData.map((content) => (
          <ContentCard
            key={content.eventId}
            content={content}
          />
        ))}
      </div>
    </div>
  );
};

export default Contributions;
