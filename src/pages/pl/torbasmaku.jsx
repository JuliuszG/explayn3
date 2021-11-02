import React, {useState, useRef, useEffect} from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Desktop from '../../components/navigation/desktop';
import Mobile from '../../components/navigation/mobile';
import CaseStudy from '../../components/landingPage/caseStudy';
import { useMediaQuery } from 'react-responsive';
import Layout from '../../components/layout';
import FooterPl from '../../components/footerPl';
import SEO from '../../components/seo';
import Torba from '../../images/torba/torba.svg';
import SubjectBig from '../../images/torba/Subject-big.svg';
import Subject from '../../images/torba/Subject.svg';
import Challenges from '../../images/torba/Challenges.svg';
import ChallengesBig from '../../images/torba/Challenges-big.svg';
import Research from '../../images/torba/Research.svg';
import ResearchBig from '../../images/torba/Research-big.svg';
import Branding from '../../images/torba/Branding.svg';
import Development from '../../images/torba/Development.svg';
import Marketing from '../../images/torba/Marketing.svg';
import Visual from '../../images/torba/Visual.svg';
import Michal from '../../images/torba/Michal.png';
import BrandingBig from '../../images/torba/Branding-big.svg';
import Arrow from '../../images/torba/Arrow.svg';
import CaseLanding from '../../components/cases/caseLanding';
import CaseDataPl from '../../components/cases/caseDataPl';
import CaseScreen from '../../components/cases/caseScreen';
import CaseBigScreen from '../../components/cases/caseBigScreen';
import CaseDoubleImage from '../../components/cases/caseDoubleImage';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselProvider,
  Slider,
  Slide,
} from 'pure-react-carousel';

import { CaseAbout, CaseWork, Margin, CaseWorkRevert, CaseScreenImageFull, CaseImg, CaseImgRevert, SlideContainer, VideoContainer } from '../../components/styled/index'



