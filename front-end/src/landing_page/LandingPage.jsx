import React from 'react'
import Header from './Header'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Content from './Content'
import Testimonials from './Testimonials'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div className='landing_page'>
      <Header/>
      <Hero/>
      <AboutUs/>
      <Content/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default LandingPage