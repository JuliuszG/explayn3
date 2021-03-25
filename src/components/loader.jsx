import React from 'react'
import styled from 'styled-components'
import LoaderIcon from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { colors } from '../styles/colors'
import { motion } from 'framer-motion'

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
`

const Loader = () => {
    return (
        <Style
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
        >
            <LoaderIcon type="Grid"
        color="#000"
        height={100}
        width={100} />
        </Style>
    ) 
}

export default Loader