import React, { useContext, useEffect, useState } from 'react';
import { appContext } from '../context';
import { ContactUsButton, ContactUsButtonScroll } from '../styled';

const ContactUs = ({ darkMode, mainPage }) => {
  const { changeContactFormStatus } = useContext(appContext);
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100)
    })
  }, [window.scrollY])
  return (
    <React.Fragment>
    {scroll
      ?  <ContactUsButtonScroll
            onClick={() => changeContactFormStatus(1)}
            mainPage={mainPage}
            darkMode={darkMode}
          >
            Let's talk
          </ContactUsButtonScroll>
      :   <ContactUsButton
          onClick={() => changeContactFormStatus(1)}
          mainPage={mainPage}
          darkMode={darkMode}
        >
           Let's talk
        </ContactUsButton>
    }
  </React.Fragment> ) }  

export default ContactUs;
