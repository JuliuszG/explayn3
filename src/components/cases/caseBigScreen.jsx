import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const Style = styled.div`
    position: relative;
    height: 100vh;
    margin-top: 25%;
`

const Triangle = styled.div`
    position: absolute;
    left: 2%;
    top: -8%;
    width: 159px;
    height: 205px;
    @media (max-width: 850px) {
        width: 147px;
        height: 109px;
        top: -4%;
    }
    @media (max-width: 850px) {
        width: 107px;
        height: 69px;
        top: -8%;
    }    
`

const Triangle2 = styled.div`
    position: absolute;
    right: 2%;
    bottom: -8%;
    width: 187px;
    height: 178px;
    @media (max-width: 850px) {
        width: 147px;
        height: 138px;
        bottom: -4%;
    }
    @media (max-width: 850px) {
        width: 107px;
        height: 99px;
        bottom: -8%;
    }   
`

const Image = styled(Img)`
    width: 100%;
    height: 100%;
`
const CaseBigScreen = ({ src, decorations=false }) => {
    const data = useStaticQuery(graphql`
    query {
        triangle1: file(relativePath: { eq: "caseStudy/triangle.png" }) {
        childImageSharp {
            fluid {
            ...GatsbyImageSharpFluid
            }
        }
        }
        triangle2: file(relativePath: { eq: "team/arrow.png" }) {
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
            <Image fluid={ src } alt="case Screen" />
            <Triangle>
                <Img fluid={ data.triangle1.childImageSharp.fluid } alt="decoration" />
            </Triangle>
            <Triangle2>
                <Img fluid={ data.triangle2.childImageSharp.fluid } alt="decoration" />
            </Triangle2>
        </Style>
    )
}

export default CaseBigScreen