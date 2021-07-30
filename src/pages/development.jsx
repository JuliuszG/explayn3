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
  TechnologySection,
} from '../components/styled';

const Development = () => {
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
            <ServicesMainHeader>Web & Mobile Development</ServicesMainHeader>
            <ServicesMainDescription>
              Full-stack web development team capable of facing modern technical
              and business challenges.
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
            <h2>Development on demand</h2>
            <p>
              Build modern applications that help you stay on top of the game.
              We create an alluring user experience that keeps them coming back.
            </p>
          </DemandLeftSection>
          <DemandList>
            <li>
              <span>01.</span>
              Websites
            </li>
            <li>
              <span>02.</span>
              Online stores
            </li>
            <li>
              <span>03.</span>
              iOS & Android Apps
            </li>
            <li>
              <span>04.</span>
              Dedicated systems
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
                A website is often the first and most important touchpoint
                between a customer and a brand. It is not just a URL, but a key
                aspect of your business and marketing strategy.
              </p>
              <p>
                With all the options available in the market today, you need
                someone you can trust to execute your vision to the highest
                level of quality. No matter what you do, at Explayn we help you
                create a digital experience seamlessly.
              </p>
            </div>
          </SentenceSectionContent>
        </SentenceSection>
        <Steps
          arr={[
            { img: Discovery, text: 'Discovery' },
            { img: Planning, text: 'Planning' },
            { img: Design, text: 'Design' },
            { img: DevelopmentStepIcon, text: 'Development' },
            { img: Launch, text: 'Launch' },
          ]}
        />
        <TechnologySection>
          <div className="info">
            <h2>Best technology for your product</h2>
            <p>
              Having released over 40 products we have a set of technologies
              that we love to work with. Tell us about your product vision and
              goals and we will choose technologies that will help you achieve
              them.
            </p>
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
        </TechnologySection>
        <BenefitsSection light>
          <h2>
            We create enterprise web services and small business web solutions
            that set you apart from the competitors.
          </h2>
          <p></p>
          <BenefitsContent>
            <div className="item">
              <div className="item-icon res">
                <img src={Responsive} alt="responsive icon" />
              </div>
              <div className="item-content">
                <h4>Responsive</h4>
                <p>
                  Responsive web design is a modern need. We follow standards
                  creating a mobile optimized website that converts.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="item-icon fun">
                <img src={Functional} alt="Functional icon" />
              </div>
              <div className="item-content">
                <h4>Functional</h4>
                <p>
                  Your site reflects your company and your brand. That’s why we
                  deliver visually appealing, polished and professional user
                  experience.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="item-icon sca">
                <img src={Scalable} alt="Scalable icon" />
              </div>
              <div className="item-content">
                <h4>Scalable</h4>
                <p>
                  We create efficient infrastructure to deliver scalable web
                  applications and solutions to meet your business demands.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="item-icon sec">
                <img src={Secure} alt="Scalable icon" />
              </div>
              <div className="item-content">
                <h4>Secure</h4>
                <p>
                  To us, it is important that your website follows industry
                  standards and security guidelines.
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

export default Development;
