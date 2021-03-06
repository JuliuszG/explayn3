import React, { useState } from 'react'
import styled from 'styled-components'

const Btn = styled.button`
    font-family: 'Poppins';
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    outline: none;
    background: transparent;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    color: ${ ({ color }) => color ? color : '#000'};
`

const LangSwitch = ({ color }) => {
    const [lang, setLang] = useState("pl")
    const handleSwitch = () => {
        if(lang === 'pl') {
            setLang("en")
        } else {
            setLang("pl")
        }
    }

    return (
        <Btn color={ color } onClick={ handleSwitch }>{ lang }</Btn>
    )
}

export default LangSwitch