import React from 'react';
import AccordionElement from './accordion-element';
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
                {faq.map((element) => (
                    <AccordionElement element={element} />
                ))
                }
            </AccordionWrapper>
        </>
    );
};

export default Accordion;