import React, { useState } from 'react'
import MenuIcon from './menuIcon'
import styled from 'styled-components'
import LogoImg from './logoImg'
import ContactUs from './contactUs'
import LangSwitch from './langSwitch'
import Menu from './menu'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3%;
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

const Desktop = () => {
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
                <MenuIcon customWidth="35px" customHeight="18px" toggle={ handleToggle }/>
                <LogoImg customWidth="194px" customHeight="41px" />
            </div>
            <div className="desktop__cnt">
                <ContactUs />
                <LangSwitch />
            </div>
            { renderMenu() }
        </Nav>
    )
}

export default Desktop