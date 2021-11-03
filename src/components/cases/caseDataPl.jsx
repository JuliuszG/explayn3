import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  AnimatedHeader,
  AnimatedParagraph,
  AnimatedLink,
} from '../util/animations';

import { CaseDataWrapper, CaseDataLeft, CaseDataRight } from '../styled';

const CaseDataPl = ({
  title,
  paragraph,
  link,
  country,
  client,
  field,
  services,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <CaseDataWrapper>
      <CaseDataLeft ref={ref}>
        <AnimatedHeader inView={inView}>{title}</AnimatedHeader>
        <AnimatedParagraph inView={inView}>{paragraph}</AnimatedParagraph>
        {link && (
          <AnimatedLink inView={inView} url={link}>
            Zobacz stronę
          </AnimatedLink>
        )}
      </CaseDataLeft>
      <CaseDataRight>
        <li>
          <span className="field-name">Kraj</span>
          {country}
        </li>
        <li>
          <span className="field-name">Klient</span>
          {client}
        </li>
        <li>
          <span className="field-name">Branża</span>
          {field}
        </li>
        <li>
          <span className="field-name">Zakres prac</span>
          {services}
        </li>
      </CaseDataRight>
    </CaseDataWrapper>
  );
};

export default CaseDataPl;
