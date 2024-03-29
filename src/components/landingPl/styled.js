import styled, { keyframes } from 'styled-components';
import BrandingImage from '../../images/landingPL/joanna.png';
import { deviceMin, deviceMax } from '../../utils/breakpoints';
import LiImage from '../../images/landingPL/li.svg';

export const AccordionWrapper = styled.div`
    font-family: Poppins;
    padding: 5% 10% 0 10%;
    position: relative;
    margin-bottom: 340px;

    @media ${deviceMax.mobileL} {
      padding-top: 10%;
      margin-bottom: 0;
    }

    .accordion-wrapper {
      border: solid 1px #d1d1d1;
      border-radius: 10px;
      margin-bottom: 16px;
      padding: 8px 0;
      z-index: 2;
      position: relative;
      & + * {
        margin-top: 0.5em;
      }
    }
    
    .accordion-item {
      overflow: hidden;
      transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
      height: auto;
      max-height: 9999px;
    }
    
    .accordion-item.collapsed {
      max-height: 0;
      transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
    }
    
    .accordion-title {
      font-size: 22px;
      font-weight: 600;
      cursor: pointer;
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media ${deviceMax.mobileL} {
        font-size: 18px;
      }
    
      &::after {
        content: "";
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid currentColor;
      }
    
      &.open {
        &::after {
          content: "";
          border-top: 0;
          border-bottom: 5px solid;
        }
      }
    }
    
    .accordion-content {
      padding: 16px;
      font-weight: 300;
      font-size: 16px;
      line-height: 168%;
      @media ${deviceMax.mobileL} {
        font-size: 14px;
      }
    }

    li {
      list-style-type: disc;
      margin-left: 20px;
    }

    img {
      position: absolute;
    }

    .fplay{
      display: block;
      top: calc(50% - 450px);
      left: calc(50% - 682px);
      @media (max-width: 1200px) {
        display: none
      }
    }

    .fup {
      display: block;
      right: 10%;
      top: -5%;
      @media (max-width: 1200px) {
        display: none
      }
    }

   .fright {
      display: block;
      right: 20%;
      width: 122px;
      bottom: 10%;
      @media (max-width: 1200px) {
        display: none
      }
    }

    .fleft {
      display: block;
      width: 275px;
      bottom: -131px;
      @media (max-width: 1200px) {
        display: none
      }
    }
`;

export const AccordionTitle = styled.div`
    font-family: Poppins;
    font-size: 22px;
    font-weight: 600;
    text-align: center;

    @media ${deviceMax.mobileL} {
      font-size: 18px;
    }
`

