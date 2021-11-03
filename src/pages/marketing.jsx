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
    <Layout>
      <SEO title="Home" />
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
              At a time when no company can afford not to have a digital
              marketing strategy, we are committed to offering 360˚ digital
              marketing services focused on delivering results.
            </ServicesMainDescription>
          </ServicesContent>
          <ServicesImgContainer>
            <img src={HeaderImg} alt="dev icon" />
          </ServicesImgContainer>
          <ServicesScrollLink to={'services-section'} smooth duration={500}>
            <div className="content">
              <div className="title">learn more</div>
              <img src={More} alt="scroll down" />
            </div>
          </ServicesScrollLink>
        </ServicesTopSection>
        <ServicesWrapperSection>
          <ServicesSection id="services-section">
            <DemandLeftSection ref={ref2}>
              <AnimatedHeader inView={inView2}>
                Marketing on demand.
              </AnimatedHeader>
              <AnimatedParagraph inView={inView2}>
                Everything begins with the recognition of the customer’s needs, a
                thorough market analysis and defining a marketing strategy, which
                will be the foundation of a consistent and multidimensional
                communication with your clients.
              </AnimatedParagraph>
            </DemandLeftSection>
            <DemandList>
              <li>
                <span>01.</span>
                Marketing strategy
              </li>
              <li>
                <span>02.</span>
                Paid Advertising
              </li>
              <li>
                <span>03.</span>
                Social Media Management
              </li>
              <li>
                <span>04.</span>
                Marketing Automation
              </li>
            </DemandList>
          </ServicesSection>
        </ServicesWrapperSection>
        <SentenceSection>
          <SentenceSectionContent section={'marketing'} ref={ref3}>
            <AnimatedHeader inView={inView3}>
              Focusing on the methods for driving{' '}
              <span>profitable customer action</span> is the key to our work.
            </AnimatedHeader>
            <div className="decoration"></div>
            <div className="text-cnt">
              <AnimatedParagraph inView={inView3}>
                Attracting customers is just the first step. We make sure you
                retain them by putting together all the methods that allow
                understanding your audience better. All our decisions are based
                on thorough research that guarantees measurable results. We test
                different solutions to choose the most beneficial ones for your
                business.
              </AnimatedParagraph>
              <AnimatedParagraph inView={inView3}>
                To provide you with the highest level of consistency, we offer a
                one-stop service. From visual identity to complex marketing
                strategy and its implementation - with us, you can count on a
                coherent result. It's a perfect solution for emerging companies
                but also those with an established position on the market.
              </AnimatedParagraph>
            </div>
          </SentenceSectionContent>
        </SentenceSection>
        <MarketingSteps
          arr={[
            { img: Discovery, text: 'Discovery' },
            { img: Planning, text: 'Planning' },
            { img: Design, text: 'Create' },
            { img: DevelopmentStepIcon, text: 'Launch' },
            { img: Launch, text: 'Measure' },
          ]}
        />
        <BenefitsContentWrapper>
          <BenefitsSection ref={ref4}>
            {isMobile ? (
              <>
                <h2>How we work</h2>
                <p>
                  We use best practices to deliver comprehensive digital marketing
                  services and provide a compelling message that sticks in the
                  minds of those yYou’re trying to reach.
                </p>
              </>
            ) : (
              <>
                <AnimatedHeader inView={inView4}>How we work</AnimatedHeader>
                <AnimatedParagraph inView={inView4}>
                  We use best practices to deliver comprehensive digital marketing
                  services and provide a compelling message that sticks in the
                  minds of those You’re trying to reach.
                </AnimatedParagraph>
              </>
            )}
            <BenefitsContent>
              <div className="item">
                <div className="item-icon res">
                  <img src={Responsive} alt="responsive icon" />
                </div>
                <div className="item-content">
                  <h4>Omnichannel</h4>
                  <p>
                    From social media to email campaigns to digital ads, we create
                    a path that leads your future customers to profitable actions.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="item-icon fun">
                  <img src={Functional} alt="Functional icon" />
                </div>
                <div className="item-content">
                  <h4>Relevant</h4>
                  <p>
                    We make sure the content is perfectly tailored to the target
                    audience, compelling, easy to read, as well as credible and
                    accurate.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="item-icon sca">
                  <img src={Scalable} alt="Scalable icon" />
                </div>
                <div className="item-content">
                  <h4>Insightful</h4>
                  <p>
                    Defining the audience is a big part of a successful campaign.
                    Through accurate segmentation and target group analysis, we
                    achieve the best possible results.
                  </p>
                </div>
              </div>
            </BenefitsContent>
          </BenefitsSection>
        </BenefitsContentWrapper>
      </ServiceWrapper>
      <CaseStudy triangle={false} />
      <Footer />
    </Layout>
  );
};

export default Marketing;
