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
import { useIntl } from 'gatsby-plugin-intl';

export const query = graphql`
query MyQuery($id: String!) {
  wpRealizacja(id: {eq: $id}) {
    realizacja {
      en {
        landingImage {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1750) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
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
        screen {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1750) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        bigScreen {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1750) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        component4Title
        article4Paragraphs
        doubleImageComponent {
          firstImage {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1750) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          secondImage {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1750) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
        screen2 {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1750) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        component7Title
        component7Paragraph
        component7List
      }
      pl {
        landingImage {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1750) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
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
        screen {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1750) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        bigScreen {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1750) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        component4Title
        article4Paragraphs
        doubleImageComponent {
          firstImage {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1750) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          secondImage {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1750) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
        screen2 {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1750) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        component7Title
        component7Paragraph
        component7List
      }
    }
  }
}
`;

const CaseTemplate = ({ data }) => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 950px)',
  });
  
  const locale = useIntl().locale;
  const realizacjaLang = locale === 'pl' ? data.wpRealizacja.realizacja.pl : data.wpRealizacja.realizacja.en;

  return (
    <>
    <SEO title="Explayn Digital Agency" />
    <Layout>
      {isMobile ? (
        <Mobile />
      ) : (
        <Desktop darkMode={realizacjaLang.darkMode} mainPage={false} />
      )}
      <CaseLanding background={realizacjaLang.landingImage.localFile.childImageSharp.fluid} />
      <CaseData
        title={realizacjaLang.component2Title}
        paragraph={realizacjaLang.component2Paragraph}
        link={realizacjaLang.link}
        country={realizacjaLang.component2Country}
        client={realizacjaLang.component2Client}
        field={realizacjaLang.component2Field}
        services={realizacjaLang.component2Services}
      />
      {realizacjaLang.video && (
        <CaseVideo link={realizacjaLang.video} />
      )}
      {realizacjaLang.screen?.localFile.childImageSharp.fluid && (
        <CaseScreen src={realizacjaLang.screen.localFile.childImageSharp.fluid} />
      )}
      {realizacjaLang.bigScreen?.localFile.childImageSharp.fluid && (
        <CaseBigScreen
          src={realizacjaLang.bigScreen.localFile.childImageSharp.fluid}
          decorations={true}
        />
      )}
      <CaseDescription
        title={realizacjaLang.component4Title}
        paragraphs={realizacjaLang.article4Paragraphs}
      />
      {realizacjaLang.doubleImageComponent && (
        <CaseDoubleImage arr={realizacjaLang.doubleImageComponent} />
      )}
      <CaseList
        title={realizacjaLang.component7Title}
        paragraph={realizacjaLang.component7Paragraph}
        arrObj={JSON.parse(realizacjaLang.component7List)}
      />
      {realizacjaLang.screen2?.localFile.childImageSharp.fluid && (
        <CaseScreen src={realizacjaLang.screen2.localFile.childImageSharp.fluid} />
      )}
      <CaseStudy triangle={false} />
      <Footer />
    </Layout>
    </>
  );
};

export default CaseTemplate;
