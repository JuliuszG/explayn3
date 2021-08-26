import React from 'react';
import Play from '../../images/landing/play.svg';
import More from '../../images/landing/more.svg';
import DLeft from '../../images/landing/landingDotsLeft.svg';
import DRT from '../../images/landing/ldot-right-top.svg';
import DRB from '../../images/landing/ldot-right-bot.svg';
import DTL from '../../images/landing/ldot-top-left.svg';
import DTR from '../../images/landing/ldot-top-right.svg';
import { Link as ScLink } from 'react-scroll';
import { Landing2Wrapper } from '../styled';

const Landing2 = () => {
  return (
    <Landing2Wrapper>
      <div className="decoration decoration-left">
        <img src={DLeft} alt="decoration" />
      </div>
      <div className="decoration decoration-right-top">
        <img src={DRT} alt="decoration" />
      </div>
      <div className="decoration decoration-right-bot">
        <img src={DRB} alt="decoration" />
      </div>
      <div className="decoration decoration-top-left">
        <img src={DTL} alt="decoration" />
      </div>
      <div className="decoration decoration-top-right">
        <img src={DTR} alt="decoration" />
      </div>
      <div className="cnt">
        <div className="content">
          <div className="play">
            <img src={Play} alt="play" />
          </div>
          <h1>
            <span className="white">New</span> ways to{' '}
            <span className="blue">develop </span>
            <span className="white second">your</span>{' '}
            <span className="blue">brand.</span>
          </h1>
          <p>
            A full service web design and digital marketing agency powered by
            growth solutions.
          </p>
        </div>
      </div>
      <ScLink className="scroll" to={'aboutUs'} smooth duration={500}>
        <div className="content">
          <div className="title">learn more</div>
          <img src={More} alt="scroll down" />
        </div>
      </ScLink>
    </Landing2Wrapper>
  );
};

export default Landing2;
