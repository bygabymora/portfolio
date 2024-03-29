import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import BGM2 from '../assets/images/BGM2.png'

const Navbar = () => {
  return (
    <Stack  direction={{ xs: 'column' , sm: 'column' , md: 'row'}} className='section wraper'>
      <Link to='/'>
        <img className='logo' src={BGM2} alt='logo' id='top'/>
      </Link> 
      <Stack direction='row' className='navBar'>
        <a href='#about' className='navBarItem'>About</a>
        <a href='#skills' className='navBarItem'>Skills</a>
        <a href='#projects' className='navBarItem'>Projects</a>
        <a href='#contact' className='navBarItem'>Contact</a>
       
      </Stack>
      </Stack>
  )
}

export default Navbar