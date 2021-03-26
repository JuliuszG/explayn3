import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { AnimatedHeader, AnimatedParagraph } from '../util/animations'
import { useInView } from 'react-intersection-observer';

const Style = styled.section`
font-size: 16px;
    @media (max-width: 1200px) {
        font-size: 14px;
    }
    @media (max-width: 950px) {
        font-size: 12px;
    }
    @media (max-width: 650px) {
        font-size: 10px;
    }
    .images {
        position: relative;
    }
    .text {
        font-family: 'Poppins';
        font-style: normal;
        padding: 18% 18% 10%;
        @media (max-width: 650px) {
            padding: 18% 12%;
        }
        h2 {
            font-size: 3.4375em;
            font-weight: 600;
            line-height: 138.18%;
            text-align: left;
            margin-bottom: 4%;
            @media (max-width: 650px) {
                font-size: 2.5em;
            }
        }
        p {
            width: 65%;
            font-size: 1.1875em;
            font-weight: 300;
            line-height: 168.42%;
            text-align: left;
            @media (max-width: 950px) {
                width: 100%;
            }
        }
    }
`
const Arrow = styled.div`
    width: 11%;
    height: 10%;
    position: absolute;
    bottom: -2.6%;
    right: 5%;
    /* @media (max-width: 1200px) {
        width: 147px;
        height: 137px;
        bottom: -15%;
    }
    @media (max-width: 950px) {
        width: 107px;
        height: 87px;
        bottom: -10%;
    }
    @media (max-width: 650px) {
        width: 67px;
        height: 47px;
        bottom: -12.5%;
    } */
`

const Team = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
      });
    const data = useStaticQuery(graphql`
    {
    allFile(filter: {relativeDirectory: {eq: "team"}}) {
        nodes {
        childImageSharp {
            fluid(quality: 100, maxWidth: 1700) {
            ...GatsbyImageSharpFluid_tracedSVG
            }
        }
        }
    }
    }
`)
    return (
        <Style>
            <div className="images">
            <Img fluid={ data.allFile.nodes[1].childImageSharp.fluid } alt="team-picture" />
                <Arrow>
                    <Img fluid={ data.allFile.nodes[0].childImageSharp.fluid } alt="arrow" />
                </Arrow>
            </div>
            <div className="text" ref={ ref }>
                <AnimatedHeader inView={ inView }> 
                Understanding the individual needs of the clients is the key to our work. We research, we explain, we implement.
Our strategies are highly curated to the challenges.
                </AnimatedHeader>
                <AnimatedParagraph inView={ inView }>
                We go beyond the standard agency model and offer comprehensive consulting to maximize your profit.
                </AnimatedParagraph>
            </div>
        </Style>
    )
}

export default Team