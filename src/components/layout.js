import React, { useEffect, useState, useContext } from 'react';
import { GlobalStyle } from '../styles/reset';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '@fontsource/poppins';
import Loader from './loader';
import { AnimatePresence, motion } from 'framer-motion';
import { ContactForm } from './contactForm';
import ThankYouCard from './thankyoucard';
import { appContext } from './context';

const Layout = ({ children }) => {
  const { contactFormStatus } = useContext(appContext);
  const [DOMLoaded, setDOMLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setDOMLoaded(true), 500);
  }, []);
  const content = (
    <motion.div
      key="jkwefnjknoekfmfwkkl"
      exit={{ y: '100vh', transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
  const renderContent = () => {
    if (contactFormStatus === 0) {
      return content;
    } else {
      return renderContact();
    }
  };
  const renderContact = () => {
    if (contactFormStatus === 1) {
      return <ContactForm key={`contactdwkcnjnkn128374714431213112`} />;
    } else if (contactFormStatus === 2) {
      return <ThankYouCard key={`thanksjfr8nrf9kf4r9000feffo`} />;
    }
  };
  return (
    <AnimatePresence>
      <GlobalStyle />
      {DOMLoaded ? renderContent() : <Loader key="jidwqeio45498843" />}
    </AnimatePresence>
  );
};

export default Layout;
