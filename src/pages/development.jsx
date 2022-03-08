import React from 'react';
import Layout from '../components/layout';
import Desktop from '../components/navigation/desktop';
import Mobile from '../components/navigation/mobile';
import Footer from '../components/footer';
import SEO from '../components/seo';
import { useMediaQuery } from 'react-responsive';
import HeaderImg from '../images/development/header/landing.svg';
import Steps from '../components/services/steps';
import Discovery from '../images/development/process/discovery.svg';
import Planning from '../images/development/process/planning.svg';
import Design from '../images/development/process/design.svg';
import DevelopmentStepIcon from '../images/development/process/development_icon.svg';
import Launch from '../images/development/process/lauch.svg';
import Next from '../images/development/techniologie/next.svg';
import ReactJS from '../images/development/techniologie/react.svg';
import Graph from '../images/development/techniologie/graph.svg';
import Node from '../images/development/techniologie/node.svg';
import TypeScript from '../images/development/techniologie/ts.svg';
import Ruby from '../images/development/techniologie/ruby.svg';
import JS from '../images/development/techniologie/js.svg';
import Three from '../images/development/techniologie/three.svg';
import Drupal from '../images/development/techniologie/drupal.svg';
import Ghost from '../images/development/techniologie/ghost.svg';
import Dato from '../images/development/techniologie/dato.svg';
import WP from '../images/development/techniologie/wp.svg';
import Responsive from '../images/development/korzysci/responsive.svg';
import Functional from '../images/development/korzysci/setings.svg';
import Scalable from '../images/development/korzysci/scalable.svg';
import Secure from '../images/development/korzysci/secure.svg';
import More from '../images/landing/more.svg';
import { useInView } from 'react-intersection-observer';
import {
  AnimatedHeader,
  AnimatedParagraph,
} from '../components/util/animations';
import { H2Variant, PVariant } from '../components/landingPage/landing';
import CaseStudy from '../components/landingPage/caseStudy';
import {
  BenefitsContentWrapper,
  ServiceWrapper,
  ServicesWrapperSection,
  ServicesSection,
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
  BenefitsSection,
  BenefitsContent,
  TechnologySection,
} from '../components/styled';
import { useIntl } from 'gatsby-plugin-intl';

