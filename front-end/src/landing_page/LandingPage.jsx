import React from 'react'
import Header from './Header'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Content from './Content'
import Testimonials from './Testimonials'
import Footer from './Footer'
import Placements from './Placements'
import './landingpage.scss'

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <Header/>
      <Hero/>
      <AboutUs/>
      <Content/>
      <Placements/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default LandingPage