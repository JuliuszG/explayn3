import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { colors } from '../styles/colors'

const Style = styled.footer`
    background: ${ colors.neutral90 };
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    font-family: 'Poppins';
    font-style: normal;
    color: ${ colors.neutral00 };
    @media (max-width: 1400px) {
        font-size: 14px;
    }
    @media (max-width: 1200px) {
        font-size: 11px;
    }
    @media (max-width: 950px) {
        flex-direction: column;
    }
    @media (max-width: 650px) {
        font-size: 10px;
    }
    @media (max-width: 350px) {
        font-size: 8px;
    }
    .left {
        padding: 20% 10% 18%;
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        border-right: 1px solid ${ colors.neutral80 };
        justify-content: center;
        align-items: center;
        position: relative;
        @media (max-width: 950px) {
            border-right: none;
            border-bottom: 1px solid ${ colors.neutral80 };
            width: 100%;
        }
        h4 {
            font-size: 1.375em;
            font-weight: 400;
            line-height: 345.45%;
            text-align: left;
        }
        a {
            text-decoration: none;
            color: ${ colors.neutral00 };
            font-size: 6.25em;
            font-weight: 600;
            line-height: 96%;
            text-align: left;
            @media (max-width: 650px) {
                font-size: 4.25em;
            }
        }
        .copy {
            position: absolute;
            bottom: 1%;
            left: 35%;
            font-size: 1.0625em;
            font-style: normal;
            font-weight: 300;
            line-height: 347.05%;
            text-align: left;
            color: ${ colors.neutral30 };
            @media (max-width: 950px) {
                bottom: -58%;
                left: 40%;
            }
        }
    }
    .right {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        margin: 0 10%;
        &:hover a:not(:hover) {
            color: grey;
        }
        @media (max-width: 950px) {
            flex-direction: row;
            padding: 15% 10%;
            width: 100%;
            justify-content: space-between;
            align-items: center;
        }
        a {
            text-decoration: none;
            color: ${ colors.neutral00 };
            font-size: 1.1875em;
            font-weight: 300;
            line-height: 310.52%;
            text-align: left;
            transition: all 0.5s ease-in-out;
        }
    }
`
const Arrow = styled.div`
    width: 131px;
    height: 132px;
    position: absolute;
    right: 39%;
    bottom: 15%;
    @media (max-width: 1400px) {
        width: 90px;
        height: 90px;
    }
    @media (max-width: 950px) {
        right: calc(50% - 55px);
        bottom: 35%;
    }
    @media (max-width: 400px) {
        width: 40px;
        height: 40px;
        right: calc(50% - 22px);
    }
`
const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "footerArrow.png" }) {
            childImageSharp {
                fluid {
                ...GatsbyImageSharpFluid
                }
            }
            }
        }
    `
    )
    return(
        <Style id="footer">
            <div className="left">
                <h4>Do business with us</h4>
                <h2><a href="mailto:we@explayn.it">we@explayn.it</a></h2>
                <span className="copy">© explayn.it All rights reserved</span>
            </div>
            <div className="right">
                <a href="https://www.facebook.com/explayn.it">Facebook</a>
                <a href="https://www.youtube.com/channel/UCQE3VnneDB6U3oy-3R7Xyvw">Youtube</a>
                <a href="https://www.instagram.com/explayn.it/">Instagram</a>
                <a href="https://www.linkedin.com/company/explayn-digital-agency">Linkedin</a>
            </div>
            <Arrow>
                <Img 
                    fluid={ data.file.childImageSharp.fluid } 
                    alt="arrow" 
                />
            </Arrow>
        </Style>
    )
}

export default Footer