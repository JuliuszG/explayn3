import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Desktop from "../components/navigation/desktop"
import Mobile from "../components/navigation/mobile"
import Footer from '../components/footer'
import SEO from "../components/seo"
import { useMediaQuery } from 'react-responsive'
import HeaderImg from '../images/ikonki marketing/Main.svg'
import { ServicesSection } from '../templates/servicesTemplate'
import Section3Bg from '../images/development/header/section3bg.jpg'
import MarketingSteps from '../components/services/marketingSteps'
import Discovery from '../images/ikonki marketing/process_1discovery.svg'
import Planning from '../images/ikonki marketing/process_2planning.svg'
import Design from '../images/ikonki marketing/process_3design.svg'
import DevelopmentStepIcon from '../images/ikonki marketing/launch.svg'
import Launch from '../images/ikonki marketing/linijki.svg'
import Responsive from '../images/ikonki marketing/omnichanel.svg'
import Functional from '../images/ikonki marketing/relevant.svg'
import Scalable from '../images/ikonki marketing/insightful.svg'
import More from '../images/landing/more.svg'
import {Link as ScLink} from "react-scroll";

const Styles = styled.div`
font-family: "Poppins";
.landing {
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .scroll {
            position: absolute;
            bottom: 20px;
            left: calc(50% - 50px);
            cursor: pointer;
        }
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
        display: flex;
        align-items: center;
        padding: 15% 0;
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
                    color: #4096EA;
                }
            }
            .decoration {
                background-color: #4096EA;
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
       background: #F5F6FA;
       h2 {
            width: 449px;
            font-size: 3.4375rem;
            line-height: 138%;
            margin-bottom: 15px;
            font-weight: 600;
            @media (max-width: 600px) {
                width: 100%
           }
       }
       p {
           max-width: 532px;
           font-size: 1.375rem;
           line-height: 136%;
           margin-bottom: 90px;
           font-weight: 300;
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
                width: 55px;
                height: 60px;
               }
               &.sca img{
                   width: 60px;
                   height: 60px;
               }
               &.fun img{
                width: 60px;
                height: 60px;
               }
               &.sec img{
                width: 57px;
                height: 42px;
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
const Marketing = () => {
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
                            Marketing
                        </h1>
                        <p>
                            At a time when no company can afford not to have a digital marketing strategy, we are committed to offering 360˚ 
                            digital marketing services focused on delivering results.
                        </p>
                    </div>
                    <div className="landing-image">
                        <img src={HeaderImg} alt="dev icon"/>
                    </div>
                    <ScLink className="scroll" to={"services-section"} smooth duration={500}>
                        <img src={More} alt="scroll down" />
                    </ScLink>
                </div>
                <ServicesSection id="services-section">
                    <div className="left">
                        <h2>
                            Marketing on demand.
                        </h2>
                        <p>
                            Everything begins with the recognition of the customer’s needs, 
                            a thorough market analysis and defining a marketing strategy, 
                            which will be the foundation of a consistent and multidimensional communication with your clients.
                        </p>
                    </div>
                    <ul className="right">
                        <li>
                            <span>01.</span>
                            Marketing strategies
                        </li>
                        <li>
                            <span>02.</span>
                            Social media
                        </li>
                        <li>
                            <span>03.</span>
                            Content marketing
                        </li>
                        <li>
                            <span>04.</span>
                            Marketing campains
                        </li>
                    </ul>
            </ServicesSection>
            <div className="section-3">
                <div className="cnt">
                    <h2>
                        Focusing on the methods for driving profitable customer action is the key to our work.
                    </h2>
                    <div className="decoration"></div>
                    <div className="text-cnt">
                        <p>
                            Attracting customers is just the first step. 
                            We make sure you retain them by putting together all the methods that allow understanding your audience better. 
                            All our decisions are based on thorough research that guarantees measurable results. 
                            We test different solutions to choose the most beneficial ones for your business.
                        </p>
                        <p>
                            To provide you with the highest level of consistency, we offer a one-stop service. 
                            From visual identity to complex marketing strategy and its implementation - with us, you can count on a coherent result. 
                            It's a perfect solution for emerging companies but also those with an established position on the market.
                        </p>
                    </div>
                </div>
            </div>
            <MarketingSteps arr={[
                { img: Discovery, text: 'Discovery' },
                { img: Planning, text: 'Planning' },
                { img: Design, text: 'Design' },
                { img: DevelopmentStepIcon, text: 'Launch' },
                { img: Launch, text: 'Measure' },
            ]}/>
            
            <div className="section-5">
                <h2>
                    How we work
                </h2>
                <p>
                    We use best practices to deliver comprehensive digital marketing services 
                    and provide a compelling message that sticks in the minds of those yYou’re trying to reach.
                </p>
                <div className="section-5-cnt">
                    <div className="section-5-item">
                        <div className="section-5-item-icon res">
                            <img src={Responsive} alt="responsive icon" />
                        </div>
                        <div className="section-5-item-content">
                            <h4>
                                Omnichannel
                            </h4>
                            <p>
                                From social media to email campaigns to digital ads, 
                                we create a path that leads your future customers to profitable actions.
                            </p>
                        </div>
                    </div>
                    <div className="section-5-item">
                        <div className="section-5-item-icon fun">
                            <img src={Functional} alt="Functional icon" />
                        </div>
                        <div className="section-5-item-content">
                            <h4>
                                Relevant
                            </h4>
                            <p>
                                We make sure the content is perfectly tailored to the target audience, 
                                compelling, easy to read, as well as credible and accurate.
                            </p>
                        </div>
                    </div>
                    <div className="section-5-item">
                        <div className="section-5-item-icon sca">
                            <img src={Scalable} alt="Scalable icon" />
                        </div>
                        <div className="section-5-item-content">
                            <h4>
                                Insightful
                            </h4>
                            <p>
                                Defining the audience is a big part of a successful campaign. 
                                Through accurate segmentation and target group analysis, we achieve the best possible results.
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

export default Marketing