export const BenefitsWrapper = styled.div`
    font-family: Poppins;
    background: linear-gradient(#3e3e3e 0%, #343434 49.75%, #262525 100%);
    padding: 10% 10%;  
    min-height: 100vh;

    .benefits-additional {
      display: grid;
      grid-gap: 10%;
      grid-template-columns: 1fr 1fr 1fr;
      margin-top: 100px;
      margin-bottom: 100px;

      @media (max-width: 992px)  {
        grid-template-columns: 1fr;
        grid-gap: 5%;
      }
    }

    .benefit-additional {
      display: flex;
      flex-direction: column;

      .title {
        font-weight: 600;
        font-size: 27px;
        line-height: 39px;
        margin-left: 0;
        text-align: left;

        @media (max-width: 576px) {
          font-size: 18px;
          line-height: 24px;
          margin-bottom: 24px;
          } 
        }

      .text {
        text-align: left;
      }
    }

    .img {
      height: 200px;
      margin-bottom: 32px;
      @media (max-width: 1300px) {
        width: 80%;
        } 
      @media (max-width: 576px) {
        width: 100%;
        } 
      }
    }

    h2 {
        margin-bottom: 100px;
        color: white;
        font-weight: 600;
        font-size: 44px;
        line-height: 138%;

        @media (max-width: 576px) {
          margin-bottom: 90px;
          font-size: 30px;
          line-height: 46px;
        }
    }

    h3 {
      font-family: Poppins;
      font-weight: 600;
      font-size: 42px;
      line-height: 118px;
      text-align: left;
      color: #fff;
      padding-bottom: 30px;
      @media (max-width: 992px) {
        padding-left: 20px;
        padding-bottom: 12px;
        font-size: 30px;
        line-height: 46px;
      }
    }
    .social-carousel {
      max-width: 1200px;
      margin: 0 auto;
    }

    .tabContainer {
      margin-left: 118px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 140px;
      
      @media (max-width: 992px) {
        padding: 0 20px;
        grid-template-columns: 1fr;
        margin-left: 0;
        gap:0;
      }

      p {
        text-align: left;
      }

      b {
        font-weight: 600;
      }

      ul {
        text-align: left;
        font-weight: 300;
      }

      li {
        position: relative;
        padding-left: 30px;
        &:before {
          display: block;
          position: absolute;
          content: ' ';
          background-image: url(${LiImage});
          background-size: 23px 21px;
          height: 21px;
          width: 21px;
          left: 0;
        }
      }
    }

    .arrow {
      position: absolute;
      top: 50%;
      background: none;
      border: none;
      &:hover {
        background: none;
        box-shadow: none;
      }
    }
    
    .arrow-right {
      transform: rotate(180deg);
      right: -100px;
      @media (max-width: 992px){
        right: -45px;
      }
    }

    .arrow-left {
      left: -100px;
      @media (max-width: 992px){
        left: -45px;
      }
    }

    .tab  {
      position: relative;
      min-height: 550px;
    }

    .special {
      font-family: Poppins;
      font-weight: 600;
      font-size: 57px;
      line-height: 50px;
      text-align: left;
      color: #fff;
      text-shadow: 2px 2px #3a4dc3;

      @media (max-width: 992px) {
        font-size: 30px;
        margin-left: 0;
      } 
    }

    .what-offer {
      text-align: center;
      margin: 20px 0;
      @media (max-width: 992px) {
        margin-top: 16px;
      }
    }

    .what-offer-text {
      margin: 0 auto 57px;
      max-width: 620px;
      @media (max-width: 992px) {
        margin: 0 auto 20px;
      }
    }

    .benefit-wrapper {
        display:grid;
        grid-template-columns: 1fr 1fr; 
        column-gap: 100px;

        @media (max-width: 1024px) {
          grid-template-columns: 1fr; 
      } 
    }

    .benefits-title {
      text-align: center;
      margin-bottom: 16px;
      margin-top: 100px;

      @media (max-width: 1024px) {
       margin-top: 0;
     } 
    }

    p {
      margin-bottom: 30px;
      font-weight: 300;
      font-size: 16px;
      line-height: 23px;
      text-align: center;
      color: white;

        @media (max-width: 576px) {
          font-size: 14px;
          margin-left: 0;
          margin-bottom: 0;
      } 
    }

    .offers-wrapper {
      display: grid;
      grid-template-columns:1fr 1fr;
      padding-bottom: 10%;
      column-gap: 100px;

      @media (max-width: 1024px)  {
        grid-template-columns: 1fr;
      }

      img {
        @media (max-width: 1024px)  {
          width: 100%;
        }
      }
    }

    .offer-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h2 {
        margin-bottom: 16px;
      }
    }

    .types-wrapper {
      height: 300px;
      display: flex;
      justify-content: center;
      max-width: 1100px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      text-align: center;
      padding-bottom: 500px;
      padding-top: 200px;

      @media (max-width: 576px) {
        padding-top: 10%;
        padding-bottom: 10%;
        height: 500px;
      }

    img {
      position: absolute;
      top: -15%;
      width: fit-content;

        @media (max-width: 576px) {
          display: none;
        }
      }
    }

   .button_wrapper {
     padding-top: 10%;
     text-align: center;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     position: relative;

     h2 {
       max-width: 700px;
       position: relative;
       margin-bottom: 60px;
     }

     p {
      max-width: 600px;
      position: relative;
    }

    .arrow {
      top: calc( 50% - 342px);
      position: absolute;
      left: calc( 50% - 251px);

      @media (max-width: 556px) {
        display: none;
        }
      }
    }

    button {
      position: relative;
      margin-top: 16px;
      background: linear-gradient(#4c65ff 0%,#263380 180%);
      border-radius: 29px;
      color: white;
      padding: 12px 26px;
      border: none;
      opacity: 1;
      font-size: 16px;
      font-family: Poppins;
      cursor: pointer;
      transition: all 0.1s ease-in;
      &:hover {
        color: #404040;
        font-weight: 600;
        letter-spacing: 3px;
        background: #fff;
        -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
        transition: all 0.3s ease 0s;
      }

      @media (max-width: 576px) {
        margin-top: 60px;
       }
    }

  .swiper {
    width: 600px;
    height: 244px;
    margin-left: -37px;
    position: relative;
    z-index: 10;

    @media (max-width: 992px) {
      margin-left: auto;
      max-width: 300px;
      height: 244px;
    }
  }
  
  .swiper-carousel {
      position: relative;
      padding-top: 200px;
      padding-bottom: 267px;
      max-width: 833px;
      margin: 0 auto;

      @media (max-width: 992px) {
        padding-top: 24px;
        padding-bottom: 45px;
      }
    }

  .swiper-carousel-wrapper {
      position: relative;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 570px;
    height: 244px;
    display: block;

    @media (max-width: 992px) {
      max-width: 300px;
    }
  }

  .swiper-content {
    width: 600px;
    height: 244px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.04);
    padding: 58px 91px;
    font-weight: 600;
    font-size: 27px;
    line-height: 39px;
    color: white;

    @media (max-width: 992px) {
      max-width: 300px;
      padding: 30px;
      font-size: 20px;
      line-height: 30px;
    }
  }

  .swiper-button-next {
    color: white;
    height: 22px;
    right: 0;
    top: calc(50% - 10px);
    background-color: rgba(255, 255, 255, 0.04);
    padding: 30px;
    border-radius: 32.5px 0px 0px 32.5px;
    &:after {
      font-size: 26px;
      font-weight: 900;
    }

    @media (max-width: 992px) {
      padding: 20px;
      top: 50%;
      &:after {
        font-size: 20px;
      }
    }
  }

  .swiper-button-prev {
    color: white;
    height: 22px;
    left: 0;
    top: calc(50% - 10px);
    background-color: rgba(255, 255, 255, 0.04);
    padding: 30px;
    border-radius: 0px 32.5px 32.5px 0px;
    &:after {
      font-size: 26px;
      font-weight: 900;
    }

    @media (max-width: 992px) {
      padding: 20px;
      top: 50%;
      &:after {
        font-size: 20px;
      }
    }
  }

  .swiper-pagination-bullet {
    width: 20.55px;
    height: 21.85px;
    border-radius: 5px;
    background: transparent;
    background-color: rgba(255, 255, 255, 0.04);
  }

  .swiper-pagination-bullets {
    bottom: -40px;
    pointer-events: none;
  }

  .people {
    display: block;
    position: absolute;
    top: -110px;
    z-index: 9;
    right: 0;

    @media (max-width: 992px) {
      display: none;
    }
  }

  .decoration {
    display: block;
    position: absolute;
    top: -60px;
    left: -43px;

    @media (max-width: 992px) {
      display: none;
    }
  }
`;

