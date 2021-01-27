import React, { useState } from 'react'
import styled from 'styled-components'
import MenuLanguage from './menuLanguage'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { colors } from '../../styles/colors'
import Img from 'gatsby-image'
import { Exit } from './menu'

const Style = styled.div`
    background: ${ colors.neutral90 };
    width: 100%;
    height: 100vh;
    padding: 5%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 900;
    overflow-y: auto;
    .cnt {
        width: 100%;
        height: 100%;
        position: relative;
    }
`
const HeadStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        border: none;
        background: transparent;
        outline: none;
        cursor: pointer;
        width: 22px;
        height: 22px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0;
        span {
            display: block;
            width: 100%;
            height: 2.3px;
            background: #fff;
            &:first-of-type {
                transform: rotate(45deg) translateY(-1px) translateX(-1px);
            }
            &:last-of-type {
                transform: rotate(-45deg) translateX(2.2px) translateY(-2px);
            }
        }
    }
`
const LinksStyle = styled.ul`
    padding: 10% 10% 5%;
    font-size: 16px;
    .dropdown.active {
        display: block;
    }
    .dropLink {
        cursor: pointer;
    }
    li {
        padding: 6% 0;
        position: relative;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        span {
            margin-right: 5%;
        }
        a {
            text-decoration: none;
            color: #fff;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 1.5em;
            line-height: 36px;
            span {
                color: #9498B2;
            }
        }
        .dropdown {
            display: none;
            z-index: 1000;
            li {
                border: none
            }
            a {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                font-size: 1.125em;
                line-height: 27px;
            }
        }
    }
`
const FootStyle = styled.div`
    padding: 10% 0 5%;
    padding-left: 5%;
    color: #fff;
    .contact {
        margin-bottom: 15%;
        .header {
            font-family: "Poppins";
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 36px;
            margin-bottom: 10%;
        }
        a {
            color: #fff;
            text-decoration: none;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 24px;
            display: block;
        }
    }
    .social {
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
            font-family: "Poppins";
            font-style: normal;
            font-weight: 300;
            font-size: 13px;
            line-height: 19px;
            color: #fff;
            text-decoration: none;
        }
    }
`
const Image = styled(Img)`
    width: 100%;
`
const MenuFooter = () => {
    return(
        <FootStyle>
            <div className="contact">
                <h3 className="header">Skontaktuj się z nami</h3>
                <a href="tel:+123456789">+48 881 772 030</a>
                <a href="mailto:we@explayn.it">we@explayn.it</a>
            </div>
            <div className="social">
                <a href="http://www.facebook.com">Facebook</a>
                <a href="http://www.dribble.com">Dribble</a>
                <a href="http://www.instagram.com">Instagram</a>
                <a href="http://www.linkedin.com">LinkedIn</a>
            </div>
        </FootStyle>
    )
}

const MenuLinks = () => {
    const [dropOn, setDropOn] = useState(false)
    const handleDrop = () => setDropOn(prevState => !prevState)
    return (
        <LinksStyle>
            <li><Link to="/placeholder"><span>01.</span>Strona główna</Link></li>
                <li onClick={ handleDrop } className="dropLink">
                    <Link><span>02.</span>Co robimy</Link>
                    <ul className={dropOn ? "dropdown active" : "dropdown"}>
                        <li><Link to="/drop">Branding</Link></li>
                        <li><Link to="/drop">eCommerce</Link></li>
                        <li><Link to="/drop">Events</Link></li>
                        <li><Link to="/drop">Marketing</Link></li>
                        <li><Link to="/drop">Development</Link></li>
                    </ul>
                </li>
            <li><Link to="/placeholder"><span>03.</span>Nasze prace</Link></li>
            <li><Link to="/placeholder"><span>04.</span>Kontakt</Link></li>
        </LinksStyle>
    )
}

const MobileHeader = ({ toggle }) => {
    return(
        <HeadStyle>
            <Exit>
                <span className="sr" role="button">exit button</span>
            </Exit>
            <MenuLanguage />
        </HeadStyle>
    )
}

const MobileMenu = ({ toggle }) => {

    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "menuLogo.png" }) {
            childImageSharp {
                fluid {
                ...GatsbyImageSharpFluid
                }
            }
            }
        }
    `)

    return(
        <Style>
            <div className="cnt">
                <MobileHeader toggle={ toggle } />
                <MenuLinks />
                <MenuFooter />
                <Image fluid={data.file.childImageSharp.fluid} alt="logo" style={{ position: "absolute", left: 0, bottom: '-25%' }}/> 
            </div>
        </Style>
    )
}

export default MobileMenu