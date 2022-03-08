import React from 'react';
import Layout from '../components/layout';
import Desktop from '../components/navigation/desktop';
import Mobile from '../components/navigation/mobile';
import SEO from '../components/seo';
import { useMediaQuery } from 'react-responsive';
import Image from '../images/404.svg'
import Footer from '../components/footer';
import { ServicesTopSection404, ServicesImgContainer } from '../components/styled/index';
import { useIntl } from 'gatsby-plugin-intl';

const PageNotFound = () => {

  const isMobile = useMediaQuery({
    query: '(max-device-width: 950px)',
  });

  return (
  <>
    <SEO title="Explayn Digital Agency" />
    <Layout>
      {isMobile ? <Mobile /> : <Desktop />}
      <ServicesTopSection404>
        <div>
          <h1 className="grey">404</h1>
          <p className="text">{useIntl().formatMessage({ id: "404.text" })}</p>
          <a href="/" className="link">{useIntl().formatMessage({ id: "404.link" })}</a>
        </div>
        <ServicesImgContainer>
          <img src={Image} alt="dev icon" />
        </ServicesImgContainer>
      </ServicesTopSection404>
      <Footer />
    </Layout>
    </>
  );
};

export default PageNotFound;