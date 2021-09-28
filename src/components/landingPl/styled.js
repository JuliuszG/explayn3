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