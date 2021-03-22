import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { colors } from '../../../styles/colors'
import { Link } from 'gatsby'
import ContactUs from '../contactUs'
import { Link as ScLink } from "react-scroll";

const Style = styled(motion.div)`
    background: ${ colors.neutral90 };
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`
const menuAnimation = {
    visible: { 
        top: 0, 
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
            ease: "easeInOut", 
            duration: 0.5
        }
    },
    hidden: { 
        top: "-100vh",
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
            ease: "easeInOut", 
            duration: 0.3
        }
    }
}

const itemAnimation = {
    visible: { 
        x: 0, 
        y: 0, 
        opacity: 1,
        transition: {
            ease: "easeIn", 
            duration: 0.2
        }
    },
    hidden: { 
        x: -300, 
        opacity: 0,
    },
}

const subItemAnimation = {
    visible: i => ({ 
        x: 0, 
        opacity: 1,
        transition: {
            delay: i * 0.1,
            ease: "easeIn", 
            duration: 0.2
        }
    }),
    hidden: { 
        x: 200, 
        opacity: 0,
    },
}

const lineAnimation = {
    visible: { 
        width: "5%",
        opacity: 1,
        transition: {
            ease: "easeIn", 
            duration: 0.2
        }
    },
    hidden: { 
        width: 0,
        opacity: 0,
        transition: {
            ease: "easeIn", 
            duration: 0.1
        }
    },
}

const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 3%;
`
export const Exit = styled.div`
    background: transparent;
    outline: none;
    cursor: pointer;
    width: 22px;
    height: 22px;
    padding: 0;
    position: relative;
    z-index: 100;
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
const Links = styled.div`
    padding: 0 10%;
    width: 100%;
    display: flex;
    @media (max-width: 1650px) {
        font-size: 12px;
    }
    @media (max-width: 1050px) {
        font-size: 10px;
    }
    @media (width: 1024px) and (height: 1366px) {
        font-size: 16px;
    }
    .main:hover .item:not(:hover) a {
        color: grey;
    }
    .main {
        width: 40em;
        font-family: 'Poppins';
        font-style: normal;
        .item {
            cursor: pointer;
            display: block;
            text-decoration: none;
            color: ${ colors.neutral00 };
            font-weight: 600;
            font-size: 2.75em;
            line-height: 272.72%;
            display: flex;
            a {
                display: block;
                text-decoration: none;
                color: ${ colors.neutral00 };
                transition: all .3s ease-in-out;
            }
            .number {
                    color: ${ colors.neutral40 };
                    font-size: calc(1em / 2.3);
                    font-style: normal;
                    font-weight: 600;
                    margin-top: .7%;
                    margin-right: 4%;
            }
        }
    }
    .line {
        display: block;
        width: 0%;
        height: 1px;
        background: ${ colors.neutral00 };
        margin-left: -12em;
        margin-top: 12em;
    }
    .sub-menu {
        width: 30%;
        font-family: 'Poppins';
        font-style: normal;
        margin-top: 10em;
        margin-left: 8em;
        .sub-item {
            display: block;
            a {
                text-decoration: none;
                color: ${ colors.neutral00 };
                display: block;
                font-weight: 600;
                font-size: 1.5625em;
                line-height: 244%;
            }
        }
    }
`

const MenuFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
    font-family: 'Poppins';
    font-style: normal;
    color: ${ colors.neutral00 };
    .social {
        display: flex;
        .row {
            flex-grow: 1;
            &:first-of-type {
                margin-right: 12em;
            }
            a {
                display: block;
                color: ${ colors.neutral00 };
                text-decoration: none;
                font-weight: 300;
                font-size: 1.0625em;
                line-height: 264.70%;
            }
        }
    }
    .contact {
        position: relative;
        @media (max-width: 1650px) {
            font-size: 12px;
        }
        @media (max-width: 1050px) {
            font-size: 10px;
        }
        bottom: 5em;
        h3 {
            font-weight: 600;
            font-size: 1.5625em;
            line-height: 480%;
        }
        a {
            display: block;
            color: ${ colors.neutral00 };
            text-decoration: none;
            font-weight: 300;
            font-size: 1.1875em;
            line-height: 168.42%;
        }
    }