export const ImgContainer = styled.div`
  padding: 3% 5%;
  width: 100%;
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 0px;

  @media (max-width: 576px) {
    padding: 7% 5%;
    position: static;
    height: 20vh;

    a {
      filter: brightness(0) invert(1);
    }
  }

  .blue--mobile {
    position: absolute;
    top: -446px;
    left: -401px;

    @media (min-width: 576px) {
      display: none;
    }
  }
`;
const big = keyframes`
  from {
      transform: scale(1);
      opacity: 0.8;
    }
    to {
      transform: scale(1.2);
      opacity: 1;
    }
`;

export const Tab = styled.div`
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

  @media (max-width: 992px) {
    padding: 10px 5px;
    transform: scale(0.7);
  }

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
    animation: ${big} 0.2s linear;
    transform: scale(1.2);
    @media (max-width: 992px) {
      transform: scale(1);
    }
  }

  img {
    margin-bottom: 12px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

export const TrustElement = styled.div`
    font-family: Poppins; 

    h2 {
        margin-bottom: 100px;
        margin-top: 100px;
        text-align: center;
        font-weight: 600;
        font-size: 44px;
        line-height: 138%;
        @media (max-width: 576px) {
          font-size: 30px;
          line-height: 46px;
        }
    }
`;

export const BenefitCard = styled.div` 
    color: white;

    .image {
        margin: auto 0;
        opacity:0.5;
        @media (max-width: 576px) {
          transform: scale(0.7)
      } 

      &:hover {
          transition: 0.2s ease-in;
          opacity:1;
      }
    }

    .card {
        display: grid;
        grid-template-columns: 80px 1fr;
        position: relative;
        @media (max-width: 576px) {
          grid-template-columns: 60px 1fr;
          padding-bottom:20px;
      } 
    }

    .title {
        font-weight: 600;
        font-size: 27px;
        line-height: 39px;
        margin-left: 50px;
        text-align: left;
        @media (max-width: 576px) {
          font-size: 18px;
          margin-left: 15px;
          line-height: 24px;
      } 
    }

    .text {
        margin-bottom: 100px;
        margin-left: 130px;
        font-weight: 300;
        font-size: 16px;
        line-height: 23px;
        text-align: left;

        @media (max-width: 576px) {
          font-size: 14px;
          margin-left: 0;
          margin-bottom: 60px;
      } 
    }
