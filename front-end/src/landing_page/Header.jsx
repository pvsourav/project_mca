import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';
import logo from '../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <img className='logo' src={logo} alt="" />
        <div className="header__logo">TKM College of Engineering</div>
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item"><NavLink to="/landing">Home</NavLink></li>
            <li className="header__nav-item"><NavLink to="/about">About</NavLink></li>
            <li className="header__nav-item"><NavLink to="/services">Services</NavLink></li>
          </ul>
        </nav>
        {/* <NavLink to="/sign-in" className="header__cta">Sign in</NavLink> */}
        <Link to="/sign-in" className="header__cta">Sign In</Link>
        <button className="header__menu-toggle" onClick={toggleMenu}>
          <span className="header__menu-icon"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;