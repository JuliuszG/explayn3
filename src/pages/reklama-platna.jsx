import React, { useRef, useEffect } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useMediaQuery } from 'react-responsive';
import Benefit from '../components/landingPl/benefits';
import Consultation from '../components/landingPl/consultation';
import Client from '../components/landingPl/client';
import Offer from '../components/landingPl/offer';
import Proces from '../components/landingPl/proces';
import TrustComponent from '../components/landingPl/trust';
import FooterPl from '../components/footerPl';
import LandingPl from '../components/landingPage/landingPl';
import LogoImg from '../components/navigation/logoImg';
import { ImgContainer } from '../components/landingPl/styled';
import BlueMobile from '../images/landingPL/blueMobile.svg';

const IndexPage = ({ location }) => {
  const caseStudyRef = useRef(null);

  const isMobile = useMediaQuery({
    query: '(max-device-width: 950px)',
  });

  
  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      if (
        location?.state?.scrollAnchor === '#caseStudy' &&
        caseStudyRef.current !== null
      ) {
        caseStudyRef.current.scrollIntoView();
      }
      const hash = window.location.hash;

      if (hash) {
        const element = document.querySelector(`${hash}`);
        if (element) {
          element.scrollIntoView()
        }
      }

    }, 500);
    return () => {
      clearTimeout(scrollTimeout);
    };
  }, [location.state, caseStudyRef.current]);

  return (
    <>
      <SEO title="Explayn Digital Agency" />
      <Layout>
        <ImgContainer>
        <img src={BlueMobile} alt="decoration" className="blue--mobile"/>
          <a href="/" style={{ position: 'relative', display: 'block', zIndex: '99' }}>
            <LogoImg
              customWidth="194px"
              customHeight="41px"
              className="logo"
            />
          </a>
        </ImgContainer>
        <LandingPl />
        <Benefit />
        <Client />
        <Offer />
        <Proces />
        <Consultation />
        <TrustComponent />
        <FooterPl />
      </Layout>
    </>
  );
};

export default IndexPage;
