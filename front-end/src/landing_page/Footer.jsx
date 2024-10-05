import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3 className="footer-title">College University</h3>
          <p className="footer-description">
            Empowering the future of technology through comprehensive education and industry-leading research.
          </p>
          <div className="footer-social">
            <a href="#" className="footer-social-link">
              <FaFacebookF />
            </a>
            <a href="#" className="footer-social-link">
              <FaTwitter />
            </a>
            <a href="#" className="footer-social-link">
              <FaInstagram />
            </a>
            <a href="#" className="footer-social-link">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-links-column">
            <h4 className="footer-links-title">About</h4>
            <ul className="footer-links-list">
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">History</a></li>
              <li><a href="#">Leadership</a></li>
              <li><a href="#">Accreditation</a></li>
            </ul>
          </div>
          <div className="footer-links-column">
            <h4 className="footer-links-title">Academics</h4>
            <ul className="footer-links-list">
              <li><a href="#">Programs</a></li>
              <li><a href="#">Course Catalog</a></li>
              <li><a href="#">Research</a></li>
              <li><a href="#">Libraries</a></li>
            </ul>
          </div>
          <div className="footer-links-column">
            <h4 className="footer-links-title">Campus Life</h4>
            <ul className="footer-links-list">
              <li><a href="#">Student Organizations</a></li>
              <li><a href="#">Athletics</a></li>
              <li><a href="#">Housing</a></li>
              <li><a href="#">Dining</a></li>
            </ul>
          </div>
          <div className="footer-links-column">
            <h4 className="footer-links-title">Support</h4>
            <ul className="footer-links-list">
              <li><a href="#">Admissions</a></li>
              <li><a href="#">Financial Aid</a></li>
              <li><a href="#">Career Services</a></li>
              <li><a href="#">Alumni Relations</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2023 College University. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;