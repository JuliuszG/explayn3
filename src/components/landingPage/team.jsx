import React from 'react';
import { AnimatedHeader, AnimatedParagraph } from '../util/animations';
import { useInView } from 'react-intersection-observer';
import { TeamWrapper, TeamDescription } from '../styled';
import { useIntl } from 'gatsby-plugin-intl';

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <TeamWrapper>
      <TeamDescription ref={ref}>
        <AnimatedHeader inView={inView}>
          {useIntl().formatMessage({ id: "team.paragraph1"})}
        </AnimatedHeader>
        <AnimatedParagraph inView={inView}>
          {useIntl().formatMessage({ id: "team.paragraph2"})}
        </AnimatedParagraph>
      </TeamDescription>
    </TeamWrapper>
  );
};

export default Team;
