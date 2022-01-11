import React from 'react';
import Typewriter from 'typewriter-effect';

import {
  BenefitsWrapper,
  BenefitCardSocial
} from './styled';

import {
  offer
} from './data';
import Offer1 from '../../images/landingPL/offer1.svg';
import GrayArrow from '../../images/landingPL/grayArrow.svg';
import Types from '../../images/landingPL/types.svg';



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
      <div className="offers-wrapper">
        <div className="offer-wrapper">
          <h2>Dla kogo?</h2>
          <p>Zobacz z jakimi problemami mierzą się nasi klienci.<br />Elastycznie dopasowujemy rozwiązania do różnych problemów. </p>
        </div>
        <img src={Offer1} />
      </div>
      <div className="types-wrapper">
        <img src={Types} />
        <Typewriter
          options={{
            strings: ['<span style="color: white;font-size:44px;font-family:Poppins;font-weight:600;line-height:138%;max-width:700px;height:300px;text-align:center;position:relative">Jesteś zadowolony z działania Twojego biznesu, ale chcesz się rozwijać?</span>'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <h2>Co oferujemy?</h2>
      <div className="benefit-wrapper">
        {offer.map((benefit, index) => (
          <Card item={benefit} key={`${benefit}-${index}`} />
        ))
        }
      </div>
      <div className="button_wrapper">
        <img className="arrow" src={GrayArrow} />
        <h2>Nie wiesz, która platforma będzie dla Ciebie najlepsza?</h2>
        <p>Podczas bezpłatnej konsultacji, dobierzemy najlepsze kanały reklamowe dostosowane do Twoich celów biznesowych.</p>
        <button onClick={() => {
            document.getElementById('consultation').scrollIntoView({
              behavior: 'smooth'
            })
          }}>Umów się na bezpłatną konsultację</button>
      </div>
    </BenefitsWrapper>
  );
};

export default Offer;