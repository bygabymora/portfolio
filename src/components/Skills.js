import React from 'react';
import HtmlIcon from '../assets/icons/icons8-html-5.svg';
import CssIcon from '../assets/icons/icons8-css3.svg';
import BootStrapIcon from '../assets/icons/icons8-bootstrap.svg';
import JSIcon from '../assets/icons/icons8-javascript.svg';
import ReactIcon from '../assets/icons/icons8-react-native.svg';
import GitIcon from '../assets/icons/icons8-git.svg';
import SQLIcon from '../assets/icons/icons8-SQL.svg';
import TSIcon from '../assets/icons/icons8-TS.svg';
import MUIIcon from '../assets/icons/icons8-MUI.svg';

import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { useInView } from "react-intersection-observer";

import { Stack } from '@mui/material';


const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.5 })

  return (
    <section className="section" id="skills">
    <h2 ref={ref} className={inView ?'sectionHeader': null}>My Top Skills</h2> 
    <br/>  
    <ScrollMenu className='scrollBar'>   
        <Stack alignItems='center'>
          <Stack direction='row'  className={inView ?"animate__animated animate__pulse": null}>
            <Stack direction='row'   className={inView ?"animate__animated animate__pulse": null}>
              <div className="iconCard">
              <img
                src={HtmlIcon}
                alt=""
                loading="lazy" 
                className="icon"
              /> 
              <p className='cardText'> HTML5</p>
              </div> 
              <div className="iconCard">          
              <img
                src={CssIcon}
                alt=""
                loading="lazy"
                className="icon"
              />
              <p className='cardText'>CSS3</p>
              </div>
            </Stack>
            <Stack direction='row'  className="animate__animated animate__pulse">
            <div className="iconCard"> 
              <img
                src={JSIcon}
                alt=""
                loading="lazy"
                className="icon"
              />
              <p className='cardText'>JavaScript</p>
              </div>
              <div className="iconCard"> 
              <img
                src={ReactIcon}
                alt=""
                loading="lazy"
                className="icon"
              />
              <p className='cardText'>React</p>
              </div>
            </Stack>
            <Stack direction='row'  className="animate__animated animate__pulse">
              <div className="iconCard"> 
              <img
                src={BootStrapIcon}
                alt=""
                loading="lazy"
                className="icon"
              />
              <p className='cardText'>Bootstrap</p>
              </div>
              <div className="iconCard"> 
              <img
                src={MUIIcon}
                alt=""
                loading="lazy"
                className="icon"
              />
              <p className='cardText'>Material<br/>UI</p>
              </div>
              <div className="iconCard"> 
              <img
                src={GitIcon}
                alt=""
                loading="lazy"
                className="icon"
              />
              <p className='cardText'>Git</p>
              </div>
            </Stack>
            <Stack direction='row'  className="animate__animated animate__pulse">
              <div className="iconCard"> 
              <img
                src={SQLIcon}
                alt=""
                loading="lazy"
                className="icon"
              />
              <p className='cardText'>SQL</p>
              </div>
              <div className="iconCard"> 
              <img
                src={TSIcon}
                alt=""
                loading="lazy"
                className="icon"
              />
              <p className='cardText'>TypeScript</p>
              </div>
            </Stack> 
          </Stack>
        </Stack>
      
    </ScrollMenu>
    </section>
  )
}

export default Skills