`;

export const BenefitCardSocial = styled.div` 
    color: white;

    .image {
        transform: scale(0.8);
        position: absolute;
        top: -73px;
        margin: auto 0;
        opacity: 0.5;
    }

    .card {
        display: grid;
        grid-template-columns:80px 1fr;
        margin-bottom: 30px;
        position: relative;
    }

    .title {
        position: relative;
        width: 250px;
        font-weight: 600;
        font-size: 27px;
        line-height: 39px;
    }

    .text {
        margin-top: 70px;
        margin-bottom: 100px;
        font-weight: 300;
        font-size: 16px;
        line-height: 23px;
        @media (max-width: 576px) {
          font-size: 14px;
      } 
    }
    &:hover {
      .image {
        opacity: 1;
      }
    }
`;

export const ClientWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10%;
    font-family: Poppins;
    max-width: 1600px;
    margin: 0 auto;

    h2 {
        margin-bottom: 156px;
        font-size: 55px;
        line-height: 76px;
        font-weight: 600;
        @media (max-width: 576px) {
          text-align: left;
          margin-bottom: 70px;
          font-weight: 600;
          font-size: 35px;
          line-height: 46px;
        }
      }

      img {
        @media (max-width: 576px) {
          transform: scale(0.6)
        }
      }

    button {
        margin-top:127px;
        background: linear-gradient(#4c65ff 0%,#263380 180%);
        border-radius: 29px;
        color: white;
        padding: 12px 26px;
        border: none;
        opacity: 1;
        font-size: 16px;
        font-family: Poppins;
        cursor: pointer;
        transition: all 0.1s ease-in;
        &:hover {
          color: #404040;
          font-weight: 600;
          letter-spacing: 3px;
          background: #fff;
          -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
          -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
          transition: all 0.3s ease 0s;
          }

        @media (max-width: 576px) {
          margin-top: 60px;
          }
        }

      .header-wrapper {
        text-align: center;
        margin-bottom: 10%;
        max-width: 728px;
        h2 {
          margin-bottom: 16px;
        }
          p {
            font-weight: 300;
            font-size: 16px;
            line-height: 168%;
              @media (max-width: 576px) {
                  font-size: 14px;
                  text-align: left;
                }
            }
    }
`;

