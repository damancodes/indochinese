import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Highlights from '../components/Highlights';
import IndoCateringSection from '../components/IndoCateringSection';
import Contact from '../components/Contact';

const Landing = () => {
  return (
    <div>
      <Hero />
      <About />
      <Highlights />
      <IndoCateringSection />
      <Contact />
    </div>
  );
};

export default Landing;