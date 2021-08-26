import React from 'react';
import {
  CaseDoubleImageWrapper,
  DoubleImageWrapper,
  CaseDoubleImageImage,
} from '../styled';

const CaseDoubleImage = ({ arr }) => {
  return (
    <CaseDoubleImageWrapper>
      <DoubleImageWrapper>
        <CaseDoubleImageImage fluid={arr[0].fluid} alt="screen" />
      </DoubleImageWrapper>
      <DoubleImageWrapper>
        <CaseDoubleImageImage fluid={arr[1].fluid} alt="screen" />
      </DoubleImageWrapper>
    </CaseDoubleImageWrapper>
  );
};

export default CaseDoubleImage;
