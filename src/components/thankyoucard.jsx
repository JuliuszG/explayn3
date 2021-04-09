import React, {useContext} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { appContext } from './context'

const FilledInStyle = styled(motion.div)`
width: 100%;
height: 100vh;
padding: 5% 15%;
background-color: #fff;
display: flex;
flex-direction:column;
justify-content: center;
font-family: 'Poppins', sans-serif;
z-index: 999;
@media (max-width: 1024px) {
    font-size: 14px;
    justify-content: center;
    align-items: center;
}
@media (max-width: 500px) {
    font-size: 12px;
}
.btn-cnt {
    @media (max-width: 1024px) {
        display: flex;
        justify-content: center;
        margin-top: 10%;
    }
}
h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 5.25em;
    letter-spacing: -1.34px;
    color: #000000;
    line-height: 110%;
    margin-bottom: 2.38vh;
    @media (max-width: 1680px) {
        width: 75%;
    }
    @media (max-width: 1250px) {
        width: 100%;
    }
    @media (max-width: 500px) {
        font-size: 4em;
    }
}
p {
    font-size: 1.25em;
    line-height: 145%;
    width: 50%;
    @media (max-width: 1024px) {
        width: 100%;
    }
    &:first-of-type {
        margin-bottom: 2%;
    }
}
button {
    width: 254px;
    height: 58px;
    border: 3px solid #5163F6;
    border-radius: 37px;
    background: transparent;
    font-size: 29px;
    outline: none;
    cursor: pointer;
    color: #5163F6;
    position: relative;
    margin-top: 5%;
    transition: color 0.6s ease-in;
    overflow: hidden;
    &:hover {
        color: #fff;
    }
    &:hover::after {
        right: -0.8px;
    }
    &:hover p {
        position: absolute;
        top: calc(50% - 25px);
        left: 0%;
    }
    p{
        width: 100%;
        height: 100%;
        z-index: 500;
    }
    &::after {
        content: '';
        display: block;
        width: 254px;
        height: 100px;
        background: #5163F6;
        position: absolute;
        right: -254px;
        top: -3px;
        transition: right 0.3s ease-in;
        z-index: 30;
    }
}
`
const thanksVariant = {
    in: {
        x: 0,
        transition: {
            duration: 0.3
        }
    },
    out: {
        x: '-100vw',
    },
    exit: {
        y: '-100vh',
        transition: {
            duration: 0.3
        }
    }
}
const ThankYouCard = () => {
const { changeContactFormStatus } = useContext(appContext)
return(
    <FilledInStyle
        variants={thanksVariant}
        animate="in"
        initial="out"
        exit="exit"    
    >
        <h1>We’re glad we can help you.</h1>
        <p>Based on your needs, we will select the appropriate solution. We will answear your questions asap.</p>
        <p>In the meantime see how we helped others achieve their goals.</p>
        <div className="btn-cnt">
        <button onClick={ () => changeContactFormStatus(0) }><p>Go back</p></button>
        </div>
    </FilledInStyle>
)
}

export default ThankYouCard