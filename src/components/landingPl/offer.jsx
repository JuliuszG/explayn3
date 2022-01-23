import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFlip, Pagination, Navigation
} from 'swiper';
import parse from 'html-react-parser';
import { types } from './data';
import { BenefitsWrapper, Tab, ButtonGroup } from './styled';

import Offer1 from '../../images/landingPL/offer1.svg';
import GrayArrow from '../../images/landingPL/grayArrow.svg';
import Arrow from '../../images/landingPL/arrow.svg';
import DarkDecoration from '../../images/landingPL/darkdecoration.svg';


// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/effect-flip/effect-flip.min.css'

SwiperCore.use([EffectFlip, Pagination, Navigation]);

const TabGroup = () => {
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
      <div className="swiper-carousel">
        <div className="swiper-carousel-wrapper">
          <Swiper effect={'flip'} grabCursor={true} pagination={{ clickable: true }} navigation={true} className="swiper">
            <SwiperSlide className="swiper-slide"><div className="swiper-content">Jesteś zadowolony z działania Twojego biznesu, ale chcesz się rozwijać</div></SwiperSlide>
            <SwiperSlide className="swiper-slide"><div className="swiper-content">Poszukujesz sposobu na zwiększenie rozpoznawalności Twojej marki</div></SwiperSlide>
            <SwiperSlide className="swiper-slide"><div className="swiper-content">Prowadzisz lokalny biznes i chcesz, aby wszyscy w okolicy o nim usłyszeli</div></SwiperSlide>
            <SwiperSlide className="swiper-slide"><div className="swiper-content">Otwierasz firmę i chcesz pozyskać nowych klientów lub wprowadzasz nowy produkt i chcesz sprawić, żeby zaistniał na rynku</div></SwiperSlide>
            <SwiperSlide className="swiper-slide"><div className="swiper-content">Twoja firma nie generuje wystarczających przychodów</div></SwiperSlide>
            <SwiperSlide className="swiper-slide"><div className="swiper-content">Obecna agencja nie spełnia Twoich oczekiwań</div></SwiperSlide>
            <SwiperSlide className="swiper-slide"><div className="swiper-content">Próbowałeś sił w reklamach, ale tracisz tylko pieniądze</div></SwiperSlide>
          </Swiper>
          <img className="people" src={Offer1} />
        </div>
        <img className="decoration" src={DarkDecoration} />
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