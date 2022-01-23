import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFlip, Pagination, Navigation
} from 'swiper';
import parse from 'html-react-parser'

import {
  BenefitsWrapper,
} from './styled';

import Offer1 from '../../images/landingPL/offer1.svg';
import GrayArrow from '../../images/landingPL/grayArrow.svg';
import Facebook from '../../images/landingPL/facebook1.svg';
import Google from '../../images/landingPL/google1.svg';
import Instagram from '../../images/landingPL/instagram1.svg';
import Tiktok from '../../images/landingPL/tiktok1.svg';
import Linkedin from '../../images/landingPL/linkedin1.svg';
import Arrow from '../../images/landingPL/arrow.svg';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/effect-flip/effect-flip.min.css'

SwiperCore.use([EffectFlip, Pagination, Navigation]);

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  border: 0;
  outline: 0;
  filter: invert(29%) sepia(0%) saturate(0%) hue-rotate(331deg) brightness(99%) contrast(10%);
  ${({ active }) =>
    active &&
    `
    filter: none;
    opacity: 1;
    transform: scale(1.2);
  `}
  &:hover {
    filter: none;
    opacity: 1;
    transform: scale(1.2);
  }

  img {
    margin-bottom: 12px;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const types = [
  { img: Google, text: 'Google', html: '<h3>Google</h3><div className="tabContainer"><div><p>Aż</p><p className="special">46%</p><p>osób zaczyna szukanie produktu lub usługi w Google i tak, w tej grupie też są Twoi klienci. Reklamy w wyszukiwarce Google pozwalają dotrzeć do osób, które szukają dokładnie tego co Ty oferujesz.</p></div><div><p>Dzięki Google Ads jesteś tam, gdzie ludzie szukają informacji o problemie, na które oferujesz rozwiązanie. Promuj swój biznes wśród osób, które szukają firm takich jak Twoja.</p><p>Dzięki reklamie w Google:<p><ul><li>dotrzesz dokładnie do tych osób, które szukają Twoich usług</li><li>zachowasz kontrolę nad wydawanym budżetem</li><li>uzyskasz natychmiastowe rezultaty</li></ul></div></div>' },
  { img: Facebook, text: 'Facebook', html: '<h3>Facebook</h3><div className="tabContainer"><div><p>Przeciętny człowiek odwiedza Facebooka średnio</p><p className="special">8 razy</p><p>każdego dnia. Chcesz dotrzeć do ludzi lubiących meble Ikea, albo do właścicieli restauracji? To nie problem - precyzyjny dobór grupy odbiorców pozwala Ci na wyświetlanie reklam dokładnie tym osobom, do których chcesz dotrzeć.</p></div><div><p>Dotrzyj do swoich potencjalnych klientów, używając rozbudowanych segmentów zainteresowań i opcji demograficznych Facebooka. Dzięki precyzyjnemu targetowaniu, trafisz do odbiorców, którzy z największym prawdopodobieństwem będą zainteresowani Twoją ofertą.</p><p><b>Dzięki reklamie na Facebooku:</b></p><ul><li>dotrzesz do nowych klientów</li><li>zbudujesz relacje z obecnymi klientami</li><li>obniżysz koszty reklamy </li></ul></div></div>' },
  { img: Linkedin, text: 'Linkedin', html: '<h3>Linkedin</h3><div className="tabContainer"><div><p>LinkedIn to nie rozwiązanie dla każdej firmy. Największe korzyści czerpią z niego firmy B2B. Reklamując się na LinkedIn, zwiększasz świadomość swojej marki wśród profesjonalistów i pozyskujesz wysokiej jakości leady.</p><p className="special">33%</p><p>decydentów B2B używa LinkedIn do zbadania firmy, z którą chcą podjąć współpracę</p></div><div><p>LinkedIn to największa platforma, zrzeszająca specjalistów, menadżerów i właścicieli firm. Powiększasz zespół? To rozwiązanie dla Ciebie. Przeglądaj profile użytkowników, i znajdź odpowiednie osoby na stanowisko.</p><p>Dzięki reklamie na LinkedIn:</p><ul><li>pozyskasz wysokiej jakości kontakty</li><li>dotrzesz do osób na konkretnych stanowiskach dzięki zaawansowanym profilom zawodowym</li><li>zbudujesz wizerunek firmy godnej zaufania</li></ul></div></div>' },
  { img: Instagram, text: 'Instagram', html: '<h3>Instagram</h3><div className="tabContainer"><div><p>Instagram jest</p><p className="special">7 najczęściej</p><p>odwiedzaną stroną w sieci.</p><p>Reklamy na Instagramie znajdują zastosowanie przy docieraniu do nowych klientów poprzez atrakcyjne kreacje reklamowe. W połączeniu z Facebookiem tworzą potężny duet, dzięki któremu zbudujesz silną markę w social mediach.</p></div><div><p>Instagram pozwala budować markę i łączyć się z odbiorcami w osobisty sposób. To platforma, która połączy Twoją markę z wieloma influencerami.</p><p>Dzięki reklamie na Instagramie:</p><ul><li>zbudujesz świadomość marki</li><li>poprawisz skuteczność reklam na Facebooku</li><li>dotrzesz do szerszej grupy odbiorców</li></ul></div></div>' },
  { img: Tiktok, text: 'TikTok', html: '<h3>TikTok</h3><div className="tabContainer"><div><p>TikTok jest obecnie numerem</p><p className="special">1 w rankingu</p><p>najczęściej pobieranych aplikacji na świecie i wciąż szturmem zdobywa cyfrową przestrzeń społecznościową.</p><p>Chociaż platforma kojarzy się z najmłodszymi odbiorcami to ponad 60% użytkowników to osoby w wieku 20-50 lat. Z racji braku dużego zainteresowania przez firmy, używając reklamy na TikToku wyprzedzisz inne firmy z Twojej branży.</p></div><div><p>To idealne miejsce do budowania świadomości i pozyskiwania nowych klientów. Dzięki niskiej konkurencji i niskim koszcie reklamy, to doskonałe miejsce do promowania swojej marki.</p><p>Dzięki reklamie na TikToku:</p><ul><li>zbudujesz przewagę konkurencyjną</li><li>dotrzesz do szerokiej grupy odbiorców niskim kosztem</li><li>nawiażesz relacje z wysoko zaangażowanymi użykownikami, gotowymi do podjęcia działania</li></ul></div></div>' }];
function TabGroup() {
  const [active, setActive] = useState(types[0]);
  const [text, setText] = useState('<h3>Google</h3><div className="tabContainer"><div><p>Aż</p><p className="special">46%</p><p>osób zaczyna szukanie produktu lub usługi w Google i tak, w tej grupie też są Twoi klienci. Reklamy w wyszukiwarce Google pozwalają dotrzeć do osób, które szukają dokładnie tego co Ty oferujesz.</p></div><div><p>Dzięki Google Ads jesteś tam, gdzie ludzie szukają informacji o problemie, na które oferujesz rozwiązanie. Promuj swój biznes wśród osób, które szukają firm takich jak Twoja.</p><p>Dzięki reklamie w Google:<p><ul><li>dotrzesz dokładnie do tych osób, które szukają Twoich usług</li><li>zachowasz kontrolę nad wydawanym budżetem</li><li>uzyskasz natychmiastowe rezultaty</li></ul></div></div>')
  const [index, setIndex] = useState(0);

  const goBack = (index) => {
    if (index == 0) {
      setActive(types[4]);
      setText(types[4].html)
      setIndex(4)
    } else {
      setActive(types[index - 1]);
      setText(types[index - 1].html)
      setIndex(index - 1)
    }
  }

  const goNext = (index) => {
    if (index == 4) {
      setActive(types[0]);
      setText(types[0].html)
      setIndex(0)
    } else {
      setActive(types[index + 1]);
      setText(types[index + 1].html)
      setIndex(index + 1)
    }
  }
  return (
    <>
      <ButtonGroup>
        {types.map((type, i) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => {
              setActive(type)
              setText(type.html)
              setIndex(i)
            }}
          >
            <img src={type.img} />
            <p>{type.text}</p>
          </Tab>
        ))}
      </ButtonGroup>
      <div className="tab">
        <button className="arrow arrow-left" onClick={() => goBack(index)}><img src={Arrow} /></button>
        <p>{parse(text)} </p>
        <button className="arrow arrow-right" onClick={() => goNext(index)}><img src={Arrow} /></button>
      </div>
    </>
  );
}


