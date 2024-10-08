import React from 'react'
import Header from './Header'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Content from './Content'
import Testimonials from './Testimonials'
import Footer from './Footer'
import CmsTemplate from '../components/CmsTemplate'
import Placements from './Placements'

const LandingPage = () => {
  return (
    <div className='landing_page'>
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