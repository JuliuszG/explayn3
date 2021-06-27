import React, { useContext } from 'react'
import styled from 'styled-components'
import { appContext } from '../context'

const Cnt = styled.div`
        width: 219px;
        height: 58px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: radial-gradient(#4c65ff 0%, #263380 100%);
        border-radius: 32px;
        color: ${ ({ text }) => text ? text : "#fff" };
        text-decoration: none;
        font-family: 'Poppins';
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        transition: all 0.1s ease-in;
        cursor: pointer;
        &:hover {
            transform: scale(1.1);
            filter: brightness(120%);
        }
`

const ContactUs = ({ darkMode, mainPage }) => {
    const { changeContactFormStatus } = useContext(appContext)
    return <Cnt onClick={ () => changeContactFormStatus(1) } mainPage={mainPage} darkMode={ darkMode }>Let's talk</Cnt>
}

export default ContactUs