import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';

import LandingPage from './landing_page/LandingPage';
import SignIn from './auth_pages/SignIn';
import UserProfile from './Dasboard/UserProfile';
import UserDetails from './auth_pages/UserDetails';
import SignUp from './auth_pages/SignUp';
import Dashboard from './Dasboard/Dashboard';


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

          <Route path="/admin" element={<Dashboard />} />



          <Route path="/profile" element={<UserProfile />} />
          {/* <Route path="/alumni" element={<Alumni />} />
          <Route path="/news" element={<NewsForm />} />
          <Route path="*" element={<Navigate to="/landing" replace />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;