import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { colors } from '../../styles/colors';

const Style = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 15vh;
    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
    }
`
const CardStyle = styled.div`
    width: 25%;
    height: 443px;
    border: 1px solid ${ colors.neutral30 };
    @media (max-width: 1500px) {
        height: 350px;
    }
    @media (max-width: 1100px) {
        height: 280px;
    }
    @media (max-width: 850px) {
        width: 80%;
        height: 280px;
        &:nth-of-type(2), :nth-of-type(3), :nth-of-type(4) {
            display: none;
        }
    }
    .logo {
        height: 80%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    a {
        text-decoration: none;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 32px;
        color: ${ colors.neutral60 };
    }
    .link__cnt {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20%;
    }
`
const imgstyle = {
    width: "60%",
    height: "40%",
}
const Card = ({ item }) => {
    return (
        <CardStyle>
            <div className="logo">
                <Img fluid={ item.image.src } imgStyle={ { objectFit: 'contain' } } style={ imgstyle } alt={ item.image.alt } />
            </div>
            <div className="link__cnt">
                <a href={ `http://www.${ item.name }` }>{ item.name } &#8599;</a>
            </div>
        </CardStyle>
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
    const cardData = [
        {
            image: {
                src: data.allFile.nodes[0].childImageSharp.fluid,
                alt: "Systemeg.net logo"
            },
            name: "Systemeg.net"
        },
        {
            image: {
                src: data.allFile.nodes[1].childImageSharp.fluid,
                alt: "Chillnchips.com logo"
            },
            name: "Chillnchips.com"
        },
        {
            image: {
                src: data.allFile.nodes[2].childImageSharp.fluid,
                alt: "Avalon.com logo"
            },
            name: "Avalon.com"
        },
        {
            image: {
                src: data.allFile.nodes[3].childImageSharp.fluid,
                alt: "Tajm.com logo"
            },
            name: "Tajm.com"
        }
    ]
    return (
        <Style>
            { cardData.map((item, index) => <Card item={ item } key={ index } />) }
        </Style>
    )
}

export default Partners