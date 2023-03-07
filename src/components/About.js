import React from 'react';
import { Stack } from '@mui/material';
import AboutImage from '../assets/images/AboutImage.png';
import { useInView } from "react-intersection-observer";

const About = () => {

  const [ref, inView] = useInView({ threshold: 0.01 })
  return (
    <Stack className="section" direction={{ xs: 'column' , sm: 'column' , md: 'column' , lg: 'row' , xl: 'row'}} >
      <div>
        <img src={AboutImage} alt='About Image'className='fakephoto'/>
      </div>
      <div className='about'> 
        <h1 ref={ref} className={inView ?'sectionHeader': null} id="about">About me.</h1>
        <p className='sectionText'>
         Hi! <br/>
         I'm Gaby Mora, I'm a junior web developer, 
         I create very pretty and useful websites 
         and I've focused in modern web using React.js with Hooks.<br/><br/>

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