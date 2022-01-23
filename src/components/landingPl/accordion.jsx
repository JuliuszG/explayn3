import React from 'react';
import AccordionElement from './accordion-element';
import FaqQuestion from '../../images/landingPL/faq_bg_question.svg';
import FaqPlay from '../../images/landingPL/faq_bg_play.svg';

import { faq } from './data';
import {
  AccordionWrapper,
  AccordionTitle
} from './styled';

const Accordion = () => {
  return (
    <>
      <AccordionTitle>Najczęściej zadawane pytania</AccordionTitle>
      <AccordionWrapper>
        {/* <img src={Faq}/> */}
        {faq.map((element) => (
          <AccordionElement element={element} />
        ))
        }
        <img src={FaqPlay} className="fplay" />
        <img src={FaqQuestion} className="fup" />
        <img src={FaqQuestion} className="fright" />
        <img src={FaqQuestion} className="fleft" />

      </AccordionWrapper>
    </>
  );
};

export default Accordion;