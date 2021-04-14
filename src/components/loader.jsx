import React from 'react'
import styled, { keyframes } from 'styled-components'
// import LoaderIcon from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { colors } from '../styles/colors'
import { motion } from 'framer-motion'

const spin = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const Style = styled(motion.div)`
    min-height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1111;
    background: #fff;
    h1 {
        font-family: 'Poppins';
        font-style: normal;
        color: ${ colors.neutral100 };
        font-size: 40px;
    }
    .loader {
        margin-top: 16px;
        border-top: 10px solid rgb(76, 101, 255);
        border-right: 10px solid rgba(136, 136, 136, 0.2);
        border-bottom: 10px solid rgba(136, 136, 136, 0.2);
        border-left: 10px solid rgba(136, 136, 136, 0.2);
        animation: ${spin} 0.9s linear infinite;
        border-radius: 50%;
        width: 64px;
        height: 64px;
    }
`

const Loader = () => {
    return (
        <Style
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
        >
            {/* <LoaderIcon type="Grid"
        color="#000"
        height={100}
        width={100} /> */}
        <div className="loader" />
        </Style>
    ) 
}

export default Loader