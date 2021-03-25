import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/colors';
import Avallon from '../../images/partners/avallon.svg'
import PG from '../../images/partners/pg.svg'
import Redbull from '../../images/partners/redbull.svg'
import Tajm from '../../images/partners/tajm.svg'

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
        img {
            width: 60%;
            height: 40%;
        }
    }
    a {
        text-decoration: none;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 32px;
        color: ${ colors.neutral60 };
        .arrow {
            @media (max-width: 968px) {
                display: none;
            }
        }
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
                <img src={ item.image.src } alt={ item.image.alt }/>
            </div>
            <div className="link__cnt">
                <a href={ `http://www.${ item.name }` }>{ item.name } <span className="arrow">&#8599;</span></a>
            </div>
        </CardStyle>
    )
}

const Partners = () => {
    const cardData = [
        {
            image: {
                src: PG,
                alt: "P&G"
            },
            name: "pg.com"
        },
        {
            image: {
                src: Redbull,
                alt: "redbull.com logo"
            },
            name: "redbull.com"
        },
        {
            image: {
                src: Avallon,
                alt: "Avalon.com logo"
            },
            name: "avalon.com"
        },
        {
            image: {
                src: Tajm,
                alt: "Tajm.com logo"
            },
            name: "tajm.com"
        }
    ]
    return (
        <Style>
            { cardData.map((item, index) => <Card item={ item } key={ index } />) }
        </Style>
    )
}

export default Partners