import React from 'react'
import styled from 'styled-components'
import Play from '../../images/landing/play.svg'
import More from '../../images/landing/more.svg'
import DLeft from '../../images/landing/landingDotsLeft.svg'
import DRT from '../../images/landing/ldot-right-top.svg'
import DRB from '../../images/landing/ldot-right-bot.svg'
import DTL from '../../images/landing/ldot-top-left.svg'
import DTR from '../../images/landing/ldot-top-right.svg'
import {Link as ScLink} from "react-scroll";


const Style = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: "Poppins";
    overflow: hidden;
    position: relative;
    overflow: none;
    @media (max-width: 450px) {
        min-height: 90vh;
    }
    .decoration {
        position: absolute;
        @media (max-width: 1100px) {
            display: none;
        }
        img {
            width: 100%;
        }
        &-left {
            @media (max-width: 1600px) {
                width: 180px;
            }
            @media (max-width: 1440px) {
                width: 140px;
                left: -70px;
                bottom: 5%;
            }
            bottom: 10%;
            left: -7%;
        }
        &-right-top {
            bottom: 230px;
            right: 0;
            @media (max-width: 1600px) {
                width: 200px;
                bottom: 130px;
            }
        }
        &-right-bot {
            bottom: -52px;
            right: 216px;
            @media (max-width: 1600px) {
                width: 80px;
                bottom: -30px;
                right: 121px;
            }
        }
        &-top-left {
            top: -160px;
            right: 470px;
            @media (max-width: 1600px) {
                width: 100px;
                top: -122px;
                right: 370px;
            }
            @media (max-width: 1440px) {
                width: 80px;
                top: -95px;
                right: 370px;
            }
        }
        &-top-right {
            top: -35px;
            right: 630px;
            @media (max-width: 1600px) {
                width: 200px;
                top: -25px;
                right: 490px;
            }
            @media (max-width: 1440px) {
                width: 170px;
                top: -23px;
                right: 465px;
            }
        }
    }
    .scroll {
        position: absolute;
        bottom: 20px;
        left: calc(50% - 50px);
        cursor: pointer;
    }
    .cnt {
        max-width: 1400px;
        margin: 10% auto;
        @media (max-width: 1600px) {
            max-width: 1000px;
            font-size: 13px;
        }
        @media (max-width: 1100px) {
            max-width: 750px;
            font-size: 10px;
        }
        @media (max-width: 850px) {
            padding: 20% 5%;
        }
        @media (max-width: 450px) {
            font-size: 8px;
        }
    }
    .content {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 0%;
        @media (max-width: 1100px) {
            align-items: flex-start;
        }
        .play {
            position: absolute;
            left: 0;
            z-index: -1;
            @media (max-width: 1100px) {
                top: -95px;
                left: -60px;
            }
            @media (max-width: 450px) {
                top: -75px;
                left: -55px;
            }
            img {
                width: 25em;
                @media (max-width: 1100px) {
                 width: 20em;
                }
            }
        }
        h1 {
            font-size: 5.9375em;
            line-height: 126%;
            font-weight: 600;
            margin-left: 12%;
            @media (max-width: 1600px) {
                margin-left: 14%;
            }
            @media (max-width: 1100px) {
                margin-left: 0;
                margin-top: 20px;
                max-width: 400px;
            }
        }
        p {
            color: #000;
            font-weight: 300;
            font-size: 1.375em;
            line-height: 136%;
            width: 60%;
            padding-left: 140px;
            @media (max-width: 1600px) {
                margin-left: 50px;
            }
            @media (max-width: 1100px) {
                width: 70%;
                margin: 0;
                padding: 0;
                font-size: 1.5em;
                margin-top: 20px;
            }
            @media (max-width: 450px) {
                width: 90%;
            }
        }
        span.blue {
            color: #3F54D3;
        }
        span.white {
            color: #fff;
            @media (max-width: 1100px) {
                &.second {
                    color: #000;
                }
            }
        }
    }
`

const Landing2 = () => {
    return (
        <Style>
            <div className="decoration decoration-left">
                <img src={DLeft} alt="decoration" />
            </div>
            <div className="decoration decoration-right-top">
                <img src={DRT} alt="decoration" />
            </div>
            <div className="decoration decoration-right-bot">
                <img src={DRB} alt="decoration" />
            </div>
            <div className="decoration decoration-top-left">
                <img src={DTL} alt="decoration" />
            </div>
            <div className="decoration decoration-top-right">
                <img src={DTR} alt="decoration" />
            </div>
            <div className="cnt">
                <div className="content">
                <div className="play">
                    <img src={Play} alt="play" />
                    
                </div>
                        <h1>
                            <span className="white">New</span> ways to <span className="blue">develop </span>
                            <span className="white second">your</span> <span className="blue">brand.</span>
                        </h1>
                        <p>
                            A full service web design and digital marketing agency powered by growth solutions.
                        </p>
                </div>
            </div>
            <ScLink className="scroll" to={"aboutUs"} smooth duration={500}>
                <img src={More} alt="scroll down" />
            </ScLink>
        </Style>
    )
}

export default Landing2