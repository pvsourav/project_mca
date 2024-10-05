import React from 'react';
import './hero.scss';
import logo from '../assets/logo.png'

const Hero = () => {
  return (
    <div className="hero-container">
      <section className="hero">
        <div className="hero__background">
          <div className="hero__overlay"></div>
        </div>
        <div className="hero__content">
          <div className="title_wrapper"> 
            {/* <img className="logo" src={logo} alt="" />
            <span className='line'></span> */}
            <div className="title">
              <h1 className="hero__title">Department of</h1>
              <h1 className="hero__title">Computer Applications</h1>
            </div>
          </div>
          <div className="hero__cta-container">
            <button className="hero__cta hero__cta--primary">Get Started</button>
            <button className="hero__cta hero__cta--secondary">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;