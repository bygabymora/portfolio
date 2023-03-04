import React from 'react';
import { Stack } from '@mui/material';
import AboutImage from '../assets/images/AboutImage.png';

const About = () => {
  return (
    <Stack direction={{ xs: 'column' , sm: 'column' , md: 'column' , lg: 'row' , xl: 'row'}} className='about '>
      <div>
        <img src={AboutImage} alt='About Image'className='fakephoto'/>
      </div>
      <div className='about'> 
        <h1  className='aboutMeTitle' id="about">About me.</h1>
        <p className='aboutMeText'>
         Hi! <br/>
         I'm Gaby Mora, I'm a junior web developer, 
         I create very pretty and useful websites 
         and I've specialized in modern web (React.js).<br/><br/>

        My passion for coding started years ago, 
        but until a little time ago I became serious about it. 
        I'd love to participate in any project or an development 
        team that keeps me growing and learning.
        </p>
        </div>
    </Stack>
  )
}

export default About