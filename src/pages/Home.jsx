import React from 'react'

import Hero from '../components/Hero';
import Services from '../components/Services';
import Feedback from '../components/Feedback';
import Brands from '../components/Brands';
import About from '../components/About';
import Footer from '../components/Footer';

const Home = () => {
    
  return (
    <>
    <Hero/>
    <Brands/>
    <About/>
    <Services/>
    <Feedback/>
    <Footer/>
    </>
  )
}

export default Home
