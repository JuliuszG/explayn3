import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { deviceMin, deviceMax } from '../../utils/breakpoints';

export const BenefitsWrapper = styled.div`
    font-family: Poppins;
    background: linear-gradient(#3e3e3e 0%, #343434 49.75%, #262525 100%);
    padding: 185px 200px 39px 200px;   
    h2 {
        margin-bottom: 182px;
        color: white;
        font-size: 55px;
        line-height: 76px;
        font-weight: 600;
        line-spacing: 76px;
    }
    .benefit-wrapper {
        display:grid;
        grid-template-columns: 1fr 1fr; 
        column-gap: 160px;
    }
`;
export const BenefitCard = styled.div` 
    color: white;
    .image {
        margin: auto 0;
    }
    .card {
        display: grid;
        grid-template-columns:80px 1fr;
        margin-bottom: 30px;
    }
    .title {
        font-weight: 600;
        font-size: 27px;
        line-height: 39px;
        margin-left: 50px;
    }
    .text {
        margin-bottom: 143px;
        margin-left: 130px;
        font-weight: 300;
        font-size: 18px;
        line-height: 28px;
    }
`;

export const ClientWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 164px;
    font-family: Poppins;
    h2 {
        margin-bottom: 156px;
        font-weight: 600;
        font-size: 55px;
        line-height: 76px;
    }
    button {
        background: linear-gradient(#4c65ff 0%,#263380 180%);
        border-radius: 29px;
        color: white;
        padding: 12px 26px;
        border: none;
        opacity: 1;
        font-size: 16px;
        font-family: Poppins;
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
    margin-top: 90px;

    h5 {
      font-size: 22px;
      font-weight: 600;
      margin-top: 30px;
      @media ${deviceMax.laptopM} {
        margin-top: 54px;
      }
      @media ${deviceMax.mobileL} {
        font-size: 18px;
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
`;

export const ContactContainer = styled.div`
    background: rgba(220,220,220,0.19);
    height: fit-content;
    padding:110px 88px;
    font-family: Poppins;
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
        }
    }
     .input {
      display:grid;
      margin-bottom: 50px;
      .text {
        position: relative;
        width: 550px;
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
  background: white;
  h2 {
    font-weight: 600;
    font-size: 55px;
    line-height: 76px;
  }
`;
