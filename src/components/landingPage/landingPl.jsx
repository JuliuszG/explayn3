import React from 'react';
import More from '../../images/landing/more.svg';
import { Link as ScLink } from 'react-scroll';
import { Landing2Wrapper } from '../styled';
import landingCircle from '../../images/landing/landing-multi-circle.svg';

const LandingPl = () => {
  return (
    <Landing2Wrapper>
      <div className="cnt">
        <div className="decoration decoration-pl--top">
            <img src={landingCircle} alt="decoration" />
        </div>
        <div className="decoration decoration-pl--left">
            <img src={landingCircle} alt="decoration" />
        </div>
        <div className="content--pl">
          <h1 className="title--pl">Reklama w internecie<br/>jest <span className="blue">kluczowa</span> do osiągnięcia <br/><span className="blue">sukcesu.</span></h1>
          <h2>W Explayn stawiamy na <span className="blue">rozwój Twojego biznesu.</span></h2>
          <p>Zastanawiasz się, jak zwielokrotnić wyniki swojej sprzedaży dzięki płatnej reklamie w internecie? Budujemy świadomość, zaangażowanie i pozyskujemy dla Ciebie nowych klientów.</p>
          <button>Umów się na bezpłatną konsultację</button>
        </div>
      </div>
      <ScLink className="scroll" to={'aboutUs'} smooth duration={500}>
        <div className="content">
          <div className="title">zobacz więcej</div>
          <img src={More} alt="scroll down" />
        </div>
      </ScLink>
    </Landing2Wrapper>
  );
};

export default LandingPl;