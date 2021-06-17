import React, { useState } from 'react'
import MenuIcon from './menuIcon'
import styled from 'styled-components'
import LogoImg from './logoImg'
import ContactUs from './contactUs'
import MenuDesktop from './nav2/menuDesktop'
import { AnimatePresence } from 'framer-motion'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router';

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
    .logo-link {
        margin-left: 80px;
    }
    a {
        text-decoration: none;
    }
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
const BlogTitle = styled.div`
font-family: "Poppins";
font-weight: 600;
font-size: 30px;
line-height: 38px;
text-decoration: none;
color: #000000;
    span {
        color: #4B66FF;
        margin: 0 3px;
    }
`
const Desktop = ({ darkMode, mainPage }) => {
    const location = useLocation()
    const url = location.pathname
    const [menuIsOn, setMenuIsOn] = useState(false)
    const [contactFormIsOn, setcontactFormIsOn] = useState(true)
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
                <Link to="/" className="logo-link" style={url === '/blog' ? {display: 'flex', alignItems: 'flex-end'} : {}}><LogoImg mainPage={mainPage} darkMode={darkMode} customWidth="194px" customHeight="41px"/>{ url === '/blog' && <BlogTitle><span>.</span>Blog</BlogTitle> }</Link>
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