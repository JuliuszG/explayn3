import React from 'react';
import { cardData } from '../../lib/partners';
import { PartnersWrapper, CardWrapper, CardLogo, CardLink } from '../styled';

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
  );
};

const Partners = () => {
  return (
    <PartnersWrapper>
      {cardData.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </PartnersWrapper>
  );
};

export default Partners;
