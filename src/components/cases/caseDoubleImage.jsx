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
        <CaseDoubleImageImage fluid={arr.firstImage.localFile.childImageSharp.fluid} alt="screen" />
      </DoubleImageWrapper>
      <DoubleImageWrapper>
        <CaseDoubleImageImage fluid={arr.secondImage.localFile.childImageSharp.fluid} alt="screen" />
      </DoubleImageWrapper>
    </CaseDoubleImageWrapper>
  );
};

export default CaseDoubleImage;
