import React from 'react';
import { CaseDescriptionWrapper, CaseDescriptionDescription } from '../styled';

const CaseDescription = ({ title, paragraphs }) => {
  return (
    <CaseDescriptionWrapper>
      <h2>{title}</h2>
      <CaseDescriptionDescription
        dangerouslySetInnerHTML={{ __html: paragraphs }}
      ></CaseDescriptionDescription>
    </CaseDescriptionWrapper>
  );
};

export default CaseDescription;
