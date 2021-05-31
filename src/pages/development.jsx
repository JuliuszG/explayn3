import React from 'react'
import styled from 'styled-components'
import motion from 'framer-motion'
import Layout from '../components/layout'
import Desktop from "../components/navigation/desktop"
import Mobile from "../components/navigation/mobile"
import Footer from '../components/footer'
import SEO from "../components/seo"
import { useMediaQuery } from 'react-responsive'
import HeaderImg from '../images/development/header/landing.svg'
import { ServicesSection } from '../templates/servicesTemplate'
import Section3Bg from '../images/development/header/section3bg.jpg'
import Steps from '../components/services/steps'
import Discovery from '../images/development/process/discovery.svg'
import Planning from '../images/development/process/planning.svg'
import Design from '../images/development/process/design.svg'
import DevelopmentStepIcon from '../images/development/process/development_icon.svg'
import Launch from '../images/development/process/lauch.svg'
import Next from '../images/development/techniologie/next.svg'
import ReactJS from '../images/development/techniologie/react.svg'
import Graph from '../images/development/techniologie/graph.svg'
import Node from '../images/development/techniologie/node.svg'
import TypeScript from '../images/development/techniologie/ts.svg'
import Ruby from '../images/development/techniologie/ruby.svg'
import JS from '../images/development/techniologie/js.svg'
import Three from '../images/development/techniologie/three.svg'
import Drupal from '../images/development/techniologie/drupal.svg'
import Ghost from '../images/development/techniologie/ghost.svg'
import Dato from '../images/development/techniologie/dato.svg'
import WP from '../images/development/techniologie/wp.svg'

