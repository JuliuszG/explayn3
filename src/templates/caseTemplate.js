import React from 'react';
import { graphql } from 'gatsby';
import Desktop from '../components/navigation/desktop';
import Mobile from '../components/navigation/mobile';
import CaseStudy from '../components/landingPage/caseStudy';
import { useMediaQuery } from 'react-responsive';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from '../components/seo';
import CaseLanding from '../components/cases/caseLanding';
import CaseData from '../components/cases/caseData';
import CaseScreen from '../components/cases/caseScreen';
import CaseBigScreen from '../components/cases/caseBigScreen';
import CaseDescription from '../components/cases/caseDescription';
import CaseDoubleImage from '../components/cases/caseDoubleImage';
import CaseList from '../components/cases/caseList';
import CaseVideo from '../components/cases/caseVideo';

export const query = graphql`
  query MyQuery($id: String!) {
    datoCmsRealizacja(id: { eq: $id }) {
      landingimage {
        fluid(maxWidth: 1750) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      component2Title
      component2Paragraph
      component2Country
      component2Client
      component2Field
      component2Services
      link
      video
      darkMode
      screens {
        fluid(maxWidth: 1750) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      bigScreen {
        fluid(maxWidth: 1750) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      component4Title
      article4Paragraphs
      doubleImageComponent {
        fluid(maxWidth: 1750) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      screen2 {
        fluid(maxWidth: 1750) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      component7Title
      component7Paragraph
      component7List
    }
  }
`;

const CaseTemplate = ({ data }) => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 950px)',
  });

  return (
    <Layout>
      <SEO title="Explayn Digital Agency" />
      {isMobile ? (
        <Mobile />
      ) : (
        <Desktop darkMode={data.datoCmsRealizacja.darkMode} mainPage={false} />
      )}
      <CaseLanding background={data.datoCmsRealizacja.landingimage.fluid} />
      <CaseData
        title={data.datoCmsRealizacja.component2Title}
        paragraph={data.datoCmsRealizacja.component2Paragraph}
        link={data.datoCmsRealizacja.link}
        country={data.datoCmsRealizacja.component2Country}
        client={data.datoCmsRealizacja.component2Client}
        field={data.datoCmsRealizacja.component2Field}
        services={data.datoCmsRealizacja.component2Services}
      />
      {data.datoCmsRealizacja.video && (
        <CaseVideo link={data.datoCmsRealizacja.video} />
      )}
      {data.datoCmsRealizacja.screens?.fluid && (
        <CaseScreen src={data.datoCmsRealizacja.screens.fluid} />
      )}
      {data.datoCmsRealizacja.bigScreen?.fluid && (
        <CaseBigScreen
          src={data.datoCmsRealizacja.bigScreen.fluid}
          decorations={true}
        />
      )}
      <CaseDescription
        title={data.datoCmsRealizacja.component4Title}
        paragraphs={data.datoCmsRealizacja.article4Paragraphs}
      />
      {data.datoCmsRealizacja.doubleImageComponent.length > 1 && (
        <CaseDoubleImage arr={data.datoCmsRealizacja.doubleImageComponent} />
      )}
      <CaseList
        title={data.datoCmsRealizacja.component7Title}
        paragraph={data.datoCmsRealizacja.component7Paragraph}
        arrObj={JSON.parse(data.datoCmsRealizacja.component7List)}
      />
      {data.datoCmsRealizacja.screen2?.fluid && (
        <CaseScreen src={data.datoCmsRealizacja.screen2.fluid} />
      )}
      <CaseStudy triangle={false} />
      <Footer />
    </Layout>
  );
};

export default CaseTemplate;
