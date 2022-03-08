import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  AnimatedHeader,
  AnimatedParagraph,
  AnimatedLink,
} from '../util/animations';

import { CaseDataWrapper, CaseDataLeft, CaseDataRight } from '../styled';
import { useIntl } from 'gatsby-plugin-intl';

const CaseData = ({
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
            {useIntl().formatMessage({ id: "torbasmaku.link" })}
          </AnimatedLink>
        )}
      </CaseDataLeft>
      <CaseDataRight>
        <li>
          <span className="field-name">{useIntl().formatMessage({ id: "case-data.country" })}</span>
          {country}
        </li>
        <li>
          <span className="field-name">{useIntl().formatMessage({ id: "case-data.client" })}</span>
          {client}
        </li>
        <li>
          <span className="field-name">{useIntl().formatMessage({ id: "case-data.industry" })}</span>
          {field}
        </li>
        <li>
          <span className="field-name">{useIntl().formatMessage({ id: "case-data.scope" })}</span>
          {services}
        </li>
      </CaseDataRight>
    </CaseDataWrapper>
  );
};

export default CaseData;
