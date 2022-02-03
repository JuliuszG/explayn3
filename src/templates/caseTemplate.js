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
    wpRealizacja(id: { eq: $id }) {
        realizacja {
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
`;

const CaseTemplate = ({ data }) => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 950px)',
  });
  console.log(data);

  return (
    <>
    <SEO title="Explayn Digital Agency" />
    <Layout>
      {isMobile ? (
        <Mobile />
      ) : (
        <Desktop darkMode={data.wpRealizacja.realizacja.darkMode} mainPage={false} />
      )}
      <CaseLanding background={data.wpRealizacja.realizacja.landingImage.localFile.childImageSharp.fluid} />
      <CaseData
        title={data.wpRealizacja.realizacja.component2Title}
        paragraph={data.wpRealizacja.realizacja.component2Paragraph}
        link={data.wpRealizacja.realizacja.link}
        country={data.wpRealizacja.realizacja.component2Country}
        client={data.wpRealizacja.realizacja.component2Client}
        field={data.wpRealizacja.realizacja.component2Field}
        services={data.wpRealizacja.realizacja.component2Services}
      />
      {data.wpRealizacja.realizacja.video && (
        <CaseVideo link={data.wpRealizacja.realizacja.video} />
      )}
      {data.wpRealizacja.realizacja.screen?.localFile.childImageSharp.fluid && (
        <CaseScreen src={data.wpRealizacja.realizacja.screen.localFile.childImageSharp.fluid} />
      )}
      {data.wpRealizacja.realizacja.bigScreen?.localFile.childImageSharp.fluid && (
        <CaseBigScreen
          src={data.wpRealizacja.realizacja.bigScreen.localFile.childImageSharp.fluid}
          decorations={true}
        />
      )}
      <CaseDescription
        title={data.wpRealizacja.realizacja.component4Title}
        paragraphs={data.wpRealizacja.realizacja.article4Paragraphs}
      />
      {data.wpRealizacja.realizacja.doubleImageComponent && (
        <CaseDoubleImage arr={data.wpRealizacja.realizacja.doubleImageComponent} />
      )}
      <CaseList
        title={data.wpRealizacja.realizacja.component7Title}
        paragraph={data.wpRealizacja.realizacja.component7Paragraph}
        arrObj={JSON.parse(data.wpRealizacja.realizacja.component7List)}
      />
      {data.wpRealizacja.realizacja.screen2?.localFile.childImageSharp.fluid && (
        <CaseScreen src={data.wpRealizacja.realizacja.screen2.localFile.childImageSharp.fluid} />
      )}
      <CaseStudy triangle={false} />
      <Footer />
    </Layout>
    </>
  );
};

export default CaseTemplate;
