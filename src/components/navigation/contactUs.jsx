import React, { useContext } from 'react'
import styled from 'styled-components'
import { appContext } from '../context'

const Cnt = styled.div`
        width: 194px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(#4c65ff 0%, #263380 180%);
        border-radius: 32px;
        color: ${ ({ text }) => text ? text : "#fff" };
        text-decoration: none;
        font-family: 'Poppins';
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        transition: all 0.1s ease-in;
        cursor: pointer;
        @media (hover: hover) {
            &:hover {
                color: #404040 !important;
                font-weight: 600 !important;
                letter-spacing: 3px;
                background: none;
                -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
                -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
                transition: all 0.3s ease 0s;
        }
        }
`

const ContactUs = ({ darkMode, mainPage }) => {
    const { changeContactFormStatus } = useContext(appContext)
    return <Cnt onClick={ () => changeContactFormStatus(1) } mainPage={mainPage} darkMode={ darkMode }>Let's talk</Cnt>
}

export default ContactUs