import React from "react"
import "@fontsource/poppins"
import { GlobalStyle } from '../styles/reset'

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      { children }
    </>
  )
}


export default Layout
