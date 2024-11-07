import React from 'react';
import './sidebar.scss';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = ({ logo, title, navItems }) => {
  const location = useLocation();

  return (
    <aside className="sidebar-container">
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">
            <img src={logo} alt="logo" />
          </div>
          <span className="company-name">{title}</span>
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
