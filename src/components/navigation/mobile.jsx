import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from './menuIcon'
import LogoImg from './logoImg'
import { colors } from '../../styles/colors'
import Img from "gatsby-image"
import MenuMobile from './nav2/menuMobile'
import { AnimatePresence } from 'framer-motion'
import { Link } from 'gatsby'
import Phone from '../../images/call-phone.svg'


const Style = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6%;
    height: 75px;
    background: ${ colors.neutral10 };
    .dec {
        width: 1px;
        height: 70px;
        background: ${ colors.neutral30 };
    }
`
const Image = styled(Img)`
    width: 22px;
    height: 22px;
`
const Mobile = () => {
    const [menuOn, setMenuOn] = useState(false)
    const [contactFormIsOn, setcontactFormIsOn] = useState(true)
    const handleToggle = () => setMenuOn(prevState => !prevState)

    return (
        <Style>
            <MenuIcon customWidth="35px" customHeight="18px" toggle={ handleToggle }/>
            <div className="dec"></div>
            <Link to="/"><LogoImg customWidth="128px" customHeight="27px" /></Link>
            <div className="dec"></div>
            <a href="tel:+123456789"><img src={ Phone } alt="phone"/></a>
            <div style={ { position: "absolute" } }>
                <AnimatePresence>
                    { menuOn && <MenuMobile toggle={ handleToggle } /> }
                </AnimatePresence>
            </div>
        </Style>
    )
}

export default Mobile 