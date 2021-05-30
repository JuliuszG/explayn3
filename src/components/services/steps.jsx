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
    justify-content: center;
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
            display: flex;
            div:nth-child(1) > img:after{
                content: '';
                width: 20px;
                height: 20px;
                background-color: red;
                display: block;
            }
            .line {
                width: 100px;
                height: 5px;
                border-bottom: 5px dotted grey;
                margin-left: 20px ;
            }
            .icon {
                display: flex;
                align-items: center;
                margin-right: 20px;
                &:hover ~ .dymek{
                    display: block;
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
        .dymek_arrow{
            position: absolute;
            top: -5px;
            left: 15px !important;
            width: 20px;
            height: 20px;
            background: grey;
            transform: rotate(65deg) skew(45deg) !important ;
            z-index: -1;
        }
`
const Icon = ({icon, index, length}) => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });
  const textArray = [
            'The development process starts with understanding your business goals. During the meeting, we assess the situation and discuss desired features and functionality for the website. We define the target audience and interview internal stakeholders to construct a tailored strategy.', 
            '', 
            'This is where great ideas come to life. The visual design of the website starts to shape. We create an impactful User Interface that is a customer-focused experience. To wrap up the design phase, will look to the client for final approval before advancing to the development stage.', 
            '', 
            'By doing all the necessary testing, we make sure your website will look great on computers, smartphones, and tablets. We make final touches and the website is ready to upload online.'];
    return (
        <>
         <div className="icon" ref={setReferenceElement}>
            <img key={ index } src={ icon } alt="icon" />
                     { index !== length -1 && (
                        <div className="line"></div>
                ) }
         </div>
         {index %2 === 0  && (
            <div className="dymek" ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                    {textArray[index]}
            <div className="dymek_arrow" ref={setArrowElement} style={styles.arrow} />
         </div>
         )}
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
                { icons.map((icon, index) => {
                    return (
                          <Icon icon = {icon} index = {index} length = {icons.length}/>   
                    )
                }) }
            </div>
        </Style>
    )
}

export default Steps

