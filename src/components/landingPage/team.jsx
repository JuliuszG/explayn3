import React from 'react';
import { AnimatedHeader, AnimatedParagraph } from '../util/animations';
import { useInView } from 'react-intersection-observer';
import { TeamWrapper, TeamDescription } from '../styled';

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <TeamWrapper>
      <TeamDescription ref={ref}>
        <AnimatedHeader inView={inView}>
          Understanding the individual needs of the clients is the key to our
          work.
        </AnimatedHeader>
        <AnimatedParagraph inView={inView}>
          We research, we explain, we implement. Our strategies are highly
          curated to the challenges. We go beyond the standard agency model and
          offer comprehensive consulting to maximize your profit.
        </AnimatedParagraph>
      </TeamDescription>
    </TeamWrapper>
  );
};

export default Team;
