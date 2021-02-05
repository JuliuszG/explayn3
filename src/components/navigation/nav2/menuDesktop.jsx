import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { colors } from '../../../styles/colors'
import { Link, graphql, useStaticQuery } from 'gatsby'
import ContactUs from '../contactUs'
import MenuLanguage from '../menuLanguage'
import { Link as ScLink } from "react-scroll";

const Style = styled(motion.div)`
    background: ${ colors.neutral90 };
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
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
        y: 100, 
        opacity: 0,
    },
    exit: {
        x: -300,
        opacity: 0
    }
}

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
    padding: 5% 10%;
    width: 100%;
    .main {
        font-family: 'Poppins';
        font-style: normal;
        border: 1px solid white;
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
                text-decoration: none;
                color: ${ colors.neutral00 };
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
        width: 10%;
        height: 1px;
        background: ${ colors.neutral00 };
        margin-left: 10%;
    }
`
const MenuDesktop = ({ toggle }) => {
    return (
            <Style
                variants={ menuAnimation }
                initial="hidden"
                animate="visible"
                exit="hidden"
                key="efwefwweffewfefewf"
            >
                <HeaderStyle>
                    <Exit onClick={ toggle } color={ colors.neutral00 }>
                        <span className="sr" role="button">exit button</span>
                    </Exit>
                    <div className="cnt">
                        <ContactUs color={ colors.neutral00 } />
                        <MenuLanguage />
                    </div>
                </HeaderStyle>
                <Links>
                    <div className="main">
                        <motion.div variants={ itemAnimation } key="efwefew" className="item">
                            <div className="number">
                                01.
                            </div>
                            <Link to="/">
                                Strona głowna
                            </Link>
                        </motion.div>
                        <motion.div variants={ itemAnimation } className="item">
                            <div className="number">
                                02.
                            </div>
                            <div>
                                Co robimy
                            </div>
                        </motion.div>
                        <motion.div variants={ itemAnimation } className="item">
                            <div className="number">
                                03.
                            </div>
                            <ScLink to={ "caseStudy" } smooth duration={1000} onClick={ toggle }>
                                Nasze prace 
                            </ScLink>
                        </motion.div>
                        <motion.div variants={ itemAnimation } className="item">
                            <div className="number">
                                04.
                            </div>
                            <ScLink to={ "footer" } smooth duration={1000} onClick={ toggle }>
                                Kontakt
                            </ScLink>
                        </motion.div>
                    </div>
                </Links>
                <div className="line"></div>
            </Style>
    )
}

export default MenuDesktop