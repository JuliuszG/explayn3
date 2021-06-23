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
        top: -6%;
    }
    @media (max-width: 450px) {
        width: 107px;
        height: 69px;
        top: -4%;
    }
`

const Triangle2 = styled.div`
    position: absolute;
    right: 2%;
    bottom: -8%;
    width: 187px;
    height: 178px;
    @media (max-width: 1250px) {
        width: 147px;
        height: 138px;
        bottom: -7%;
    }
    @media (max-width: 968px) {
        width: 87px;
        height: 79px;
        bottom: -4%;
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
        </Style>
    )
}

export default CaseBigScreen