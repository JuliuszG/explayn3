import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Desktop from "../components/navigation/desktop"
import Mobile from "../components/navigation/mobile"
import CaseStudy from "../components/landingPage/caseStudy"
import { useMediaQuery } from 'react-responsive'
import Layout from '../components/layout'
import Footer from '../components/footer'
import SEO from "../components/seo"
import { colors } from '../styles/colors'

const Landing = styled.section`
    width: 100%;
    min-height: 80.5vh;
    background: ${ colors.neutral00 };
    padding-left: 17%;
    display: flex;
    align-items: center;
    font-size: 16px;
    display: flex;
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
        font-size: 12px;
        padding-left: 0;
        padding: 10% 15% 0;
    }
    @media (max-width: 650px) {
        font-size: 8px;
        padding: 15% 8%;
    }
    .text {
        max-width: 50%;
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
const Logo = styled(Img)`
    width: 201px;
    height: 191px;
    margin-left: 20%;
    margin-bottom: 14%;
`
const ServiceTemplate = ({ pageContext }) => {
    const isMobile = useMediaQuery({
        query: '(max-device-width: 950px)'
    })
    return(
        <Layout>
             <SEO title="Home" />
            { isMobile ? <Mobile /> : <Desktop /> }
            <Landing>
                <div className="text">
                    <h1>{ pageContext.first.Title }</h1>
                    <p>{ pageContext.first.Desc }</p>
                </div>
                <Logo fluid={ pageContext.logo } alt="subpage logo" />
            </Landing>
            <CaseStudy />
            <Footer />
        </Layout>
    )
}

export default ServiceTemplate