const Development = () => {
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
                Web & Mobile Development
              </ServicesMainHeader>
              <ServicesMainDescription
                variants={PVariant}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                {useIntl().formatMessage({ id: "development.services-main-description" })}
              </ServicesMainDescription>
            </ServicesContent>
            <ServicesImgContainer>
              <img src={HeaderImg} alt="dev icon" />
            </ServicesImgContainer>
            <ServicesScrollLink to={'services-section'} smooth duration={500}>
              <div className="content">
                <div className="title">{useIntl().formatMessage({ id: "development.more" })}</div>
                <img src={More} alt="scroll down" />
              </div>
            </ServicesScrollLink>
          </ServicesTopSection>
          <ServicesWrapperSection>
            <ServicesSection id="services-section">
              <DemandLeftSection ref={ref2}>
                <AnimatedHeader inView={inView2}>
                  {useIntl().formatMessage({ id: "development.demand-left-section.header" })}
                </AnimatedHeader>
                <AnimatedParagraph inView={inView2}>
                  {useIntl().formatMessage({ id: "development.demand-left-section.paragraph" })}
                </AnimatedParagraph>
              </DemandLeftSection>
              <DemandList>
                <li>
                  <span>01.</span>
                  {useIntl().formatMessage({ id: "development.demand-list.01" })}
                </li>
                <li>
                  <span>02.</span>
                  {useIntl().formatMessage({ id: "development.demand-list.02" })}
                </li>
                <li>
                  <span>03.</span>
                  {useIntl().formatMessage({ id: "development.demand-list.03" })}
                </li>
                <li>
                  <span>04.</span>
                  {useIntl().formatMessage({ id: "development.demand-list.04" })}
                </li>
              </DemandList>
            </ServicesSection>
          </ServicesWrapperSection>
          <SentenceSection>
            <SentenceSectionContent section={'development'} ref={ref3}>
              <AnimatedHeader inView={inView3}>
                {useIntl().formatMessage({ id: "development.sentence-section-content.header1" })}
                <span>{useIntl().formatMessage({ id: "development.sentence-section-content.header-span1" })}</span>
                {useIntl().formatMessage({ id: "development.sentence-section-content.header2" })}<span>{useIntl().formatMessage({ id: "development.sentence-section-content.header-span2" })}</span>
                {useIntl().formatMessage({ id: "development.sentence-section-content.header3" })}
              </AnimatedHeader>
              <div className="decoration"></div>
              <div className="text-cnt">
                <AnimatedParagraph inView={inView3}>
                  {useIntl().formatMessage({ id: "development.sentence-section-content.paragraph1" })}
                </AnimatedParagraph>
                <AnimatedParagraph inView={inView3}>
                  {useIntl().formatMessage({ id: "development.sentence-section-content.paragraph2" })}
                </AnimatedParagraph>
              </div>
            </SentenceSectionContent>
          </SentenceSection>
          <Steps
            arr={[
              { img: Discovery, text: useIntl().formatMessage({ id: "development.steps.arr.discovery" }) },
              { img: Planning, text: useIntl().formatMessage({ id: "development.steps.arr.planning" }) },
              { img: Design, text: useIntl().formatMessage({ id: "development.steps.arr.design" }) },
              { img: DevelopmentStepIcon, text: useIntl().formatMessage({ id: "development.steps.arr.development" }) },
              { img: Launch, text: useIntl().formatMessage({ id: "development.steps.arr.launch" }) },
            ]}
          />
          <BenefitsContentWrapper>
            <TechnologySection>
              <div>
                <div className="info" ref={ref4}>
                  <AnimatedHeader inView={inView4}>
                    {useIntl().formatMessage({ id: "development.technology-section.header" })}
                  </AnimatedHeader>
                  <AnimatedParagraph inView={inView4}>
                    {useIntl().formatMessage({ id: "development.technology-section.paragraph" })}
                  </AnimatedParagraph>
                </div>
                <div className="icons">
                  <div className="cnt">
                    <div className="icon-cnt">
                      <div className="icon">
                        <img src={Next} alt="next js icon" />
                      </div>
                      <h4>next.js</h4>
                    </div>
                    <div className="icon-cnt">
                      <div className="icon">
                        <img src={ReactJS} alt="react icon" />
                      </div>
                      <h4>
                        <div>react &</div>
                        <div>react native</div>
                      </h4>
                    </div>
                    <div className="icon-cnt">
                      <div className="icon">
                        <img src={Graph} alt="graphql icon" />
                      </div>
                      <h4>graphql</h4>
                    </div>
                    <div className="icon-cnt">
                      <div className="icon">
                        <img src={Node} alt="node.js icon" />
                      </div>
                      <h4>node.js</h4>
                    </div>
                    <div className="icon-cnt">
                      <div className="icon">
                        <img src={TypeScript} alt="typescript icon" />
                      </div>
                      <h4>typescript</h4>
                    </div>
                    <div className="icon-cnt">
                      <div className="icon">
                        <img src={Ruby} alt="ruby icon" />
                      </div>
                      <h4>ruby</h4>
                    </div>
                    <div className="icon-cnt">
                      <div className="icon">
                        <img src={JS} alt="javascript icon" />
                      </div>
                      <h4>javascript</h4>
                    </div>
                    <div className="icon-cnt">
                      <div className="icon">
                        <img src={Three} alt="three js icon" />
                      </div>
                      <h4>three.js</h4>
                    </div>
                    <div className="icon-cnt">
                      <div className="icon">
                        <img src={Drupal} alt="drupal icon" />
                      </div>
                      <h4>drupal</h4>
                    </div>
                    <div className="icon-cnt">
                      <div className="icon">
                        <img src={Ghost} alt="ghost icon" />
                      </div>
                      <h4>ghost</h4>
                    </div>
                    <div className="icon-cnt">
                      <div className="icon">
                        <img src={Dato} alt="dato cmsicon" />
                      </div>
                      <h4>datoCMS</h4>
                    </div>
                    <div className="icon-cnt">
                      <div className="icon">
                        <img src={WP} alt="wordpress icon" />
                      </div>
                      <h4>wordpress</h4>
                    </div>
                  </div>
                </div>
              </div>
            </TechnologySection>
          </BenefitsContentWrapper>
          <BenefitsSection light ref={ref5}>
            {isMobile ? (
              <h2>
                {useIntl().formatMessage({ id: "development.benefits-section.header" })}
              </h2>
            ) : (
              <AnimatedHeader inView={inView5}>
                {useIntl().formatMessage({ id: "development.benefits-section.header" })}
              </AnimatedHeader>
            )}
            <p></p>
            <BenefitsContent>
              <div className="item">
                <div className="item-icon res">
                  <img src={Responsive} alt="responsive icon" />
                </div>
                <div className="item-content">
                  <h4>{useIntl().formatMessage({ id: "development.benefits-content.responsive.h4" })}</h4>
                  <p>{useIntl().formatMessage({ id: "development.benefits-content.responsive.p" })}</p>
                </div>
              </div>
              <div className="item">
                <div className="item-icon fun">
                  <img src={Functional} alt="Functional icon" />
                </div>
                <div className="item-content">
                  <h4>{useIntl().formatMessage({ id: "development.benefits-content.functional.h4" })}</h4>
                  <p>{useIntl().formatMessage({ id: "development.benefits-content.functional.p" })}</p>
                </div>
              </div>
              <div className="item">
                <div className="item-icon sca">
                  <img src={Scalable} alt="Scalable icon" />
                </div>
                <div className="item-content">
                  <h4>{useIntl().formatMessage({ id: "development.benefits-content.scalable.h4" })}</h4>
                  <p>{useIntl().formatMessage({ id: "development.benefits-content.scalable.p" })}</p>
                </div>
              </div>
              <div className="item">
                <div className="item-icon sec">
                  <img src={Secure} alt="Scalable icon" />
                </div>
                <div className="item-content">
                  <h4>{useIntl().formatMessage({ id: "development.benefits-content.secure.h4" })}</h4>
                  <p>{useIntl().formatMessage({ id: "development.benefits-content.secure.p" })}</p>
                </div>
              </div>
            </BenefitsContent>
          </BenefitsSection>
        </ServiceWrapper>
        <CaseStudy triangle={false} />
        <Footer />
      </Layout>
    </>
  );
};

export default Development;
