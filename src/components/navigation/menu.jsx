import React, { useState } from 'react'
import styled from 'styled-components'
import ContactUs from './contactUs'
import { colors } from '../../styles/colors'
import MenuLanguage from './menuLanguage'
import Img from 'gatsby-image'
import { graphql, useStaticQuery, Link } from 'gatsby'


const Style = styled.div`
    width: 100%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    background: ${ colors.neutral90 };
    z-index: 999;
`

const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3%;
    .cnt {
        width: 367px;
        display: flex;
        justify-content: space-between;
    }
`
export const Exit = styled.div`
    background: transparent;
    outline: none;
    cursor: pointer;
    width: 22px;
    height: 22px;
    padding: 0;
    position: relative;
    &:after {
        content: '';
        height: 100%;
        border-left: 2px solid #fff;
        position: absolute;
        transform: rotate(45deg);
        left: 10px;
    }
    :before {
        content: '';
        height: 100%;
        border-left: 2px solid #fff;
        position: absolute;
        transform: rotate(-45deg);
        left: 10px;
    }
    .sr {
        display: none;
    }
`
const Image = styled(Img)`
    width: 30%;
`
const LinksStyle = styled.ul`
    padding: 5%;
    font-size: 16px;
    @media (max-height: 1720px) {
            font-size: 14px;
        }
    @media (max-width: 1520px) {
            font-size: 12px;
        }
    @media (max-width: 1350px) {
            font-size: 8px;
        }
    .dropdown.active {
        display: block;
    }
    .longdash.active {
        display: inline-block;
    }
    .dropLink {
        cursor: pointer;
    }
    li {
        margin-bottom: 1%;
        position: relative;
        span {
            margin-right: 5%;
        }
        a {
            text-decoration: none;
            color: ${ colors.neutral00 };
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 2.75em;
            line-height: 272.72%;
            span {
                color: ${ colors.neutral40 };
                font-size: calc(1em / 2.3);
                font-style: normal;
                font-weight: 600;
            }
        }
        .dropdown {
            position: absolute;
            display: none;
            top: 3vh;
            right: 50%;
            z-index: 1000;
            @media (max-width: 1350px) {
                top: 0;
            }
            @media (max-width: 1366px) and (min-height: 1024px) {
                right: 40%;
            }
            @media (max-width: 1024px) {
                right: 45%;
                top: 0;
            }
            a {
                font-size: 1.5625em;
                line-height: 61px;
            }
        }
        .longdash {
            width: 100px;
            height: 1px;
            background: ${ colors.neutral00 };
            margin-left: 10%;
        }
    }
`

const FooterStyle = styled.div`
    padding: 0 10%;
    color: #fff;
    font-size: 16px;
    @media (max-height: 1720px) {
            font-size: 16px;
        }
    @media (max-width: 1520px) {
            font-size: 15px;
        }
    @media (max-width: 1350px) {
            font-size: 14px;
        }
    @media (max-width: 1120px) {
            font-size: 13px;
        }
    a {
        color: #fff;
        text-decoration: none;
    }
    .main {
        display: flex;
        justify-content: space-between;
        position: relative;
        align-content: flex-start;
        .social {
            width: 25%;
            display: flex;
            justify-content: space-between;
            .row {
                display: flex;
                flex-direction: column;
                a {
                    font-family: 'Poppins';
                    font-size: 1.0625em;
                    font-style: normal;
                    font-weight: 300;
                    line-height: 2.8125em;
                    letter-spacing: 0em;
                    text-align: left;
                }
            }
        }
        .contact {
            font-family: "Poppins";
            position: absolute;
            right: 0;
            bottom: 10%;
            .header {
                font-style: normal;
                font-weight: 600;
                font-size: 1.5625em;
                line-height: 7.5em;
            }
            a {
                display: block;
                font-family: "Poppins";
                font-style: normal;
                font-weight: 300;
                font-size: 1.1875em;
                margin-bottom: 5%;
            }
        }
    }
    .copy {
        display: flex;
        justify-content: center;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 0.9375em;
        line-height: 3.625em; 
    }
`

const MenuFooter = () => {
    return (
        <FooterStyle>
           <div className="main">
            <div className="social">
                    <div className="row">
                        <a href="http://www.facebook.com">Facebook</a>
                        <a href="http://www.dribble.com">Dribble</a>
                    </div>
                    <div className="row">
                        <a href="http://www.instagram.com">Instagram</a>
                        <a href="http://www.linkedin.com">LinkedIn</a>
                    </div>
                </div>
                <div className="contact">
                    <h3 className="header">Skontaktuj się z nami</h3>
                        <a href="tel:+123456789">+48 881 772 030</a>
                        <a href="mailto:we@explayn.it">we@explayn.it</a>
                </div>
           </div>
           <span className="copy">&copy; explayn.it All rights reserved</span>
        </FooterStyle>
    )
}

const Header = ({ toggle }) => {
    return (
        <HeaderStyle>
            <Exit onClick={ toggle } color={ colors.neutral00 }>
                <span className="sr" role="button">exit button</span>
            </Exit>
            <div className="cnt">
                <ContactUs color={ colors.neutral00 } />
                <MenuLanguage />
            </div>
        </HeaderStyle>
    )
}

const LinksMenu = () => {
    const [dropOn, setDropOn] = useState(false)
    const handleDrop = () => setDropOn(prevState => !prevState)
    return (
        <nav>
            <LinksStyle>
                <li><Link to="/placeholder"><span>01.</span>Strona główna</Link></li>
                <li onClick={ handleDrop } className="dropLink">
                    <Link><span>02.</span>Co robimy</Link>
                    <span className={dropOn ? "longdash active" : "longdash"}></span>
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
        </nav>
    )
}

const Menu = ({ toggle }) => {

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

    return (
        <Style>
            <Header toggle={ toggle } />
            <LinksMenu />
            <MenuFooter />
            <Image fluid={data.file.childImageSharp.fluid} alt="logo" style={{ position: "absolute", right: 0, bottom: 0 }}/> 
        </Style>
    )
}

export default Menu