import React from 'react';
import { CaseScreenWrapper, CaseScreenImage } from '../styled';

const CaseScreen = ({ src }) => (
  <CaseScreenWrapper>
    <CaseScreenImage fluid={src} alt="project screen" />
  </CaseScreenWrapper>
);

export default CaseScreen;
