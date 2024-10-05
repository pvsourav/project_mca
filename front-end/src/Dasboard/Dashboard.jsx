import React from 'react';
import { Home, Users, UserCircle, FileText, Book, Bell, Settings, ChevronDown, Menu, ChevronRight, Edit, Trash2, MoreHorizontal } from 'lucide-react';
import './dashboard.scss';
import user from '../assets/tkm.png'
import ProfileDisplay from './pages/ProfileDisplay';

const Dashboard = () => {
  const organizations = [
    { id: 1, name: 'Abhishek S R', email: 'info@alcandental.com', firm: 'TCS', batch: '2023-25', contactnumber: '9605076XXX', status: 'Inactive' },
    { id: 2, name: 'Sourav P V', email: 'info@alcandental.com', firm: 'Accenture', batch: '2023-25', contactnumber: '9605076XXX', status: 'Inactive' },
    { id: 3, name: 'Anand Prakash', email: 'info@alcandental.com', firm: 'Cognizant', batch: '2023-25', contactnumber: '9605076XXX', status: 'Inactive' },
    { id: 4, name: 'Joel Mathews', email: 'info@alcandental.com', firm: 'EY', batch: '2023-25', contactnumber: '9605076XXX', status: 'Inactive' },
    { id: 5, name: 'Fuhad Saneen', email: 'info@alcandental.com', firm: 'Deloitte', batch: '2023-25', contactnumber: '9605076XXX', status: 'Inactive' },
    { id: 6, name: 'Adhil Athweef', email: 'info@alcandental.com', firm: 'Kerala Government', batch: '2023-25', contactnumber: '9605076XXX', status: 'Inactive' },
  ];

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon"></div>
            <span className="company-name">Dept of MCA</span>
          </div>
          <Menu className="menu-icon" />
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="active">
              <Home size={24} />
              Dashboard
              <span className="badge">24</span>
            </li>
            <li><FileText size={24} />Organization</li>
            <li><Users size={24} />Users</li>
            <li><UserCircle size={24} />Roles</li>
            <li>
              <FileText size={24} />
              Observations
            </li>
            <li>
              <Book size={24} />
              Learning Materials
            </li>
          </ul>
        </nav>
      </aside>

      <div className="main-content">
        <header className="top-header">
          <div className="user-actions">
            <div className="user-profile">
              <img src={user} alt="User" />
              <div className="user-info">
                <div className="user-name">John Doe</div>
                <div className="user-role">Admin</div>
              </div>
              <ChevronDown size={16} />
            </div>
            <Bell />
            <Settings />
          </div>
        </header>

        <main className="content">
          <div className="breadcrumb">
            <span>Home</span>
            <ChevronRight size={20}/>
            <span>Users</span>
            <ChevronRight size={20}/>
            <span className="current">Alumni</span>
          </div>
          <h1>Alumni</h1>
          <div className="filters">
            <input placeholder="Find name or email" />
            <div>
              <select>
                <option>Status: Select</option>
              </select>
              <select>
                <option>Sort by: Last Added</option>
              </select>
              <button>Filter</button>
            </div>
          </div>
          <ProfileDisplay/>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;