export const Icons = styled.div`
.cnt {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1150px) {
      padding: 0 5vw;
    }
    @media (max-width: 1200px) {
      flex-direction: column;
      height: 100%;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .line {
    width: 150px;
    height: 5px;
    border-bottom: 4px dotted #f2f2f2;
    margin-bottom: 22px;

    @media (max-width: 1200px) {
      height: 50px;
      width: 5px;
      border-bottom: none;
      border-left: 5px dashed #f2f2f2;
      margin: 50px 0 20px;
    }

    @media (max-width: 1024px) {
      height: 70px;
      width: 5px;
      border-bottom: none;
      border-left: 5px dashed #f2f2f2;
      margin-top: 20px;
      margin-bottom: 10px;
    }
  }

  .icon-box {
    width: 87px;
    height: 87px;
    background: linear-gradient(#4c65ff 0%, #263380 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transition: 0.2s ease-in;
        transform: scale(1.1);
    }
  }

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    cursor: pointer;
    margin-top: 43px;
    width: 170px;

    img {
      transform: scale(0.805);
    }
    @media (max-width: 576px) {
      margin-top: 0;
    }

    h5 {
      font-size: 22px;
      font-weight: 600;
      margin-top: 30px;
      margin-bottom: 0;
      max-width: 170px;
      text-align: center;
      height: 44px;
      @media ${deviceMax.laptopM} {
        margin-top: 54px;
      }
      @media ${deviceMax.mobileL} {
        font-size: 18px;
        margin-top: 10px;
        height: 0px;
        margin-bottom: 12px;
      }
    }

    @media (min-width: 1200px) and (hover: hover) {

      &:hover img {
        transition: 0.2s ease-in;
        transform: scale(0.9);
      }

      &:hover:nth-of-type(1)::after {
        content: 'Wielkie rzeczy buduje się w oparciu o dobre badania. Pierwszy etap to konsultacje mające na celu poznanie Twoich celów biznesowych. Kiedy już lepiej zrozumiemy Twoje potrzeby, rozpoczynamy wieloplatformowe badania obejmujące analizę grupy docelowej, ścieżki zakupu i warunków rynkowych.';
        display: block;
        position: absolute;
        top: 200px;
        left: 2vw;
        width: 40vw;
        max-height: 200px;
        background-color: #f5f6fa;
        padding: 30px;
        font-family: 'Poppins';
        font-size: 14px;
        line-height: 136%;
      }

      &:hover:nth-child(1)::before {
        content: '';
        display: block;
        position: absolute;
        top: 186px;
        left: 103px;
        width: 30px;
        height: 30px;
        background-color: #f5f6fa;
        transform: rotate(-120deg) skew(25deg);
        z-index: 565;
      }

      &:hover:nth-of-type(3)::after {
        content: 'Kiedy już skończymy z badaniami i określimy zadania, nadchodzi czas na wypracowanie strategii działań. W tym miejscu opracujemy dokładny plan działania, który będzie zgodny z Twoimi celami. Szczegółowa strategia będzie zawierała wszystkie elementy i narzędzia potrzebne do dotarcia do Twojej grupy odbiorców.';
        display: block;
        position: absolute;
        top: 200px;
        left: -3vw;
        width: 40vw;
        max-height: 200px;
        background-color: #f5f6fa;
        padding: 30px;
        font-family: 'Poppins';
        font-size: 14px;
        line-height: 136%;
      }

      &:hover:nth-child(3)::before {
        content: '';
        display: block;
        position: absolute;
        top: 186px;
        left: 30px;
        width: 30px;
        height: 30px;
        background-color: #f5f6fa;
        transform: rotate(-120deg) skew(25deg);
        z-index: 565;
      }
      &:hover:nth-child(5)::after {
        content: 'Czas pokazanie się Twoim klientom.  Uruchamiamy kampanię i skupiamy się na realizacji konkretnych celów i dopasowaniu działań tak, aby zmaksymalizować efekt. Czuwamy nad sprawnym przebiegiem kampanii, testujemy treści, analizujemy wyniki.';
        display: block;
        position: absolute;
        top: 200px;
        width: 40vw;
        max-height: 200px;
        background-color: #f5f6fa;
        padding: 30px;
        font-family: 'Poppins';
        font-size: 14px;
        line-height: 136%;
      }
      &:hover:nth-of-type(5)::before {
        content: '';
        display: block;
        position: absolute;
        top: 186px;
        left: 15px;
        width: 30px;
        height: 30px;
        background-color: #f5f6fa;
        transform: rotate(-120deg) skew(25deg);
        z-index: 565;
      }
      &:hover:nth-of-type(7)::after {
        content: 'Na tym etapie monitorujemy działania i badamy zachowania klientów. Oceniamy również skuteczność kampanii. Tworzymy raporty i omawiamy kolejne kroki.';
        display: block;
        position: absolute;
        top: 200px;
        right: 1vw;
        width: 40vw;
        max-height: 200px;
        background-color: #f5f6fa;
        padding: 30px;
        font-family: 'Poppins';
        font-size: 14px;
        line-height: 136%;
      }
      &:hover:nth-child(7)::before {
        content: '';
        display: block;
        position: absolute;
        top: 186px;
        left: 10px;
        width: 30px;
        height: 30px;
        background-color: #f5f6fa;
        transform: rotate(-120deg) skew(25deg);
        z-index: 565;
      }
    }
  }
`;

