import React from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import { Bell, Settings, ChevronDown, ChevronRight } from 'lucide-react';
import './admindashboard.scss';
import user from '../assets/tkm.png';
import SideBar from '../components/SideBar';
import ProfileDisplay from './pages/ProfileDisplay';
import ContentManagement from './pages/ContentManagement';

const AdminDashboard = () => {
  return (
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
            <span>Admin</span>
            <ChevronRight size={20}/>
            <span className="current">Dashboard</span>
          </div>
          <h1>Dashboard</h1>

          <Routes>
            <Route index element={<Navigate to="alumni" replace />} />
            <Route path="alumni" element={<ProfileDisplay/>} />
            <Route path="cms" element={<ContentManagement />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
          

        