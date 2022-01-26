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
  query myQueryAndMyQuery($id: String) {
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
    allDatoCmsVideo {
      nodes{
        photo {
          fluid(maxWidth: 1750) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
        video {
          url
        }
      }
    }
  }
`)
  return (
    <>
      <SEO title="Explayn Digital Agency" />
      <Layout>
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
        {data.datoCmsRealizacja.screens?.fluid && (
          <CaseScreen src={data.datoCmsRealizacja.screens.fluid} />
        )}
        <CaseAbout>
          <div className="wrapper">
            <img src={Torba} alt="logo torba smaku" className="logo" />
            <div>
              <h3>TORBA SMAKU</h3>
              <h2>About the client</h2>
            </div>
          </div>
          <div className="wrapper-grid">
            <div>
              <p>The company we’ve worked with specializes in meal kit delivery based on previously prepared meal plans. It aims at clients that search for an affordable meal delivery option without compromising quality. Torba Smaku focuses on diet catering - with slimming, ketogenic, sports, and vegetarian variants included. </p>
              <p>Its offer proves that the prepped meal delivery services can be affordable and keep the highest quality in terms of taste, products, and nutritional value.</p>
            </div>
            <div>
              <p>When launching this project, our main goals included:</p>
              <ul>
                <li>creating a consistent image of a leader within the low-cost catering services category</li>
                <li>launching sales and expanding it within a short span</li>
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
                <h2>What did we work on?</h2>
              </div>
            </div>
            <p>We’ve taken an active part in the brand development process from scratch, helping our client introduce the company to the market. In a few steps, which we’ll describe briefly below, we’ve created an online platform, visual identification, and marketing strategy, which was later implemented with satisfying results.</p>
            <p>The first step was to create a platform for ordering personalized meal kit delivery services. Subsequently, we've made two video ads aimed at the YouTube campaigns to take off with the promotion in the most efficient way. At the same time, we’ve launched Google Ads and Facebook Ads campaigns, which have allowed us to gain new audience and increase the site traffic.</p>
          </div>
        </CaseWork>
        {data.datoCmsRealizacja.bigScreen?.fluid && (
          <CaseBigScreen
            src={data.datoCmsRealizacja.bigScreen.fluid}
            decorations={true}
          />
        )}
        {data.datoCmsRealizacja.doubleImageComponent.length > 1 && (
          <CaseDoubleImage arr={data.datoCmsRealizacja.doubleImageComponent} />
        )}
        <Margin />
        <CaseWork>
          <img src={ChallengesBig} alt="icon" className="img" />
          <div className="wrapper-work">
            <div className="wrapper">
              <img src={Challenges} alt="logo torba smaku" className="logo" />
              <div>
                <h3>PROJECT CHARACTERISTIC</h3>
                <h2>Challenges</h2>
              </div>
            </div>
            <p>Developing this project, we had to keep the specifics of the catering industry in mind.  Since it aims towards a personalization, the company’s offer had to be as customizable as possible. That’s why all the diet variants have at least five levels of caloric content, and the clients can personalize their orders during the purchase process.  At the same time, the competition in the diet catering sector is relatively high, regardless of the price range. To attract potential customers, an extended offer adjusted to different needs and diet restrictions is not enough. </p>
            <p>Thus, an intuitive website that catches the eye with its modern layout was our starting point, followed by a well-targeted marketing campaign.  Since it’s not that easy to stand out from the multitude of companies offering relatively similar catering services, we had to choose one distinguishing feature to focus on, which is, in a nutshell, „cheap but good” (with an emphasis on good!).</p>
          </div>
        </CaseWork>
        <CaseWorkRevert>
          <div className="wrapper-work">
            <div className="wrapper">
              <img src={Research} alt="logo torba smaku" className="logo" />
              <div>
                <h3>FIRST THINGS FIRST</h3>
                <h2>Research and structure</h2>
              </div>
            </div>
            <p>During the research phase, we came up with a conclusion that the office workers dominate among the company’s target groups. Since they’re busy, they usually search for the fastest solutions. Thus, when designing the user journey, we’ve tried to reduce the order process to four simple steps. This way, the client can finalize the order in a minute or two. Through the website, the clients of Torba Smaku can access the client panel, where all their previous and current orders are stored. They can modify them, add special requests and manage their payments.</p>
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
                <h2>Aesthetics</h2>
              </div>
            </div>
            <p>In the website’s color palette, pastel shades are dominating, with mint green and pale blue as the main ones. Green brings calmness and associations with nature and harmony, while blue evokes trust. However, we’ve left much space for white, going for a modern, transparent design that exposes the appetizing photographs of offered dishes. </p>
            <p>We’ve made them in minimalistic arrangements, keeping the shots simple to bring out the maximum potential of the meals. Each diet is illustrated with various photos to give the potential clients an exact idea of what they can expect. The readable, sans serif Work Sans and Poppins fonts are in perfect harmony with the design. The modern approach to UI design distinguishes Torba Smaku from other companies in this price range, as most of them still operate on quite old-school interfaces.</p>
          </div>
        </CaseWork>
        <CaseImg>
          <div className="wrapper-work">
            <div className="wrapper">
              <img src={Development} alt="logo torba smaku" className="logo" />
              <div>
                <h3>DEVELOPMENT</h3>
                <h2>Website</h2>
              </div>
            </div>
            <p>Since most clients tend to order diet catering services online, a fully responsive, beautiful online platform was a must. We made sure that the website is intuitive on different devices, including smartphones which are taking over the online traffic (in 2021, they already constitute 54% of all global traffic on the Internet).</p>
          </div>
          {data.datoCmsRealizacja.screen2?.fluid && (
            <CaseScreenImageFull fluid={data.datoCmsRealizacja.screen2.fluid} />
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
                <h2>Marketing <br />campaing</h2>
              </div>
            </div>
            <p>Marketing campaign: The introduction of the new brand to the market could go unnoticed without a well-targeted brand promotion. Our client decided to bet on a YouTube campaign since it’s the easiest way to reach broad recognition within a short time. To reach out to clients through social media, we’ve used Facebook Ads, too. Google Ads campaign made up to the overall promotion, allowing us to access the target group directly and spark its interest. </p>
            <div className="wrapper">
              <img src={Visual} alt="logo torba smaku" className="logo" />
              <div>
                <h3>VISUAL</h3>
                <h2>Video ads</h2>
              </div>
            </div>
            <p>Our job was to create two video ads with the brand ambassador - Michał Wiśniewski, a known musician. Since he’s not related to the gastronomy industry anyhow, finding the common ground wasn’t easy. We came up with an idea of a musical kitchen. To create a commercial jingle, we’ve used the kitchen sounds, combining them with Michał’s vocal.</p>
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
