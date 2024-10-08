import React, { useEffect, useState } from 'react';
import { Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import { Bell, Settings, ChevronDown, ChevronRight } from 'lucide-react';
import './admindashboard.scss';
import user from '../assets/tkm.png';
import SideBar from '../components/SideBar';
import ProfileDisplay from './pages/ProfileDisplay';
import ContentManagement from './pages/ContentManagement';
import axios from 'axios';

const AdminDashboard = () => {
  const [userName, setUserName] = useState('');
  // const [alumniData, setAlumniData] = useState([]); // State to hold alumni data
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is signed in
    axios.get('http://localhost:3000/profile', { withCredentials: true })
      .then(res => {
        if (res.data.signedin) {
          setUserName(res.data.userEmail);
        } else {
          navigate('/sign-in');
        }
      })
      .catch(err => {
        console.error('Session check failed:', err);
        navigate('/sign-in');
      });

    // // Fetch alumni details
    // axios.get('http://localhost:3000/alumnidetails', { withCredentials: true })
    //   .then(res => {
    //     console.log('Fetched alumni data:', res.data); // Log the response for debugging
    //     setAlumniData(res.data); // Set the fetched data to state
    //   })
    //   .catch(err => {
    //     console.error('Error fetching alumni details:', err);
    //   });
  }, [navigate]);


  return (
    <div className="dashboard-layout">
      <SideBar/>

      <div className="main-content">
      <header className="top-header">
        <div className="user-actions">
          <div className="user-profile">
            <img src={user} alt="User" />
            <div className="user-info">
              <div className="user-name">{userName}</div>
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
          

        