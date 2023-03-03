import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box className='appBox'>
        <Navbar/>
        <Home/>
        <Footer/>
    </Box>
  )
}

export default App