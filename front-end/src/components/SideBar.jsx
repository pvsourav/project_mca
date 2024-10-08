import React from 'react';
import './sidebar.scss';
import { Home, Users, UserCircle, FileText, Book, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/tkm.png'

const navItems = [
  { name: 'Dashboard', icon: <Home />, route: '/dashboard' },
  { name: 'My Content', icon: <FileText />, route: '/cms' },
  { name: 'Alumni', icon: <Users />, route: '/alumni' },
  { name: 'Users', icon: <UserCircle />, route: '/users' },
  { name: 'Contributions', icon: <FileText />, route: '/contributions' },
  { name: 'Learning Materials', icon: <Book />, route: '/learning-materials' }
];

const SideBar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">
            <img src={logo} alt="logo" />
          </div>
          <span className="company-name">Dept of MCA</span>
        </div>
        <Menu className="menu-icon" />
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item, index) => (
            <li 
              key={index} 
              className={location.pathname === item.route ? 'active' : ''}
            >
              <Link to={item.route}>
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;