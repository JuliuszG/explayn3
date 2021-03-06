import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import { colors } from '../../styles/colors'
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { H2Variant, PVariant } from './landing'

const Style = styled.section`
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
    &:hover a {
        opacity: 1;
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
        opacity: 0;
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

const BoxImage = styled(Img)`
    width: 100%;
    height: 100%;
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
    const [hovered, setHovered] = useState(false)
    const renderImage = () => {
        return (
            <BoxImageWrapper>
                <AnimatePresence initial={ false }>
                {hovered ? (
                    <motion.div style={{position: 'absolute', top: 0, left: 0}} key="fwefefewf2ee" variants={ imageVariant } initial="initial" exit="exit" animate="visible">
                        <BoxImage fixed={ content.image[1].src } 
                            alt={ content.image[1].alt } 
                        />
                    </motion.div>
                  
                ) : (
                    <motion.div style={{position: 'absolute', top: 0, left: 0}} key="hdw7hwd" variants={ imageVariant } initial="initial" exit="exit" animate="visible">
                        <BoxImage fixed={ content.image[0].src } 
                            alt={ content.image[0].alt } 
                        />
                    </motion.div>
                   
                )}    
                </AnimatePresence>         
            </BoxImageWrapper>
        )
    }
    const handleHover = () => setHovered(prevState => !prevState)
    return (
        <BoxStyle onMouseOver={ handleHover } onMouseOut={ handleHover }>
                { renderImage() }
            <h3>{ content.name }</h3>
            <ul>
                { content.list.map((item, index) => <li key={ index }>{ item }</li>) }
            </ul>
            <Link to={ content.url }>Zobacz więcej</Link>
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
                    Zbudujemy Twoją markę, zaczynając 
                    od solidnych fundamentów 
                </motion.h2>
                <motion.p variants={ PVariant } initial="hidden" animate={ inView ? "visible" : "hidden" }>
                    Wierzymy w moc porywającej narracji, estetyki marki oraz wykorzystanie silnej stron brandu.
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
    aboutImages: allFile(filter: {relativeDirectory: {eq: "about"}}) {
        nodes {
        childImageSharp {
            fixed(width: 65, height: 65) {
            ...GatsbyImageSharpFixed_tracedSVG
            }
        }
        }
    }
    aboutImagesHover: allFile(filter: {relativeDirectory: {eq: "about/hover"}}) {
        nodes {
        childImageSharp {
            fixed(width: 65, height: 65) {
            ...GatsbyImageSharpFixed_tracedSVG
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
                src:  data.aboutImages.nodes[0].childImageSharp.fixed,
                alt: 'Development',
                hover: false
            },
            {
                src:  data.aboutImagesHover.nodes[0].childImageSharp.fixed,
                alt: 'Development',
                hover: true
            }
        ],
        name: 'Development',
        list: ['Strony internetowe', 'Sklepy internetowe', 'Aplikacje iOS & Android', 'Systemy dedykowane'],
        url: '/development'
    },
    {
        image: [
            {
                src:  data.aboutImages.nodes[1].childImageSharp.fixed,
                alt: 'Development',
                hover: false
            },
            {
                src:  data.aboutImagesHover.nodes[1].childImageSharp.fixed,
                alt: 'Development',
                hover: true
            }
        ],
        name: 'Visual',
        list: ['Fotografia', 'Spoty reklamowe', 'Filmy animowane', 'Wideo produktowe'],
        url: '/visual'
    },
    {
        image: [
            {
                src:  data.aboutImages.nodes[2].childImageSharp.fixed,
                alt: 'Development',
                hover: false
            },
            {
                src:  data.aboutImagesHover.nodes[2].childImageSharp.fixed,
                alt: 'Development',
                hover: true
            }
        ],
        name: 'Branding',
        list: ['Identyfikacja wizualna', 'Materiały marketingowe', 'Tworzenie nazw marek', 'UI/UX Design'],
        url: '/branding'
    },
    {
        image: [
            {
                src:  data.aboutImages.nodes[3].childImageSharp.fixed,
                alt: 'Development',
                hover: false
            },
            {
                src:  data.aboutImagesHover.nodes[3].childImageSharp.fixed,
                alt: 'Development',
                hover: true
            }
        ],
        name: 'eCommerce',
        list: ['Strategia sprzedaży online', 'Zwiększenie konwersji', 'Optymalizacja sprzedaży', 'Audyty i analityka'],
        url: '/ecommerce'
    },
    {
        image: [
            {
                src:  data.aboutImages.nodes[4].childImageSharp.fixed,
                alt: 'Development',
                hover: false
            },
            {
                src:  data.aboutImagesHover.nodes[4].childImageSharp.fixed,
                alt: 'Development',
                hover: true
            }
        ],
        name: 'Events',
        list: ['Imprezy masowe', 'Otwarcia obiektów', 'Bankiety', 'Eventy marketingowe'],
        url: '/events'
    },
    {
        image: [
            {
                src:  data.aboutImages.nodes[5].childImageSharp.fixed,
                alt: 'Development',
                hover: false
            },
            {
                src:  data.aboutImagesHover.nodes[5].childImageSharp.fixed,
                alt: 'Development',
                hover: true
            }
        ],
        name: 'Marketing',
        list: ['Strategia marketingowa', ' Social media', 'Content Marketing', 'Kampanie marketingowe'],
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
                    { isCollapsed ? "Zobacz wszystkie" : "Zwiń" }
                </button>
            </div>
        </Style>
    )
}

export default AboutUs