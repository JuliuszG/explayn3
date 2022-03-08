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
import { useIntl } from 'gatsby-plugin-intl';

const Landing2 = () => {
  const intl = useIntl();
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
            <span className="white">
              {intl.formatMessage({ id: "landing.h1.new" })}
            </span>
            {intl.formatMessage({ id: "landing.h1.ways-to" })}{' '}
            <span className="blue">
              {intl.formatMessage({ id: "landing.h1.develop" })}
            </span>
            <span className="white second">
              {intl.formatMessage({ id: "landing.h1.your" })}
            </span>{' '}
            <span className="blue">
              {intl.formatMessage({ id: "landing.h1.brand" })}
            </span>
          </h1>
          <p>
            {intl.formatMessage({ id: "landing.p" })}
          </p>
        </div>
      </div>
      <ScLink className="scroll" to={'aboutUs'} smooth duration={500}>
        <div className="content">
          <div className="title">
            {intl.formatMessage({ id: "landing.more" })}
          </div>
          <img src={More} alt="scroll down" />
        </div>
      </ScLink>
    </Landing2Wrapper>
  );
};

export default Landing2;