const Case= () => {
  const ref = useRef();
  const [open, setOpen] = useState(false)
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
  useOnClickOutside(ref, () => setOpen(false));
  const isMobile = useMediaQuery({
    query: '(max-device-width: 950px)',
  });
  const [openVideo, setOpenVideo] = useState(false);
  const [url, setUrl] = useState('');
  const SlideVideo = ({item})=> {
    const [isShownHoverContent, setIsShownHoverContent] = useState(false);
    if (open) {
      document.querySelector('body').style.overflow="hidden"
      document.querySelector('html').style.overflow="hidden"
    } else {
      document.querySelector('body').style.overflow="scroll"
      document.querySelector('html').style.overflow="scroll"
    }
    return (
      <>
      <Slide>
      <SlideContainer
          onMouseEnter={() => setIsShownHoverContent(true)}
          onMouseLeave={() => setIsShownHoverContent(false)}
      >
        <Img
          style={{ height: 'calc(100% - 20px)', width: 'calc(100% - 20px)', left: '10px', background: "red" }}
          fluid={item.photo.fluid}
          alt="torba smaku"
        />
        {(isShownHoverContent || isMobile) && <img src={Arrow} className="arrow" onClick={() => {
            setOpenVideo(true)
            setUrl(item.video.url)    
            setOpen(true)
          }}/>}
      </SlideContainer>
    </Slide>
    </>
    )
  }
  const data = useStaticQuery(graphql`
  query myQueryAnd($id: String) {
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
    <Layout>
      <SEO title="Explayn Digital Agency" />
      {isMobile ? (
        <Mobile />
      ) : (
        <Desktop darkMode={data.datoCmsRealizacja.darkMode} mainPage={false} />
      )}
      <CaseLanding background={data.datoCmsRealizacja.landingimage.fluid} />
      <CaseDataPl
        title="Zaczynajmy"
        paragraph="Popularność diet pudełkowych w Europie Środkowo-Wschodniej gwałtownie rośnie. Coraz więcej osób chce jeść zdrowo i ekologicznie, nie tracąc cennego czasu na przygotowywanie posiłków.
        Sektor cateringu dietetycznego z niszowego przekształcił się w dużą branżę i zdywersyfikował, dostosowując się do potrzeb różnych grup docelowych - od sportowców i kulturystów, po alergików pokarmowych i wegan. Wprowadzenie nowej marki w takie realia rynkowe jest szansą, ale niesie ze sobą również ryzyko. W naszym case study chcielibyśmy pokazać, jak sobie z nim poradziliśmy. Nie była to bułka z masłem, ale efekty świadczą o tym, że przyjęliśmy właściwe podejście!"
        link={data.datoCmsRealizacja.link}
        country="Polska"
        client="Torba Smaku"
        field="Food"
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
            <h2>O kliencie</h2>
          </div>
        </div>
        <div className="wrapper-grid">
          <div>
            <p>Firma, z którą pracowaliśmy, specjalizuje się w dostarczaniu zestawów posiłków opartych na wcześniej przygotowanych planach żywieniowych. Jej oferta skierowana jest do klientów, którzy poszukują przystępnej cenowo opcji dostawy posiłków bez kompromisów jakościowych. Torba Smaku koncentruje się na cateringu dietetycznym - z wariantami: odchudzającym, ketogenicznym, sportowym i wegetariańskim. Swoją ofertą udowadnia, że usługa dostawy gotowych posiłków może być przystępna cenowo, przy zachowaniu najwyższej jakości pod względem smaku, produktów i wartości odżywczych. </p>
          </div>
          <div>
            <p>Przy uruchamianiu tego projektu, naszymi głównymi celami były m.in:</p>
            <ul>
              <li>stworzenie spójnego wizerunku lidera w kategorii tanich usług cateringowych</li>
              <li>uruchomienie sprzedaży i jej rozwój w krótkim czasie.</li>
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
              <h2>Nad czym pracowaliśmy?</h2>
            </div>
          </div>
          <p>Wzięliśmy aktywny udział w procesie budowania marki od podstaw, pomagając naszemu klientowi wprowadzić firmę na rynek. W kilku krokach, które pokrótce opiszemy poniżej, stworzyliśmy platformę internetową, identyfikację wizualną oraz strategię marketingową, która następnie została wdrożona z zadowalającym skutkiem.</p>
          <p>Pierwszym krokiem było stworzenie platformy do zamawiania spersonalizowanych zestawów posiłków. Następnie stworzyliśmy dwie reklamy wideo skierowane do kampanii na YouTube, aby jak najefektywniej wystartować z promocją. Równocześnie uruchomiliśmy kampanię świadomościową Google Ads i Facebook Ads, które pozwoliły nam pozyskać nowych odbiorców i zwiększyć ruch na stronie.</p>
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
              <h3>CHARAKTERYSTYKA PROJEKTU</h3>
              <h2>Wyzwania</h2>
            </div>
          </div>
          <p>Tworząc ten projekt, musieliśmy pamiętać o specyfice branży gastronomicznej. Oferta firmy musiała być jak najbardziej dostosowana do potrzeb użytkowników. Dlatego wszystkie warianty diet posiadają co najmniej pięć poziomów kaloryczności, a klienci mogą personalizować swoje zamówienia w trakcie procesu zakupowego.</p>
          <p>Jednocześnie konkurencja w sektorze cateringu dietetycznego jest stosunkowo duża, niezależnie od przedziału cenowego. Aby przyciągnąć potencjalnych klientów, nie wystarczy rozbudowana oferta dostosowana do różnych potrzeb i ograniczeń dietetycznych. Dlatego punktem wyjścia była intuicyjna, przyciągająca wzrok nowoczesną szatą graficzną strona internetowa, a następnie odpowiednio ukierunkowana kampania marketingowa.</p>
          <p>Ponieważ nie tak łatwo jest wyróżnić się spośród wielu firm oferujących stosunkowo podobne usługi cateringowe, musieliśmy wybrać jeden wyróżnik, który w skrócie brzmi: "tanio, ale dobrze" (z naciskiem na dobrze!).</p>
        </div>
      </CaseWork>
      <CaseWorkRevert>
        <div className="wrapper-work">
          <div className="wrapper">
            <img src={Research} alt="logo torba smaku" className="logo" />
            <div>
              <h3>FIRST THINGS FIRST</h3>
              <h2>Struktura</h2>
            </div>
          </div>
          <p>Podczas fazy badawczej doszliśmy do wniosku, że wśród grup docelowych firmy dominują pracownicy biurowi. Ponieważ są zabiegani, zazwyczaj szukają najszybszych rozwiązań. Dlatego projektując user journey, staraliśmy się sprowadzić proces zamówienia do czterech prostych kroków. Dzięki temu klient może sfinalizować zamówienie w ciągu minuty lub dwóch.</p>
          <p>Za pośrednictwem strony internetowej klienci Torby Smaku mają dostęp do panelu klienta, w którym przechowywane są wszystkie ich poprzednie i aktualne zamówienia. Mogą je modyfikować, dodawać specjalne życzenia i zarządzać płatnościami.</p>
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
              <h2>Estetyka</h2>
            </div>
          </div>
          <p>W palecie kolorystycznej serwisu dominują odcienie pastelowe, z miętową zielenią i bladym błękitem na czele. Zieleń przynosi spokój oraz skojarzenia z naturą i harmonią, a błękit budzi zaufanie. </p>
          <p>Dużo miejsca zostawiliśmy jednak bieli, stawiając na nowoczesny, przejrzysty design, który eksponuje apetyczne zdjęcia oferowanych dań. Wykonaliśmy je w minimalistycznych aranżacjach, zachowując prostotę ujęć, aby wydobyć maksymalny potencjał potraw. Każda dieta jest ilustrowana różnymi zdjęciami, aby dać potencjalnym klientom dokładne wyobrażenie o tym, czego mogą się spodziewać. Z projektem doskonale współgrają czytelne, bezszeryfowe czcionki.</p>
          <p>Nowoczesne podejście do projektowania UI wyróżnia Torbę Smaku na tle innych firm z tego przedziału cenowego, gdyż większość z nich operuje jeszcze na dość przestarzałych interfejsach.</p>
        </div>
      </CaseWork>
      <CaseImg>
        <div className="wrapper-work">
          <div className="wrapper">
            <img src={Development} alt="logo torba smaku" className="logo" />
            <div>
              <h3>DEVELOPMENT</h3>
              <h2>Strona internetowa</h2>
            </div>
          </div>
          <p>Ponieważ większość klientów zamawia usługi cateringu dietetycznego online, w pełni responsywna, przykuwająca wzrok platforma online była koniecznością. Zadbaliśmy o to, aby strona była intuicyjna na różnych urządzeniach, w tym na smartfonach, które przejmują ruch w sieci (w 2021 roku będą stanowić już 54% całego globalnego ruchu w Internecie).</p>
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
              <h2>Kampania <br />marketingowa</h2>
            </div>
          </div>
          <p>Wprowadzenie nowej marki na rynek mogłoby pozostać niezauważone bez dobrze ukierunkowanej promocji marki. Nasz klient zdecydował się postawić na kampanię w YouTube, ponieważ jest to efektywny sposób na osiągnięcie szerokiej rozpoznawalności w krótkim czasie. Aby dotrzeć do klientów poprzez media społecznościowe, wykorzystaliśmy również Facebook Ads. Dobranie odpowiednich grup docelowych i remarketing pozwoliły nam na zwiększenie ROAS o 100%. Kampania Google Ads stanowiła dopełnienie całości promocji, pozwalając nam na bezpośrednie dotarcie do grupy docelowej zainteresowanej dietą pudełkową. </p>
          <div className="wrapper">
            <img src={Visual} alt="logo torba smaku" className="logo" />
            <div>
              <h3>VISUAL</h3>
              <h2>Reklamy wideo</h2>
            </div>
          </div>
          <p>Naszym zadaniem było stworzenie dwóch reklam wideo z ambasadorem marki - Michałem Wiśniewskim, znanym muzykiem. Ponieważ nie jest on związany z branżą gastronomiczną, znalezienie wspólnej płaszczyzny porozumienia nie było łatwe. Wpadliśmy na pomysł muzycznej kuchni. Do stworzenia jingla reklamowego wykorzystaliśmy kuchenne dźwięki, łącząc je z wokalem Michała.</p>
          <p>Niech nasza praca mówi sama za siebie. Zobacz projekty, nad którymi ostatnio pracowaliśmy.</p>
        </div>
      </CaseImgRevert>
      <div
        style={{ width: '100%', margin: 'auto', }}
      >
      
        <CarouselProvider
          naturalSlideWidth={999}
          naturalSlideHeight={561}
          visibleSlides={1}
          currentSlide={1}
          totalSlides={data.allDatoCmsVideo.nodes.length}
          className="carousel__cnt"
          infinite={true}
          step={1}
        >
          <Slider style={!isMobile ? { paddingLeft: '15%', paddingRight: '15%' }: {paddingLeft: '0', paddingRight: '5%' }}>
            {data.allDatoCmsVideo.nodes.map((item, index) => (
              <SlideVideo item={item}/>
            )
            )
            }
          </Slider>
        </CarouselProvider>
        
      </div>
      {
      (openVideo && open) && 
      <VideoContainer ref={ref}>
        <video controls="false" autoplay="autoplay" type="video/mp4">
        <source src={url} 
          type="video/mp4"
          className="video"
          />
          <source src={url} type="video/webm"></source>
          </video>
      </VideoContainer>
    }
      <FooterPl />
    </Layout>
  );
};

export default Case;