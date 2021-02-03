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

const MenuIcon = ({ toggle, customWidth, customHeight, color=false }) => {
    const data = useStaticQuery(graphql`
        query {
            dark: file(relativePath: { eq: "burger.png" }) {
            childImageSharp {
                fluid {
                ...GatsbyImageSharpFluid
                }
            }
            }
            light: file(relativePath: { eq: "lightBurger.png" }) {
                childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid
                    }
                }
                }
        }
    `
    )
    return (
        <Burger customWidth={ customWidth } customHeight={ customHeight } onClick={ toggle }>
            { color ? 
            <Img fluid={ data.light.childImageSharp.fluid } alt="menu icon" /> : 
            <Img fluid={ data.dark.childImageSharp.fluid } alt="menu icon" /> }
        </Burger>
    )
}

export default MenuIcon