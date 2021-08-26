import React, { useContext } from 'react';
import { appContext } from '../context';
import { ContactUsButton } from '../styled';

const ContactUs = ({ darkMode, mainPage }) => {
  const { changeContactFormStatus } = useContext(appContext);
  return (
    <ContactUsButton
      onClick={() => changeContactFormStatus(1)}
      mainPage={mainPage}
      darkMode={darkMode}
    >
      Let's talk
    </ContactUsButton>
  );
};

export default ContactUs;