export const FooterContainer = styled.div`
    background: linear-gradient(#3e3e3e 0%, #343434 49.75%, #262525 100%);
    height: 100vh;
`;

export const ConsultationContainer = styled.div`
    background: transparent;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding:0 0 0 10%;
    margin-top: 200px;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      height: 100%;
      padding: 0;
    }
`;

export const ConsultationContainerThank = styled.div`
    background: white;
    display: none;
    padding:0;
    padding-top: 10px;
    text-align: center;
    @media (max-width: 1024px) {
      height: 100%;
      padding-top: 150px;
    }

    .thankText  {
      padding: 0;
    }

    h2 {
      position: relative;
      font-weight: 600;
      font-weight: 600;
      font-size: 44px;
      line-height: 138%;
      margin-bottom: 44px;
      @media (max-width: 1024px) {
        padding: 0 25px;
        font-size: 30px;
        line-height: 46px;
        margin-bottom: 24px;
      }
    }
  
    p {
      margin: 0 auto 32px auto;
      font-weight: 300;
      font-size: 16px;
      line-height: 168%;
      max-width: 474px;
      @media (max-width: 1024px) {
        padding: 0 25px;
        font-size: 14px;
      }
    }
`;

export const ContactContainer = styled.div`
    background: rgba(220,220,220,0.19);
    height: fit-content;
    padding: 80px 88px 80px 10%;
    font-family: Poppins;
    @media (max-width: 576px) {
      padding:50px 25px 50px 25px;
    }

    form {
      button {
        margin-top: 40px;
        width: 450px;
        height:64px;
        background: linear-gradient(#4c65ff 0%,#263380 180%);
        border-radius: 29px;
        color: white;
        padding: 12px 26px;
        border: none;
        opacity: 1;
        font-family: 'Poppins';
        font-size: 24px;
        cursor: pointer;
        transition: all 0.1s ease-in;
        &:hover {
          color: #404040;
          font-weight: 600;
          letter-spacing: 3px;
          background: #fff;
          -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
          -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
          transition: all 0.3s ease 0s;
        }
        @media (max-width: 576px) {
          width: 100%;
        }
      }
    }

     .input {
      display:grid;
      margin-bottom: 25px;
      .text {
        position: relative;
        max-width: 450px;
        height: 48px;
        font-size: 16px;
        appearance: none;
        padding: 13px 16px;
        border-width: 1px;
        border-style: solid;
        border-color: #707070;
        border-image: initial;
        border-radius: 6px;
      }
      .label {
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
        text-align: left;
       }
      }
    }

    .checkbox {
      position: relative;
      height: 80px;
      @media (max-width: 450px) {
        height: 150px;
      }

      span {
        position: absolute;
        max-width: 400px;
        margin-left: 30px;
        font-size: 9px;
        line-height: 20px;
        font-weight: 600;
        text-align: left;

        a {
          font-size: 9px;
          line-height: 20px;
          font-weight: 600;
          text-align: left;
          color: #3D52CE;
          text-decoration: none;
        }
      }

      @supports(-webkit-appearance: none) or (-moz-appearance: none) {
        input[type='checkbox'] {
          --active: #275EFE;
          --active-inner: #fff;
          --border: #BBC1E1;
          --background: #fff;
          --disabled: #F6F8FF;
          --disabled-inner: #E1E6F9;
          -webkit-appearance: none;
          -moz-appearance: none;
          height: 21px;
          transform: scale(1.2);
          outline: none;
          display: inline-block;
          vertical-align: top;
          position: relative;
          margin-top: 6px;
          cursor: pointer;
          border: 1px solid var(--bc, var(--border));
          background: var(--b, var(--background));
           width: 21px;
            &:after {
              opacity: var(--o, 0);
            }
            &:checked {
              --o: 1;
            }
          &:after {
            content: '';
            display: block;
            left: 0;
            top: 0;
            position: absolute;
          }
          &:checked {
            --b: var(--active);
            --bc: var(--active);
            --d-o: .3s;
            --d-t: .6s;
            --d-t-e: cubic-bezier(.2, .85, .32, 1.2);
          }
          &:disabled {
            --b: var(--disabled);
            cursor: not-allowed;
            opacity: .9;
            &:checked {
              --b: var(--disabled-inner);
              --bc: var(--border);
            }
            & + label {
              cursor: not-allowed;
            }
          }
          &:hover {
            &:not(:checked) {
              &:not(:disabled) {
                --bc: var(--border-hover);
              }
            }
          }
          &:focus {
            box-shadow: 0 0 0 var(--focus);
          }
          & + label {
            font-size: 14px;
            line-height: 21px;
            display: inline-block;
            vertical-align: top;
            cursor: pointer;
            margin-left: 4px;
          }
        }
        input[type='checkbox'] {
            border-radius: 7px;
            &:after {
              width: 5px;
              height: 9px;
              border: 2px solid var(--active-inner);
              border-top: 0;
              border-left: 0;
              left: 7px;
              top: 2px;
              transform: rotate(var(--r, 20deg));
            }
            &:checked {
              --r: 43deg;
            }
        }
      }
`;

