import React, { useState } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { Bell, Settings, ChevronDown, ChevronRight, ArrowLeft, X, UsersRound } from 'lucide-react';
import './alumnidashboard.scss';
import user from '../../assets/tkm.png';
import logo from '../../assets/tkm.png';
import SideBar from '../../components/SideBar';
import ProfileDisplay from './pages/my-batch/BatchDisplay';
import ContentManagement from './pages/cms/ContentManagement';
import UserProfile from './pages/my-batch/UserProfile';
import NewsForm from './pages/cms/NewsForm';
import Contributions from './pages/contributions/Contributions';
import RegistrationsTable from './pages/contributions/Registrations';
import ContentDetails from './pages/contributions/ContentDetails';
import { MessagesData } from '../../DataBase';
import { Home, Users as UsersIcon, FileText} from 'lucide-react';
import BatchDisplay from './pages/my-batch/BatchDisplay';
import MeetupForm from './pages/my-batch/MeetupForm';
import MeetupInfo from './pages/my-batch/MeetupInfo';

const navItems = [
  { name: 'Dashboard', icon: <Home />, route: '/alumni/dashboard' },
  { name: 'My Content', icon: <FileText />, route: '/alumni/cms' },
  { name: 'My Batch', icon: <UsersIcon />, route: '/alumni/my-batch' },
  { name: 'Contributions', icon: <FileText />, route: '/alumni/contributions' },
];

const formatPath = (path) => {
  return path.charAt(0).toUpperCase() + path.slice(1);
};

const alumniDashboard = () => {
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
      <SideBar logo={logo} title="User" navItems={navItems} />

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
                <div className="user-role">alumni</div>
              </div>
              <ChevronDown size={16} />
            </div>
            <Bell className="bell-icon" onClick={toggleMessages}/>
            <Settings />
          </div>
        </header>

        <main className="content-holder">
          <div className="routes">
            <h1>{formatPath(currentRoute)}</h1>
            <Routes>
              <Route index element={<Navigate to="/alumni/dashboard" replace />} />
              <Route path="my-batch" element={<BatchDisplay />} />
              <Route path="my-batch/userprofile" element={<UserProfile />} />
              <Route path="my-batch/meetup" element={<MeetupForm />} />
              <Route path="my-batch/meetup-info" element={<MeetupInfo />} />
              <Route path="contributions/:title/registrations" element={<RegistrationsTable />} />
              <Route path="contributions" element={<Contributions />} />
              <Route path="cms" element={<ContentManagement />} />
              <Route path="cms/addnews" element={<NewsForm />} />
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

export default alumniDashboard;
