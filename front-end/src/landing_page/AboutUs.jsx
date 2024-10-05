import React from 'react';
import './aboutus.scss';
import CollegeImg from '../assets/tkm2.jpg'

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us__content">
        <div className="about-us__image-container">
          <img
            src={CollegeImg}
            alt="College campus"
            className="about-us__image"
          />
        </div>
        <div className="about-us__text">
          <h2 className="about-us__title">About Us</h2>
          <p className="about-us__description">
            Welcome to our college! We are a premier institution dedicated to fostering academic excellence,
            personal growth, and professional development. With a rich history spanning over 50 years,
            we have been at the forefront of higher education, preparing students for successful careers
            and meaningful lives.
          </p>
          <p className="about-us__description">
            Our faculty comprises renowned experts in their fields, committed to providing
            a challenging and supportive learning environment. We offer a wide range of programs
            across various disciplines, ensuring that our students receive a well-rounded education
            that prepares them for the challenges of the modern world.
          </p>
          <p className="about-us__description">
            At our college, we believe in the power of community, innovation, and lifelong learning.
            Join us and become part of a vibrant academic family 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;