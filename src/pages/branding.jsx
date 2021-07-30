import React from 'react';
import Layout from '../components/layout';
import Desktop from '../components/navigation/desktop';
import Mobile from '../components/navigation/mobile';
import Footer from '../components/footer';
import SEO from '../components/seo';
import { useMediaQuery } from 'react-responsive';
import HeaderImg from '../images/branding_ikonki/glowna branding.svg';
import BrandingSteps from '../components/services/brandingSteps';
import Discovery from '../images/branding_ikonki/discovery1.svg';
import Planning from '../images/branding_ikonki/planing.svg';
import Design from '../images/branding_ikonki/kredka.svg';
import DevelopmentStepIcon from '../images/branding_ikonki/śruba .svg';
import Launch from '../images/branding_ikonki/launch.svg';
import Responsive from '../images/branding_ikonki/1.benefits.svg';
import Functional from '../images/branding_ikonki/2.benefits.svg';
import Scalable from '../images/branding_ikonki/3.benefits.svg';
import More from '../images/landing/more.svg';
import {
  ServiceWrapper,
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
} from '../components/styled';

const Branding = () => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 950px)',
  });
  return (
    <Layout>
      <SEO title="Home" />
      {isMobile ? <Mobile /> : <Desktop mainPage={true} />}
      <ServiceWrapper>
        <ServicesTopSection>
          <ServicesContent>
            <ServicesMainHeader>Branding</ServicesMainHeader>
            <ServicesMainDescription>
              We make every experience people have with your business worth
              remembering. We build brands that can't be ignored. Brands that
              matter. Brands that make a lasting connection with your customers.
              Branding that sells
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
        <ServicesSection id="services-section">
          <DemandLeftSection>
            <h2>Branding that sells</h2>
            <p>
              The process of building brand awareness is complex and consists of
              many stages. One right element is not enough - it has to be a
              coherent concept that will enable your brand to create a
              sustainable bond with your customer.
            </p>
          </DemandLeftSection>
          <DemandList>
            <li>
              <span>01.</span>
              Visual identification
            </li>
            <li>
              <span>02.</span>
              Product branding
            </li>
            <li>
              <span>03.</span>
              Brand strategy
            </li>
            <li>
              <span>04.</span>
              UI/UX Design
            </li>
          </DemandList>
        </ServicesSection>
        <SentenceSection>
          <SentenceSectionContent>
            <h2>
              In today’s <span>dynamically changing</span> world, a company
              needs a <span>fresh look</span> at its online presence.
            </h2>
            <div className="decoration"></div>
            <div className="text-cnt">
              <p>
                Visual identity, communication, voice, slogan - all these
                elements are essential to brand image. For them to emerge, we
                take our time to research and try out the different variants.
                Our branding strategy never comes out of nowhere. It's a result
                of thoughtful planning and hours of brainstorming sessions.
              </p>
              <p>
                The saturated online market doesn't like repetition. Branding
                should depend not on trends but a deep understanding of the
                company's audience, mission, and goals. We'll make sure that the
                logo, symbols, and iconography resonate with your existing and
                potential customers, creating bonds that stay.
              </p>
            </div>
          </SentenceSectionContent>
        </SentenceSection>
        <BrandingSteps
          arr={[
            { img: Discovery, text: 'Discovery' },
            { img: Planning, text: 'Planning' },
            { img: Design, text: 'Design' },
            { img: DevelopmentStepIcon, text: 'Implementation' },
            { img: Launch, text: 'Launch' },
          ]}
        />
        <BenefitsSection>
          <h2>Benefits</h2>
          <p>
            A brand is not just a logo. A brand is a person’s feelings about a
            product, service, or organization. We make every effort to make your
            brand experience meaningful.
          </p>
          <BenefitsContent>
            <div className="item">
              <div className="item-icon res">
                <img src={Responsive} alt="responsive icon" />
              </div>
              <div className="item-content">
                <h4>Recognition</h4>
                <p>
                  The most important reason why branding is crucial to a
                  company's success is that it is how a company gets recognized
                  and written permanently in the minds of consumers.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="tem-icon fun">
                <img src={Functional} alt="Functional icon" />
              </div>
              <div className="item-content">
                <h4>Business Value</h4>
                <p>
                  A strongly established brand increases the value of a company,
                  giving it more momentum. This makes it a more attractive
                  investment opportunity because of its firmly established place
                  in the market.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="item-icon sca">
                <img src={Scalable} alt="Scalable icon" />
              </div>
              <div className="item-content">
                <h4>Trust</h4>
                <p>
                  A professional appearance and well-designed branding will help
                  a company build trust among consumers and partners. People are
                  more likely to do business with a company that has a
                  great-looking and professional image.
                </p>
              </div>
            </div>
          </BenefitsContent>
        </BenefitsSection>
      </ServiceWrapper>
      <Footer />
    </Layout>
  );
};

export default Branding;
