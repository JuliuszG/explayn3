import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const Style = styled(BackgroundImage)`
  width: 100%;
  background-position: center;
  background-size: cover;
  height: 100vh;
  position: relative;
  .circle-wrapper {
      width: 217px;
      height: 199px;
      position: absolute;
      bottom: -8%;
      right: 5%;
      @media (max-width: 650px) {
          width: 87px;
          height: 69.5px;
          bottom: -2%;
      }
  }
`

const CaseLanding = ({ background }) => {
    const data = useStaticQuery(graphql`
        {
            file(relativePath: { eq: "landing/landingCircle.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <Style
            fluid={background}
            Tag="section"  
            backgroundColor={`#040e18`}
        >
            <div className="circle-wrapper">
                <Img fluid={ data.file.childImageSharp.fluid } alt="decoration" />
            </div>
        </Style>
    )
}

export default CaseLanding