import React from 'react';
import githubIcon from '../assets/icons/icons8-github.svg';
import TwitterIcon from '../assets/icons/icons8-twitter.svg';
import LinkedInIcon from '../assets/icons/icons8-linkedIn.svg'
import WhatsAppIcon from '../assets/icons/icons8-whatsapp2.svg'
import { Stack } from '@mui/system';

const Footer = () => {
  return (
    <Stack className='footer' direction={{ xs: 'column' , sm: 'column' , md: 'column' , lg: 'row' , xl: 'row'}}>
    <div className='footerText'>Copyright © 2023 byGabyMora</div>
    <br/>
    <div className='footerText'>
    <a href='https://github.com/bygabymora' target='blank'>
    <img
        src={githubIcon}
        alt=""
        loading="lazy" 
        className="contactIcon"/>
    </a>
    <a href= 'https://twitter.com/bygabymora' target='blank'>
    <img
        src={TwitterIcon}
        alt=""
        loading="lazy" 
        className="contactIcon"/>
    </a> 
    <a href= 'https://www.linkedin.com/in/bygabymora/' target='blank'>
      <img
        src={LinkedInIcon}
        alt=""
        loading="lazy" 
        className="contactIcon"/>
    </a>
    <a href= "https://wa.me/573022012043?text=Hi!%20I'm%20interested%20in%20your%20services%20as%20a%20web%20developer." target='blank'>
      <img
        src={WhatsAppIcon}
        alt=""
        loading="lazy" 
        className="contactIcon"/>
    </a>
    </div>
    </Stack>
  )
}

export default Footer