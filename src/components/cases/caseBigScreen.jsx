import React from 'react';

import { BigScreenWrapper, BigScreenImage } from '../styled';
const CaseBigScreen = ({ src }) => {
  return (
    <BigScreenWrapper>
      <BigScreenImage fluid={src} alt="case Screen" />
    </BigScreenWrapper>
  );
};

export default CaseBigScreen;
