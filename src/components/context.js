import React, { useState, createContext } from 'react';
import { Helmet } from 'react-helmet';

export const appContext = createContext(0);
const AppContextProvider = ({ children }) => {
  const [contactFormOpen, setContactFormOpen] = useState(0);
  const handleContactForm = status => {
    setContactFormOpen(status);
  };
  return (
    <>
    <Helmet>
      <html lang="en-US"></html>
    </Helmet>
    <appContext.Provider
      value={{
        contactFormStatus: contactFormOpen,
        changeContactFormStatus: handleContactForm,
      }}
    >
      {children}
    </appContext.Provider>
    </>
  );
};

export default AppContextProvider;
