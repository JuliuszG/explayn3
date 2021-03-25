import React, { useEffect, useState } from "react"
import { GlobalStyle } from '../styles/reset'
import 'pure-react-carousel/dist/react-carousel.es.css';
import "@fontsource/poppins"
import Loader from './loader'
import { AnimatePresence } from 'framer-motion'

const Layout = ({ children }) => {
  const [DOMLoaded, setDOMLoaded] = useState(false)
  useEffect(() => {
    setTimeout(() => setDOMLoaded(true), 1000)
  }, [])
  const content = (
    <>
      <GlobalStyle />
      { children }
    </>
  )
  return (
    <AnimatePresence exitBeforeEnter>
        { DOMLoaded ? content : (
          <Loader
          key="jidwqeio45498843"
       />
        ) }
    </AnimatePresence>
  )
}


export default Layout
