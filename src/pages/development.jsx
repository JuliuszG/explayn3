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
import Responsive from '../images/development/korzysci/responsive.svg'
import Functional from '../images/development/korzysci/setings.svg'
import Scalable from '../images/development/korzysci/scalable.svg'
import Secure from '../images/development/korzysci/secure.svg'

const Styles = styled.div`
font-family: "Poppins";
    .landing {
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 1550px) {
            font-size: 12px;
        }
        @media (max-width: 1400px) {
            font-size: 10px;
        }
        @media (max-width: 900px) {
            flex-direction: column-reverse;
            justify-content: flex-end;
        }
        @media (max-width: 500px) {
            font-size: 8px;
            padding: 20% 5% 0;
        }
        .content {
            max-width: 761px;
            padding-right: 5%;      
            @media (max-width: 1550px) {
                max-width: 561px;
            }
            @media (max-width: 1100px) {
                max-width: 461px;
            } 
            @media (max-width: 500px) {
                padding-right: 0;
                width: 100%;
                max-width: 100%;
            }
            h1 {
                color: #000;
                font-weight: 600;
                font-size: 5.9375rem;
                line-height: 120%;
                margin-bottom: 32px;  
                @media (max-width: 1550px) {
                    font-size: 4.5rem;
                }
                @media (max-width: 1400px) {
                    font-size: 3.5rem;
                }
                @media (max-width: 500px) {
                    font-size: 2.5rem;
                }      
            }
            p {
                width: 70%;
                font-size: 1.375rem;
                line-height: 136.36%;
                color: #000;
                font-weight: 300;
                @media (max-width: 1550px) {
                    font-size: 1rem;
                }
                @media (max-width: 1024px) {
                    width: 100%;
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
                    width: 512px;
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
        min-height: 100vh;
        background: #F5F6FA;
        display: flex;
        font-family: "Poppins";
        @media (max-width: 1300px) {
            flex-direction: column;
        }
        &-info {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 10%;
            @media (max-width: 1300px) {
                width: 100%;
            }
            h2 {
              font-size: 3.4375rem;
              line-height: 138%;
              margin-bottom: 60px;
              font-weight: 600;
              @media (max-width: 450px) {
               font-size: 3rem;
            }
            }   
            p {
                font-weight: 300;
                line-height: 136%;
                font-size: 1.375rem;
            }
        }
        &-icons {
            width: 50%;
            display: flex;
            justify-content: center;
            align-content: center;
            flex-wrap: wrap;
            padding: 10%;
            @media (max-width: 1300px) {
                width: 100%;
            }
            .cnt {
                display: grid;
                column-gap: 70px;
                row-gap: 90px;
                grid-template-columns: repeat(4, 80px);
                @media (max-width: 700px) {
                    grid-template-columns: repeat(3, 80px);
                }
                @media (max-width: 500px) {
                    grid-template-columns: repeat(2, 80px);
                }
            }
            .icon-cnt {
                .icon {
                    width: 74px;
                    height: 74px;
                    margin-bottom: 30px;
                    transition: all 0.2s ease-in;
                    @media (hover: hover) {
                        &:hover {
                            transform: scale(1.2);
                        }
                    }
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                h4 {
                    font-size: 1.125rem;
                    font-weight: 300;
                    text-align: center;
                }
            }
        }
    }
    .section-5{
       width: 100%;
       min-height: 100vh;
       padding: 10%;
       h2 {
            width: 449px;
            font-size: 3.4375rem;
            line-height: 138%;
            margin-bottom: 100px;
            font-weight: 600;
            @media (max-width: 600px) {
                width: 100%
           }
       }
       &-cnt {
           display: grid;
           grid-template-columns: repeat(2, 556px);
           column-gap: 200px;
           row-gap: 120px;
           @media (max-width: 1600px) {
                grid-template-columns: repeat(2, 450px);
                column-gap: 160px;
                row-gap: 80px;
           }
           @media (max-width: 1400px) {
                grid-template-columns: repeat(2, 400px);
                column-gap: 120px;
                row-gap: 80px;
           }
           @media (max-width: 1200px) {
                grid-template-columns: repeat(1, 100%);
                column-gap: 120px;
                row-gap: 80px;
           }
       }
       &-item {
           width: 100%;
           display: flex;
           align-items: flex-start;
           @media (max-width: 450px) {
                flex-direction: column;
           }
           &-icon {
               margin-right: 20px;
               @media (max-width: 450px) {
                margin: 0 0 20px 0;
                }
               &.res img {
                width: 63px;
                height: 40px;
               }
               &.sca img{
                   width: 52px;
                   height: 52px;
               }
               &.fun img{
                width: 50px;
                height: 50px;
               }
               &.sec img{
                width: 45px;
                height: 40px;
               }
           }
           &-content {
           h4 {
               font-size: 1.6875rem;
               font-weight: 600;
               margin-bottom: 40px;
           }
           p {
               font-size: 1.375rem;
               line-height: 136%;
               font-weight: 300;
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
            <Steps arr={[
                { img: Discovery, text: 'Discovery' },
                { img: Planning, text: 'Planning' },
                { img: Design, text: 'Design' },
                { img: DevelopmentStepIcon, text: 'Development' },
                { img: Launch, text: 'Launch' },
            ]}/>
            <div className="section-4">
                <div className="section-4-info">
                    <h2>
                        Best technology for your product
                    </h2>
                    <p>
                        Having released over 40 products we have a set of technologies that we love to work with. 
                        Tell us about your product vision and goals and we will choose technologies that will help you achieve them.
                    </p>
                </div>
                <div className="section-4-icons">
                    <div className="cnt">
                    <div className="icon-cnt">
                        <div className="icon"><img src={Next} alt="next js icon" /></div>
                        <h4>
                            next.js
                        </h4>
                    </div>
                    <div className="icon-cnt">
                        <div className="icon"><img src={ReactJS} alt="react icon" /></div>
                        <h4>
                            <div>react</div>
                            <div>react native</div>
                        </h4>
                    </div>
                    <div className="icon-cnt">
                        <div className="icon"><img src={Graph} alt="graphql icon" /></div>
                        <h4>
                            graphql
                        </h4>
                    </div>
                    <div className="icon-cnt">
                        <div className="icon"><img src={Node} alt="node.js icon" /></div>
                        <h4>
                            node.js
                        </h4>
                    </div>
                    <div className="icon-cnt">
                        <div className="icon"><img src={TypeScript} alt="typescript icon" /></div>
                        <h4>
                            typescript
                        </h4>
                    </div>
                    <div className="icon-cnt">
                        <div className="icon"><img src={Ruby} alt="ruby icon" /></div>
                        <h4>
                            ruby
                        </h4>
                    </div>
                    <div className="icon-cnt">
                        <div className="icon"><img src={JS} alt="javascript icon" /></div>
                        <h4>
                            javascript
                        </h4>
                    </div>
                    <div className="icon-cnt">
                        <div className="icon"><img src={Three} alt="three js icon" /></div>
                        <h4>
                            three.js
                        </h4>
                    </div>
                    <div className="icon-cnt">
                        <div className="icon"><img src={Drupal} alt="drupal icon" /></div>
                        <h4>
                            drupal
                        </h4>
                    </div>
                    <div className="icon-cnt">
                        <div className="icon"><img src={Ghost} alt="ghost icon" /></div>
                        <h4>
                            ghost
                        </h4>
                    </div>
                    <div className="icon-cnt">
                        <div className="icon"><img src={Dato} alt="dato cmsicon" /></div>
                        <h4>
                            datoCMS
                        </h4>
                    </div>
                    <div className="icon-cnt">
                        <div className="icon"><img src={WP} alt="wordpress icon" /></div>
                        <h4>
                            wordpress
                        </h4>
                    </div>
                    </div>
                </div>
            </div>
            <div className="section-5">
                <h2>
                    Key values for our products
                </h2>
                <div className="section-5-cnt">
                    <div className="section-5-item">
                        <div className="section-5-item-icon res">
                            <img src={Responsive} alt="responsive icon" />
                        </div>
                        <div className="section-5-item-content">
                            <h4>
                                Responsive
                            </h4>
                            <p>
                                Responsive web design is a modern need. 
                                We follow standards creating a mobile optimized website that converts.
                            </p>
                        </div>
                    </div>
                    <div className="section-5-item">
                        <div className="section-5-item-icon fun">
                            <img src={Functional} alt="Functional icon" />
                        </div>
                        <div className="section-5-item-content">
                            <h4>
                                Functional
                            </h4>
                            <p>
                                Your site reflects your company and your brand. 
                                That’s why we deliver visually appealing, polished and professional user experience.
                            </p>
                        </div>
                    </div>
                    <div className="section-5-item">
                        <div className="section-5-item-icon sca">
                            <img src={Scalable} alt="Scalable icon" />
                        </div>
                        <div className="section-5-item-content">
                            <h4>
                                Scalable
                            </h4>
                            <p>
                                We create efficient infrastructure to deliver scalable web applications and solutions to meet your business demands.
                            </p>
                        </div>
                    </div>
                    <div className="section-5-item">
                        <div className="section-5-item-icon sec">
                            <img src={Secure} alt="Scalable icon" />
                        </div>
                        <div className="section-5-item-content">
                            <h4>
                                Secure
                            </h4>
                            <p>
                                To us, it is important that your website follows industry standards and security guidelines.
                            </p>
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