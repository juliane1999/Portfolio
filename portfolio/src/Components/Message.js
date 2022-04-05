import React, { useContext, useRef, useState } from 'react'
import ThemeContext from '../Themes/ThemeContext'
import emailjs from 'emailjs-com'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import '../Style/Message.css'

const Message = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            'service_buburu8',
            'template_kp17n6k',
            formRef.current,
            'mkMjELWfJhatv-oNn'
          )
          .then(
            (result) => {
              console.log(result.text);
              setDone(true)
            },
            (error) => {
              console.log(error.text);
            }
          );
      };

      return (
        <div className="c" style={theme}>
          <div className="c-wrapper">
            <div className="c-left">
              <h1 className="c-title" style={theme}>LET'S COLLAB!</h1>
              <div className="c-info">
                <div className="c-info-item">
                  <PhoneIphoneIcon />
                  +1 (669)237-9950
                </div>
                <div className="c-info-item">
                  <EmailIcon />
                  contact@julianevo1999@gmail.com
                </div>
                <div className="c-info-item">
                  <LocationOnTwoToneIcon />
                  San Jose, CA 95121
                </div>
              </div>
            </div>
            <div className="c-right">
              <form ref={formRef} onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="user_name" />  
                <input type="text" placeholder="Subject" name="user_subject" />
                <input type="text" placeholder="Email" name="user_email" />
                <textarea rows="6" placeholder="Message" name="message" />
                <button>Submit</button>
                {done && 'Sent!'}
              </form>
            </div>
          </div>
        </div>
      );
    };

export default Message