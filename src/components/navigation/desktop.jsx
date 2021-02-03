import React, { useState } from 'react'
import MenuIcon from './menuIcon'
import styled from 'styled-components'
import LogoImg from './logoImg'
import ContactUs from './contactUs'
import LangSwitch from './langSwitch'
import Menu from './menu'

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
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:first-of-type {
            width: 336px;
        }
        &:last-of-type {
            width: 256px;
        }
    }
`

const Desktop = ({ color }) => {
    const [menuIsOn, setMenuIsOn] = useState(false)
    const handleToggle = () => setMenuIsOn(prevState => !prevState)
    const renderMenu = () => {
        if(menuIsOn) {
            return <Menu toggle={ handleToggle } />
        } else {
            return null
        }
    }
    return (
        <Nav>
            <div className="desktop__cnt">
                <MenuIcon customWidth="35px" customHeight="18px" toggle={ handleToggle } color={ color }/>
                <LogoImg customWidth="194px" customHeight="41px" color={ color } />
            </div>
            <div className="desktop__cnt">
                <ContactUs color={ color }/>
                <LangSwitch color={ color }/>
            </div>
            { renderMenu() }
        </Nav>
    )
}

export default Desktop