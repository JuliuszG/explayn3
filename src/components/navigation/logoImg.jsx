import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'
import Logo from '../../images/explaynLogo.svg'
import { colors } from '../../styles/colors'

const Image = styled(Img)`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const ImageSvg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
const ImageCnt = styled.div`
    width: ${ ({ customWidth }) => customWidth };
    height: ${ ({ customHeight }) => customHeight };
`
const LogoImg = ({ customWidth, customHeight, color=false }) => {
    const data = useStaticQuery(graphql`
        query {
            dark: file(relativePath: { eq: "explaynLogo.png" }) {
            childImageSharp {
                fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
            }
            light: file(relativePath: { eq: "explaynLogoLight.png" }) {
                childImageSharp {
                    fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
                }
        }
    `
    )
    return(
         <ImageCnt customWidth={ customWidth } customHeight={ customHeight }>
             { color ? 
             <Image fluid={ data.light.childImageSharp.fluid } alt="logo" /> : 
             <ImageSvg src={ Logo } alt="logo" />}
         </ImageCnt>
         )
}

export default LogoImg