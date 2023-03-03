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
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App