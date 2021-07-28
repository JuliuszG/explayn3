import React from "react"
import Avallon from "../../images/partners/avallon.svg"
import PG from "../../images/partners/pg.svg"
import Redbull from "../../images/partners/redbull.svg"
import Tajm from "../../images/partners/tajm.svg"
import { PartnersWrapper, CardWrapper, CardLogo, CardLink } from "../styled"

const Card = ({ item }) => {
  return (
    <CardWrapper>
      <CardLogo>
        <img src={item.image.src} alt={item.image.alt} />
      </CardLogo>
      <CardLink>
        <a href={`http://www.${item.name}`}>
          {item.name} <span className="arrow">&#8599;</span>
        </a>
      </CardLink>
    </CardWrapper>
  )
}

const Partners = () => {
  const cardData = [
    {
      image: {
        src: PG,
        alt: "P&G",
      },
      name: "pg.com",
    },
    {
      image: {
        src: Redbull,
        alt: "redbull.com logo",
      },
      name: "redbull.com",
    },
    {
      image: {
        src: Avallon,
        alt: "Avalon.com logo",
      },
      name: "avallon.pl",
    },
    {
      image: {
        src: Tajm,
        alt: "Tajm.com logo",
      },
      name: "tajm.pl",
    },
  ]
  return (
    <PartnersWrapper>
      {cardData.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </PartnersWrapper>
  )
}

export default Partners
