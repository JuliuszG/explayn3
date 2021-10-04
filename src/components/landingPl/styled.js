import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { deviceMin, deviceMax } from '../../utils/breakpoints';

export const BenefitsWrapper = styled.div`
    font-family: Poppins;
    background: linear-gradient(#3e3e3e 0%, #343434 49.75%, #262525 100%);
    padding: 185px 10% 39px;  
    @media (max-width: 576px) {
        padding-top: 90px;
    } 
    h2 {
        margin-bottom: 182px;
        color: white;
        font-size: 55px;
        line-height: 76px;
        font-weight: 600;

        @media (max-width: 576px) {
          margin-bottom: 90px;
          font-size: 30px;
          line-height: 46px;
        }
    }
    .benefit-wrapper {
        display:grid;
        grid-template-columns: 1fr 1fr; 
        column-gap: 160px;

        @media (max-width: 1024px) {
          grid-template-columns: 1fr; 
      } 
    }
`;

export const TrustElement = styled.div`
    font-family: Poppins; 
    h2 {
        margin-bottom: 100px;
        margin-top: 100px;
        text-align: center;
        font-size: 55px;
        line-height: 76px;
        font-weight: 600;
        @media (max-width: 576px) {
          font-size: 35px;
          line-height: 46px;
        }
    }
`;

export const BenefitCard = styled.div` 
    color: white;
    .image {
        margin: auto 0;
        @media (max-width: 576px) {
          transform: scale(0.7)
      } 

    }
    .card {
        display: grid;
        grid-template-columns: 80px 1fr;
        margin-bottom: 30px;
        position: relative;
        @media (max-width: 576px) {
          grid-template-columns: 60px 1fr;
      } 
    }
    .title {
        font-weight: 600;
        font-size: 27px;
        line-height: 39px;
        margin-left: 50px;

        @media (max-width: 576px) {
          font-size: 18px;
          margin-left: 15px;
          line-height: 24px;
      } 

    }
    .text {
        margin-bottom: 143px;
        margin-left: 130px;
        font-weight: 300;
        font-size: 18px;
        line-height: 28px;

        @media (max-width: 576px) {
          margin-left: 0;
          margin-bottom: 60px;

      } 
        
    }
`;

export const BenefitCardSocial = styled.div` 
    color: white;
    .image {
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
        margin-bottom: 143px;
        font-weight: 300;
        font-size: 18px;
        line-height: 28px;
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

    h2 {
        margin-bottom: 156px;
        font-weight: 600;
        font-size: 55px;
        line-height: 76px;

        @media (max-width: 576px) {
          text-align: center;
          margin-bottom: 70px;
          font-weight: 600;
          font-size: 32px;
          line-height: 42px;
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

        @media (max-width: 576px) {
          margin-top: 60px;
        }
        }

      .header-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;

        @media (max-width: 1024px) {
           grid-template-columns: 1fr;
        }
        p {
          font-weight: 300;
          font-size: 18px;
          line-height: 28px;
          @media (max-width: 576px) {
            text-align: center;
          }
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
    width: 100px;
    height: 5px;
    border-bottom: 5px dashed #f2f2f2;
    margin: 0 20px;
    @media (max-width: 1200px) {
      height: 50px;
      width: 5px;
      border-bottom: none;
      border-left: 15px dashed #f2f2f2;
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
      margin-top: 30px;
      max-width: 170px;
      text-align: center;
      @media ${deviceMax.laptopM} {
        margin-top: 54px;
      }
      @media ${deviceMax.mobileL} {
        font-size: 18px;
        margin-top: 10px;
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
        left: 6vw;
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
        left: 1vw;
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
}
`;

export const FooterContainer = styled.div`
    background: linear-gradient(#3e3e3e 0%, #343434 49.75%, #262525 100%);
    height: 100vh;
`;

export const ConsultationContainer = styled.div`
    background: white;
    height: 100vh;
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

export const ContactContainer = styled.div`
    background: rgba(220,220,220,0.19);
    height: fit-content;
    padding: 110px 88px 110px 10%;
    font-family: Poppins;
    @media (max-width: 576px) {
      padding:50px 25px 50px 25px;
    }
    form {
      button {
        margin-top: 24px;
        width: 550px;
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
        max-width: 550px;
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
      span {
        max-width: 400px;
        margin-left: 30px;
        font-size: 9px;
        line-height: 28px;
        font-weight: 600;
        text-align: left;
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
    }
`;

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
    font-size: 55px;
    line-height: 76px;
    margin-bottom: 32px;
    @media (max-width: 1024px) {
      padding: 0 25px;
      font-size: 35px;
      line-height: 46px;
    }
  }

  p {
    margin-bottom: 32px;
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    @media (max-width: 1024px) {
      padding: 0 25px;
      font-size: 16px;
    }
  }
  .decoration {
    position: absolute;
    left: -254px;
    top: -172px;
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
      background: #F1F1F1;
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
`;

