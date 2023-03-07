import React from 'react'
import { Stack } from '@mui/material';
import gymApp from '../assets/images/gymapp.gif'
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.5 })

  return (
    <Stack className='section' id='projects'> 
       
      <h1 ref={ref} className={inView ?'sectionHeader': null}>Projects</h1>
      <p className='sectionText'>Most of my projects are developed in React.js and uploaded to a repository on Github. </p>
      <br/>
        <Stack direction={{sm: 'column', md: 'row'}} className='wraper'>
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
      <div className='titleWraper'>
      </div>
      </Stack>
    
    </Stack>
  )
}

export default Projects