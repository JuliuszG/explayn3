import React, { useState, useEffect } from 'react';
import More from '../../images/landing/more.svg';
import { Link as ScLink } from 'react-scroll';
import { Landing2Wrapper } from '../styled';
import Blue from '../../images/landingPL/blue.svg';
import White from '../../images/landingPL/white.svg';


const LandingPl = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100)
    })
  }, [window.scrollY])

  return (
    <Landing2Wrapper className="pl">
      <div className="cnt cnt-pl">
      <button className={scroll ? "scrollButton" : ''} onClick={() => {
            document.getElementById('consultation').scrollIntoView({
              behavior: 'smooth'
            })
          }}>Umów się na bezpłatną konsultację</button>
        <div className="decoration decoration-pl--left">
        </div>
        <div className="content--pl">
          <div className="content--wrapper">
            <img src={White} alt="decoration" className="white-image"/>
            <div className="text--wrapper">
              <h1 className="title--pl">Reklama w internecie<br />jest <span className="blue">kluczowa</span> do osiągnięcia <br /><span className="blue">sukcesu.</span></h1>
              <p>Zastanawiasz się, jak zwielokrotnić wyniki swojej sprzedaży dzięki płatnej reklamie w internecie? Budujemy świadomość, zaangażowanie i pozyskujemy dla Ciebie nowych klientów.</p>
            </div>
          <img src={Blue} alt="decoration" className="blue--img"/>
          </div>
        </div>
      </div>
      <ScLink className="scroll scroll-pl" to={'benefits'} smooth duration={500}>
        <div className="content content-pl">
          <div className="title">zobacz więcej</div>
          <img src={More} alt="scroll down" />
        </div>
      </ScLink>
    </Landing2Wrapper>
  );
};

export default LandingPl;