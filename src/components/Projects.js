import React from 'react'
import { Stack } from '@mui/material';
import gymApp from '../assets/images/gymapp.gif';
import shoppingList from '../assets/images/shoppinglist.gif';
import carcare from '../assets/images/CarCare.gif';
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.01 })

  return (
    <Stack className='section' id='projects'> 
       
      <h1 ref={ref} className={inView ?'sectionHeader': null}>Projects</h1>
      <p className='sectionText'>Most of my projects are developed in React.js and uploaded to a repository on Github. </p>
      <br/>
        <Stack direction={{sm: 'column', md: 'row'}} gap='40px'>
        <Stack>
        <a href='https://bygabymora.github.io/gymapp/' target='_blank' className='projectCard'>
          <img src={gymApp} className='projectGif' />
          <p className='projectName'> The Gym App </p>
          <Stack className='buttonsWraper' direction='row' gap='10%'>
          <a type="button" href="https://github.com/bygabymora/gymapp" className='projectButton' target='blank'>Repository</a>
          <a type="button" href="https://bygabymora.github.io/gymapp/"  className='projectButton' target='blank'>Preview</a>
          </Stack>
          <p className='projectDescription'>
          Full Stack app developed in React.js (hooks), with MUI and used an external API to retrieve the exercises info.
          </p>
        </a>
        </Stack>
        <Stack>
        <a href='https://bygabymora.github.io/shoppinglist/' target='_blank' className='projectCard'>
          <img src={shoppingList} className='projectGif' />
          <p className='projectName'> The Shopping list </p>
          <Stack className='buttonsWraper' direction='row' gap='10%'>
          <a type="button" href="https://github.com/bygabymora/shoppinglist" className='projectButton' target='blank'>Repository</a>
          <a type="button" href="https://bygabymora.github.io/shoppinglist/"  className='projectButton' target='blank'>Preview</a>
          </Stack>
          <p className='projectDescription'>
          Simple shopping list app developed in React, using framer-motion.
          </p>
        </a>
        </Stack>
        </Stack>
      <br/> 
      <h1>In Process</h1>
       <br/>
      <Stack>
        <a href='https://bygabymora.github.io/carcare/' target='_blank' className='projectCard'>
          <img src={carcare} className='projectGif' />
          <p className='projectName'> Car Care Tracker </p>
          <Stack className='buttonsWraper' direction='row' gap='10%'>
          <a type="button" href="https://github.com/bygabymora/carcare" className='projectButton' target='blank'>Repository</a>
          <a type="button" href="https://bygabymora.github.io/carcare/"  className='projectButton' target='blank'>Preview</a>
          </Stack>
          <p className='projectDescription'>
          This is the project I'm working on right now, its developed in React.js and integrated with Auth0 for the authentication and a MERN stack, it's not fully online yet.
          </p>
        </a>
        </Stack>

      <Stack>
      <div className='titleWraper'>
      </div>
      </Stack>
    
    
    </Stack>
  )
}

export default Projects