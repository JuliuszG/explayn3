import React from "react"
import { GlobalStyle } from '../styles/reset'
import 'pure-react-carousel/dist/react-carousel.es.css';
import "@fontsource/poppins"

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      { children }
    </>
  )
}


export default Layout
