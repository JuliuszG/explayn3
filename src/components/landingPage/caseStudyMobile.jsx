import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import { colors } from '../../styles/colors'
import { Header, SliderContent } from './caseStudy'

const Style = styled.section`
    position: relative;
    margin-bottom: 10%;
`

const CaseStudyMobile = () => {
    const data = useStaticQuery(graphql`
    {
    allFile(filter: {relativeDirectory: {eq: "caseStudy"}}) {
        nodes {
        childImageSharp {
            fluid {
            ...GatsbyImageSharpFluid_tracedSVG
            }
        }
        }
    }
    }
`)
    const slideData = [
        {
            image: {
                src: data.allFile.nodes[2].childImageSharp.fluid,
                alt: 'grabbit-logo'
            },
            title: 'Grabbit, chwyć króliczka!',
            desc: 'Projekt portalu internetowego',
            slug: 'case1'
        },
        {
            image: {
                src: data.allFile.nodes[3].childImageSharp.fluid,
                alt: 'deventon-logo'
            },
            title: 'Deventon, IT i engineering',
            desc: 'Projekt strony internetowej',
            slug: 'case2'
        },
        {
            image: {
                src: data.allFile.nodes[4].childImageSharp.fluid,
                alt: 'twochicks-logo'
            },
            title: 'Twochicks, dwa pisklęta',
            desc: 'Film reklamowy',
            slug: 'case3'
        }
    ]
    return (
        <Style>
            <Header src={ data.allFile.nodes[0].childImageSharp.fluid } mobile={ true } />
            <div className="boxes">
                { slideData.map((item, index) => <SliderContent item={ item } key={ index } />) }
            </div>
        </Style>
    )
}
export default CaseStudyMobile