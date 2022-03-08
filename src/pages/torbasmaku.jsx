import React, { useState, useRef, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Desktop from '../components/navigation/desktop';
import Mobile from '../components/navigation/mobile';
import CaseStudy from '../components/landingPage/caseStudy';
import { useMediaQuery } from 'react-responsive';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from '../components/seo';
import Torba from '../images/torba/torba.svg';
import SubjectBig from '../images/torba/Subject-big.svg';
import Subject from '../images/torba/Subject.svg';
import Challenges from '../images/torba/Challenges.svg';
import ChallengesBig from '../images/torba/Challenges-big.svg';
import Research from '../images/torba/Research.svg';
import ResearchBig from '../images/torba/Research-big.svg';
import Branding from '../images/torba/Branding.svg';
import Development from '../images/torba/Development.svg';
import Marketing from '../images/torba/Marketing.svg';
import Visual from '../images/torba/Visual.svg';
import Michal from '../images/torba/Michal.png';
import BrandingBig from '../images/torba/Branding-big.svg';
import Arrow from '../images/torba/Arrow.svg';
import { items } from '../lib/video';
import CaseLanding from '../components/cases/caseLanding';
import CaseData from '../components/cases/caseData';
import CaseScreen from '../components/cases/caseScreen';
import CaseBigScreen from '../components/cases/caseBigScreen';
import CaseDoubleImage from '../components/cases/caseDoubleImage';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselProvider,
  Slider,
  Slide,
} from 'pure-react-carousel';

import { CaseAbout, CaseWork, Margin, CaseWorkRevert, CaseScreenImageFull, CaseImg, CaseImgRevert, SlideContainer, VideoContainer } from '../components/styled/index'
import { computeStyles } from '@popperjs/core';
import { useIntl } from 'gatsby-plugin-intl';



const CaseTemplate = () => {
  const ref = useRef();
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery({
    query: '(max-device-width: 950px)',
  });
  const [openVideo, setOpenVideo] = useState(false);
  const [url, setUrl] = useState('');
  const [fluid, setFluid] = useState('');

  const SlideVideo = ({ item }) => {
    const [isShownHoverContent, setIsShownHoverContent] = useState(false);
    if (open) {
      document.querySelector('body').style.overflow = "hidden"
      document.querySelector('html').style.overflow = "hidden"
    } else {
      document.querySelector('body').style.overflow = "scroll"
      document.querySelector('html').style.overflow = "scroll"
    }
    function useOnClickOutside(ref, handler) {
      useEffect(
        () => {
          const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
              return;
            }
            handler(event);
          };
          document.addEventListener("mousedown", listener);
          document.addEventListener("touchstart", listener);
          return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
          };
        },
        [ref, handler]
      );
    }
    isMobile && useOnClickOutside(ref, () => setOpen(false));
    return (
      <>
        <Slide>
          <SlideContainer
            onMouseEnter={() => setIsShownHoverContent(true)}
            onMouseLeave={() => setIsShownHoverContent(false)}
          >
            <img
              style={{ height: 'calc(100% - 20px)', width: 'calc(100% - 20px)', left: '10px', background: "red" }}
              src={item.image}
              alt="torba smaku"
            />
            {(isShownHoverContent || isMobile) && <img src={Arrow} className="arrow" onClick={() => {
              setOpenVideo(true)
              setUrl(item.video)
              setOpen(true)
              setFluid(item.image)
            }} />}
          </SlideContainer>
        </Slide>
      </>
    )
  }
  const data = useStaticQuery(graphql`
  query myQueryTorbaSmaku {
    allWpRealizacja(filter: {realizacja: {en: {slug: {eq: "torbasmaku"}}}}) {
      nodes {
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
  }  
`)

