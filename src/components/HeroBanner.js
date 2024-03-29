import React from 'react';
import { Box, Stack} from '@mui/material';
import heroBannerImage from '../assets/images/heroBannerImage.png'
import byGabyMora from '../assets/images/By Gaby Mora.png';
import CV from'../assets/docs/Gabriela_Mora_Junior_Web_Developer.docx';

const HeroBanner = () => {
  return (
    <Box>
        <div className='heroBannerTitle ' >
        <img src={heroBannerImage} alt='banner' className= "hero-banner-img" />
            Turning <br/> ideas into realities.
        </div>
        <br/>
        <div className='heroBannerSubTitle'>
        <Stack direction='row' gap='5%'> 
        <a href='#contact' className='heroBannerButton'>
            Lets talk!
        </a>
        <a href={CV} className='heroBannerButton' target='_blank'>
            Resume.
        </a>
        </Stack>    
        </div>
        <div className='spacer'></div>
        <div >
          <img className='byGabyMora' src={byGabyMora} alt='ByGabyMora'/>
          <br/><br/>
        </div> 

    </Box>
  )
}

export default HeroBanner