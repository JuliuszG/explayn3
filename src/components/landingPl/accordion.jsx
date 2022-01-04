import React from 'react';
import AccordionElement from './accordion-element';
import { faq } from './data';
import {
    AccordionWrapper
  } from './styled';

const Accordion = () => {
    return (
        <AccordionWrapper>
            {faq.map((element) => (
                <AccordionElement element={element}/>
            ))
            }
        </AccordionWrapper>
    );
};

export default Accordion;