import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Highlights from '../components/Highlights';
import Contact from '../components/Contact';

const Landing = () => {
  return (
    <div>
      <Hero />
      <About />
      <Highlights />
      <Contact />
    </div>
  );
};

export default Landing;