import React from 'react';
import Icon from './stepIcon';
import { MarketingStepsWrapper } from '../styled';

const MarketingSteps = ({ arr }) => {
  return (
    <MarketingStepsWrapper>
      <div className="header">
        <h2>Simple and effective process</h2>
        <p>
          A website is often the first and most important touchpoint between a
          customer and a brand. It is not just a URL, it is a key aspect of your
          business and marketing strategy.
        </p>
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
