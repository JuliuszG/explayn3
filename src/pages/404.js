import React, { useRef, useEffect } from 'react';
import Layout from '../components/layout';
import Desktop from '../components/navigation/desktop';
import Mobile from '../components/navigation/mobile';
import SEO from '../components/seo';
import { useMediaQuery } from 'react-responsive';
import Image from '../images/404.svg'
import Footer from '../components/footer';
import { ServicesTopSection, ServicesImgContainer } from '../components/styled/index';

const PageNotFound = () => {

  const isMobile = useMediaQuery({
    query: '(max-device-width: 950px)',
  });


  return (
    <Layout>
      <SEO title="Explayn Digital Agency" />
      {isMobile ? <Mobile /> : <Desktop />}
      <ServicesTopSection>
        <div>
          <h1 className="grey">404</h1>
          <p className="text">OOOPS… WE COULDN’T FIND THE PAGE YOUR LOOKING FOR.</p>
          <a href="/" className="link">VISIT HOMEPAGE</a>
        </div>
        <ServicesImgContainer>
          <img src={Image} alt="dev icon" />
        </ServicesImgContainer>
      </ServicesTopSection>
      <Footer />
    </Layout>
  );
};

export default PageNotFound;