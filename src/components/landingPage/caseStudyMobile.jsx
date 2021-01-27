import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { HeaderStyle, SliderContent } from './caseStudy'

const Style = styled.section`
    position: relative;
    margin-bottom: 10%;
`
const Header = () => {
    return(
        <HeaderStyle>
                <h2>Case studies</h2>
                <p>
                    Zobacz nasze ostatnie realizacjie dla klientów lorem 
                    ipsum dolor sit amen proin victus senor.
                </p>
        </HeaderStyle>
    )
}

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
            <Header />
            <div className="boxes">
                { slideData.map((item, index) => <SliderContent item={ item } key={ index } />) }
            </div>
        </Style>
    )
}
export default CaseStudyMobile