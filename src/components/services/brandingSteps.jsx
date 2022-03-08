import React from 'react';
import Icon from './stepIcon';
import { BrandingStepsWrapper } from '../styled';
import { useIntl } from 'gatsby-plugin-intl';

const BrandingSteps = ({ arr }) => {
  return (
    <BrandingStepsWrapper>
      <div className="header">
        <h2>{useIntl().formatMessage({ id: "branding.steps.h2" })}</h2>
        <p>{useIntl().formatMessage({ id: "branding.steps.p" })}</p>
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
    </BrandingStepsWrapper>
  );
};

export default BrandingSteps;
