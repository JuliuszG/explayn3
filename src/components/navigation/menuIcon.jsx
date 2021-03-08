import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Burger = styled.div`
    width: ${ ({ customWidth }) => customWidth };
    height: ${ ({ customHeight }) => customHeight };
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    border: none;
    padding: 0;
`

const MenuIcon = ({ mainPage=true, darkMode, toggle, customWidth, customHeight, color=false }) => {
    const data = useStaticQuery(graphql`
        query {
            dark: file(relativePath: { eq: "burger.png" }) {
            childImageSharp {
                fluid(quality: 100) {
                ...GatsbyImageSharpFluid
                }
            }
            }
            light: file(relativePath: { eq: "lightBurger.png" }) {
                childImageSharp {
                    fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                    }
                }
                }
        }
    `
    )
    return (
        <Burger customWidth={ customWidth } customHeight={ customHeight } onClick={ toggle }>
            { mainPage ? 
            <Img fluid={ data.dark.childImageSharp.fluid } alt="menu icon" /> 
            : !darkMode ? 
            <Img fluid={ data.light.childImageSharp.fluid } alt="menu icon" /> : 
            <Img fluid={ data.dark.childImageSharp.fluid } alt="menu icon" /> }
        </Burger>
    )
}

export default MenuIcon