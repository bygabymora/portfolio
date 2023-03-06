import React from 'react'
import { Stack } from '@mui/material';
import gymApp from '../assets/images/gymapp.gif'

const Projects = () => {
  return (
    <Stack id='projects'> 
       
      <h1 className='skills skillHeader'>Projects</h1>
      <p className='aboutMeText'>Most of my projects are developed in React.js and uploaded to a repository on Github. </p>
      <br/>
        <Stack direction={{sm: 'column', md: 'row'}}>
          <Stack>
          <h1 className='aboutMeTitle done'>Done</h1>
          
          </Stack>
          <Stack>
        <a href='https://bygabymora.github.io/gymapp/' target='_blank' className='projectCard'>
          <img src={gymApp} className='projectGif' />
          <p className='projectName'> The Gym App </p>
          <Stack className='buttonsWraper' direction='row' gap='10%'>
          <a type="button" href="https://github.com/bygabymora/gymapp" className='projectButton' target='blank'>Repository</a>
          <a type="button" href="https://bygabymora.github.io/gymapp/"  className='projectButton' target='blank'>App preview</a>
          </Stack>
        </a>
        </Stack>
        </Stack>
      <br/> <br/>
      <Stack>
      <Stack className='aboutMeTitle done'>Projects in process</Stack>
      </Stack>
    
    </Stack>
  )
}

export default Projects