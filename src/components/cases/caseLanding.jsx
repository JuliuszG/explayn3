import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Style = styled.div`
    position: relative;
    height: 100vh;
    @media (max-width: 950px) {
        height: 84.5vh;
    }
    .circle-wrapper {
        width: 217px;
        height: 179px;
        position: absolute;
        bottom: -8%;
        right: 5%;
        z-index: 100;
        overflow: clip;
        @media (max-width: 950px) {
            width: 187px;
            height: 149px;
        }
        @media (max-width: 650px) {
            width: 147px;
            height: 109px;
            bottom: -1%;
            right: 0;
        }
    }
`

const CaseLanding = ({ src }) => {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "casesTemp/circleLanding.png" }) {
        childImageSharp {
            fluid {
            ...GatsbyImageSharpFluid
            }
        }
        }
    }
`
)
    const bgStyle = { objectFit: 'cover', width: "100%", height: "100%" }
    return (
        <Style>
            <Img style={ bgStyle } fluid={ src } alt="background image"/>
            <div className="circle-wrapper">
                <Img fluid={ data.file.childImageSharp.fluid } alt="circle" />
            </div>
        </Style>
    )
}

export default CaseLanding