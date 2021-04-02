import React, { useEffect, useState, useContext } from "react"
import { GlobalStyle } from '../styles/reset'
import 'pure-react-carousel/dist/react-carousel.es.css';
import "@fontsource/poppins"
import Loader from './loader'
import { AnimatePresence } from 'framer-motion'
import { ContactForm } from "./contactForm";
import { appContext } from './context'

const Layout = ({ children }) => {
  const { contactFormStatus } = useContext(appContext)
  const [DOMLoaded, setDOMLoaded] = useState(false)
  useEffect(() => {
    setTimeout(() => setDOMLoaded(true), 500)
  }, [])
  const content = (
    <>
      <GlobalStyle />
      { children }
    </>
  )
  const renderContent = () => {
    if(contactFormStatus === 0) {
      return content
    } else {
      return renderContact()
    }
  }
  const renderContact = () => {
    if(contactFormStatus === 1) {
      return(
        <ContactForm/>
      )
    } else if(contactFormStatus === 2) {
      return null
    }
  }
  return (
    <AnimatePresence>
        { DOMLoaded ? renderContent()  : (
          <Loader
          key="jidwqeio45498843"
       />
        ) }
    </AnimatePresence>
  )
}


export default Layout
