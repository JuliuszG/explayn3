import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { useMediaQuery } from 'react-responsive'
import { colors } from '../../styles/colors';

const Style = styled(CarouselProvider)`
    margin: 0 auto;
    width: 100%;
`
const ContentStyle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    a {
        margin-top: 12%;
        text-decoration: none;
        font-family: 'Poppins';
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 0em;
        text-align: left;
        color: ${ colors.neutral60 };
        @media (max-width: 950px) {
            font-size: 20px;
        }
        @media (max-width: 750px) {
            font-size: 17.5px;
        }
    }
`

const LogoImg = styled.div`
    width: 70%;
    height: 150px;
`
const SliderContent = ({ item }) => {
    return(
        <ContentStyle>
            <LogoImg>
                <Img 
                    style={{ height: "100%", width: "100%" }} 
                    imgStyle={{ objectFit: "contain" }} 
                    fluid={ item.image.src } 
                    alt={ item.image.alt } 
                />
            </LogoImg>
                <a href={ `http://www.${ item.name }` }>{ item.name } &#8599;</a>
        </ContentStyle>
    )
}

const Partners = () => {
    const data = useStaticQuery(graphql`
    {
    allFile(filter: {relativeDirectory: {eq: "partners"}}) {
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
    const isMobile = useMediaQuery({
        query: '(max-device-width: 650px)'
    })
    const slideData = [
        {
            image: {
                src: data.allFile.nodes[0].childImageSharp.fluid,
                alt: 'logo'
            },
            name: "Systemeg.net"
        },
        {
            image: {
                src: data.allFile.nodes[1].childImageSharp.fluid,
                alt: 'logo'
            },
            name: "Chillnchips.com "
        },
        {
            image: {
                src: data.allFile.nodes[2].childImageSharp.fluid,
                alt: 'logo'
            },
            name: "Avalon.com"
        },
        {
            image: {
                src: data.allFile.nodes[3].childImageSharp.fluid,
                alt: 'logo'
            },
            name: "Tajm.com"
        },
        {
            image: {
                src: data.allFile.nodes[0].childImageSharp.fluid,
                alt: 'logo'
            },
            name: "Systemeg.net"
        },
        {
            image: {
                src: data.allFile.nodes[1].childImageSharp.fluid,
                alt: 'logo'
            },
            name: "Chillnchips.com "
        },
        {
            image: {
                src: data.allFile.nodes[2].childImageSharp.fluid,
                alt: 'logo'
            },
            name: "Avalon.com"
        },
        {
            image: {
                src: data.allFile.nodes[3].childImageSharp.fluid,
                alt: 'logo'
            },
            name: "Tajm.com"
        }
    ]
    const slideNum = slideData.length >= 4 ? 4 : slideData.length
    return (
        <Style
            naturalSlideWidth={ 100 }
            naturalSlideHeight={ 120 }
            totalSlides={ slideData.length }
            className="carousel__cnt"
            visibleSlides={ isMobile ? 1 : slideNum }
            infinite={ false }
            isPlaying={ true }
        >
            <Slider style={ { outline: 'none', height: "100%" } }>
                    { slideData.map((item, index) => (
                        <Slide className="slide" key={ index } index={ index }>
                           <SliderContent item={ item } />
                        </Slide>
                        )) }
            </Slider>
        </Style>
    )
}

export default Partners