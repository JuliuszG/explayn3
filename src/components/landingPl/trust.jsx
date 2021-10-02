import React from 'react';
import { trust } from './data';
import { PartnersWrapper, CardWrapper, CardLogo, CardLink } from '../styled';
import { TrustElement } from './styled';

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

const TrustComponent = () => {
  return (
    <TrustElement>
    <h2>Zaufali nam</h2>
    <PartnersWrapper>
      {trust.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </PartnersWrapper>
    </TrustElement>
  );
};

export default TrustComponent;