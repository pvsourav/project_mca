import React from 'react';
import { FaYoutube, FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="logo-dot"></span>
            Department of MCA
          </div>
          <div className="footer-buttons">
            <button className="btn btn-primary">Join Course</button>
            <button className="btn btn-secondary">Contact</button>
          </div>
        </div>
        <div className="footer-right">
          <nav className="footer-nav">
            <a href="#plans">About Us</a>
            <a href="#features">Highlights</a>
            <a href="#news">Latest News</a>
            <a href="#careers">Curriculum</a>
          </nav>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="GitHub"><FaGithub /></a>
        </div>
        <div className="footer-copyright">
          © 2023 Department of MCA. All rights reserved.
        </div>
        <div className="footer-legal">
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;