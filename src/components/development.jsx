import React from 'react'
import styled from 'styled-components'
import motion from 'framer-motion'
import Layout from './layout'
import Desktop from "./navigation/desktop"
import Mobile from "./navigation/mobile"
import Footer from './footer'
import SEO from "./seo"
import { useMediaQuery } from 'react-responsive'
import HeaderImg from '../images/development/header/landing.svg'
import { ServicesSection } from '../templates/servicesTemplate'
import Section3Bg from '../images/development/header/section3bg.jpg'
import Steps from './services/steps'
import Discovery from '../images/development/process/discovery.svg'
import Planning from '../images/development/process/planning.svg'
import Design from '../images/development/process/design.svg'
import DevelopmentStepIcon from '../images/development/process/development_icon.svg'
import Launch from '../images/development/process/lauch.svg'
const Styles = styled.div`
font-family: "Poppins";
    .landing {
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        .content {
            max-width: 761px;
            padding-right: 5%;
            h1 {
                color: #000;
                font-weight: 600;
                font-size: 5.9375em;
                line-height: 120%;
                margin-bottom: 32px;          
            }
            p {
                width: 70%;
                font-size: 1.375em;
                line-height: 136.36%;
                color: #000;
                font-weight: 300;
            }
        }
        .landing-image {
            margin-bottom: 7%;
            img {
                width: 33.375em;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    .section-3 {
        width: 100%;
        min-height: 100vh;
        background-image: url(${Section3Bg});
        background-size: cover;
        background-position: center;
        padding: 10% 0;
        .cnt {
            max-width: 1250px;
            margin: 0 auto;
            @media (max-width: 1500px) {
                max-width: 800px;
            }
            @media (max-width: 1024px) {
                padding: 5% 10%;
            }
            h2 {
                max-width: 1100px;
                font-size: 55px;
                line-height: 138.18%;
                font-weight: 600;
                color: #000;
                @media (max-width: 650px) {
                    font-size: 40px;
                }
                @media (max-width: 450px) {
                    font-size: 35px;
                }
                span {
                    color: #571AB6;
                }
            }
            .decoration {
                background-color: #501EAF;
                height: 6px;
                width: 98.5px;
                margin: 90px 0;
            }
            .text-cnt {
                display: flex;
                justify-content: flex-start;
                font-weight: 300;
                font-size: 22px;
                line-height: 136%;
                @media (max-width: 1024px) {
                    flex-direction: column;
                }
                p {
                    max-width: 512px;
                    &:first-of-type {
                        margin-right: 15%;
                        @media (max-width: 1024px) {
                            margin-right: 0;
                            margin-bottom: 15%;
                        }
                    }
                    @media (max-width: 1024px) {
                        width: 100%;
                    }
                }
            }
        }
    }
`
const Development = () => {
    const isMobile = useMediaQuery({
        query: '(max-device-width: 950px)'
    })
    return (
        <Layout>
            <SEO title="Home" />
            { isMobile ? <Mobile/> : <Desktop mainPage={true}/> }
            <Styles>
                <div className="landing">
                    <div className="content">
                        <h1>
                            Web & Mobile Development
                        </h1>
                        <p>
                            Full-stack web development team capable of facing modern technical and business challenges.
                        </p>
                    </div>
                    <div className="landing-image">
                        <img src={HeaderImg} alt="dev icon"/>
                    </div>
                </div>
                <ServicesSection>
                    <div className="left">
                        <h2>
                            Development on demand
                        </h2>
                        <p>
                            Build modern applications that help you stay on top of the game. We create an alluring user experience that keeps them coming back.
                        </p>
                    </div>
                    <ul className="right">
                        <li>
                            <span>01.</span>
                            Websites
                        </li>
                        <li>
                            <span>02.</span>
                            Online stores
                        </li>
                        <li>
                            <span>03.</span>
                            iOS & Android Apps
                        </li>
                        <li>
                            <span>04.</span>
                            Dedicated systems
                        </li>
                    </ul>
            </ServicesSection>
            <div className="section-3">
                <div className="cnt">
                    <h2>
                        In today’s <span>dynamically changing</span> world, a company needs a <span>fresh look</span> at its online presence.
                    </h2>
                    <div className="decoration"></div>
                    <div className="text-cnt">
                        <p>
                        A website is often the first and most important touchpoint between a customer and a brand. It is not just a URL, it is a key aspect of your business and marketing strategy.
                        </p>
                        <p>
                        With all the options available in the market today, you need someone you can trust to execute your vision to the highest level of quality. No matter what you do, at Explayn we help you create a digital experience seamlessly.
                        </p>
                    </div>
                </div>
            </div>
            <Steps icons={[
                Discovery,
                Planning,
                Design,
                DevelopmentStepIcon,
                Launch
            ]}/>
            </Styles>
            <Footer />
        </Layout>
    )
}

export default Development