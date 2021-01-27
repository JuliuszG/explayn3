import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { SliderContent } from './caseStudy'
import { colors } from '../../styles/colors'

const StyleMobileStudy = styled.section`
    position: relative;
    margin-bottom: 10%;
    font-family: 'Poppins';
    font-style: normal;
    color: ${ colors.neutral100 };
    #header__study__mobile {
        padding: 15% 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media (max-width: 650px) {
            font-size: 10px;
        }
    }
    h2 {
            font-weight: 600;
            font-size: 5em;
            line-height: 95%;
            margin-bottom: 3%;
        }
        p {
            width: 100%;
            font-weight: 300;
            font-size: 19px;
            line-height: 32px;
        }
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
        <StyleMobileStudy>
                <h2>Case studies</h2>
                <p>
                    Zobacz nasze ostatnie realizacjie dla klientów lorem 
                    ipsum dolor sit amen proin victus senor.
                </p>
            <div className="boxes">
                { slideData.map((item, index) => <SliderContent item={ item } key={ index } />) }
            </div>
        </StyleMobileStudy>
    )
}
export default CaseStudyMobile