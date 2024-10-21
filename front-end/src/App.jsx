import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';

import LandingPage from './landing_page/LandingPage';
import SignIn from './auth_pages/SignIn';
import UserDetails from './auth_pages/UserDetails';
import SignUp from './auth_pages/SignUp';
import AdminDashboard from './Dasboard/AdminDashboard';
import UserProfile from './Dasboard/pages/UserProfile';
import Details from './auth_pages/Details';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Navigate to="/landing" replace />} />
          <Route path="/landing" element={<LandingPage/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/details" element={<UserDetails />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
    // <Details/>
  );
};

export default App;