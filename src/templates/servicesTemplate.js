import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Desktop from '../components/navigation/desktop';
import Mobile from '../components/navigation/mobile';
import CaseStudy from '../components/landingPage/caseStudy';
import { useMediaQuery } from 'react-responsive';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from '../components/seo';
import { colors } from '../styles/colors';
import { graphql, useStaticQuery } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import {
  AnimatedHeader,
  AnimatedParagraph,
} from '../components/util/animations';
import {
  ServicesWrapper,
  ServicesLogo,
  ServicesSection,
  QuoteSection,
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
      <ServicesWrapper>
        <div className="text" ref={ref}>
          <AnimatedHeader inView={inView}>
            {pageContext.first.Title}
          </AnimatedHeader>
          <AnimatedParagraph inView={inView}>
            {pageContext.first.Desc}
          </AnimatedParagraph>
        </div>
        <ServicesLogo>
          <Img
            fluid={pageContext.logo}
            placeholderStyle={{ visibility: 'hidden' }}
            alt="subpage logo"
          />
        </ServicesLogo>
      </ServicesWrapper>
      <ServicesSection>
        <div className="left" ref={ref2}>
          <AnimatedHeader inView={inView2}>
            {pageContext.second.Title}
          </AnimatedHeader>
          <AnimatedParagraph inView={inView2}>
            {pageContext.second.Desc}
          </AnimatedParagraph>
        </div>
        <ul className="right">
          {pageContext.second.List.map((item, index) => (
            <li key={index}>
              <span>0{index + 1}.</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="triangle">
          <Img fluid={data.triangle1.childImageSharp.fluid} alt="decoration" />
        </div>
      </ServicesSection>
      <QuoteSection>
        <p>{pageContext.third.Quote}</p>
        <div className="square">
          <Img fluid={data.dots.childImageSharp.fluid} alt="decoration" />
        </div>
        <div className="half-circle">
          <Img fluid={data.triangle2.childImageSharp.fluid} alt="decoration" />
        </div>
      </QuoteSection>
      <CaseStudy triangle={false} />
      <Footer />
    </Layout>
  );
};

export default ServiceTemplate;
