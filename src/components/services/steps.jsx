import React from 'react';
import Icon from './stepIcon';
import { StepsWrapper } from '../styled';
import { useIntl } from 'gatsby-plugin-intl';

const Steps = ({ arr }) => {
  return (
    <StepsWrapper>
      <div className="header">
        <h2>{useIntl().formatMessage({ id: "development.steps.h2" })}</h2>
        <p>{useIntl().formatMessage({ id: "development.steps.p" })}</p>
      </div>
      <div className="icons">
        <div className="cnt">
          {arr.map((s, index) => {
            return (
              <>
                <Icon key={index} img={s.img} text={s.text} />
                {index !== arr.length - 1 && (
                  <div key={index} className="line"></div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </StepsWrapper>
  );
};

export default Steps;
