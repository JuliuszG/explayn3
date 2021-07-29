import React from "react"
import { useInView } from "react-intersection-observer"
import {
  AnimatedHeader,
  AnimatedParagraph,
  AnimatedLink,
} from "../util/animations"

import { CaseDataWrapper, CaseDataLeft, CaseDataRight } from "../styled"

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
  })
  return (
    <CaseDataWrapper>
      <CaseDataLeft ref={ref}>
        <AnimatedHeader inView={inView}>{title}</AnimatedHeader>
        <AnimatedParagraph inView={inView}>{paragraph}</AnimatedParagraph>
        {link && (
          <AnimatedLink inView={inView} url={link}>
            Zobacz stronę online
          </AnimatedLink>
        )}
      </CaseDataLeft>
      <CaseDataRight>
        <li>
          <span className="field-name">Country</span>
          {country}
        </li>
        <li>
          <span className="field-name">Client</span>
          {client}
        </li>
        <li>
          <span className="field-name">Industry</span>
          {field}
        </li>
        <li>
          <span className="field-name">Scope of work</span>
          {services}
        </li>
      </CaseDataRight>
    </CaseDataWrapper>
  )
}

export default CaseData
