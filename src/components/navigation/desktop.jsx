import React, { useState } from 'react'
import MenuIcon from './menuIcon'
import styled from 'styled-components'
import LogoImg from './logoImg'
import ContactUs from './contactUs'
import LangSwitch from './langSwitch'
import MenuDesktop from './nav2/menuDesktop'
import { AnimatePresence } from 'framer-motion'
import MenuLanguage from './menuLanguage'
import { Link } from 'gatsby'

const Nav = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3%;
    background: transparent;
    z-index: 100;
    width: 100%;
    .desktop__cnt {
        width: 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 1300px) {
            width: 30%;
        }
        &:first-of-type {
            width: 336px;
        }
        &:last-of-type {
            width: 256px;
        }
    }
`

const Desktop = ({ darkMode, mainPage }) => {
    const [menuIsOn, setMenuIsOn] = useState(false)
    const handleToggle = () => setMenuIsOn(prevState => !prevState)
    const renderMenu = () => {
        if(menuIsOn) {
            return <MenuDesktop toggle={ handleToggle }/>
        } else {
            return null
        }
    }
    return (
        <Nav>
            <div className="desktop__cnt">
                <MenuIcon mainPage={mainPage} darkMode={darkMode} customWidth="40px" customHeight="23px" toggle={ handleToggle }/>
                <Link to="/"><LogoImg mainPage={mainPage} darkMode={darkMode} customWidth="194px" customHeight="41px"/></Link>
            </div>
                <ContactUs mainPage={mainPage} darkMode={darkMode} />
            <div style={{ position: "absolute" }}> 
                <AnimatePresence>
                    { renderMenu() }
                </AnimatePresence>
            </div>
        </Nav>
    )
}

export default Desktop