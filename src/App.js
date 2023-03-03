import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <Box className='appBox'>
        <Home/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App