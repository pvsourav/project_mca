import React, { useState } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { Bell, Settings, ChevronDown, ChevronRight, ArrowLeft, X } from 'lucide-react';
import './admindashboard.scss';
import user from '../assets/tkm.png';
import SideBar from '../components/SideBar';
import ProfileDisplay from './pages/alumni/ProfileDisplay';
import ContentManagement from './pages/cms/ContentManagement';
import Users from './pages/users/Users';
import UserProfile from './pages/alumni/UserProfile';
import NewsForm from './pages/cms/NewsForm';
import ContentCard from './pages/contributions/ContentCard';
import Contributions from './pages/contributions/Contributions';
import Registrations from './pages/contributions/Registrations';
import RegistrationsTable from './pages/contributions/Registrations';
import ContentDetails from './pages/contributions/ContentDetails';

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

  const chats = [
    {
      id: 1,
      user: 'Jane Smith',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      lastMessage: 'Hey, can you review the latest submission?',
      time: '2m ago',
      unread: true
    },
    {
      id: 2,
      user: 'Mike Johnson',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      lastMessage: 'The alumni event is confirmed for next week',
      time: '1h ago',
      unread: false
    },
    {
      id: 3,
      user: 'Sarah Williams',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      lastMessage: 'Thanks for the update!',
      time: '3h ago',
      unread: false
    },
    {
      id: 4,
      user: 'Emily Davis',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      lastMessage: 'Let’s meet tomorrow for the presentation.',
      time: '5h ago',
      unread: true
    },
    {
      id: 5,
      user: 'James Brown',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      lastMessage: 'Did you see the latest report?',
      time: '7h ago',
      unread: false
    },
    {
      id: 6,
      user: 'Olivia Miller',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
      lastMessage: 'Can you send me the files for review?',
      time: '9h ago',
      unread: true
    },
    {
      id: 7,
      user: 'Daniel Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
      lastMessage: 'I’ll check on that and get back to you.',
      time: '11h ago',
      unread: false
    },
    {
      id: 8,
      user: 'Sophia Garcia',
      avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
      lastMessage: 'The meeting has been rescheduled to next week.',
      time: '13h ago',
      unread: false
    },
    {
      id: 9,
      user: 'Liam Martinez',
      avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
      lastMessage: 'I’ve completed the task, awaiting feedback.',
      time: '15h ago',
      unread: true
    },
    {
      id: 10,
      user: 'Ava Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
      lastMessage: 'Let’s discuss the project milestones tomorrow.',
      time: '1d ago',
      unread: false
    },
    {
      id: 11,
      user: 'William White',
      avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
      lastMessage: 'I’ll be out of the office next week.',
      time: '2d ago',
      unread: true
    },
    {
      id: 12,
      user: 'Isabella Harris',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      lastMessage: 'Thank you for the quick turnaround.',
      time: '3d ago',
      unread: false
    },
    {
      id: 13,
      user: 'Ethan Clark',
      avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
      lastMessage: 'Can we catch up later this week?',
      time: '4d ago',
      unread: true
    }
  ];
  

  return (
    <div className="dashboard-layout">
      <SideBar />

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
              <h1>{formatPath(currentRoute)}</h1>
              <Routes>
              <Route index element={<Navigate to="alumni" replace />} />
              <Route path="alumni" element={<ProfileDisplay />} />
              <Route path="alumni/userprofile" element={<UserProfile />} />
              <Route path="contributions/:title/registrations" element={<RegistrationsTable />} />
              <Route path="contributions" element={<Contributions />} />
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
              
                <div className="chat-list">
                  {chats.map((chat) => (
                    <div key={chat.id} className="chat-item">
                      <img src={chat.avatar} alt={chat.name} className="chat-avatar" />
                      <div className="chat-content">
                        <div className="chat-top">
                          <span className="chat-name">{chat.user}</span>
                          <span className="chat-time">{chat.time}</span>
                        </div>
                        <div className="chat-bottom">
                          <p className="chat-message">{chat.lastMessage}</p>
                          {chat.unread && <span className="unread-badge" />}
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