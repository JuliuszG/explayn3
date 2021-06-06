import React, {useState} from 'react';
import {usePopper} from 'react-popper';
import BG from '../../images/development/header/bgSteps.jpg'
import styled from 'styled-components'
const Style = styled.div`
    background-image: url(${BG});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 10% 0;
    align-items: center;
    font-family: "Poppins";
    .header {
        max-width: 1222px;
        display: flex;
        align-items: flex-start;
        color: #000;
        margin-bottom: 160px;
        @media (max-width: 1500px) {
            max-width: 900px;
        }
        @media (max-width: 1050px) {
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            padding: 10%;
            margin-bottom: 20px;
        }
        h2 {
            font-size: 3.4375rem;
            line-height: 138.18%;
            margin-right: 10px;
            font-weight: 600;
            @media (max-width: 1500px) {
               width: 55%;
            }
            @media (max-width: 1050px) {
                margin-right: 0;
                width: 100%;
                margin-bottom: 40px;
            }
        }
        p {
            width: 50%;
            font-size: 1.375rem;
            line-height: 136.36%;
            font-weight: 300;
            @media (max-width: 1050px) {
                width: 100%;
            }
        }
    }
    .icons {
            max-width: 1400px;
            .cnt {
                width: 100%;
                height: 120px;
                display: flex;
                align-items: center;
                justify-content: center;
                @media (max-width: 1150px) {
                    padding: 0 5vw;
                }
                @media (max-width: 950px) {
                    flex-direction: column;
                    height: 100%;
                    padding-bottom: 5vh;
                    padding-left: 0;
                    padding-right: 0;
                }
            }
            .line {
                width: 100px;
                height: 5px;
                border-bottom: 5px dotted grey;
                margin: 0 20px ;
                @media (max-width: 950px) {
                    height: 50px;
                    width: 5px;
                    border-bottom: none;
                    border-left: 5px dotted grey;
                    margin: 20px 0;
                }
            }
            .icon {
                display: flex;
                max-width: 87px;
                max-height: 87px;
                position: relative;
                cursor: pointer;
                @media (min-width: 950px) and (hover: hover) {
                    &:hover:nth-of-type(1)::after {
                        display: block;
                    }
                    &:nth-of-type(1)::after {
                        content: "The development process starts with understanding your business goals. During the meeting, we assess the situation and discuss desired features and functionality for the website. We define the target audience and interview internal stakeholders to construct a tailored strategy.";
                        display: none;
                        position: absolute;
                        top: 100px;
                        width: 400px;
                        height: 150px;
                        background-color: grey;
                    }
                }
                @media (max-width: 1300px) {
                    width: 80%;
                    height: 80%;
                }
                @media (max-width: 1150px) {
                    width: 50%;
                    height: 50%;
                }
                @media (max-width: 950px) {
                    max-width: 100px;
                    max-height: 100px;
                    width: 100px;
                    height: 100px;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .dymek{
            display: none;
            position: relative;
            background: grey;
            width: 100px;
            height: 100px;
            z-index: 99999;
            font-size: 22px;
        }
`
const Icon = ({icon, index, length}) => {
  const textArray = [
            '', 
            '', 
            'This is where great ideas come to life. The visual design of the website starts to shape. We create an impactful User Interface that is a customer-focused experience. To wrap up the design phase, will look to the client for final approval before advancing to the development stage.', 
            '', 
            'By doing all the necessary testing, we make sure your website will look great on computers, smartphones, and tablets. We make final touches and the website is ready to upload online.'];
    return (
        <>
         <div className="icon">
            <img src={ icon } alt="icon" />
                    
         </div>
        </>
    )
}

const Steps = ({ icons }) => {
    return (
        <Style>
            <div className="header">
                <h2>
                    Simple and effective process
                </h2>
                <p>
                    A website is often the first and most important touchpoint between a customer and a brand. It is not just a URL, it is a key aspect of your business and marketing strategy.
                </p>
            </div>
            <div className="icons">
                <div className="cnt">
                { icons.map((icon, index) => {
                    return (  
                        <>                     
                              <Icon icon = {icon} index = {index} length = {icons.length} key={ index }/>   
                              { index !== icons.length -1 && (
                        <div className="line"></div>
                ) }
                        </>
                    )
                }) }
                </div>
            </div>
        </Style>
    )
}

export default Steps

