import React from 'react';
import {
  BenefitsWrapper,
  BenefitCard
} from './styled';
import {
  benefits
} from './data';

const Card = ({ item }) => {
  return (
    <BenefitCard>
      <div className="card">
        <div className="image">
          <img src={item.image[0].src} alt={item.image[0].alt} onMouseOver={e => e.currentTarget.src = item.image[0].srcHover} onMouseOut={e => e.currentTarget.src = item.image[0].src} />
        </div>
        <p className="title">{item.name}</p>
      </div>
      <p className="text">{item.text}</p>
    </BenefitCard>
  );
};

const Benefit = () => {
  return (
    <BenefitsWrapper id="benefits">
      <h2>Dlaczego Twój biznes potrzebuje <br />reklam w internecie?</h2>
      <div className="benefit-wrapper">
        {benefits.map((benefit, index) => (
          <Card item={benefit} key={`${benefit}-${index}`} />
        ))
        }
      </div>
    </BenefitsWrapper>
  );
};

export default Benefit;