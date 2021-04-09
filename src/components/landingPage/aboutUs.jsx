import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import { colors } from '../../styles/colors'
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { H2Variant, PVariant } from './landing'
import DevelopmentImage from '../../images/about/1.svg'
import VisualImage from '../../images/about/2.svg'
import BrandingImage from '../../images/about/3.svg'
import EcommerceImage from '../../images/about/4.svg'
import EventsImage from '../../images/about/5.svg'
import MarketingImage from '../../images/about/6.svg'
import DevelopmentHover from '../../images/about/hover/1.svg'
import VisualHover from '../../images/about/hover/2.svg'
import BrandingHover from '../../images/about/hover/3.svg'
import EcommerceHover from '../../images/about/hover/4.svg'
import EventsHover from '../../images/about/hover/5.svg'
import MarketingHover from '../../images/about/hover/6.svg'

const Style = styled(motion.section)`
    background: ${ colors.neutral90 };
    padding: 10% 0 10%;
    .cnt {
        display: flex;
        padding: 0 10%;
        justify-content: center;
        @media (max-width: 956px) {
            flex-direction: column;
        }
        &.first {
            margin-top: 10%;
        }
    }
    button {
        width: 219px;
        height: 58px;
        display: inline-block;
        background: ${ colors.neutral80 };
        color: ${ colors.neutral00 };
        cursor: pointer;
        border: none;
        border-radius: 33px;
        outline: none;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 29px;
        transition: all 0.1s ease-in;
        &:hover {
            transform: scale(1.1);
            filter: brightness(120%);
        }
    }
    .btn__cnt {
        margin-top: 2%;
        display: flex;
        justify-content: center;
    }
`
const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5% 0 10%;
    font-size: 16px;
    @media (max-width: 956px) {
        font-size: 14px;    
    }
    @media (max-width: 550px) {
        font-size: 10px;    
    }
    .text {
        color: ${ colors.neutral00 };
        font-family: 'Poppins';
        font-style: normal;
        width: 70%;
        @media (max-width: 956px) {
            width: 100%;
        }
       h2 {
            font-weight: 600;
            font-size: 3.4375em;
            line-height: 138%;
       }
       p {
        width: 60%;
        margin-top: 3%;
        font-weight: 300;
        font-size: 1.1875em;
        line-height: 168%;
            @media (max-width: 956px) {
                width: 100%;
            }
       }
    }
`
const ImageHeader = styled(Img)`
    width: 180px;
    height: 169px;
    @media (max-width: 956px) {
        display: none;
    }
`
const BoxStyle = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    color: ${ colors.neutral00 };
    width: 500px;
    height: 310px;
    cursor: pointer;
    margin: 2% 0;
    @media (max-width: 956px) {
        width: 100%;
    }
    h3 {
        max-width: 240px;
        font-weight: 600;
        font-size: 1.875em;
        line-height: 168.42%;
        padding-bottom: 3%;
        border-bottom: 1px solid ${ colors.neutral60 };
        margin-bottom: 3%;
    }
    ul {
        list-style: none;
        margin-bottom: 5%;
        li {
            font-weight: normal;
            font-size: 1em;
            line-height: 181.25%;
            color: ${ colors.neutral30 };
        }
    }
    a {
        font-weight: 600;
        font-size: 1em;
        line-height: 181.25%;
        transition: all .3s ease-in;
        padding-bottom:  1%;
        border-bottom: 1.3px solid ${ colors.neutral00 };
        color: ${ colors.neutral00 };
        text-decoration: none;
    }
    @media (hover: hover) {
        a {
            opacity: 0;
        }
        &:hover a {
            opacity: 1;
        }
    }
`

const BoxImageWrapper = styled.div`
    width: 65px;
    height: 65px;
    padding: 0;
    position: relative;
    .hidden {
        opacity: 0;
    }
`

const BoxImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: top;
`

const Box = ({ content }) => {
    const imageVariant = {
        visible : {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut", 
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut", 
            }
        },
        initial: {
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut", 
            }
        }
    }
    const imageColorVariant = {
        visible : {
            opacity: 1,
            scale: 1.5,
            transition: {
                duration: 0.5,
                ease: "easeInOut", 
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut", 
            }
        },
        initial: {
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut", 
            }
        }
    }
    const [hovered, setHovered] = useState(false)
    const renderImage = () => {
        return (
            <BoxImageWrapper>
                <AnimatePresence initial={ false }>
                {hovered ? (
                    <motion.div style={{position: 'absolute', top: 0, left: 0, width: "100%", height: '100%'}} key="fwefefewf2ee" variants={ imageColorVariant } initial="initial" exit="exit" animate="visible">
                        <BoxImage src={ content.image[1].src } 
                            alt={ content.image[1].alt } 
                        />
                    </motion.div>
                  
                ) : (
                    <motion.div style={{position: 'absolute', top: 0, left: 0, width: "100%", height: '100%'}} key="hdw7hwd" variants={ imageVariant } initial="initial" exit="exit" animate="visible">
                        <BoxImage src={ content.image[0].src } 
                            alt={ content.image[0].alt } 
                        />
                    </motion.div>
                   
                )}    
                </AnimatePresence>         
            </BoxImageWrapper>
        )
    }
    const handleHover = () => window?.matchMedia("(hover: hover)").matches && setHovered(prevState => !prevState)
    return (
        <BoxStyle onMouseOver={ handleHover } onMouseOut={ handleHover }>
                { renderImage() }
            <h3>{ content.name }</h3>
            <ul>
                { content.list.map((item, index) => <li key={ index }>{ item }</li>) }
            </ul>
            <Link to={ content.url }>Show more</Link>
        </BoxStyle>
    )
}

const Header = ({ src }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 1
      });
    return (
        <HeaderStyle ref={ ref }>
            <div className="text">
                <motion.h2 variants={ H2Variant } initial="hidden" animate={ inView ? "visible" : "hidden" }>
                Every day we take on significant challenges to build results driven brands.
                </motion.h2>
                <motion.p variants={ PVariant } initial="hidden" animate={ inView ? "visible" : "hidden" }>
                We craft the best digital experience from a brand strategy to web development to digital marketing.
                </motion.p>
            </div>
            <ImageHeader fluid={ src } alt="half-circle" />
        </HeaderStyle>
    )
}

const AboutUs = () => {
    const [isCollapsed, setIsCollapsed] = useState(true)
    const data = useStaticQuery(graphql`
    {
    main: allFile(filter: {relativeDirectory: {eq: "landing/about"}}) {
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
const items = [
    {
        image: [
            {
                src:  DevelopmentImage,
                alt: 'Development',
            },
            {
                src:  DevelopmentHover,
                alt: 'Development',
            }
        ],
        name: 'Development',
        list: ['Websites', 'Online stores', 'iOS & Android Apps', 'Dedicated systems'],
        url: '/development'
    },
    {
        image: [
            {
                src:  VisualImage,
                alt: 'Visual',
            },
            {
                src:  VisualHover,
                alt: 'Visual',
            }
        ],
        name: 'Visual',
        list: ['Photography', 'Video', 'Animated cartoons', 'Animations/3D'],
        url: '/visual'
    },
    {
        image: [
            {
                src:  BrandingImage,
                alt: 'Branding',
            },
            {
                src:  BrandingHover,
                alt: 'Branding',
            }
        ],
        name: 'Branding',
        list: ['Visual identification', 'Product branding', "Brand strategy", 'UI/UX Design'],
        url: '/branding'
    },
    {
        image: [
            {
                src:  EcommerceImage,
                alt: 'eCommerce',
            },
            {
                src:  EcommerceHover,
                alt: 'eCommerce',
            }
        ],
        name: 'eCommerce',
        list: ['Online sales strategies', 'Conversion enhancements', 'Sales optimization', 'Reports and analytics'],
        url: '/ecommerce'
    },
    {
        image: [
            {
                src:  EventsImage,
                alt: 'Events',
            },
            {
                src:  EventsHover,
                alt: 'Events',
            }
        ],
        name: 'Events',
        list: ['Streaming Platform', "Event Management", 'Marketing & Communication', 'Audient'],
        url: '/events'
    },
    {
        image: [
            {
                src:  MarketingImage,
                alt: 'Marketing',
            },
            {
                src:  MarketingHover,
                alt: 'Marketing',
            }
        ],
        name: 'Marketing',
        list: ['Marketing strategies', ' Social media', 'Content Marketing', 'Marketing campaigns'],
        url: '/marketing'
    }
]

const renderSecond = () => {
    if(!isCollapsed) {
        return (
            <div className="cnt second">
                { items.map((item, index) => index > 2 && <Box isCollapsed={ isCollapsed } content={ item } key={ index } />) }
            </div>
        )
    }
}
    return (
        <Style id="aboutUs">
            <Header src={ data.main.nodes[0].childImageSharp.fluid } />
            <div className="cnt first">
                { items.map((item, index) => index < 3 && <Box isCollapsed={ isCollapsed } content={ item } key={ index } />) }
            </div>
            { renderSecond() }
            <div className="btn__cnt">
                <button onClick={ () => setIsCollapsed(prevState => !prevState) }>
                    { isCollapsed ? "Show more" : "Collapse" }
                </button>
            </div>
        </Style>
    )
}

export default AboutUs