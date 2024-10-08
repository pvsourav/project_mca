import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Bell, Settings, ChevronDown, ChevronRight } from 'lucide-react';
import './dashboard.scss';
import user from '../assets/tkm.png';
import SideBar from '../components/SideBar';
import ProfileDisplay from './pages/ProfileDisplay';
import ContentManagement from './pages/ContentManagement';

// Placeholder components for routes
const Alumni = () => <h2>Alumni Page</h2>;
const Users = () => <h2>Users Page</h2>;
const Institution = () => <h2>Institution Page</h2>;

const Dashboard = () => {
  return (
    <Router>
      <div className="dashboard-layout">
        <SideBar/>

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
            <h1>Dashboard</h1>

            <Routes>
              <Route path="/alumni" element={<ProfileDisplay/>} />
              <Route path="/cms" element={<ContentManagement />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;