const locale = useIntl().locale;
const realizacjaLang = locale === 'pl' ? data.allWpRealizacja.nodes[0].realizacja.pl : data.allWpRealizacja.nodes[0].realizacja.en;

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
        {realizacjaLang.screen?.localFile.childImageSharp.fluid && (
          <CaseScreen src={realizacjaLang.screen.localFile.childImageSharp.fluid} />
        )}
        <CaseAbout>
          <div className="wrapper">
            <img src={Torba} alt="logo torba smaku" className="logo" />
            <div>
              <h3>TORBA SMAKU</h3>
              <h2>{useIntl().formatMessage({ id: "torbasmaku.case-about.h2" })}</h2>
            </div>
          </div>
          <div className="wrapper-grid">
            <div>
              <p>{useIntl().formatMessage({ id: "torbasmaku.case-about.p1" })}</p>
              <p>{useIntl().formatMessage({ id: "torbasmaku.case-about.p2" })}</p>
            </div>
            <div>
              <p>{useIntl().formatMessage({ id: "torbasmaku.case-about.p3" })}</p>
              <ul>
                <li>{useIntl().formatMessage({ id: "torbasmaku.case-about.li1" })}</li>
                <li>{useIntl().formatMessage({ id: "torbasmaku.case-about.li2" })}</li>
              </ul>
            </div>
          </div>
        </CaseAbout>
        <CaseWork>
          <img src={SubjectBig} alt="icon" className="img" />
          <div className="wrapper-work">
            <div className="wrapper">
              <img src={Subject} alt="logo torba smaku" className="logo" />
              <div>
                <h3>SUBJECT</h3>
                <h2>{useIntl().formatMessage({ id: "torbasmaku.case-work-subject.h2" })}</h2>
              </div>
            </div>
            <p>{useIntl().formatMessage({ id: "torbasmaku.case-work-subject.p1" })}</p>
            <p>{useIntl().formatMessage({ id: "torbasmaku.case-work-subject.p2" })}</p>
          </div>
        </CaseWork>
        {realizacjaLang.bigScreen?.localFile.childImageSharp.fluid && (
          <CaseBigScreen
            src={realizacjaLang.bigScreen.localFile.childImageSharp.fluid}
            decorations={true}
          />
        )}
        {realizacjaLang.doubleImageComponent.length > 1 && (
          <CaseDoubleImage arr={realizacjaLang.doubleImageComponent.firstImage} />
        )}
        <Margin />
        <CaseWork>
          <img src={ChallengesBig} alt="icon" className="img" />
          <div className="wrapper-work">
            <div className="wrapper">
              <img src={Challenges} alt="logo torba smaku" className="logo" />
              <div>
                <h3>{useIntl().formatMessage({ id: "torbasmaku.case-work-project.h3" })}</h3>
                <h2>{useIntl().formatMessage({ id: "torbasmaku.case-work-project.h2" })}</h2>
              </div>
            </div>
            <p>{useIntl().formatMessage({ id: "torbasmaku.case-work-project.p1" })}</p>
            <p>{useIntl().formatMessage({ id: "torbasmaku.case-work-project.p2" })}</p>
            <p></p>
          </div>
        </CaseWork>
        <CaseWorkRevert>
          <div className="wrapper-work">
            <div className="wrapper">
              <img src={Research} alt="logo torba smaku" className="logo" />
              <div>
                <h3>FIRST THINGS FIRST</h3>
                <h2>{useIntl().formatMessage({ id: "torbasmaku.case-work-structure.h2" })}</h2>
              </div>
            </div>
            <p>{useIntl().formatMessage({ id: "torbasmaku.case-work-structure.p1" })}</p>
            <p>{useIntl().formatMessage({ id: "torbasmaku.case-work-structure.p2" })}</p>
          </div>
          <img src={ResearchBig} alt="icon" className="img" />
        </CaseWorkRevert>
        <CaseWork>
          <img src={BrandingBig} alt="icon" className="img" />
          <div className="wrapper-work">
            <div className="wrapper">
              <img src={Branding} alt="logo torba smaku" className="logo" />
              <div>
                <h3>BRANDING</h3>
                <h2>{useIntl().formatMessage({ id: "torbasmaku.case-work-branding.h2" })}</h2>
              </div>
            </div>
            <p>{useIntl().formatMessage({ id: "torbasmaku.case-work-branding.p1" })}</p>
            <p>{useIntl().formatMessage({ id: "torbasmaku.case-work-branding.p2" })}</p>
            <p>{useIntl().formatMessage({ id: "torbasmaku.case-work-branding.p3" })}</p>
          </div>
        </CaseWork>
        <CaseImg>
          <div className="wrapper-work">
            <div className="wrapper">
              <img src={Development} alt="logo torba smaku" className="logo" />
              <div>
                <h3>DEVELOPMENT</h3>
                <h2>{useIntl().formatMessage({ id: "torbasmaku.case-work-development.h2" })}</h2>
              </div>
            </div>
            <p>{useIntl().formatMessage({ id: "torbasmaku.case-work-development.p1" })}</p>
          </div>
          {realizacjaLang.screen2?.localFile.childImageSharp.fluid && (
            <CaseScreenImageFull fluid={realizacjaLang.screen2.localFile.childImageSharp.fluid} />
          )}
        </CaseImg>
        <CaseImgRevert>
          <div className="img-wrapper">
            <img src={Michal} className="img" />
          </div>
          <div className="wrapper-work">
            <div className="wrapper">
              <img src={Marketing} alt="logo torba smaku" className="logo" />
              <div>
                <h3>MARKETING</h3>
                <h2>
                  {useIntl().formatMessage({ id: "torbasmaku.case-work-marketing.h2.marketing" })}
                  <br />
                  {useIntl().formatMessage({ id: "torbasmaku.case-work-marketing.h2.campaing" })}
                </h2>
              </div>
            </div>
            <p>{useIntl().formatMessage({ id: "torbasmaku.case-work-marketing.p1" })}</p>
            <div className="wrapper">
              <img src={Visual} alt="logo torba smaku" className="logo" />
              <div>
                <h3>VISUAL</h3>
                <h2>{useIntl().formatMessage({ id: "torbasmaku.case-work-visual.h2" })}</h2>
              </div>
            </div>
            <p>{useIntl().formatMessage({ id: "torbasmaku.case-work-visual.p1" })}</p>
            <p>{useIntl().formatMessage({ id: "torbasmaku.case-work-visual.p2" })}</p>
          </div>
        </CaseImgRevert>
        <div
          style={{ width: '100%', margin: 'auto', }}
        >

          <CarouselProvider
            naturalSlideWidth={999}
            naturalSlideHeight={561}
            visibleSlides={isMobile ? 1 : 2}
            currentSlide={1}
            totalSlides={items.length}
            className="carousel__cnt"
            infinite={true}
            step={1}
          >
            <Slider style={!isMobile ? { paddingLeft: '5%', paddingRight: '5%' } : { paddingLeft: '0', paddingRight: '15%' }}>
              {items.map((item, index) => (
                <SlideVideo item={item} />
              )
              )
              }
            </Slider>
          </CarouselProvider>

        </div>
        {
          (openVideo && open) &&
          <VideoContainer ref={ref}>
            <img
              style={{ height: '100%', width: '100%', objectFit: 'cover', position: 'absolute' }}
              src={fluid}
              alt="post picture"
            />
            <button className="video-button" onClick={() => setOpen(false)}> &#x2715; </button>
            <video controls="true" autoplay="autoplay" type="video/mp4">
              <source src={url}
                type="video/mp4"
                className="video"
              />
              <source src={url} type="video/webm"></source>
            </video>
          </VideoContainer>
        }
        <CaseStudy triangle={false} />
        <Footer />
      </Layout>
    </>
  );
};

export default CaseTemplate;