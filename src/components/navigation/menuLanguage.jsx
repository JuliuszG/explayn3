import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/colors'

const Style = styled.div`
    display: flex;
    align-items: center;
    color: ${({color}) => color ? color : '#9498B2'};
        .lang {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 1.0625em;
            line-height: 119.5%;
            text-transform: uppercase;
            cursor: pointer;
            padding: 0;
            border: none;
            background: transparent;
            outline: none;
            color: #9498B2;
            &:first-of-type {
                margin-right: 10px;
            }
            &:last-of-type {
                margin-left: 10px;
            }
            &.active {
                color: ${({active}) => active ? active : "#fff"};
            }
        }
        .line {
            width: 40px;
            height: 1px;
            background: ${({color}) => color ? color : colors.neutral40}
        }
`

const MenuLanguage = ({ color, active }) => {
    const [lang, setLang] = useState("pl")
    const handleChange = (lang) => setLang(lang)
    return (
        <Style color={color} active={active}>
            <button onClick={ () => handleChange("en") } className={ lang === "en" ? "lang active" : "lang" }>en</button>
            <span className="line"></span>
            <button onClick={ () => handleChange("pl") } className={ lang === "pl" ? "lang active" : "lang" }>pl</button>
        </Style>
    )
}

export default MenuLanguage