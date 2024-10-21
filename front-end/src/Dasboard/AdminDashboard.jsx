import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { Bell, Settings, ChevronDown, ChevronRight } from 'lucide-react';
import './admindashboard.scss';
import user from '../assets/tkm.png';
import SideBar from '../components/SideBar';
import ProfileDisplay from './pages/ProfileDisplay';
import ContentManagement from './pages/ContentManagement';
import Users from './pages/Users';
import UserProfile from './pages/UserProfile';

// Helper function to format path for breadcrumb and h1
const formatPath = (path) => {
  return path.charAt(0).toUpperCase() + path.slice(1);
};

const AdminDashboard = () => {
  const location = useLocation();

  // Split the path into segments for breadcrumb
  const pathSegments = location.pathname.split('/').filter((segment) => segment);
  const currentRoute = pathSegments[pathSegments.length - 1]; // Get the last segment

  return (
    <div className="dashboard-layout">
      <SideBar />

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
            {pathSegments.map((segment, index) => (
              <React.Fragment key={index}>
                <span className={index === pathSegments.length - 1 ? 'current' : ''}>
                  {formatPath(segment)}
                </span>
                {index < pathSegments.length - 1 && (
                  <ChevronRight size={20} />
                )}
              </React.Fragment>
            ))}
          </div>
          <h1>{formatPath(currentRoute)}</h1>

          <Routes>
            <Route index element={<Navigate to="alumni" replace />} />
            <Route path="alumni" element={<ProfileDisplay />} />
            <Route path="alumni/userprofile" element={<UserProfile />} />
            <Route path="cms" element={<ContentManagement />} />
            <Route path="users" element={<Users/>} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;