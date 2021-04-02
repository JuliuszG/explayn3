import React, { useState, createContext } from 'react'

export const appContext = createContext();
const AppContextProvider = ({ children }) => {
  const [contactFormOpen, setContactFormOpen] = useState(0)
  const handleContactForm = status => {
    setContactFormOpen(status)
  }
  return (
      <appContext.Provider value={{
          contactFormStatus: contactFormOpen,
          changeContactFormStatus: handleContactForm
      }} >
          { children }
      </appContext.Provider>
  )
}

export default AppContextProvider