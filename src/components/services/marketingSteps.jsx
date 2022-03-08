import React from 'react';
import Icon from './stepIcon';
import { MarketingStepsWrapper } from '../styled';
import { useIntl } from 'gatsby-plugin-intl';

const MarketingSteps = ({ arr }) => {
  return (
    <MarketingStepsWrapper>
      <div className="header">
        <h2>{useIntl().formatMessage({ id: "marketing.marketing-steps.h2" })}</h2>
        <p>{useIntl().formatMessage({ id: "marketing.marketing-steps.p" })}</p>
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
    </MarketingStepsWrapper>
  );
};

export default MarketingSteps;