export const Spinner = styled.div`
  display: none;
  width: 3.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

 div {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #fc2f70;
  animation: fade 0.8s ease-in-out alternate infinite;
}

div:nth-of-type(1) {
  animation-delay: -0.4s;
}

div:nth-of-type(2) {
  animation-delay: -0.2s;
}`;

export const ConsultationText = styled.div`
  position: relative;
  font-family: Poppins;
  background: white;
  padding-right: 119px;

  @media (max-width: 576px) {
    padding: 0;
  }

  h2 {
    position: relative;
    font-weight: 600;
    font-weight: 600;
    font-size: 44px;
    line-height: 138%;
    margin-bottom: 24px;
    @media (max-width: 1024px) {
      padding: 0 25px;
      font-size: 30px;
      line-height: 46px;
    }
  }

  .center {
    margin-top: 300px;
    @media (max-width: 576px) {
      margin-top: -100px;
    }
  }

  p {
    margin-bottom: 32px;
    font-weight: 300;
    font-size: 16px;
    line-height: 168%;
    @media (max-width: 1024px) {
      padding: 0 25px;
      font-size: 14px;
    }
  }

  .decoration {
    position: absolute;
    left: -254px;
    top: -172px;
  }

  .decoration-center {
    position: absolute;
    left: calc(50% - 175px);
    top: -257px;
    @media (max-width: 576px) {
      display: none;
    }
  }

  .quote-wrapper {
    margin-top: 60px;
    position: relative;
    img {
      position: absolute;
      top: -10px;
    }
  }

  .referal-wrapper {
    display: flex;
    align-items: center;
    margin-left: 78px;
    @media (max-width: 576px) {
      margin-left: 25px;
      display: block;

    }

    .circle {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background-image: url(${BrandingImage});
      background-position: 49% 35%;
      background-size: 100%;
      @media (max-width: 576px) {
        margin-bottom: 15px;
      }
    }

    .name {
      margin-left: 45px;
      margin-bottom: 5px;
      font-weight: 300;
      font-size: 18px;
      line-height: 28px;
      @media (max-width: 576px) {
        margin-left: -25px;
      }
    }

    .bold {
      font-weight: 500;
    }
  }

  button {
    margin-top: 100px;
    margin-bottom: 100px;
    max-width: 540px;
    width: 100%;
    height: 66px;
    background: linear-gradient(#4c65ff 0%,#263380 180%);
    border-radius: 29px;
    color: white !important;
    padding: 12px 26px;
    border: none;
    opacity: 1;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 24px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.1s ease-in;
    &:hover {
      color: #404040 !important;
      font-weight: 600;
      letter-spacing: 3px;
      background: #fff;
      -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
      -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
      transition: all 0.3s ease 0s;
    }

    @media (max-width: 576px) {
      width: 100%;
      max-width: 320px;
      font-size: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
      }
    }

    a {
      text-decoration: none;
      color: white;
      &:hover {
        color: #404040;
      }
    }
  
`;

