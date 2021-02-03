import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'

const Image = styled(Img)`
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
                fluid {
                ...GatsbyImageSharpFluid
                }
            }
            }
            light: file(relativePath: { eq: "explaynLogoLight.png" }) {
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
         <ImageCnt customWidth={ customWidth } customHeight={ customHeight }>
             { color ? 
             <Image fluid={ data.light.childImageSharp.fluid } alt="logo" /> : 
             <Image fluid={ data.dark.childImageSharp.fluid } alt="logo" />}
         </ImageCnt>
         )
}

export default LogoImg