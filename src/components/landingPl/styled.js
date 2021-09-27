import styled from 'styled-components';
import { colors } from '../../styles/colors';

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
    img {
        margin-bottom: 116px;
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