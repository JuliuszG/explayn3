import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import { colors } from '../../styles/colors'
import { CarouselProvider, Slider, Slide, ButtonNext } from 'pure-react-carousel';
import { useMediaQuery } from 'react-responsive'

const Style = styled.section`
    position: relative;
    margin-bottom: 10%;
    .carousel__cnt {
        .slide:nth-of-type(even) {
            margin: 0 0.5%;
            @media (max-width: 650px) {
                margin: 25% 0;
            }
        }
    }
`
const Triangle = styled.div`
    width: 160px;
    height: 205px;
    position: absolute;
    left: 5%;
    top: -10%;
    @media (max-width: 1250px) {
        width: 130px;
        height: 175px;
        top: -12%;
    }
    @media (max-width: 1080px) {
       top: -3%;
    }
    @media (max-width: 900px) {
       top: -3.5%;
    }
    @media (max-width: 650px) {
        width: 100px;
        height: 145px;
        top: -3%;
    }
    @media (max-width: 450px) {
        width: 80px;
        height: 125px;
    }
    @media (max-width: 360px) {
        top: -2%;
        left: 2%;
    }
`

const HeaderStyle = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    padding: 5% 22% 5% 10%;
    color: ${ colors.neutral100 };
    display: flex;
    justify-content: space-between;
    align-items: center;
        @media (max-width: 650px) {
            justify-content: center;
            padding: 25% 10%;
            font-size: 10px;
        }
    h2 {
        font-weight: 600;
        font-size: 5em;
        line-height: 95%;
        margin-bottom: 3%;
    }
    p {
        width: 60%;
        font-weight: 300;
        font-size: 19px;
        line-height: 32px;
        @media (max-width: 650px) {
            width: 100%;
        }
    }
    .next {
        outline: none;
        border: none;
        cursor: pointer;
        background: transparent;
        width: 160px;
        height: 160px;
        display: inline-block;
        @media (max-width: 1080px) {
            display: none;
        }
    }
`

const SlideStyle = styled(Link)`
    width: 100%;
    height: 100%;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    font-family: 'Poppins';
    font-style: normal;
    font-size: 16px;
    @media (max-width: 1200px) {
        font-size: 14px;
    }
    @media (max-width: 1080px) {
        margin: 5vh 0;
        padding: 0 10%;
        font-size: 12px;
    }
    @media (max-width: 650px) {
        font-size: 16px;
    }
    @media (max-width: 400px) {
        padding: 0;
    }
    .slide__img {
        height: 50%;
    }
    .text__cnt {
        margin-top: 2%;
        margin-left: 3%;
        @media (max-width: 650px) {
            margin-top: 6%;
        }
    }
    h3 {
        font-weight: 600;
        font-size: 1.875em;
        line-height: 153.33%;
        color: ${ colors.neutral100 };
    }
    p {
        font-weight: normal;
        font-size: 1em;
        line-height: 181.25%;
        color: ${ colors.neutral50 };
    }
`

export const SliderContent = ({ item }) => {
    return (
        <SlideStyle to={ `/case/${item.slug}` }>
                <Img style={ { height: "70%", width: "100%", objectPosition: "center" } } fluid={ item.landingimage.fluid } alt="logo"/> 
            <div className="text__cnt">
                <h3>{ item.component2Client }</h3>
                <p>{ item.component2Services }</p>
            </div>
        </SlideStyle>
    )
}

const Header = ({ src }) => {
    return (
        <HeaderStyle>
            <div className="text">
                <h2>Case studies</h2>
                <p>
                    Zobacz nasze ostatnie realizacjie dla klientów lorem 
                    ipsum dolor sit amen proin victus senor.
                </p>
            </div>
            <ButtonNext className="next">
                    <Img fluid={ src } alt="scroll left" />
            </ButtonNext>
        </HeaderStyle>
    )
}

const CaseStudy = ({ triangle=true }) => {
    const data = useStaticQuery(graphql`
    {
        cases: allDatoCmsRealizacja (limit: 6, sort: {fields: meta___createdAt, order: DESC}) {
            nodes {
              component2Client
              component2Services
              slug
              landingimage {
                fluid {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        triangle: file (relativePath: { eq: "caseStudy/triangle.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        scroll: file (relativePath: { eq: "caseStudy/scroll.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
      }      
`)
    const isMobile = useMediaQuery({
        query: '(max-device-width: 1080px)'
      })
    const renderSlider = (
        <Slider style={ { outline: 'none' } }>
            { data.cases.nodes.map((item, index) => (
                <Slide className="slide" key={ index } index={ index }>
                    <SliderContent item={ item } />
                </Slide>
            )) }
        </Slider>
    )
    const mobile = (
        <>
            { data.cases.nodes.map((item, index) => index < 3 && <SliderContent item={ item } key={ index } />) }
        </>
    )
    const content = (
        <Style id="caseStudy">
            { triangle && (
                <Triangle>
                    <Img fluid={ data.triangle.childImageSharp.fluid } alt="triangle" /> 
                </Triangle>
            ) }
            <CarouselProvider
                    naturalSlideWidth={ 100 }
                    naturalSlideHeight={ 100 }
                    totalSlides={ data.cases.nodes.length + 1 }
                    className="carousel__cnt"
                    visibleSlides={ data.cases.nodes.length >= 3 ? 3 : data.cases.nodes.length }
                    infinite={ false }
                    step={ 3 }
                >
            <Header src={ data.scroll.childImageSharp.fluid }/>
                    { !isMobile && renderSlider }
                </CarouselProvider>
                { isMobile && mobile }
        </Style>
    )
    return data && content
}

export default CaseStudy