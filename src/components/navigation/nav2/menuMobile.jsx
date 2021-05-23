import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { colors } from '../../../styles/colors'
import { Link } from 'gatsby'
import { Link as ScLink } from "react-scroll";
import { Exit } from './menuDesktop'

const Style = styled(motion.div)`
    background: ${ colors.neutral90 };
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 900;
    overflow-y: auto;
    font-family: 'Poppins';
    font-style: normal; 
    transition: all 0.5s ease-in;
    .cnt {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
    }
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
            staggerChildren: 0.2,
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
            duration: 1,
            staggerChildren: 0.1        }
    },
    hidden: { 
        x: -500, 
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
        x: -300, 
        opacity: 0,
    },
}

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8%;
`

const Links = styled.div`
    width: 100%;
    padding: 8%;
    .item {
        padding: 8% 0;
        width: 100%;
        font-weight: 600;
        font-size: 1.5em;
        line-height: 150%;
        color: ${ colors.neutral00 };
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        .item-link {
            display: flex;
        }
        &:last-of-type {
            border-bottom: none;
        }
        a {
            width: 100%;
            text-decoration: none;
            display: block;
            color: ${ colors.neutral00 };
        }
        .number {
            color: ${ colors.neutral40 };
            margin-right: 0.8em;
        }
    }
`
const SubMenu = styled.div`
    width: 100%;
    padding: 5% 0;
    font-family: 'Poppins';
    font-style: normal;
    display: block;
    a {
        padding: 2% 0;
        width: 100%;
        display: block;
        text-decoration: none;
        font-weight: 500;
        font-size: .8em;
        line-height: 150%;
        color: ${ colors.neutral00 };
    }
`

const Footer = styled.div`
    width: 100%;
    padding: 8%;
    h3 {
        color: ${ colors.neutral00 };
        font-weight: 600;
        font-size: 1.5em;
        line-height: 150%;
        margin-bottom: 5%;
    }
    a {
        text-decoration: none;
        color: ${ colors.neutral00 };
        font-weight: 300;
        font-size: 1em;
        line-height: 150%;
        display: block;
    }
    .socials {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10%;
        a {
            text-decoration: none;
            color: ${ colors.neutral00 };
            font-weight: 300;
            font-size: 0.8125em;    
            line-height: 146.15%;
        }
    }
`

const MenuMobile = ({ toggle }) => {
    const [subMenuIsOn, setSubMenuIsOn] = useState(false)
    const menuSwitch = () => {
        toggle()
        setSubMenuIsOn(false)
    }
    const renderSubMenu = () => (
        <SubMenu>
            <motion.a variants={ subItemAnimation } custom={ 1 } href="/development">Development</motion.a>
            <motion.a variants={ subItemAnimation } custom={ 2 } href="/visual">Visual</motion.a>
            <motion.a variants={ subItemAnimation } custom={ 3 } href="/branding">Branding</motion.a>
            <motion.a variants={ subItemAnimation } custom={ 4 } href="/ecommerce">eCommerce</motion.a>
            <motion.a variants={ subItemAnimation } custom={ 5 } href="/events">Events</motion.a>
            <motion.a variants={ subItemAnimation } custom={ 6 } href="/marketing">Marketing</motion.a>        
        </SubMenu>
    )
    return (
        <Style
            variants={ menuAnimation }
            initial="hidden"
            animate="visible"
            exit="hidden"
            key="efwefwweffewfefewf"
        >
          <div className="cnt">
                <Header>
                    <Exit onClick={ toggle }>
                        <span className="sr" role="button">exit button</span>
                    </Exit>
                </Header>
                <Links>
                    <motion.div variants={ itemAnimation } className="item">
                        <div className="item-link">
                            <div className="number">
                                01.
                            </div>
                            <Link to="/">
                                Home
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div 
                        variants={ itemAnimation } 
                        className="item" 
                        onClick={ () => setSubMenuIsOn(prevState => !prevState) }
                    >
                       <div className="item-link">
                        <div className="number">
                                02.
                            </div>
                            <div>
                                What we do
                            </div>
                       </div>
                        { subMenuIsOn && renderSubMenu() }
                    </motion.div>
                    <motion.div variants={ itemAnimation } className="item">
                        <div className="item-link">
                            <div className="number">
                                03.
                            </div>
                            <ScLink to={ "caseStudy" } smooth duration={1000} onClick={ menuSwitch }>
                                Case studies
                            </ScLink>
                        </div>
                    </motion.div>
                    <motion.div variants={ itemAnimation } className="item">
                      <div className="item-link">
                        <div className="number">
                                04.
                            </div>
                            <Link to="/blog">
                                Blog
                            </Link>
                      </div>
                    </motion.div>
                </Links>
                <Footer>
                    <h3>
                        Contact us
                    </h3>
                    <a href="tel:+48881772030">+48 881 772 030</a>
                    <a href="mailto:we@explayn.it">we@explayn.it</a>
                    <div className="socials">
                        <a href="https://www.facebook.com/explayn.it">Facebook</a>
                        <a href="https://www.youtube.com/channel/UCQE3VnneDB6U3oy-3R7Xyvw">Youtube</a>
                        <a href="https://www.instagram.com/explayn.it/">Instagram</a>
                        <a href="https://www.linkedin.com/company/explayn-digital-agency">Linkedin</a>
                    </div>
                </Footer>
          </div>
        </Style>
    )
}

export default MenuMobile