const Offer = () => {
  return (
    <BenefitsWrapper id="offers">
      <div className="offer-wrapper">
        <h2 className="what-offer">Dla kogo?</h2>
        <p>Zobacz z jakimi problemami mierzą się nasi klienci.<br />Elastycznie dopasowujemy rozwiązania do różnych problemów. </p>
      </div>
      <div>
        <Swiper effect={'flip'} grabCursor={true} pagination={{ clickable: true }} navigation={true} className="swiper">
          <SwiperSlide className="swiper-slide"><div className="swiper-content">Jesteś zadowolony z działania Twojego biznesu, ale chcesz się rozwijać</div></SwiperSlide>
          <SwiperSlide className="swiper-slide"><div className="swiper-content">Poszukujesz sposobu na zwiększenie rozpoznawalności Twojej marki</div></SwiperSlide>
          <SwiperSlide className="swiper-slide"><div className="swiper-content">Prowadzisz lokalny biznes i chcesz, aby wszyscy w okolicy o nim usłyszeli</div></SwiperSlide>
          <SwiperSlide className="swiper-slide"><div className="swiper-content">Otwierasz firmę i chcesz pozyskać nowych klientów lub wprowadzasz nowy produkt i chcesz sprawić, żeby zaistniał na rynku</div></SwiperSlide>
          <SwiperSlide className="swiper-slide"><div className="swiper-content">Twoja firma nie generuje wystarczających przychodów</div></SwiperSlide>
          <SwiperSlide className="swiper-slide"><div className="swiper-content">Obecna agencja nie spełnia Twoich oczekiwań</div></SwiperSlide>
          <SwiperSlide className="swiper-slide"><div className="swiper-content">Próbowałeś sił w reklamach, ale tracisz tylko pieniądze</div></SwiperSlide>
        </Swiper>
        <img src={Offer1} />
      </div>
      <h2 className="what-offer">Co oferujemy?</h2>
      <p className="what-offer-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
      <TabGroup />
      <div className="button_wrapper">
        <img className="arrow" src={GrayArrow} />
        <h2>Nie wiesz, która platforma będzie dla Ciebie najlepsza?</h2>
        <p>Podczas bezpłatnej konsultacji, dobierzemy najlepsze kanały reklamowe dostosowane do Twoich celów biznesowych.</p>
        <button onClick={() => {
          document.getElementById('consultation').scrollIntoView({
            behavior: 'smooth'
          })
        }}>Umów się na bezpłatną konsultację</button>
      </div>
    </BenefitsWrapper>
  );
};

export default Offer;