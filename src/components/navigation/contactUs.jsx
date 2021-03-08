import React from 'react'
import styled from 'styled-components'

const Cnt = styled.div`
    max-width: 140px;
    padding-bottom: 5px;
    &::after {
        content: '';
        display: block;
        width: 0;
        height: 1.8px;
        background-color:  ${({ darkMode, mainPage=true }) => mainPage ? '#4C65FF' : darkMode ? "#000" : '#fff'};
        transition: all 0.3s ease-in;
        margin-top: 5px;
    }
    &:hover::after {
        width: 100%;
    }
        a {
            font-family: 'Poppins';
            font-size: 17px;
            font-style: normal;
            font-weight: 600;
            line-height: 20px;
            letter-spacing: 0em;
            text-align: left;
            color:  ${({ darkMode, mainPage=true }) => mainPage ? '#4C65FF' : darkMode ? "#000" : '#fff'};
            text-decoration: none;
        }
`

const ContactUs = ({ darkMode, mainPage }) => {
    return <Cnt mainPage={mainPage} darkMode={ darkMode }><a href="tel:123-456-7890">Porozmawiajmy</a></Cnt>
}

export default ContactUs