
import React, {useRef, useState} from "react";
import { Stack } from '@mui/system';
import emailjs from '@emailjs/browser'

export const ContactUs = () => {
    const form = useRef();
    
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [phone, setPhone]= useState('');
    const [message, setMessage]= useState('');


    const sendEmail = (e) => {
      e.preventDefault();
       
      emailjs.sendForm("service_6iczdrm","template_km5bld2", form.current, '7AxUQOw9AB5tGREc1')
        .then((result) => {
            alert ('Message sent, thank you for contacting me');
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setName('');
        setEmail('');
        setPhone('');
        setMessage(''); 
    };
  
      return (

        <Stack>
            <Stack className= 'formInput' onSubmit={sendEmail}>
            <form ref={form} >
                <Stack>
                    <div>
                    <label>Name*</label>
                    <input type="text" name="user_name" className= 'formInputItem' onChange={e=>setName(e.target.value)} value={name} required />
                    </div>
                    <br/>
                    <div>
                    <label>Email*</label>
                    <input type="email" name="user_email" className= 'formInputItem' onChange={e=>setEmail(e.target.value)} value={email} required/>
                    </div>
                    <br/>
                    <div>
                    <label>Phone Number</label>
                    <input type="text" name="user_phone" className= 'formInputItem' onChange={e=>setPhone(e.target.value)} value={phone}/>
                    </div>
                </Stack>
                <br/>
                <Stack className='formInput'>           
                    <label>Message* </label>  
                    <textarea name="message" onChange={e=>setMessage(e.target.value)} value={message} required/>
                    
                    <label>
                        <input type='checkbox' required/>
                        I agree to the terms and conditions.
                    </label>
                    <input type="Submit" value="Send" className='submitButton' />
                </Stack>
    </form>
    </Stack>
    </Stack>
    ); 
};
export default ContactUs;