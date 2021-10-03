import React, { useRef, useEffect } from 'react';
import Layout from '../components/layout';
import Desktop from '../components/navigation/desktop';
import Mobile from '../components/navigation/mobile';
import SEO from '../components/seo';
import { useMediaQuery } from 'react-responsive';
import Benefit from '../components/landingPl/benefits';
import Consultation from '../components/landingPl/consultation';
import Client from '../components/landingPl/client';
import Offer from '../components/landingPl/offer';
import Proces from '../components/landingPl/proces';
import TrustComponent from '../components/landingPl/trust';
import Footer from '../components/footer';
import LandingPl from '../components/landingPage/landingPl';

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
    }, 500);
    return () => {
      clearTimeout(scrollTimeout);
    };
  }, [location.state, caseStudyRef.current]);

  return (
    <Layout>
      <SEO title="Explayn Digital Agency" />
      {isMobile ? <Mobile /> : <Desktop />}
      <LandingPl />
      <Benefit />
      <Client />
      <Offer />
      <Proces />
      {/* <Consultation/>
      <TrustComponent /> */}
      <Footer />
    </Layout>
  );
};

export default IndexPage;