const Styles = styled.div`
font-family: "Poppins";
    .landing {
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        @media(max-width: 1450px){
            flex-direction: column-reverse;
        }
        @media(max-width: 550px){
                    padding: 0 5%;
                    min-height: 85vh;
                } 
        .content {
            max-width: 761px;
            padding-right: 5%;
            @media(max-width: 1450px){
                padding-right: 0;
                padding-bottom: 5%;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                h1{
                    text-align: center;
                }
            }
            
            h1 {
                color: #000;
                font-weight: 600;
                font-size: 5.9375em;
                line-height: 120%;
                margin-bottom: 32px;
                @media(max-width: 750px){
                    font-size: 4em;
                }
                @media(max-width: 550px){
                    font-size: 3em;
                }           
            }
            p {
                width: 70%;
                font-size: 1.375em;
                line-height: 136.36%;
                color: #000;
                font-weight: 300;
                @media(max-width: 750px){
                    font-size: 1em;
                }
                @media(max-width: 550px){
                    font-size: 0.8em;
                } 
            }
        }
        .landing-image {
            margin-bottom: 2%;
            img {
                width: 33.375em;
                height: 100%;
                object-fit: cover;
            }
            @media(max-width: 1450px){
                padding:7% 0 0 0;
                margin-bottom: 0;
                img{
                    width: 25em;
                    height: 100%;
                }
            }
            @media(max-width: 550px){
                    padding: 0;
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
    .section-4 {
        width: 100%;
        height: 763px;
        background-color: #F5F6FA;
        display:flex;
        @media(max-width: 1650px){
            height: 600px;
        }
        @media(max-width: 1200px){
            min-height: 130vh;
        }
        .cnt {
            width: 100%;
            min-height: 39.7395833vw;
            display: flex;
            @media(max-width: 1200px){
            flex-direction: column;
            align-items: center;
            }
            .section-4__size{
                height: 364px;
                width: 26.875vw;
                width: 100%;
                margin: 200px 13.3333vw 199px 15.41666vw;
                @media(max-width: 1650px){
                    margin: 100px 10vw 100px 10vw;
                }
                @media(max-width: 1220px){
                    margin: 20vh 10vw;
                }
                @media(max-width: 1200px){
                    width: 75%;
                    height: 15%;
                    display:flex;
                    margin: 4% 0 2% 0;
                    text-align: center;
                    }
                    h2 {
                        font-size: 55px;
                        line-height: 138.18%;
                        font-weight: 600;
                        color: #000;
                        @media(max-width: 1650px){
                            font-size: 40px
                        }
                        @media(max-width: 1200px){
                            width: 200% !important;
                            margin-top: 4%;
                        }
                        @media(max-width: 1090px){
                            width: 100% !important;
                        }
                    }
                    p {
                        font-size: 1.375em;
                        line-height: 136.36%;
                        color: #000;
                        font-weight: 300;
                        margin-top:  60px;
                        @media(max-width: 1650px){
                            font-size: 1em
                        }
                        @media(max-width: 1200px){
                            margin-top: 5%;
                        }
                        @media(max-width: 1090px){
                            padding-bottom: 25%;
                        }
                    }
                    @media(max-width: 1090px){
                            flex-direction: column;
                        }
                }
                
            .section-4__image{
                max-width: 526px;
                width: 100%;
                height: 563px;
                display: flex;
                flex-direction: column;
                margin: 101px 16.9270vw 101px 0;
                @media(max-width: 1650px){
                     margin: 50px 13vw 50px 0;
                 }
                @media(max-width: 1220px){
                    margin: 10vh 13vw 10vh 0;
                }
                @media(max-width: 1200px){
                    margin: 15vh;
                }
                @media(max-width: 872px){
                     padding-top: 5%;
                }
                @media(max-width: 767px){
                     padding-top: 10%;
                }
                @media(max-width: 430px){
                     padding-top: 33%;
                }
                @media(max-width: 413px){
                    max-width: 413px;
                    width: 100%;
                    height: 514px;
                }
                @media(max-width: 386px){
                    padding: 53% 0 0 0;
                }  
                .section-4__icon-position{
                    width: 100% !important;
                    height: 100% !important;
                    display: flex;
                    justify-content: space-between;
                    @media(max-width: 460px){
                    flex-wrap: wrap;
                    }
                    @media(max-width: 413px){
                        flex-wrap: nowrap;
                        
                    }
                    div{
                        width: 103px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        @media(max-width: 410px){
                            width: 50%;
                        }
                        @media(max-width: 413px){
                        max-width: 103px;
                        width: 100%;
                        }
                        img{
                            height: 73px;
                            margin-bottom: 30px;
                            transition: 1.2s;
                            &:hover{
                                transform: scale(1.2)
                            }
                            @media(max-width: 413px){
                                height: 7.71670vh;
                                margin: 0;
                            }
                        }
                        p{
                            text-align: center;
                            /* @media(max-width: 410px){
                                margin-bottom: 50%;
                            }    */
                            
                        }
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
            <div className="section-4">
                <div className="cnt">
                    <div className="section-4__size">
                        <h2>Best technology for your product</h2>
                        <p>Having released over 40 products we have a set of technologies that we love to work with. Tell us about your product vision and goals and we will choose technologies that will help you achieve them. ZMIENIĆ COPY</p>
                    </div>
                    <div className="section-4__image">
                        <div className="section-4__icon-position">
                            <div>
                                <img src={Next} alt="Next"/>
                                <p>next.js</p>  
                            </div>
                            <div>
                                <img src={ReactJS} alt="React"/>
                                <p>react<br/>react native</p>
                            </div>                     
                            <div>
                                <img src={Graph} alt="graph.ql"/>
                                <p>graph.ql</p>
                            </div>
                            <div>
                                <img src={Node} alt="node.js"/>
                                <p>node.js</p>
                            </div>
                        </div>

                        <div className="section-4__icon-position">
                            <div>
                                <img src={TypeScript} alt="typescript"/>
                                <p>typescript</p>
                            </div>
                            <div>
                                <img src={Ruby} alt="ruby"/>
                                <p>ruby</p>
                            </div>
                            <div>
                                <img src={JS} alt="javascript"/>
                                <p>javascript</p>
                            </div>
                            <div>
                                <img src={Three} alt="three.js"/>
                                <p>three.js</p>
                            </div>
                        </div>

                        <div className="section-4__icon-position">
                            <div>
                                <img src={Drupal} alt="drupal"/>
                                <p>drupal</p>
                            </div>
                            <div>
                                <img src={Ghost} alt="ghost"/>
                                <p>ghost</p>
                            </div>
                            <div>
                                <img src={Dato} alt="datoCMS"/>
                                <p>DatoCMS</p>
                            </div>
                            <div>
                                <img src={WP} alt="Wordpress"/>
                                <p>wordpress</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Styles>
            <Footer />
        </Layout>
    )
}

export default Development