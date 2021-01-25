import React from 'react'
import styled from 'styled-components'

const Cnt = styled.div`
    border-bottom: 1.8px solid ${({ color }) => color ? color : '#4C65FF'};
    max-width: 140px;
    padding-bottom: 5px;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
        a {
            font-family: 'Poppins';
            font-size: 17px;
            font-style: normal;
            font-weight: 600;
            line-height: 20px;
            letter-spacing: 0em;
            text-align: left;
            color:  ${({ color }) => color ? color : '#4C65FF'};
            text-decoration: none;
            text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
        }
`

const ContactUs = ({ color }) => {
    return <Cnt color={ color }><a href="tel:123-456-7890">Porozmawiajmy</a></Cnt>
}

export default ContactUs