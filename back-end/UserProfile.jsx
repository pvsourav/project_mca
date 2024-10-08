import React, { useState, useEffect } from 'react';
import './userprofile.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const [alumniData, setAlumniData] = useState([]); // State to hold alumni data
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is signed in
    axios.get('http://localhost:3000/profile', { withCredentials: true })
      .then(res => {
        if (res.data.signedin) {
          setUserName(res.data.user);
        } else {
          navigate('/sign-in');
        }
      })
      .catch(err => {
        console.error('Session check failed:', err);
        navigate('/sign-in');
      });

    // Fetch alumni details
    axios.get('http://localhost:3000/alumnidetails', { withCredentials: true })
      .then(res => {
        console.log('Fetched alumni data:', res.data); // Log the response for debugging
        setAlumniData(res.data); // Set the fetched data to state
      })
      .catch(err => {
        console.error('Error fetching alumni details:', err);
      });
  }, [navigate]);

  return (
    <div className="dashboard">
      <div className="dashboard__sidebar">
        <div className="dashboard__sidebar-title">Dpt of MCA</div>
        <nav className="dashboard__sidebar-nav">
          {['Dashboard', 'Organization', 'Alumni', 'My Connections', 'Contributions'].map((item, index) => (
            <a key={index} href="#" className={item === 'Alumni' ? 'active' : ''}>
              {item}
            </a>
          ))}
        </nav>
      </div>

      <div className="dashboard__main">
        <div className="dashboard__main-header">
          <h1>Alumni</h1>
          <div className="dashboard__main-header-user">
            <span>{userName}</span>
            <div className="dashboard__main-header-user-avatar"></div>
          </div>
        </div>

        <div className="dashboard__content">
          <div className="dashboard__content-header">
            <h2>Total Alumni ({alumniData.length})</h2>
            <button>Add Alumni +</button>
          </div>

          <div className="dashboard__content-filters">
            <input placeholder="Find name or email" />
            <div>
              <select>
                <option>Status: Select</option>
              </select>
              <select>
                <option>Sort by: Last Added</option>
              </select>
              <button>Filter</button>
            </div>
          </div>

          <table className="dashboard__content-table">
            <thead>
              <tr>
                <th></th>
                <th>User Name</th>
                <th>Organization</th>
                <th>Role</th>
                <th>Email</th>
                <th>Visibility</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {alumniData.length > 0 ? (
                alumniData.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <div className="dashboard__content-table-avatar">
                        {item.name[0]} {/* Use UserName instead of name */}
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.company}</td>
                    <td>{item.position}</td>
                    <td>{item.email}</td>
                    <td>
                      <span className={`dashboard__content-table-visibility`}>
                        {item.visibility}
                      </span>
                    </td>
                    <td className="dashboard__content-table-actions">
                      <span>✏️</span>
                      <span>🗑️</span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No alumni data available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
  