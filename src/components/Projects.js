import React from 'react'
import { Stack } from '@mui/material';
import gymApp from '../assets/images/gymapp.gif'

const Projects = () => {
  return (
    <Stack className='about' id='projects'> 
    <Stack >
      <h1 className='aboutMeTitle'>Projects done</h1>
      <p>Most of my projects are developed in React.js and uploaded to a repository on Github </p></Stack>
    <br/>
    <Stack>
      <a href='https://bygabymora.github.io/gymapp/' target='_blank' className='projectCard'>
        <img src={gymApp} className='projectsDone'/>
        <p className='projectName'> The Gym App </p>
      <Stack direction='row' gap='10%'>
      <input type="button" onclick="https://github.com/bygabymora/gymapp" value="Repository" className='projectButton'/>
      <input type="button" onclick="https://bygabymora.github.io/gymapp/" value="App preview" className='projectButton'/>
      </Stack>
      </a> 
      <br/> <br/>
    </Stack>
    <Stack className='aboutMeTitle'>Projects in process</Stack>
    </Stack>
  )
}

export default Projects