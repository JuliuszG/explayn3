import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { colors } from '../../styles/colors'

const Style = styled.section`
    position: relative;
    padding: 15% 15% 5%;
    font-family: 'Poppins';
    font-style: normal;
    color: ${ colors.neutral100 };
    @media (max-width: 1250px) {
        font-size: 14px;
    }
    @media (max-width: 950px) {
        font-size: 12px;
    }
    @media (max-width: 650px) {
        font-size: 10px;
        padding: 25% 5% 5%;
    }
    @media (max-width: 450px) {
        padding: 30% 5% 15%;
    }
    h2 {
        font-weight: 600;
        font-size: 3.3125em;
        line-height: 143.39%;
        width: 80%;
        margin-bottom: 8%;
        @media (max-width: 950px) {
            width: 100%;
        }
        @media (max-width: 650px) {
            font-size: 2.3125em;
        }
    }
    .p-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        @media (max-width: 650px) {
            flex-direction: column;
            align-items: center;
        }
        p {
            width: 40%;
            font-weight: 300;
            font-size: 1.1875em;
            line-height: 168.42%;
            margin-bottom: 5%;
            @media (max-width: 650px) {
            width: 100%;
            &:last-of-type {
                margin-bottom: 0;
            }
        }
        }
    }
`
const ZigZag = styled.div`
    width: 227px;
    height: 113px;
    position: absolute;
    top: 20%;
    right: 10%;
    @media (max-width: 950px) {
        width: 147px;
        height: 33px;
        top: 5%;
        right: 5%;
    }
    @media (max-width: 650px) {
        width: 127px;
        height: 13px;
        top: 3%;
        left: 3%;
    }
`
const CaseDescription = ({ title, paragraphs }) => {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "landing/ZigZag.png" }) {
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
        <Style>
            <ZigZag>
                <Img fluid={ data.file.childImageSharp.fluid } alt="decoration" />
            </ZigZag>
            <h2>{ title }</h2>
                <div
                    dangerouslySetInnerHTML={{ __html: paragraphs }}
                    className="p-wrapper"
                >
                </div>
        </Style>
    )
}

export default CaseDescription