import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { colors } from '../../styles/colors'
import {Link as ScLink} from "react-scroll";
import { motion } from 'framer-motion'

const Style = styled.section`
    width: 100%;
    min-height: 100vh;
    background: ${ colors.neutral00 };
    padding-left: 17%;
    display: flex;
    align-items: center;
    font-size: 16px;
    position: relative;
    @media (max-height: 1720px) {
            font-size: 13px;
        }
    @media (max-width: 1520px) {
            font-size: 12px;
        }
    @media (max-width: 1350px) {
            font-size: 11px;
        }
    @media (max-width: 1120px) {
            font-size: 10px;
        }
    @media (max-width: 950px) {
        flex-direction: column;
        font-size: 14px;
        padding-left: 0;
        padding: 10% 15% 0;
    }
    @media (max-width: 650px) {
        font-size: 10px;
        padding: 15% 8%;
    }
    @media (max-width: 374px) {
        font-size: 8px;
    }
    .text {
        max-width: 65%;
        font-family: 'Poppins';
        font-style: normal;
        color: ${ colors.neutral100 };
        @media (max-width: 950px) {
        max-width: 100%;
        }
        h1 {
            font-weight: 600;
            font-size: 5.125em;
            line-height: 119.5%;
            margin-bottom: 4%;
            @media (max-width: 650px) {
                line-height: 125%;
            }
        }
        p {
            max-width: 55%;
            font-weight: 300;
            font-size: 1.375em;
            line-height: 163.63%;
            @media (max-width: 950px) {
                max-width: 100%;
            }
        }
    }
`
const CircleStyle = styled.div`
    width: 13.5625em;
    height: 12.4375em;
    position: absolute;
    left: 3%;
    bottom: 3%;
    @media (max-width: 950px) {
        left: -10%;
        bottom: 3%;
        width: 216px;
        height: 199px;
    }
    @media (max-width: 750px) {
        left: -10%;
        bottom: 3%;
        width: 116px;
        height: 106px;
    }
`

const Circle = ({ src }) => {

    return (
        <CircleStyle>
             <Img fluid={src} 
                alt="circle" 
             />
        </CircleStyle>
    )
}

const ScrollStyle = styled(ScLink)`
    width: 10em;
    height: 10em;
    position: absolute;
    bottom: 20%;
    right: 17.5%;
    cursor: pointer;
    @media (max-width: 950px) {
        margin-top: 10%;
        position: static;
        width: 166px;
        height: 166px;
    }
    @media (max-width: 650px) {
        width: 122px;
        height: 122px;
    }
`
const ScrollWrapper = styled(motion.div)`
    width: 100%;
    height: 100%;
`
export const H2Variant = {
    visible : {
        opacity: 1,
        y: 0, 
        transition: {
            duration: 0.3,
            delay: 0.2,
            ease: "easeIn", 
        }
    },
    hidden: {
        opacity: 0,
        y: 100,
        transition: {
            duration: 0.2,
            delay: 0.2,
            ease: "easeInOut", 
        }
    }
}

export const PVariant = {
    visible : {
        opacity: 1,
        y: 0, 
        transition: {
            duration: 0.3,
            delay: 0.4,
            ease: "easeInOut", 
        }
    },
    hidden: {
        opacity: 0,
        y: 100,
        transition: {
            duration: 0.3,
            delay: 0.4,
            ease: "easeIn", 
        }
    }
}

const ScrollDown = ({ src }) => {
    return (
        <ScrollStyle to={"aboutUs"} smooth duration={500}>
            <ScrollWrapper whileHover={ { rotate: 360, transition: { duration: 0.3 } } }>
                <Img fluid={src} 
                    alt="scrolldown" 
                />
            </ScrollWrapper>
        </ScrollStyle>
    )
}

const ZigZagStyle = styled.div`
    width: 17.5em;
    height: 3.5em;
    position: absolute;
    top: 30%;
    right: 10%;
    @media (max-width: 950px) {
        display: none;
    }
`

const ZigZag = ({ src }) => {

    return (
        <ZigZagStyle>
            <Img fluid={src} 
                alt="zigzag" 
             />
        </ZigZagStyle>
    )
}

const Landing = () => {
    const data = useStaticQuery(graphql`
    {
        circle: file (relativePath: { eq: "landing/landingCircle.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        scroll: file (relativePath: { eq: "landing/scrollDown.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        zigzag: file (relativePath: { eq: "landing/ZigZag.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`)
    return (
        <Style>
            <div className="text">
                <motion.h1 variants={ H2Variant } initial="hidden" animate="visible">
                    Innowacyjne spojrzenie na marketing marki
                </motion.h1>
                <motion.p variants={ PVariant } initial="hidden" animate="visible">
                    Jesteśmy zespołem który łączy różne spojrzenia na marketing, 
                    każdy z nas ma różne doświadczenia oraz styl pracy.
                </motion.p>
            </div>
            <ZigZag src={ data.zigzag.childImageSharp.fluid } />
            <ScrollDown src={ data.scroll.childImageSharp.fluid } />
        </Style>
    )
}

export default Landing