`

const Copy = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1650px) {
        font-size: 12px;
    }
    @media (max-width: 1050px) {
        font-size: 10px;
    }
    p {
        color: ${ colors.neutral30 };
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 0.9375em;
        line-height: 386.66%;
    }
`
const MenuDesktop = ({ toggle }) => {
    const [subMenuIsOn, setSubMenuIsOn] = useState(false)
    const menuSwitch = () => {
        toggle()
        setSubMenuIsOn(false)
    }
    return (
            <Style
                variants={ menuAnimation }
                initial="hidden"
                animate="visible"
                exit="hidden"
                key="efwefwweffewfefewf"
            >
                <HeaderStyle>
                    <Exit onClick={ menuSwitch } color={ colors.neutral00 }>
                        <span className="sr" role="button">exit button</span>
                    </Exit>
                    <div className="cnt">
                        <ContactUs mainPage={false} color={ colors.neutral00 } />
                    </div>
                </HeaderStyle>
                <Links>
                    <div className="main">
                        <motion.div variants={ itemAnimation } className="item">
                            <div className="number">
                                01.
                            </div>
                            <Link to="/">
                                Strona głowna
                            </Link>
                        </motion.div>
                        <motion.div 
                            variants={ itemAnimation } 
                            className="item" 
                            onClick={ () => setSubMenuIsOn(prevState => !prevState) }
                        >
                            <div className="number">
                                02.
                            </div>
                            <a href="#">
                            <div>
                                Co robimy
                            </div>
                            </a>
                        </motion.div>
                        <motion.div variants={ itemAnimation } className="item">
                            <div className="number">
                                03.
                            </div>
                            <ScLink to={ "caseStudy" } smooth duration={1000} onClick={ menuSwitch }>
                                Nasze prace 
                            </ScLink>
                        </motion.div>
                        <motion.div variants={ itemAnimation } className="item">
                            <div className="number">
                                04.
                            </div>
                            <ScLink to={ "footer" } smooth duration={1000} onClick={ menuSwitch }>
                                Kontakt
                            </ScLink>
                        </motion.div>
                    </div>
                    <motion.div 
                        variants={ lineAnimation } 
                        animate={ subMenuIsOn ? "visible" : "hidden"}
                        className="line"
                    ></motion.div>
                    { subMenuIsOn && (
                    <div className="sub-menu">
                          <motion.div 
                            className="sub-item"
                            variants={ subItemAnimation }
                            custom={ 1 }
                        >
                            <Link to="/development">Development </Link>
                        </motion.div>
                        <motion.div 
                            className="sub-item"
                            variants={ subItemAnimation }
                            custom={ 2 }
                        >
                            <Link to="/visual">Visual </Link>
                        </motion.div>
                        <motion.div 
                            className="sub-item"
                            variants={ subItemAnimation }
                            custom={ 3 }
                        >
                            <Link to="/branding">Branding</Link>
                        </motion.div>
                        <motion.div 
                            className="sub-item"
                            variants={ subItemAnimation }
                            custom={ 4 }
                        >
                            <Link to="/ecommerce">eCommerce</Link>
                        </motion.div>
                        <motion.div 
                            className="sub-item"
                            variants={ subItemAnimation }
                            custom={ 5 }
                        >
                            <Link to="/events">Events</Link>
                        </motion.div>
                        <motion.div 
                            className="sub-item"
                            variants={ subItemAnimation }
                            custom={ 6 }
                        >
                            <Link to="/marketing">Marketing </Link>
                        </motion.div>
                      
                    </div>
    )  }
                </Links>
                <div style={{ width: "100%" }}>
                    <MenuFooter>
                        <div className="social">
                            <div className="row">
                                <a href="http://www.facebook.pl">Facebook</a>
                                <a href="http://www.dribble.com">Dribble</a>
                            </div>
                            <div className="row">
                                <a href="http://www.instagram.com">Instagram</a>
                                <a href="http://www.linkedin.com">Linkedin</a>
                            </div>
                        </div>
                        <div className="contact">
                            <h3>
                                Skontaktuj się z nami
                            </h3>
                            <a href="tel:+48881772030">+48 881 772 030</a>
                            <a href="mailto:we@explayn.it">we@explayn.it</a>
                        </div>
                    </MenuFooter>
                    <Copy><p>© explayn.it All rights reserved</p></Copy>
                </div>
            </Style>
    )
}

export default MenuDesktop