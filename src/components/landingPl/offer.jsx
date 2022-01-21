import React from 'react';

import {
  BenefitsWrapper,
  BenefitCardSocial
} from './styled';

import {
  offer
} from './data';
import Offer1 from '../../images/landingPL/offer1.svg';
import GrayArrow from '../../images/landingPL/grayArrow.svg';
import SwiperCore, {
  EffectFlip, Pagination, Navigation
} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/effect-flip/effect-flip.min.css'

SwiperCore.use([EffectFlip, Pagination, Navigation]);


const Card = ({ item }) => {
  return (
    <BenefitCardSocial>
      <div className="card">
        <div className="image">
          <img src={item.image[0].src} alt={item.image[0].alt} />
        </div>
        <p className="title">{item.name}</p>
      </div>
      <p className="text">{item.text}</p>
    </BenefitCardSocial>
  );
};

const Offer = () => {
  return (
    <BenefitsWrapper id="offers">
      <div className="offer-wrapper">
        <h2>Dla kogo?</h2>
        <p>Zobacz z jakimi problemami mierzą się nasi klienci.<br />Elastycznie dopasowujemy rozwiązania do różnych problemów. </p>
      </div>
      <img src={Offer1} />
      <Swiper effect={'flip'} grabCursor={true} pagination={true} navigation={true} className="swiper">
        <SwiperSlide className="swiper-slide"><div className="swiper-content">Jesteś zadowolony z działania Twojego biznesu, ale chcesz się rozwijać</div></SwiperSlide>
        <SwiperSlide className="swiper-slide"><div className="swiper-content">Poszukujesz sposobu na zwiększenie rozpoznawalności Twojej marki</div></SwiperSlide>
        <SwiperSlide className="swiper-slide"><div className="swiper-content">Prowadzisz lokalny biznes i chcesz, aby wszyscy w okolicy o nim usłyszeli</div></SwiperSlide>
        <SwiperSlide className="swiper-slide"><div className="swiper-content">Otwierasz firmę i chcesz pozyskać nowych klientów lub wprowadzasz nowy produkt i chcesz sprawić, żeby zaistniał na rynku</div></SwiperSlide>
        <SwiperSlide className="swiper-slide"><div className="swiper-content">Twoja firma nie generuje wystarczających przychodów</div></SwiperSlide>
        <SwiperSlide className="swiper-slide"><div className="swiper-content">Obecna agencja nie spełnia Twoich oczekiwań</div></SwiperSlide>
        <SwiperSlide className="swiper-slide"><div className="swiper-content">Próbowałeś sił w reklamach, ale tracisz tylko pieniądze</div></SwiperSlide>
      </Swiper>
      <h2>Co oferujemy?</h2>
      <div className="benefit-wrapper">
        {offer.map((benefit, index) => (
          <Card item={benefit} key={`${benefit}-${index}`} />
        ))
        }
      </div>
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