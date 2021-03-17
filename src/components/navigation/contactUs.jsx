import React from 'react'
import styled from 'styled-components'

const Cnt = styled.div`
    a {
        width: 195px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${ ({ color }) => color ? color : '#4C65FF' };
        border-radius: 32px;
        color: ${ ({ text }) => text ? text : "#fff" };
        text-decoration: none;
        font-family: 'Poppins';
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        transition: all 0.1s ease-in;
        &:hover {
            transform: scale(1.1);
            filter: brightness(120%);
        }
    }
`

const ContactUs = ({ darkMode, mainPage }) => {
    return <Cnt mainPage={mainPage} darkMode={ darkMode }><a href="tel:123-456-7890">Let's talk</a></Cnt>
}

export default ContactUs