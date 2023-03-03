import React from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import ScrollTopButton from '../components/ScrollTopButton';

const Home = () => {
  return (
    <Box>
      <ScrollTopButton/>
      <HeroBanner/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      
    </Box>
  )
}

export default Home