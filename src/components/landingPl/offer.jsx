import React from 'react';
import {
    BenefitsWrapper,
    BenefitCardSocial
  } from './styled';
  
import {
    offer
} from './data';

const Card = ({ item }) => {
    return (
      <BenefitCardSocial>
          <div className="card">
                <div className="image">
                    <img src={item.image[0].src} alt={item.image[0].alt} />
                </div>
                <p className="title">{item.name}</p>
            </div>
            <p className="text">{item.text}</p>
      </BenefitCardSocial>
    );
  };

const Offer = () => {
  return (
      <BenefitsWrapper id="offers">
          <h2>Co oferujemy?</h2>
          <div className="benefit-wrapper">
            { offer.map((benefit, index) => (
                    <Card item={benefit} key={`${benefit}-${index}`}/>
            ))
            }
          </div>
      </BenefitsWrapper>
  );
};

export default Offer;