export const SurmaContent = styled.div`
    position: relative;
    font-family: Poppins;
    padding: 0;
    border: 0;
    margin:3% auto;
    width: fit-content;
    border-radius: 12px;
    background: white;
    overflow-y: scroll;
    height: 90%;
    @media (max-width: 992px) {
      margin: 0;
      padding-top: 200px;
      height: 100%;
      width: 100%;
    }
    box-shadow: 0px 3px 76px #000029;

    .logo {
      margin: 200px 400px 110px 400px;
      @media (max-width: 992px) {
        margin: 5%;
        position: absolute;
        top: 40px;
        left: calc(50% - 260px);
      }
    }

    h3 {
      font-weight: 600;
      font-size: 22px;
      line-height: 168%;
      margin: 0 auto;
      text-align: center;
    }

    p {
      font-weight: 300;
      font-size: 18px;
      line-height: 28px;
      @media (max-width: 576px){
        font-size: 16px;
      }
    }

    .strategy {
      margin-top: 35px;
      margin-bottom: 100px;
      text-align: center;
      font-weight: 300;
      font-size: 18px;
      line-height: 28px;
    }

    .number {
      margin-bottom:20px;
      font-weight: 900;
      font-size: 127px;
      line-height: 140px;
      color: #e8e8e8;
      @media (max-width: 992px) {
        font-size: 67px;
        line-height: 80px;
      }
    }

    .number-wrapper {
      margin-top: 30px;
      margin-bottom: 90px;
      display:grid;
      grid-template-columns: 1fr 1fr 1fr;
      @media (max-width: 992px) {
        grid-template-columns: 1fr;
      }

      .text {
        margin-bottom:20px;
        font-weight: 900;
        font-size: 64px;
        line-height: 84px;
        color: #e8e8e8;
      }
    }

    .number-flex {
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (max-width: 992px) {
        margin-bottom: 20px;
      }

      p {
        text-align: center;
      }

      img {
        margin-bottom: 24px;
        margin-top: 16px;
      }
    }

    .challenge-wrapper {
      padding:0 250px 0 100px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 70px;
      @media (max-width: 992px) {
        flex-direction: column;
        padding:0 5%;

      }

      h3 {
        margin-top: 20px;
        margin-bottom: 40px;
        text-align: left;
      }

      p {
        max-width: 500px;
        margin-bottom:88px;
        @media (max-width: 992px) {
          margin-bottom: 20px;
        }
      }
    }

    .mock {
      margin-left: calc(50% - 175px);
      @media (max-width: 992px) {
          width: 100%;
          margin-top: -150px;
          margin-left: 0;
        }
    }

    .solutions {
      position: relative;
      padding: 0 100px;
      @media (max-width: 992px) {
        padding: 0 5%;
      }

      .right {
        padding-left: 420px;
        @media (max-width: 992px) {
          padding-left: 0;
        }
      }

      .bottom {
        padding-left: 0;
      }

      .decoration {
        position: absolute;
        @media (max-width: 992px) {
          display:none;
        }
        &-top {
          top: 31%;
          left:-100px;
          @media (max-width: 992px) {
            display:none;
          }
        }
        &-up {
          right: 339px;
          top: 14%;
          transform: rotate(90deg);
        }
        &-bottom {
          top: 55%;
          left: 300px;
        }
      }
    }

    .solutions-flex {
      display: flex;
      margin-bottom: 150px;
    }

    .solutions-text {
      max-width: 550px;
      margin-left: 45px;
      @media (max-width: 992px) {
        margin-left: 25px;
        max-width: 300px;
      }

      .bold {
        font-weight: 600;
        margin-bottom: 16px;
      }
    }

    .logo-small {
      margin-bottom:34px;
      margin-left: calc(50% - 69px);
     }

    .data {
      text-align: center;
      font-weight: 600;
      font-size: 14px;
      line-height: 39px;
      margin-bottom:20px;
    }

    button {
      width: 44px;
      height: 44px;
      background: #f8f8f8;
      filter: drop-shadow(-2px -2px 2px #fff);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      font-weight: 900;
      font-size: 22px;
      position: absolute;
      top: -105px;
      right: 20px;
      padding:0;
      transition: all 0.1s ease-in;
      &:hover {
        color: #404040;
        font-weight: 600;
        letter-spacing: 3px;
        background: #fff;
        -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
        transition: all 0.3s ease 0s;
      }
      @media (max-width: 992px) {
         top: -49px;
      }
    }

    .circle {
      @media (max-width: 992px) {
        display:none;
      }
    }
`;

export const SurmaWrapper = styled.div`
  position: relative;

  .none {
    display: none;
  }

  .show {
    background: transparent;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    z-index:99999;
  }
`;

