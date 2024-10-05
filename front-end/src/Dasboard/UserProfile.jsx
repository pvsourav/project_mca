import React from 'react';
import './userprofile.scss';

const sampleData = [
  { id: 1, name: 'Bob', organization: 'ABC Softwares', role: 'CEO', email: 'example@gmail.com', visibility: 'Public' },
  { id: 2, name: 'Alice', organization: 'XYZ Tech/Data', role: 'Senior Manager', email: 'example@gmail.com', visibility: 'Private' },
  { id: 3, name: 'Carol', organization: '123 Technologies', role: 'Tech Lead', email: 'example@gmail.com', visibility: 'Private' },
  { id: 4, name: 'Smith', organization: 'Government', role: 'User', email: 'example@gmail.com', visibility: 'Public' },
  { id: 5, name: 'Karen', organization: 'ABCDEF', role: 'Associate', email: 'example@gmail.com', visibility: 'Public' },
];

const Dashboard = () => {
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
            <span>Jane Doe</span>
            <div className="dashboard__main-header-user-avatar"></div>
          </div>
        </div>

        <div className="dashboard__content">
          <div className="dashboard__content-header">
            <h2>Total Alumni (300)</h2>
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
              {sampleData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="dashboard__content-table-avatar">
                      {item.name[0]}
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.organization}</td>
                  <td>{item.role}</td>
                  <td>{item.email}</td>
                  <td>
                    <span className={`dashboard__content-table-visibility ${item.visibility.toLowerCase()}`}>
                      {item.visibility}
                    </span>
                  </td>
                  <td className="dashboard__content-table-actions">
                    <span>✏️</span>
                    <span>🗑️</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;