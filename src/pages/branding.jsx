import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Desktop from "../components/navigation/desktop"
import Mobile from "../components/navigation/mobile"
import Footer from '../components/footer'
import SEO from "../components/seo"
import { useMediaQuery } from 'react-responsive'
import HeaderImg from '../images/branding_ikonki/glowna branding.svg'
import { ServicesSection } from '../templates/servicesTemplate'
import Section3Bg from '../images/development/header/section3bg.jpg'
import BrandingSteps from '../components/services/brandingSteps'
import Discovery from '../images/branding_ikonki/discovery1.svg'
import Planning from '../images/branding_ikonki/planing.svg'
import Design from '../images/branding_ikonki/design.svg'
import DevelopmentStepIcon from '../images/branding_ikonki/implementation.svg'
import Launch from '../images/branding_ikonki/launch.svg'
import Responsive from '../images/branding_ikonki/1.benefits.svg'
import Functional from '../images/branding_ikonki/2.benefits.svg'
import Scalable from '../images/branding_ikonki/3.benefits.svg'

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
                font-size: 5.9375em;
                line-height: 120%;
                margin-bottom: 32px;  
                @media (max-width: 500px) {
                    font-size: 5em;
                }      
            }
            p {
                width: 70%;
                font-size: 1.375em;
                line-height: 136.36%;
                color: #000;
                font-weight: 300; 
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
                    color: #E36860;
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
                width: 69px;
                height: 60px;
               }
               &.sca img{
                   width: 43px;
                   height: 36.8px;
               }
               &.fun img{
                width: 34px;
                height: 42px;
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
const Branding = () => {
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
                            Branding
                        </h1>
                        <p>
                            We make every experience people have with your business worth remembering. 
                            We build brands that can’t be ignored. Brands that matter. 
                            Brands that make a lasting connection with your customers.
                        </p>
                    </div>
                    <div className="landing-image">
                        <img src={HeaderImg} alt="dev icon"/>
                    </div>
                </div>
                <ServicesSection>
                    <div className="left">
                        <h2>
                            Branding that sells
                        </h2>
                        <p>
                        The process of building brand awareness is complex and consists of many stages. One right element is not enough - it has to be a coherent concept that will enable your brand to create a sustainable bond with your customer.
                        </p>
                    </div>
                    <ul className="right">
                        <li>
                            <span>01.</span>
                            Visual identification
                        </li>
                        <li>
                            <span>02.</span>
                            Product branding
                        </li>
                        <li>
                            <span>03.</span>
                            Brand strategy
                        </li>
                        <li>
                            <span>04.</span>
                            UI/UX Design
                        </li>
                    </ul>
            </ServicesSection>
            <div className="section-3">
                <div className="cnt">
                   <h2>
                    In today’s <span>dynamically changing</span> world, a company needs a <span>fresh look</span> at its online presence.
                   </h2>
                </div>
            </div>
            <BrandingSteps arr={[
                { img: Discovery, text: 'Discovery' },
                { img: Planning, text: 'Planning' },
                { img: Design, text: 'Design' },
                { img: DevelopmentStepIcon, text: 'Implementation' },
                { img: Launch, text: 'Launch' },
            ]}/>
            
            <div className="section-5">
                <h2>
                    Benefits
                </h2>
                <p>
                    A brand is not just a logo. 
                    A brand is a person’s feelings about a product, service, or organization. 
                    We make every effort to make your brand experience meaningful.
                </p>
                <div className="section-5-cnt">
                    <div className="section-5-item">
                        <div className="section-5-item-icon res">
                            <img src={Responsive} alt="responsive icon" />
                        </div>
                        <div className="section-5-item-content">
                            <h4>
                                Recognition
                            </h4>
                            <p>
                                The most important reason why branding is crucial to a company’s success 
                                is that it is how a company gets recognized and written permanently in the minds of consumers.
                            </p>
                        </div>
                    </div>
                    <div className="section-5-item">
                        <div className="section-5-item-icon fun">
                            <img src={Functional} alt="Functional icon" />
                        </div>
                        <div className="section-5-item-content">
                            <h4>
                                Business Value
                            </h4>
                            <p>
                                A strongly established brand increases the value of a company, 
                                giving it more momentum. 
                                This makes it a more attractive investment opportunity because of its firmly established place in the market.
                            </p>
                        </div>
                    </div>
                    <div className="section-5-item">
                        <div className="section-5-item-icon sca">
                            <img src={Scalable} alt="Scalable icon" />
                        </div>
                        <div className="section-5-item-content">
                            <h4>
                                Trust
                            </h4>
                            <p>
                                A professional appearance and well-designed branding will help a company build trust among with consumers and partners. 
                                People are more likely to do business with a company that has a great-looking and professional image.
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

export default Branding