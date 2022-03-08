import React from 'react';
import Layout from '../components/layout';
import Desktop from '../components/navigation/desktop';
import Mobile from '../components/navigation/mobile';
import Footer from '../components/footer';
import SEO from '../components/seo';
import { useMediaQuery } from 'react-responsive';
import HeaderImg from '../images/visualicon.png';
import More from '../images/landing/more.svg';
import { useInView } from 'react-intersection-observer';
import {
  AnimatedHeader,
  AnimatedParagraph,
} from '../components/util/animations';
import { H2Variant, PVariant } from '../components/landingPage/landing';
import CaseStudy from '../components/landingPage/caseStudy';
import {
  ServiceWrapper,
  ServicesSection,
  ServicesWrapperSection,
  ServicesTopSection,
  ServicesScrollLink,
  ServicesContent,
  DemandLeftSection,
  DemandList,
  ServicesMainHeader,
  ServicesMainDescription,
  ServicesImgContainer,
  SentenceSection,
  SentenceSectionContent,
} from '../components/styled';
import { useIntl } from 'gatsby-plugin-intl';

const Branding = () => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 950px)',
  });
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <>
      <SEO title="Explayn Digital Agency" />
      <Layout>
        {isMobile ? <Mobile /> : <Desktop mainPage={true} />}
        <ServiceWrapper>
          <ServicesTopSection>
            <ServicesContent ref={ref}>
              <ServicesMainHeader
                variants={H2Variant}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                Visual
              </ServicesMainHeader>
              <ServicesMainDescription
                variants={PVariant}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                {useIntl().formatMessage({ id: "visual.services-main-description" })}
              </ServicesMainDescription>
            </ServicesContent>
            <ServicesImgContainer>
              <img src={HeaderImg} alt="dev icon" />
            </ServicesImgContainer>
            <ServicesScrollLink to={'services-section'} smooth duration={500}>
              <div className="content">
                <div className="title">{useIntl().formatMessage({ id: "visual.more" })}</div>
                <img src={More} alt="scroll down" />
              </div>
            </ServicesScrollLink>
          </ServicesTopSection>
          <ServicesWrapperSection>
            <ServicesSection id="services-section">
              <DemandLeftSection ref={ref2}>
                <AnimatedHeader inView={inView2}>
                  {useIntl().formatMessage({ id: "visual.demand-left-section.header" })}
                </AnimatedHeader>
                <AnimatedParagraph inView={inView2}>
                  {useIntl().formatMessage({ id: "visual.demand-left-section.paragraph" })}
                </AnimatedParagraph>
              </DemandLeftSection>
              <DemandList>
                <li>
                  <span>01.</span>
                  {useIntl().formatMessage({ id: "visual.demand-list.01" })}
                </li>
                <li>
                  <span>02.</span>
                  {useIntl().formatMessage({ id: "visual.demand-list.02" })}
                </li>
                <li>
                  <span>03.</span>
                  {useIntl().formatMessage({ id: "visual.demand-list.03" })}
                </li>
                <li>
                  <span>04.</span>
                  {useIntl().formatMessage({ id: "visual.demand-list.04" })}
                </li>
              </DemandList>
            </ServicesSection>
          </ServicesWrapperSection>

          <SentenceSection>
            <SentenceSectionContent ref={ref3}>
              <AnimatedHeader inView={inView3}>
                {useIntl().formatMessage({ id: "visual.sentence-section-content.header" })}
              </AnimatedHeader>
            </SentenceSectionContent>
          </SentenceSection>
        </ServiceWrapper>
        <CaseStudy triangle={false} />
        <Footer />
      </Layout>
    </>
  );
};

export default Branding;
