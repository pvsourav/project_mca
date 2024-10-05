// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import './App.scss';

// // Import your components
// import LandingPage from './landing_page/LandingPage';
// import SignUp from './auth_pages/SignUp';
// import LoginPage from './auth_pages/LoginPage';
// import RegisterPage from './auth_pages/RegisterPage';
// import UserProfile from './Dasboard/UserProfile';
// import Alumni from './Dasboard/Alumni';
// import NewsForm from './Dasboard/NewsForm';

// const App = () => {
//   return (
//     <Router>
//       <div className='app'>
//         <Routes>
//           {/* Default route: Redirect to landing page */}
//           <Route path="/" element={<Navigate to="/landing" replace />} />
          
//           {/* Landing page */}
//           <Route path="/landing" element={<LandingPage />} />
          
//           {/* Auth pages */}
//           <Route path="/select-user" element={<SignUp />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
          
//           {/* Dashboard pages */}
//           <Route path="/profile" element={<UserProfile />} />
//           <Route path="/alumni" element={<Alumni />} />
//           <Route path="/news" element={<NewsForm />} />
          
//           {/* Add a catch-all route for 404 errors */}
//           <Route path="*" element={<Navigate to="/landing" replace />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';

import LandingPage from './landing_page/LandingPage';
import SignIn from './auth_pages/SignIn';
import UserProfile from './Dasboard/UserProfile';
import Alumni from './Dasboard/Alumni';
import SignUp from './auth_pages/SignUp';
import Dashboard from './Dasboard/Dashboard';
import UserDetails from './auth_pages/UseDetails';
import ProfileCard from './components/ProfileCard';
import ProfileDisplay from './Dasboard/pages/ProfileDisplay';

const App = () => {
  return (
    // <Router>
    //   <div className='app'>
    //     <Routes>
    //       <Route path="/" element={<Navigate to="/landing" replace />} />
    //       <Route path="/landing" element={<LandingPage/>} />
    //       <Route path="/sign-up" element={<SignUp/>} />
    //       <Route path="/sign-in" element={<SignIn />} />



    //       <Route path="/profile" element={<UserProfile />} />
    //       {/* <Route path="/alumni" element={<Alumni />} />
    //       <Route path="/news" element={<NewsForm />} />
    //       <Route path="*" element={<Navigate to="/landing" replace />} /> */}
    //     </Routes>
    //   </div>
    // </Router>
    <Dashboard/>
    // <UserDetails/>
    // <ProfileCard/>
    // <ProfileDisplay/>
  );
};

export default App;