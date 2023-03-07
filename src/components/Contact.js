import { Stack } from '@mui/system';
import React from 'react';
import Formulario, { ContactUs } from './ContactUs';
import WhatsAppIcon from '../assets/icons/icons8-whatsapp.svg';
import MailIcon from '../assets/icons/icons8-mail.svg';
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.01 })
  
  return (
    <Stack  className='section' id='contact'>
    <div>
    <h1  ref={ref} className={inView ?'sectionHeader': null}>Contact me!</h1>
      <p className='sectionText'>If you have any project where you think I could be useful, 
        please contact me!<br/>
      </p>
    </div>
    <Stack className='info' direction={{ xs: 'column' , sm: 'column' , md: 'column' , lg: 'row' , xl: 'row'}}>
      <div>
        <br/>
        <ContactUs/>
      </div>
      <div>
        <Stack direction='row' marginTop= {{lg:'15%'}} className='contactInfo'>
        <img
        src={WhatsAppIcon}
        alt=""
        loading="lazy" 
        className="contactIcon"/> 
        <p className='contactInfo'>(+57) 302 2012043</p>
        </Stack>
        <Stack direction='row' className='contactInfo'>
        <img
        src={MailIcon}
        alt=""
        loading="lazy" 
        className="contactIcon"/> 
        <p className='contactInfo'>gaby@bygabymora.com</p>
        </Stack>
        <p className='formInput contactInfo'>www.bygabymora.com</p><br/>
      </div>
        
    </Stack>
    </Stack>
  )
}

export default Contact