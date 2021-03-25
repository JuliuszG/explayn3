import React, { useEffect, useState } from "react"
import { GlobalStyle } from '../styles/reset'
import { useMediaQuery } from 'react-responsive'
import 'pure-react-carousel/dist/react-carousel.es.css';
import "@fontsource/poppins"
import Loader from "react-loader";

const Layout = ({ children }) => {
  const [DOMLoaded, setDOMLoaded] = useState(false)
  const isDesktop = useMediaQuery({ minWidth: 992 })
  useEffect(() => {
    if(isDesktop !== null || isDesktop !== undefined) {
      setDOMLoaded(true)
    }
  }, [isDesktop])
  return (
    <>
      <GlobalStyle />
      <Loader
        loaded={DOMLoaded}
        lines={13}
        length={20}
        width={10}
        radius={30}
        corners={1}
        rotate={0}
        direction={1}
        color="#000"
        speed={1}
        trail={60}
        shadow={false}
        hwaccel={false}
        className="spinner"
        zIndex={2e9}
        top="50%"
        left="50%"
        scale={1.0}
        loadedClassName="loadedContent"
      >
        { children }
      </Loader>
    </>
  )
}


export default Layout
