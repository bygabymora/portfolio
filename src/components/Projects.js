import React from 'react'
import { Stack } from '@mui/material';
import gymApp from '../assets/images/gymapp.gif'

const Projects = () => {
  return (
    <Stack className='about' id='projects'> 
    <Stack className='aboutMeTitle'>Projects done</Stack>
    <br/> <br/>
    <Stack>
      <a href='https://bygabymora.github.io/gymapp/' target='_blank'>
        <img src={gymApp} className='projectsDone'/>
      </a>
      <p> The Gym App </p>
      <br/> <br/>
    </Stack>
    <Stack className='aboutMeTitle'>Projects in process</Stack>
    </Stack>
  )
}

export default Projects