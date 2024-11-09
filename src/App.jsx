import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FeaturedWork />
      <Contact />
      <Footer />
    </>
  )
}

export default App
