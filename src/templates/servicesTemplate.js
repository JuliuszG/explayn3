import React from 'react';
import Img from 'gatsby-image';
import Desktop from '../components/navigation/desktop';
import Mobile from '../components/navigation/mobile';
import CaseStudy from '../components/landingPage/caseStudy';
import { useMediaQuery } from 'react-responsive';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from '../components/seo';
import { graphql, useStaticQuery } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import More from '../images/landing/more.svg';
import {
  AnimatedHeader,
  AnimatedParagraph,
} from '../components/util/animations';
import {
  ServicesSection,
  QuoteSection,
  ServiceWrapper,
  ServicesTopSection,
  ServicesScrollLink,
  ServicesContent,
  DemandLeftSection,
  DemandList,
  ServicesMainHeader,
  ServicesMainDescription,
  ServicesImgContainer,
  ServicesLogo,
} from '../components/styled';

const ServiceTemplate = ({ pageContext }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const isMobile = useMediaQuery({
    query: '(max-device-width: 950px)',
  });
  const data = useStaticQuery(graphql`
    {
      triangle1: file(relativePath: { eq: "servicesPage/1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      quote: file(relativePath: { eq: "servicesPage/2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dots: file(relativePath: { eq: "servicesPage/3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      triangle2: file(relativePath: { eq: "servicesPage/4.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      {isMobile ? <Mobile /> : <Desktop />}
      <ServiceWrapper>
        <ServicesTopSection>
          {/* <div className="text" ref={ref}>
            <AnimatedHeader inView={inView}>
              {pageContext.first.Title}
            </AnimatedHeader>
            <AnimatedParagraph inView={inView}>
              {pageContext.first.Desc}
            </AnimatedParagraph>
          </div>
           */}

          <ServicesContent>
            <ServicesMainHeader>{pageContext.first.Title}</ServicesMainHeader>
            <ServicesMainDescription>
              {pageContext.first.Desc}
            </ServicesMainDescription>
          </ServicesContent>
          <ServicesLogo>
            <Img
              fluid={pageContext.logo}
              placeholderStyle={{ visibility: 'hidden' }}
              alt="subpage logo"
            />
          </ServicesLogo>
          <ServicesScrollLink to={'aboutUs'} smooth duration={500}>
            <div className="content">
              <div className="title">learn more</div>
              <img src={More} alt="scroll down" />
            </div>
          </ServicesScrollLink>
        </ServicesTopSection>
        <ServicesSection>
          <DemandLeftSection ref={ref2}>
            <AnimatedHeader inView={inView2}>
              {pageContext.second.Title}
            </AnimatedHeader>
            <AnimatedParagraph inView={inView2}>
              {pageContext.second.Desc}
            </AnimatedParagraph>
          </DemandLeftSection>
          <DemandList>
            {pageContext.second.List.map((item, index) => (
              <li key={index}>
                <span>0{index + 1}.</span>
                {item}
              </li>
            ))}
          </DemandList>
          {/* <div className="triangle">
          <Img fluid={data.triangle1.childImageSharp.fluid} alt="decoration" />
        </div> */}
        </ServicesSection>
        <QuoteSection>
          <p>{pageContext.third.Quote}</p>
          <div className="square">
            <Img fluid={data.dots.childImageSharp.fluid} alt="decoration" />
          </div>
          <div className="half-circle">
            <Img
              fluid={data.triangle2.childImageSharp.fluid}
              alt="decoration"
            />
          </div>
        </QuoteSection>
        <CaseStudy triangle={false} />
      </ServiceWrapper>
      <Footer />
    </Layout>
  );
};

export default ServiceTemplate;
