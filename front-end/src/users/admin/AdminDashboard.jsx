import React, { useState } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { Bell, Settings, ChevronDown, ChevronRight, ArrowLeft, X } from 'lucide-react';
import './admindashboard.scss';
import user from '../../assets/tkm.png';
import logo from '../../assets/tkm.png';
import SideBar from '../../components/SideBar';
import ProfileDisplay from '../admin/pages/alumni/ProfileDisplay';
import ContentManagement from './pages/cms/ContentManagement';
import Users from './pages/users/Users';
import UserProfile from './pages/alumni/UserProfile';
import NewsForm from './pages/cms/NewsForm';
import Contributions from './pages/contributions/Contributions';
import RegistrationsTable from './pages/contributions/Registrations';
import ContentDetails from './pages/contributions/ContentDetails';
import { MessagesData } from '../../DataBase';
import { Home, Users as UsersIcon, UserCircle, FileText, Book } from 'lucide-react';
import MeetupInfo from '../alumni/pages/my-batch/MeetupInfo';
import Meetups from './pages/alumni/Meetups';

const navItems = [
  { name: 'Dashboard', icon: <Home />, route: '/admin/dashboard' },
  { name: 'My Content', icon: <FileText />, route: '/admin/cms' },
  { name: 'Alumni', icon: <UsersIcon />, route: '/admin/alumni' },
  { name: 'Users', icon: <UserCircle />, route: '/admin/users' },
  { name: 'Contributions', icon: <FileText />, route: '/admin/contributions' },
  { name: 'Learning Materials', icon: <Book />, route: '/admin/learning-materials' }
];

const formatPath = (path) => {
  return path.charAt(0).toUpperCase() + path.slice(1);
};

const AdminDashboard = () => {
  const location = useLocation();
  const [isMessagesVisible, setIsMessagesVisible] = useState(false);
  const pathSegments = location.pathname.split('/').filter((segment) => segment);
  const currentRoute = pathSegments[pathSegments.length - 1];

  const toggleMessages = () => {
    setIsMessagesVisible(!isMessagesVisible);
    console.log(isMessagesVisible);
  };

  return (
    <div className="dashboard-layout">
      {/* Pass the props to SideBar */}
      <SideBar logo={logo} title="Dept of MCA" navItems={navItems} />

      <div className="main-content">
        <header className="top-header">
          <div className="breadcrumb-back-wrapper">
            <ArrowLeft className='icon'/>
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
          </div>

          <div className="user-actions">
            <div className="user-profile">
              <img src={user} alt="User" />
              <div className="user-info">
                <div className="user-name">John Doe</div>
                <div className="user-role">Admin</div>
              </div>
              <ChevronDown size={16} />
            </div>
            <Bell className="bell-icon" onClick={toggleMessages}/>
            <Settings />
          </div>
        </header>

        <main className="content-holder">
          <div className="routes">
            {/* <h1>{formatPath(currentRoute)}</h1> */}
            <Routes>
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="alumni" element={<ProfileDisplay />} />
              <Route path="alumni/userprofile" element={<UserProfile />} />
              <Route path="contributions/:title/registrations" element={<RegistrationsTable />} />
              <Route path="contributions" element={<Contributions />} />
              <Route path="alumni/meetups" element={<Meetups />} />
              <Route path="cms" element={<ContentManagement />} />
              <Route path="cms/addnews" element={<NewsForm />} />
              <Route path="users" element={<Users />} />
              <Route path="contributions/:title" element={<ContentDetails />} />
            </Routes>
          </div>

          <div className={`messages-section ${isMessagesVisible ? 'show' : ''}`}>
            <div className='messages-container'>
              <div className="messages-header">
                <h2>Messages</h2>
                <button className="close-button" onClick={toggleMessages}>
                  <X size={20} />
                </button>
              </div>
              
              <div className="message-list">
                {MessagesData.map((message) => (
                  <div key={message.id} className="message-item">
                    <img src={message.avatar} alt={message.name} className="message-avatar" />
                    <div className="message-content">
                      <div className="message-top">
                        <span className="message-name">{message.user}</span>
                        <span className="message-time">{message.time}</span>
                      </div>
                      <div className="message-bottom">
                        <p className="message-message">{message.lastMessage}</p>
                        {message.unread && <span className="unread-badge" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
