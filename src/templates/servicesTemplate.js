import React, { useMemo } from 'react';
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
  ServicesLogo,
} from '../components/styled';

const ServiceTemplate = ({ pageContext }) => {
  const {
    logo,
    first: { Title: firstSectionTitle, Desc: firstSectionDescription },
    second: {
      Title: secondSectionTitle,
      Desc: secondSectionDescription,
      List: secondSectionList,
    },
    third: { Quote: thirdSectionQuote },
  } = pageContext;

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

  const {
    // triangle1: {
    //   childImageSharp: { fluid: triandle1Img },
    // },
    // quote: {
    //   childImageSharp: { fluid: quoteImg },
    // },
    dots: {
      childImageSharp: { fluid: dotsImg },
    },
    triangle2: {
      childImageSharp: { fluid: triangle2Img },
    },
  } = data;
  // const [ref, inView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.5,
  // });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const isMobile = useMediaQuery({
    query: '(max-device-width: 950px)',
  });

  const renderList = useMemo(() => {
    secondSectionList.map((item, index) => (
      <li key={index}>
        <span>0{index + 1}.</span>
        {item}
      </li>
    ));
  }, [secondSectionList]);

  return (
    <Layout>
      <SEO title="Home" />
      {isMobile ? <Mobile /> : <Desktop />}
      <ServiceWrapper>
        <ServicesTopSection>
          {/* <div className="text" ref={ref}>
            <AnimatedHeader inView={inView}>
              {firstSectionTitle}
            </AnimatedHeader>
            <AnimatedParagraph inView={inView}>
              {firstSectionDescription}
            </AnimatedParagraph>
          </div>
           */}

          <ServicesContent>
            <ServicesMainHeader>{firstSectionTitle}</ServicesMainHeader>
            <ServicesMainDescription>
              {firstSectionDescription}
            </ServicesMainDescription>
          </ServicesContent>
          <ServicesLogo>
            <Img
              fluid={logo}
              placeholderStyle={{ visibility: 'hidden' }}
              alt="subpage logo"
            />
          </ServicesLogo>
          <ServicesScrollLink to={'services-section'} smooth duration={500}>
            <div className="content">
              <div className="title">learn more</div>
              <img src={More} alt="scroll down" />
            </div>
          </ServicesScrollLink>
        </ServicesTopSection>
        <ServicesSection id="services-section">
          <DemandLeftSection ref={ref2}>
            <AnimatedHeader inView={inView2}>
              {secondSectionTitle}
            </AnimatedHeader>
            <AnimatedParagraph inView={inView2}>
              {secondSectionDescription}
            </AnimatedParagraph>
          </DemandLeftSection>
          <DemandList>{renderList}</DemandList>
          {/* <div className="triangle">
          <Img fluid={triangle1Img} alt="decoration" />
        </div> */}
        </ServicesSection>
        <QuoteSection>
          <p>{thirdSectionQuote}</p>
          <div className="square">
            <Img fluid={dotsImg} alt="decoration" />
          </div>
          <div className="half-circle">
            <Img fluid={triangle2Img} alt="decoration" />
          </div>
        </QuoteSection>
        <CaseStudy triangle={false} />
      </ServiceWrapper>
      <Footer />
    </Layout>
  );
};

export default ServiceTemplate;
