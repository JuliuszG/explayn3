import React from 'react';
import {
  BenefitsWrapper,
  BenefitCard
} from './styled';
import {
  benefits
} from './data';
import Benefits1 from '../../images/landingPL/benefits1.svg';
import Benefits2 from '../../images/landingPL/benefits2.svg';
import Benefits3 from '../../images/landingPL/benefits3.svg';



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
      <h2 className="benefits-title">Co zyskujesz?</h2>
      <p>Wiesz już, że reklama jest potrzebna do rozwoju Twojego biznesu.<br />Pytanie, co da Ci współpraca z nami? </p>
      <p>Pozwól, że wyjaśnimy. </p>
      <div className="benefits-additional">
        <div className="benefit-additional">
          <img className="img" src={Benefits1} />
          <p className="title">Zaufany partner rozwoju</p>
          <p className="text">Współpracując z Explayn, współpracujesz z grupą specjalistów, którzy skupiają się na generowaniu zysku dla Twojego biznesu. Nasz doświadczony zespół, czuwa nad tym, aby każda Twoja złotówka została wydana rozsądnie.</p>
        </div>
        <div className="benefit-additional">
          <img className="img" src={Benefits2} />
          <p className="title">Dedykowany opiekun</p>
          <p className="text">Współpracując z nami jesteś w stałym kontakcie z agencyjnym opiekunem, który będzie czuwał nad Twoim projektem. Pozwoli na jak najszybsze dostosowanie działań do potrzeb Twojego biznesu.</p>
        </div>
        <div className="benefit-additional"> 
          <img className="img" src={Benefits3} />
          <p className="title">Kompleksowe doradztwo</p>
          <p className="text">Aby Twój biznes mógł generować sprzedaż, potrzebujesz przemyślanych i świadomych rozwiązań. Wybieramy dla Ciebie najskuteczniejsze działania dopasowane do potrzeb Twojego biznesu.</p>
        </div>
      </div>

    </BenefitsWrapper>
  );
};

export default Benefit;