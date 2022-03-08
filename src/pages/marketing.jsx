import React from 'react';
import Layout from '../components/layout';
import Desktop from '../components/navigation/desktop';
import Mobile from '../components/navigation/mobile';
import Footer from '../components/footer';
import SEO from '../components/seo';
import { useMediaQuery } from 'react-responsive';
import HeaderImg from '../images/ikonki marketing/Main.svg';
import MarketingSteps from '../components/services/marketingSteps';
import Discovery from '../images/ikonki marketing/process_1discovery.svg';
import Planning from '../images/ikonki marketing/process_2planning.svg';
import Design from '../images/ikonki marketing/process_3design.svg';
import DevelopmentStepIcon from '../images/ikonki marketing/launch.svg';
import Launch from '../images/ikonki marketing/linijki.svg';
import Responsive from '../images/ikonki marketing/omnichanel.svg';
import Functional from '../images/ikonki marketing/relevant.svg';
import Scalable from '../images/ikonki marketing/insightful.svg';
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
  BenefitsContentWrapper,
  ServicesWrapperSection,
  ServicesTopSection,
  ServicesScrollLink,
  ServicesContent,
  ServicesSection,
  DemandLeftSection,
  DemandList,
  ServicesMainHeader,
  ServicesMainDescription,
  ServicesImgContainer,
  SentenceSection,
  SentenceSectionContent,
  BenefitsSection,
  BenefitsContent,
} from '../components/styled';
import { useIntl } from 'gatsby-plugin-intl';

const Marketing = () => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 960px)',
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
  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref5, inView5] = useInView({
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
                Marketing
              </ServicesMainHeader>
              <ServicesMainDescription
                variants={PVariant}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                {useIntl().formatMessage({ id: "marketing.services-main-description" })}
              </ServicesMainDescription>
            </ServicesContent>
            <ServicesImgContainer>
              <img src={HeaderImg} alt="dev icon" />
            </ServicesImgContainer>
            <ServicesScrollLink to={'services-section'} smooth duration={500}>
              <div className="content">
                <div className="title">
                  {useIntl().formatMessage({ id: "marketing.more" })}
                </div>
                <img src={More} alt="scroll down" />
              </div>
            </ServicesScrollLink>
          </ServicesTopSection>
          <ServicesWrapperSection>
            <ServicesSection id="services-section">
              <DemandLeftSection ref={ref2}>
                <AnimatedHeader inView={inView2}>
                  {useIntl().formatMessage({ id: "marketing.demand-left-section.header" })}
                </AnimatedHeader>
                <AnimatedParagraph inView={inView2}>
                  {useIntl().formatMessage({ id: "marketing.demand-left-section.paragraph" })}
                </AnimatedParagraph>
              </DemandLeftSection>
              <DemandList>
                <li>
                  <span>01.</span>
                  {useIntl().formatMessage({ id: "marketing.demand-list.01" })}
                </li>
                <li>
                  <span>02.</span>
                  {useIntl().formatMessage({ id: "marketing.demand-list.02" })}
                </li>
                <li>
                  <span>03.</span>
                  {useIntl().formatMessage({ id: "marketing.demand-list.03" })}
                </li>
                <li>
                  <span>04.</span>
                  {useIntl().formatMessage({ id: "marketing.demand-list.04" })}
                </li>
              </DemandList>
            </ServicesSection>
          </ServicesWrapperSection>
          <SentenceSection>
            <SentenceSectionContent section={'marketing'} ref={ref3}>
              <AnimatedHeader inView={inView3}>
                {useIntl().formatMessage({ id: "marketing.sentence-section-content.header1" })}{' '}
                <span>
                  {useIntl().formatMessage({ id: "marketing.sentence-section-content.header-span" })}
                </span>
                {useIntl().formatMessage({ id: "marketing.sentence-section-content.header2" })}
              </AnimatedHeader>
              <div className="decoration"></div>
              <div className="text-cnt">
                <AnimatedParagraph inView={inView3}>
                  {useIntl().formatMessage({ id: "marketing.sentence-section-content.paragraph1" })}
                </AnimatedParagraph>
                <AnimatedParagraph inView={inView3}>
                  {useIntl().formatMessage({ id: "marketing.sentence-section-content.paragraph2" })}
                </AnimatedParagraph>
              </div>
            </SentenceSectionContent>
          </SentenceSection>
          <MarketingSteps
            arr={[
              { img: Discovery, text: useIntl().formatMessage({ id: "marketing.marketing-steps.arr.discovery" }) },
              { img: Planning, text: useIntl().formatMessage({ id: "marketing.marketing-steps.arr.planning" }) },
              { img: Design, text: useIntl().formatMessage({ id: "marketing.marketing-steps.arr.design" }) },
              { img: DevelopmentStepIcon, text: useIntl().formatMessage({ id: "marketing.marketing-steps.arr.development" }) },
              { img: Launch, text: useIntl().formatMessage({ id: "marketing.marketing-steps.arr.launch" }) },
            ]}
          />
          <BenefitsContentWrapper>
            <BenefitsSection ref={ref4}>
              {isMobile ? (
                <>
                  <h2>{useIntl().formatMessage({ id: "marketing.benefits-section.h2" })}</h2>
                  <p>{useIntl().formatMessage({ id: "marketing.benefits-section.p" })}</p>
                </>
              ) : (
                <>
                  <AnimatedHeader inView={inView4}>
                    {useIntl().formatMessage({ id: "marketing.benefits-section.h2" })}
                  </AnimatedHeader>
                  <AnimatedParagraph inView={inView4}>
                    {useIntl().formatMessage({ id: "marketing.benefits-section.p" })}
                  </AnimatedParagraph>
                </>
              )}
              <BenefitsContent>
                <div className="item">
                  <div className="item-icon res">
                    <img src={Responsive} alt="responsive icon" />
                  </div>
                  <div className="item-content">
                    <h4>{useIntl().formatMessage({ id: "marketing.benefits-content.omnichannel.h4" })}</h4>
                    <p>{useIntl().formatMessage({ id: "marketing.benefits-content.omnichannel.p" })}</p>
                  </div>
                </div>
                <div className="item">
                  <div className="item-icon fun">
                    <img src={Functional} alt="Functional icon" />
                  </div>
                  <div className="item-content">
                    <h4>{useIntl().formatMessage({ id: "marketing.benefits-content.relevant.h4" })}</h4>
                    <p>{useIntl().formatMessage({ id: "marketing.benefits-content.relevant.p" })}</p>
                  </div>
                </div>
                <div className="item">
                  <div className="item-icon sca">
                    <img src={Scalable} alt="Scalable icon" />
                  </div>
                  <div className="item-content">
                    <h4>{useIntl().formatMessage({ id: "marketing.benefits-content.insightful.h4" })}</h4>
                    <p>{useIntl().formatMessage({ id: "marketing.benefits-content.insightful.p" })}</p>
                  </div>
                </div>
              </BenefitsContent>
            </BenefitsSection>
          </BenefitsContentWrapper>
        </ServiceWrapper>
        <CaseStudy triangle={false} />
        <Footer />
      </Layout>
    </>);
};

export default Marketing;
