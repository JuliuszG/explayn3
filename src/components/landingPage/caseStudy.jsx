import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import { colors } from '../../styles/colors'
import { CarouselProvider, Slider, Slide, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
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
    @media (max-width: 950px) {
       top: -14%;
    }
    @media (max-width: 650px) {
        width: 100px;
        height: 145px;
        top: -3%;
    }
    @media (max-width: 450px) {
       display: none;
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
        flex-grow: 1;
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

const SlideImg = styled(Img)`
    flex-grow: 1;
`

export const SliderContent = ({ item }) => {
    return (
        <SlideStyle to={ item.slug }>
                <SlideImg fluid={ item.image.src } alt={ item.image.alt }/> 
            <div className="text__cnt">
                <h3>{ item.title }</h3>
                <p>{ item.desc }</p>
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

const CaseStudy = () => {
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
        },
        {
            image: {
                src: data.allFile.nodes[2].childImageSharp.fluid,
                alt: 'grabbit-logo'
            },
            title: 'Grabbit, chwyć króliczka!',
            desc: 'Projekt portalu internetowego',
            slug: 'case4'
        },
        {
            image: {
                src: data.allFile.nodes[3].childImageSharp.fluid,
                alt: 'deventon-logo'
            },
            title: 'Deventon, IT i engineering',
            desc: 'Projekt strony internetowej',
            slug: 'case5'
        },
        {
            image: {
                src: data.allFile.nodes[4].childImageSharp.fluid,
                alt: 'twochicks-logo'
            },
            title: 'Twochicks, dwa pisklęta',
            desc: 'Film reklamowy',
            slug: 'case6'
        },
    ]
    const isMobile = useMediaQuery({
        query: '(max-device-width: 1080px)'
      })
    const renderSlider = (
        <Slider style={ { outline: 'none' } }>
            { slideData.map((item, index) => (
                <Slide className="slide" key={ index } index={ index }>
                    <SliderContent item={ item } />
                </Slide>
            )) }
        </Slider>
    )
    const mobile = (
        <>
            { slideData.map((item, index) => index < 3 && <SliderContent item={ item } key={ index } />) }
        </>
    )
    return (
        <Style>
            <Triangle>
                <Img fluid={ data.allFile.nodes[1].childImageSharp.fluid } alt="triangle" /> 
            </Triangle>
            <CarouselProvider
                    naturalSlideWidth={ 100 }
                    naturalSlideHeight={ 100 }
                    totalSlides={ slideData.length + 1 }
                    className="carousel__cnt"
                    visibleSlides={ slideData.length >= 3 ? 3 : slideData.length }
                    infinite={ true }
                >
            <Header src={ data.allFile.nodes[0].childImageSharp.fluid }/>
                    { !isMobile && renderSlider }
                </CarouselProvider>
                { isMobile && mobile }
        </Style>
    )
}

export default CaseStudy