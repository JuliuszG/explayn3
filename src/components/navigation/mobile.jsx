import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from './menuIcon'
import LogoImg from './logoImg'
import { colors } from '../../styles/colors'
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import MobileMenu from './mobileMenu'

const Style = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6%;
    background: ${ colors.neutral30 };
`
const Image = styled(Img)`
    width: 22px;
    height: 22px;
`
const Mobile = () => {
    const [menuOn, setMenuOn] = useState(false)
    const handleToggle = () => setMenuOn(prevState => !prevState)

    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "phone.png" }) {
            childImageSharp {
                fluid {
                ...GatsbyImageSharpFluid
                }
            }
            }
        }
    `)
    return (
        <Style>
            <MenuIcon customWidth="35px" customHeight="18px" toggle={ handleToggle }/>
            <LogoImg customWidth="128px" customHeight="27px" />
            <a href="tel:+123456789"><Image fluid={data.file.childImageSharp.fluid} alt="phone" /></a>
            { menuOn && <MobileMenu toggle={ handleToggle } /> }
        </Style>
    )
}

export default Mobile 