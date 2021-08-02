import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';
import { Link as ScLink } from 'react-scroll';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import { motion } from 'framer-motion';
import { colors } from '../../styles/colors';
import BG from '../../images/development/header/bgSteps.jpg';
import BGBranding from '../../images/branding_ikonki/duza kredka.svg';
import BGMarketing from '../../images/ikonki marketing/duzy glosnik.svg';
import Section3Bg from '../../images/development/header/section3bg.jpg';
import { deviceMin, deviceMax } from '../../utils/breakpoints';

const spin = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

`;

//blog/author.jsx
export const AuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Poppins';
  @media (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const AuthorImageWrapper = styled.div`
  width: 151px;
  height: 151px;
  margin-right: 53px;
  @media (max-width: 550px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;
export const AuthorInfo = styled.div`
  width: calc(100% - 200px);
  @media (max-width: 550px) {
    width: 100%;
  }
  small {
    font-weight: 600px;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 1.36px;
    color: #868686;
  }
  h3 {
    font-size: 30px;
    line-height: 50px;
    color: #000;
  }
`;

export const AboutAuthor = styled.p`
  font-size: 18px;
  line-height: 29px;
  letter-spacing: 0.05px;
  color: #000;
  width: 100%;
  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const AuthorPic = styled(Img)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

//blog/postSLider.jsx
export const PostSliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 10%;

  @media (max-width: 1300px) {
    transform: translateY(0%);
    margin-bottom: 5%;
    margin-top: 5%;
  }
  .trending {
    .post-cnt {
    }
    .slide {
    }
  }
  .title {
    display: block;
    font-family: 'Poppins';
    font-size: 3rem;
    transform: translateY(-10px);
  }
`;

export const Trending = styled.div`
  width: 1500px;
  position: relative;
  margin: 0 auto;
  h3 {
    font-family: 'Poppins';
    font-size: 3rem;
    margin-bottom: 80px;
    text-align: center;
  }
  @media (max-width: 1400px) {
    padding: 2%;
    justify-content: center;
  }
`;

export const PostSliderItems = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const SlideImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #4c65ff;
  opacity: 0;
  transition: all 0.5s ease-in;
`;

export const SliderLink = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  @media (hover: hover) {
    opacity: 0;
  }
  a {
    color: #4c65ff;
    text-decoration: none;
    font-size: 12px;
    letter-spacing: 1.36px;
    font-weight: 600;
  }
`;

export const Slide = styled.div`
  width: 400px;
  box-shadow: 0 0 40px #00000014;
  font-family: 'Poppins';
  cursor: pointer;
  margin-right: 50px;
  &:last-of-type {
    margin-right: 0;
  }
  @media (max-width: 1480px) {
    margin: 20px;
    width: 300px;
    height: 450px;
  }
  @media (max-width: 1100px) {
    margin: 20px;
    width: 60%;
    height: 650px;
  }
  @media (max-width: 750px) {
    margin: 20px;
    width: 100%;
    height: 450px;
  }
  &:hover ${SlideImageOverlay} {
    opacity: 0.2;
    z-index: 10;
  }
  &:hover ${SliderLink} {
    opacity: 1;
  }
`;

export const SlideImageContainer = styled.div`
  width: 100%;
  height: 50%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SlideContent = styled.div`
  height: 50%;
  width: 100%;
  padding: 20px 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 1480px) {
    padding: 20px;
  }
  @media (max-width: 1024px) {
    padding: 60px;
  }
  @media (max-width: 600px) {
    padding: 20px;
  }
  h3 {
    font-size: 25px;
    line-height: 40px;
    text-align: left;
    @media (max-width: 1480px) {
      font-size: 20px;
      line-height: 30px;
    }
    @media (max-width: 1024px) {
      font-size: 30px;
      line-height: 50px;
    }
    @media (max-width: 600px) {
      font-size: 20px;
      line-height: 30px;
    }
  }
`;

export const SlideContentDetails = styled.div`
  width: 100%;
  display: flex;
  font-size: 12px;
  color: #4c65ff;
  @media (max-width: 1500px) {
    font-size: 10px;
  }
  span {
    margin-right: 50px;
    @media (max-width: 1500px) {
      margin-right: 20px;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
  & span:last-child {
    color: #868686;
    text-transform: uppercase;
  }
`;

export const SlideImage = styled(Img)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

//blog/sidebar.jsx
export const SideBarWrapper = styled.aside`
  font-family: 'Poppins';
  width: 412px;
  padding-right: 20px;
  @media (max-width: 450px) {
    width: 100%;
  }
  h3 {
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 1.36px;
    color: #868686;
    margin-bottom: 20px;
    font-weight: 600;
  }
  .trending {
  }
`;

export const SideBarTrending = styled.div`
  a {
    text-decoration: none;
    margin-bottom: 20px;
    display: block;
    h2 {
      font-size: 30px;
      line-height: 50px;
      color: #000;
    }
  }
`;

export const SideBarTrendingFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SideBarTrendingFilter = styled.div`
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 0 25px;
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.22px;
  color: #000;
  border: 1px solid #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in;
  @media (hover: hover) {
    &:hover {
      border-color: #5163f6;
      background: #5163f6;
      color: #fff;
    }
  }
  ${({ isActive }) =>
    isActive && 'border-color: #5163f6; background: #5163f6; color: #fff;'}
`;

//blog/sideSocialMedia.jsx
export const SocialMediaWrapper = styled.div`
  margin-bottom: 59px;
  a {
    width: 34px;
    height: 34px;
    display: inline-block;
    margin-right: 40px;
    &:last-of-type {
      margin-right: 0;
    }
    @media (hover: hover) {
      &:hover svg path {
        fill: #636363;
      }
    }
    svg path {
      transition: 0.3s ease-in;
    }
  }
`;

//blog/sideNewsletter.jsx
export const NewsletterWrapper = styled.div`
  margin-bottom: 59px;
  background-color: #4a62f7;
  border: 1px solid #707070;
  border-radius: 16px;
  padding: 50px;
  @media (max-width: 1480px) {
    padding: 25px;
  }

  h3 {
    color: #ffffff;
  }
  p {
    font-size: 18px;
    line-height: 29px;
    letter-spacing: 0.05px;
    color: #fff;
    margin-bottom: 30px;
    @media (max-width: 1480px) {
      font-size: 12px;
    }
  }
  form {
    input {
      display: block;
      outline: none;
      border: none;
      border-bottom: 1px solid #ffffff;
      width: 100%;
      color: #ffffff;
      font-family: 'Poppins';
      font-weight: 600px;
      color: #fff;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 1.36px;
      margin-bottom: 32px;
      background: transparent;
      @media (max-width: 1480px) {
        font-size: 10px;
      }
      &::placeholder {
        font-family: 'Poppins';
        padding-left: 22px;
        font-weight: 600px;
        color: #ffffff;
        font-size: 12px;
        line-height: 18px;
        @media (max-width: 1480px) {
          font-size: 10px;
        }
        letter-spacing: 1.36px;
      }
    }
    button {
      padding: 7px 20px;
      font-family: 'Poppins';
      font-weight: 600;
      border: none;
      background: #e8ebfb;
      color: #4a62f7 !important;
      font-size: 13px;
      border-radius: 32px;
      display: inline-block;
      transition: all 0.3s ease 0s;
      letter-spacing: 0.65px;
      cursor: pointer;
      @media (hover: hover) {
        &:hover {
          color: #fff !important;
          font-weight: 600 !important;
          letter-spacing: 3px;
          background: none;
          background: #484d5b;
          -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
          -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
          transition: all 0.3s ease 0s;
        }
      }
    }
  }
`;

export const NewsletterThanks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  img {
    width: 40px;
    margin-bottom: 40px;
  }
`;

export const NewsletterDescription = styled.div`
  display: flex;
  align-items: flex-start;
  img {
    margin-top: 10px;
    margin-right: 20px;
  }
`;

//cases/caseBigScreen.jsx
export const BigScreenWrapper = styled.div`
  position: relative;
  height: 100vh;
  margin-top: 25%;
`;

export const BigScreenImage = styled(Img)`
  width: 100%;
  height: 100%;
`;

//cases/caseData.jsx
export const CaseDataWrapper = styled.section`
  display: flex;
  padding: 15%;
  font-family: 'Poppins';
  font-style: normal;
  color: ${colors.neutral100};
  @media (max-width: 1400px) {
    font-size: 14px;
  }
  @media (max-width: 1250px) {
    font-size: 10px;
  }
  @media (max-width: 968px) {
    font-size: 16px;
    flex-direction: column;
  }
  @media (max-width: 650px) {
    font-size: 12px;
  }
  @media (max-width: 450px) {
    font-size: 10px;
    padding: 10% 5%;
  }
`;

export const CaseDataLeft = styled.div`
  width: 70%;
  margin-right: 15%;
  @media (max-width: 968px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10%;
  }
  h2 {
    font-weight: 600;
    font-size: 3.3125em;
    line-height: 143.39%;
    margin-bottom: 8%;
  }
  p {
    padding-right: 10%;
    font-weight: 300;
    font-size: 1.1875em;
    line-height: 168.42%;
    margin-bottom: 8%;
  }
  a {
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 29px;
    color: ${colors.neutral100};
    border-bottom: 1.3px solid ${colors.neutral100};
    padding-bottom: 1%;
  }
`;

export const CaseDataRight = styled.ul`
  width: 440px;
  border: 1.3px solid ${colors.neutral30};
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 968px) {
    width: 100%;
    padding-left: 5%;
  }
  li {
    span {
      display: block;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: ${colors.neutral60};
    }
    font-weight: 600;
    font-size: 18px;
    line-height: 29px;
    border-bottom: 1px solid ${colors.neutral30};
    padding: 10% 0;
    &:last-of-type {
      border-bottom: none;
    }
  }
`;

//cases/caseDescription.jsx
export const CaseDescriptionWrapper = styled.section`
  position: relative;
  padding: 15% 15% 5%;
  font-family: 'Poppins';
  font-style: normal;
  color: ${colors.neutral100};
  @media (max-width: 1250px) {
    font-size: 14px;
  }
  @media (max-width: 950px) {
    font-size: 12px;
  }
  @media (max-width: 650px) {
    font-size: 10px;
    padding: 25% 5% 5%;
  }
  @media (max-width: 450px) {
    padding: 30% 5% 15%;
  }
  h2 {
    font-weight: 600;
    font-size: 3.3125em;
    line-height: 143.39%;
    width: 80%;
    margin-bottom: 8%;
    @media (max-width: 950px) {
      width: 100%;
    }
    @media (max-width: 650px) {
      font-size: 2.3125em;
    }
  }
`;

export const CaseDescriptionDescription = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
  p {
    width: 40%;
    font-weight: 300;
    font-size: 1.1875em;
    line-height: 168.42%;
    margin-bottom: 5%;
    @media (max-width: 650px) {
      width: 100%;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;

//cases/caseDoubleImage.jsx
export const CaseDoubleImageWrapper = styled.div`
  display: flex;
  margin: 5% 0;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const DoubleImageWrapper = styled.div`
  width: 50%;
  height: 80vh;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const CaseDoubleImageImage = styled(Img)`
  height: 100%;
  object-fit: contain;
`;

//case/caseLanding.jsx
export const CaseLandingWrapper = styled(BackgroundImage)`
  width: 100%;
  background-color: #040e18;
  background-position: center;
  background-size: cover;
  height: 100vh;
  position: relative;
`;

export const CaseLandingCircle = styled.div`
  width: 217px;
  height: 199px;
  position: absolute;
  bottom: -8%;
  right: 5%;
  @media (max-width: 650px) {
    width: 87px;
    height: 69.5px;
    bottom: -2%;
  }
`;

//case/caseLanding.jsx
export const CaseListWrapper = styled.section`
  padding: 15%;
  font-family: 'Poppins';
  font-style: normal;
  color: ${colors.neutral100};
  @media (max-width: 1400px) {
    font-size: 14px;
  }
  @media (max-width: 650px) {
    font-size: 12px;
    padding: 10% 5%;
  }
  h2 {
    font-weight: 600;
    font-size: 3.3125em;
    line-height: 143.39%;
    margin-bottom: 8%;
    @media (max-width: 650px) {
      font-size: 2em;
    }
  }
`;

export const CaseListContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 950px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    width: 40%;
    font-weight: 600;
    font-size: 1.5625em;
    line-height: 156%;
    @media (max-width: 950px) {
      margin-bottom: 10%;
      width: 100%;
    }
    @media (max-width: 650px) {
      font-size: 1.3em;
    }
  }
  ul {
    width: 40%;
    @media (max-width: 950px) {
      width: 100%;
    }
    li {
      display: flex;
      margin-bottom: 4%;
      @media (max-width: 1400px) {
        margin-bottom: 6%;
      }
      @media (max-width: 950px) {
        margin-bottom: 4%;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
      p {
        width: 100%;
        font-weight: 300;
        font-size: 1.1875em;
        line-height: 168.42%;
      }
      span {
        margin-right: 4%;
        margin-top: 1.5%;
        display: block;
        width: 1.5em;
        height: 1.5em;
      }
    }
  }
`;

//case/caseScreen.jsx
export const CaseScreenWrapper = styled.div`
  padding: 0 15% 5%;
  width: 100%;
  @media (max-width: 450px) {
    padding: 0 5%;
  }
`;

export const CaseScreenImage = styled(Img)`
  width: 100%;
  height: 100%;
`;

//case/caseScreen.jsx
export const CaseVideoWrapper = styled.div`
  padding: 0 10%;
  @media (max-width: 960px) {
    padding: 10% 0;
  }
`;

export const VideoWrapper = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  position: relative;
  overflow: hidden;
  .overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(${({ bg }) => bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px solid black;
    img {
      cursor: pointer;
    }
  }
  iframe {
    z-index: 40;
    width: 100%;
    height: 100%;
  }
`;
//thankyoucard.jsx

export const ThankYouCardWrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  padding: 5% 15%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  z-index: 999;
  @media (max-width: 1024px) {
    font-size: 14px;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 5.25em;
    letter-spacing: -1.34px;
    color: #000000;
    line-height: 110%;
    margin-bottom: 2.38vh;
    @media (max-width: 1680px) {
      width: 75%;
    }
    @media (max-width: 1250px) {
      width: 100%;
    }
    @media (max-width: 500px) {
      font-size: 4em;
    }
  }
  p {
    font-size: 1.25em;
    line-height: 145%;
    width: 50%;
    @media (max-width: 1024px) {
      width: 100%;
    }
    &:first-of-type {
      margin-bottom: 2%;
    }
  }
  button {
  }
`;
export const ThankYouButton = styled.button`
  width: 254px;
  height: 58px;
  border: 3px solid #5163f6;
  border-radius: 37px;
  background: transparent;
  font-size: 29px;
  outline: none;
  cursor: pointer;
  color: #5163f6;
  position: relative;
  margin-top: 5%;
  transition: color 0.6s ease-in;
  overflow: hidden;
  &:hover {
    color: #fff;
  }
  &:hover::after {
    right: -0.8px;
  }
  &:hover p {
    position: absolute;
    top: calc(50% - 25px);
    left: 0%;
  }
  p {
    width: 100%;
    height: 100%;
    z-index: 500;
  }
  &::after {
    content: '';
    display: block;
    width: 254px;
    height: 100px;
    background: #5163f6;
    position: absolute;
    right: -254px;
    top: -3px;
    transition: right 0.3s ease-in;
    z-index: 30;
  }
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    margin-top: 10%;
  }
`;

//loader.jsx
export const LoaderWrapper = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1111;
  background: #fff;
  h1 {
    font-family: 'Poppins';
    font-style: normal;
    color: ${colors.neutral100};
    font-size: 40px;
  }
  .loader {
    margin-top: 16px;
    border-top: 10px solid rgb(76, 101, 255);
    border-right: 10px solid rgba(136, 136, 136, 0.2);
    border-bottom: 10px solid rgba(136, 136, 136, 0.2);
    border-left: 10px solid rgba(136, 136, 136, 0.2);
    animation: ${spin} 0.9s linear infinite;
    border-radius: 50%;
    width: 64px;
    height: 64px;
  }
`;

//footer.jsx
export const FooterWrapper = styled.footer`
  width: 100%;
  height: 100vh;
  background: #272727;
  font-family: 'Poppins';
  padding: 100px 40px 0;
  position: relative;
  overflow: hidden;
  @media (max-width: 1024px) {
    padding: 10%;
  }
  h3 {
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    line-height: 153%;
    @media (max-width: 600px) {
      font-size: 18px;
    }
  }
  a {
    color: #aaaaaa;
    font-size: 14px;
    line-height: 120%;
    text-decoration: none;
    transition: 0.3s ease-in;
    @media (hover: hover) {
      &:hover {
        color: #fff;
      }
    }
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
  .cnt {
  }
  .site-links-column {
    display: flex;
    flex-direction: column;
    h3 {
      margin-bottom: 20px;
    }
    a {
      margin-bottom: 15px;
    }
  }
  .sl1 {
    grid-area: sl1;
  }
  .sl2 {
    grid-area: sl2;
  }
  .sl3 {
    grid-area: sl3;
  }
`;

export const FooterContent = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: auto;
  row-gap: 60px;
  grid-template-areas:
    'contact contact . . sl1 . sl2 . sl3'
    'newsletter newsletter newsletter . sl1 . sl2 . sl3'
    'social social social social . . . . .';
  @media (max-width: 1500px) {
    max-width: 1100px;
    grid-template-columns: repeat(10, 1fr);
    grid-template-areas:
      'contact contact . . . sl1 . sl2 . sl3'
      'newsletter newsletter newsletter newsletter . sl1 . sl2 .sl3'
      'social social social social . . . .';
  }
  @media (max-width: 1200px) {
    max-width: 800px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      'contact contact . .'
      'newsletter newsletter newsletter newsletter'
      'social social . .'
      'sl1 sl1 . .'
      'sl2 sl2 . .'
      'sl3 sl3 . .';
  }
  @media (max-width: 1024px) {
    max-width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'newsletter newsletter'
      'sl1 sl2'
      'sl3 sl3'
      'social .'
      'contact contact';
  }
  @media (max-width: 650px) {
    grid-template-areas:
      'newsletter newsletter'
      'sl1 sl2'
      'sl3 sl3'
      'social social'
      'contact contact';
  }
  @media (max-width: 600px) {
    column-gap: 20px;
  }
`;

export const FooterContactUs = styled.div`
  grid-area: contact;
  & div {
    margin: 12px 0;
  }
`;

export const FooterNewsletter = styled.div`
  grid-area: newsletter;
  p {
    color: #aaaaaa;
    font-size: 14px;
    line-height: 125%;
    margin-bottom: 40px;
    @media (max-width: 600px) {
      font-size: 14px;
    }
  }
`;

export const FooterFormWrapper = styled.div`
  display: flex;
  align-items: center;
  form {
    max-width: 600px;
    display: flex;
    align-items: center;
  }
  input {
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    border-bottom: 3px solid white;
    background: transparent;
    color: #aaaaaa;
    font-size: 16px;
    line-height: 135%;
    font-weight: 300;
    @media (max-width: 600px) {
      width: 70%;
    }
    &::placeholder {
      color: #aaaaaa;
      font-size: 16px;
      line-height: 125%;
      font-weight: 300;
    }
  }
  button {
    background: transparent;
    outline: none;
    border: none;
    color: #fff;
    font-size: 2.2rem;
    cursor: pointer;
    margin-left: 4%;
  }
`;

export const FotterSocialMedia = styled.div`
  grid-area: social;
  width: 100%;
`;

export const FooterSocialMediaContent = styled.div`
  margin-top: 23px;
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 650px) {
    max-width: 250px;
  }
  a {
    width: 50%;
    margin-bottom: 32px;
    &:nth-child(even) {
      text-align: end;
    }
  }
`;

export const FooterDecoration = styled.div`
  position: absolute;
  right: 0;
  bottom: 90px;
  width: 258px;
  @media (max-width: 1024px) {
    position: static;
    margin-left: auto;
  }
  @media (max-width: 600px) {
    width: 90px;
    height: 155px;
  }
`;
//contactForm.jsx

export const ContactFormWrapper = styled(motion.div)`
  min-height: 100%;
  padding: 5% 16%;
  z-index: 999;
  font-size: 15px;
  background-color: #fff;
  font-family: 'Poppins', sans-serif;
  position: relative;
  @media (max-width: 500px) {
    font-size: 12px;
  }
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 5.25em;
    letter-spacing: -1.34px;
    color: #000000;
    line-height: 148%;
    margin-bottom: 2.38vh;
    @media (max-width: 500px) {
      font-size: 4em;
    }
  }
  p,
  h4 {
    font-size: 1.5em;
    letter-spacing: -1.08px;
    color: #000000;
    line-height: 145%;
  }
  p {
    margin-bottom: 3vh;
    width: 50%;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  h4 {
    margin-bottom: 15px;
  }
  form {
    width: 50%;
    @media (max-width: 1600px) {
      width: 65%;
    }
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
`;

export const ContactCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 55%;
  margin-bottom: 0.99vh;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const ContactCategory = styled.label`
  margin-right: 5px;
  margin-bottom: 10px;
  font-weight: 300;
  padding: 3px;
  color: #1a1a1a;
  background-color: #fff;
  border: 1px solid #333;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-in;
  font-size: 20px;
  position: relative;
  user-select: none;
  input {
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    cursor: pointer;
    opacity: 0;
  }
  span {
    font-weight: 700;
  }
  ${({ isActive }) =>
    isActive && ' border-color: #5163f6; background: #5163f6; color: #fff;'}
  @media (hover: hover) {
    &:hover {
      border-color: #5163f6;
      background: #5163f6;
      color: #fff;
    }
  }
`;

export const FormErrorMessage = styled.small`
  color: red;
  display: block;
  ${({ space }) => space && 'margin-bottom: 3vh;'}
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3vh;
  &:last-of-type {
    margin-bottom: 0;
  }
  label {
    font-size: 1.5em;
    line-height: 148%;
  }
  input {
    border: none;
    border-bottom: 1px solid #d3d3d3;
    outline: none;
    font-size: 1.2em;
  }
  textarea {
    resize: none;
    outline: none;
    height: 11.7vh;
    border: none;
    border-bottom: 1px solid #d3d3d3;
  }
`;
export const FormButtonContainer = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    margin: 2vh 0 0 0;
  }
`;
export const FormSubmitButton = styled.button`
  padding: 13px 70px;
  font-family: 'Poppins';
  font-weight: 600;
  border: none;
  background-image: linear-gradient(#4c65ff 0%, #263380 180%);
  color: #ffffff !important;
  font-size: 20px;
  text-transform: uppercase;
  border-radius: 32px;
  display: inline-block;
  transition: all 0.3s ease 0s;
  letter-spacing: 0.65px;
  cursor: pointer;
  @media (hover: hover) {
    &:hover {
      color: #404040 !important;
      font-weight: 600 !important;
      letter-spacing: 3px;
      background: none;
      -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
      -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
      transition: all 0.3s ease 0s;
    }
  }
`;
export const ExitButton = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  border: none;
  width: 38px;
  height: 38px;
  background: transparent;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in;
  @media (max-width: 500px) {
    top: 3%;
  }
  &:hover {
    transform: rotate(-90deg);
  }
  .bar {
    width: 100%;
    height: 2px;
    background: #000;
    &:first-of-type {
      transform: translateY(0.8px) rotate(135deg);
    }
    &:last-of-type {
      transform: translateY(-0.8px) rotate(-135deg);
    }
  }
  .sr-only {
    display: none;
  }
`;
export const ContactDecoration = styled.img`
  position: absolute;
  top: 30%;
  right: 20%;
  @media (max-width: 1024px) {
    display: none;
  }
`;
//landingPage/team.jsx

export const TeamWrapper = styled.section`
  font-size: 16px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const TeamDescription = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  padding: 0% 18% 10%;
  @media (max-width: 650px) {
    padding: 18% 12%;
  }
  h2 {
    font-size: 44px;
    font-weight: 600;
    line-height: 138%;
    text-align: left;
    margin-bottom: 4%;
    @media (max-width: 650px) {
      font-size: 44px;
    }
  }
  p {
    width: 65%;
    font-size: 16px;
    font-weight: 300;
    line-height: 168%;
    text-align: left;
    @media (max-width: 950px) {
      width: 100%;
    }
  }
`;
//landingPage/partners.jsx

export const PartnersWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15vh;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const CardWrapper = styled.div`
  width: 25%;
  height: 380px;
  border: 1px solid ${colors.neutral30};
  @media (max-width: 1500px) {
    height: 350px;
  }
  @media (max-width: 1100px) {
    height: 280px;
  }
  @media (max-width: 850px) {
    width: 80%;
    height: 280px;
  }
  a {
    text-decoration: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color: ${colors.neutral60};
    .arrow {
      @media (max-width: 968px) {
        display: none;
      }
    }
  }
`;
export const CardLogo = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    height: 40%;
  }
`;
export const CardLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
`;
//landingPage/landing2.jsx

export const Landing2Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Poppins';
  overflow: hidden;
  position: relative;
  overflow: none;
  @media (max-width: 450px) {
    min-height: 90vh;
  }
  .decoration {
    position: absolute;
    @media (max-width: 1100px) {
      display: none;
    }
    img {
      width: 100%;
    }
    &-left {
      @media (max-width: 1600px) {
        width: 180px;
      }
      @media (max-width: 1440px) {
        width: 140px;
        left: -70px;
        bottom: 5%;
      }
      bottom: 10%;
      left: -7%;
    }
    &-right-top {
      bottom: 230px;
      right: 0;
      @media (max-width: 1600px) {
        width: 200px;
        bottom: 130px;
      }
    }
    &-right-bot {
      bottom: -52px;
      right: 216px;
      @media (max-width: 1600px) {
        width: 80px;
        bottom: -30px;
        right: 121px;
      }
    }
    &-top-left {
      top: -160px;
      right: 470px;
      @media (max-width: 1600px) {
        width: 100px;
        top: -122px;
        right: 370px;
      }
      @media (max-width: 1440px) {
        width: 80px;
        top: -95px;
        right: 370px;
      }
    }
    &-top-right {
      top: -35px;
      right: 630px;
      @media (max-width: 1600px) {
        width: 200px;
        top: -25px;
        right: 490px;
      }
      @media (max-width: 1440px) {
        width: 170px;
        top: -23px;
        right: 465px;
      }
    }
  }
  .scroll {
    width: 100px;
    position: absolute;
    bottom: 20px;
    left: calc(50% - 50px);
    cursor: pointer;
    .content {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .title {
        transform: translate(0, 25px);
        color: #cccccc;
      }
    }
  }
  .cnt {
    max-width: 1400px;
    margin: 10% auto;
    @media (max-width: 1600px) {
      max-width: 1000px;
      font-size: 13px;
    }
    @media (max-width: 1100px) {
      max-width: 750px;
      font-size: 10px;
    }
    @media (max-width: 850px) {
      padding: 20% 5%;
    }
    @media (max-width: 450px) {
      font-size: 8px;
    }
  }
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 0%;
    @media (max-width: 1100px) {
      align-items: flex-start;
    }
    .play {
      position: absolute;
      left: 0;
      z-index: -1;
      @media (max-width: 1100px) {
        top: -95px;
        left: -60px;
      }
      @media (max-width: 450px) {
        top: -75px;
        left: -55px;
      }
      img {
        width: 25em;
        @media (max-width: 1100px) {
          width: 20em;
        }
      }
    }
    h1 {
      font-size: 5.9375em;
      line-height: 126%;
      font-weight: 600;
      margin-left: 12%;
      @media (max-width: 1600px) {
        margin-left: 14%;
      }
      @media (max-width: 1100px) {
        margin-left: 0;
        margin-top: 20px;
        max-width: 400px;
      }
    }
    p {
      color: #000;
      font-weight: 300;
      font-size: 1.375em;
      line-height: 136%;
      width: 60%;
      padding-left: 140px;
      @media (max-width: 1600px) {
        margin-left: 50px;
      }
      @media (max-width: 1100px) {
        width: 70%;
        margin: 0;
        padding: 0;
        font-size: 1.5em;
        margin-top: 20px;
      }
      @media (max-width: 450px) {
        width: 90%;
      }
    }
    span.blue {
      color: #3f54d3;
    }
    span.white {
      color: #fff;
      @media (max-width: 1100px) {
        &.second {
          color: #000;
        }
      }
    }
  }
`;
//landingPages/landing.jsx

export const LandingWrapper = styled.section`
  width: 100%;
  min-height: 95vh;
  background: ${colors.neutral00};
  padding-left: 17%;
  display: flex;
  align-items: center;
  font-size: 16px;
  position: relative;
  @media (max-height: 1720px) {
    font-size: 13px;
  }
  @media (max-width: 1520px) {
    font-size: 12px;
  }
  @media (max-width: 1350px) {
    font-size: 11px;
  }
  @media (max-width: 1120px) {
    font-size: 10px;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    font-size: 14px;
    padding-left: 0;
    padding: 10% 15% 0;
  }
  @media (max-width: 650px) {
    font-size: 10px;
    padding: 15% 8%;
  }
  @media (max-width: 390px) {
    font-size: 8px;
  }
  .text {
    max-width: 60%;
    font-family: 'Poppins';
    font-style: normal;
    color: ${colors.neutral100};
    @media (max-width: 950px) {
      max-width: 100%;
      margin-top: 10%;
    }
    h1 {
      font-weight: 600;
      font-size: 5.125em;
      line-height: 119%;
      margin-bottom: 4%;
      @media (max-width: 650px) {
        line-height: 125%;
      }
    }
    p {
      max-width: 55%;
      font-weight: 300;
      font-size: 19px;
      line-height: 163%;
      @media (max-width: 950px) {
        max-width: 100%;
      }
    }
  }
`;

export const LandingScroll = styled(ScLink)`
  width: 10em;
  height: 10em;
  position: absolute;
  bottom: 20%;
  right: 17.5%;
  cursor: pointer;
  @media (max-width: 950px) {
    margin-top: 25%;
    position: static;
    width: 166px;
    height: 166px;
  }
  @media (orientation: landscape) {
    margin-top: 5%;
  }
  @media (max-width: 650px) {
    width: 122px;
    height: 122px;
  }
`;
export const LandingScrollWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
`;
export const LandingZigZag = styled.div`
  width: 17.5em;
  height: 3.5em;
  position: absolute;
  top: 30%;
  right: 10%;
  @media (max-width: 950px) {
    display: none;
  }
`;

//landingPage/abuotUs.jsx
export const AboutUsWrapper = styled(motion.section)`
  background: ${colors.neutral90};
  padding: 100px 0;
  a {
    text-decoration: none;
  }
  .cnt {
    padding-left: 100px;
    display: flex;
    justify-content: center;
    width: 100%;
    @media (max-width: 956px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &.first {
      margin-top: 80px;
    }
  }

  .btn__cnt {
    margin-top: 2%;
    display: flex;
    justify-content: center;
  }
`;

export const AboutUsHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5% 0 10%;
  font-size: 16px;
  @media (max-width: 956px) {
    font-size: 14px;
  }
  @media (max-width: 550px) {
    font-size: 10px;
  }
  .text {
    color: ${colors.neutral00};
    font-family: 'Poppins';
    font-style: normal;
    width: 70%;
    @media (max-width: 956px) {
      width: 100%;
    }
    h2 {
      font-weight: 600;
      font-size: 44px;
      line-height: 138%;
    }
    p {
      width: 60%;
      margin-top: 3%;
      font-weight: 300;
      font-size: 16px;
      line-height: 168%;
      @media (max-width: 956px) {
        width: 100%;
      }
    }
  }
`;

export const BoxWrapper = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  color: ${colors.neutral00};
  width: 500px;
  height: 310px;
  cursor: pointer;
  margin: 2% 0;
  @media (max-width: 1600px) {
    width: 400px;
  }
  @media (max-width: 1250px) {
    width: 300px;
  }
  @media (max-width: 956px) {
    max-width: 300px;
  }
  h3 {
    max-width: 240px;
    font-weight: 600;
    font-size: 22px;
    line-height: 168%;
    padding-bottom: 3%;
    border-bottom: 1px solid ${colors.neutral60};
    margin-bottom: 3%;
  }
  ul {
    list-style: none;
    margin-bottom: 20px;
    li {
      font-weight: normal;
      font-size: 16px;
      line-height: 170%;
      color: ${colors.neutral30};
    }
  }
  a {
    font-weight: 600;
    font-size: 14px;
    line-height: 170%;
    transition: all 0.3s ease-in;
    padding-bottom: 1%;
    border-bottom: 1.3px solid ${colors.neutral00};
    color: ${colors.neutral00};
    text-decoration: none;
  }
  @media (hover: hover) {
    a {
      opacity: 0;
    }
    &:hover a {
      opacity: 1;
    }
  }
`;

export const BoxImageWrapper = styled.div`
  width: 65px;
  height: 65px;
  padding: 0;
  position: relative;
  .hidden {
    opacity: 0;
  }
`;

export const BoxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top;
`;

//landingPage/caseStudy.jsx
export const CaseStudyWrapper = styled.section`
  position: relative;
  margin-bottom: 100px;
  .carousel__cnt {
    .slide:nth-of-type(even) {
      margin: 0 0.5%;
      @media (max-width: 650px) {
        margin: 80px 0;
      }
    }
  }
`;

export const CaseStudyHeaderWrapper = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  padding: 100px 100px 60px;
  color: ${colors.neutral100};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 650px) {
    justify-content: center;
    padding: 25% 10%;
    font-size: 10px;
  }
  h2 {
    font-weight: 600;
    font-size: 44px;
    line-height: 95%;
    margin-bottom: 30px;
  }
  p {
    width: 60%;
    font-weight: 300;
    font-size: 16px;
    line-height: 32px;
    @media (max-width: 650px) {
      width: 100%;
    }
  }
  .next {
    outline: none;
    border: none;
    cursor: pointer;
    background: transparent;
    width: 130px;
    height: 130px;
    display: inline-block;
    transition: 0.6s;
    padding: 0;
    perspective: 1000px;
    &:hover {
      transform: rotateZ(360deg);
    }
    @media (max-width: 1080px) {
      display: none;
    }
  }
`;

export const CaseStudySliderWrapper = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  font-family: 'Poppins';
  font-style: normal;
  font-size: 16px;
  @media (max-width: 1200px) {
    font-size: 14px;
  }
  @media (max-width: 1080px) {
    margin: 5vh 0;
    padding: 0 10%;
    font-size: 12px;
  }
  @media (max-width: 650px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
  .text__cnt {
    margin-top: 2%;
    margin-left: 3%;
    @media (max-width: 650px) {
      margin-top: 6%;
    }
  }
  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 153%;
    color: ${colors.neutral100};
  }
  p {
    font-weight: normal;
    font-size: 16epx;
    line-height: 181%;
    color: ${colors.neutral50};
  }
`;

export const CaseStudySliderImageWrapper = styled.div`
  height: 70%;
  overflow: hidden;
  > div {
    transition: all 0.5s ease-in-out;
  }
  &:hover > div {
    transform: scale(1.1);
  }
  @media (max-width: 968px) {
    height: 400px;
  }
`;

//landingPage/caseStudyMobile.jsx

export const MobileStudyWrapper = styled.section`
  position: relative;
  margin-bottom: 10%;
  font-family: 'Poppins';
  font-style: normal;
  color: ${colors.neutral100};
  #header__study__mobile {
    padding: 15% 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 650px) {
      font-size: 10px;
    }
  }
  h2 {
    font-weight: 600;
    font-size: 5em;
    line-height: 95%;
    margin-bottom: 3%;
  }
  p {
    width: 100%;
    font-weight: 300;
    font-size: 19px;
    line-height: 32px;
  }
`;
//services/steps.jsx

export const StepsWrapper = styled.div`
  background-image: url(${BG});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  padding-bottom: 280px;
  align-items: center;
  font-family: 'Poppins';
  .header {
    max-width: 1222px;
    display: flex;
    align-items: flex-start;
    color: #000;
    margin-bottom: 60px;
    @media (max-width: 1500px) {
      max-width: 900px;
    }
    @media (max-width: 1050px) {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 10%;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 44px;
      line-height: 138%;
      margin-right: 10px;
      font-weight: 600;
      @media (max-width: 1500px) {
        width: 55%;
      }
      @media (max-width: 1050px) {
        margin-right: 0;
        width: 100%;
        margin-bottom: 40px;
      }
    }
    p {
      width: 50%;
      font-size: 16px;
      line-height: 136%;
      font-weight: 300;
      @media (max-width: 1050px) {
        width: 100%;
      }
    }
  }
  .icons {
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
        padding-bottom: 5vh;
        padding-left: 0;
        padding-right: 0;
      }
    }
    .line {
      width: 100px;
      height: 5px;
      border-bottom: 5px dotted grey;
      margin: 0 20px;
      @media (max-width: 1200px) {
        height: 50px;
        width: 5px;
        border-bottom: none;
        border-left: 5px dotted grey;
        margin: 50px 0 20px;
      }
    }
    .icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 70px;
      max-height: 70px;
      position: relative;
      cursor: pointer;
      h5 {
        font-size: 22px;
        font-weight: 600;
        margin-top: 30px;
        @media (max-width: 1200px) {
          margin-top: 10px;
        }
      }
      @media (min-width: 1200px) and (hover: hover) {
        &:hover img {
          transition: 0.2s ease-in;
          transform: scale(1.1);
        }
        &:hover:nth-of-type(1)::after,
        &:hover:nth-of-type(3)::after,
        &:hover:nth-of-type(5)::after,
        &:hover:nth-of-type(7)::after,
        &:hover:nth-of-type(9)::after {
          display: block;
        }
        &:hover:nth-of-type(1)::before,
        &:hover:nth-of-type(3)::before,
        &:hover:nth-of-type(5)::before,
        &:hover:nth-of-type(7)::before,
        &:hover:nth-of-type(9)::before {
          display: block;
        }
        &:nth-of-type(1)::after {
          content: 'The development process starts with understanding your business goals. During the meeting, we assess the situation and discuss desired features and functionality for the website. We define the target audience and interview internal stakeholders to construct a tailored strategy.';
          display: none;
          position: absolute;
          top: 150px;
          left: 1vw;
          width: 40vw;
          max-height: 200px;
          background-color: #f5f6fa;
          padding: 30px;
          font-family: 'Poppins';
          font-size: 14px;
          line-height: 136%;
        }
        &:nth-child(1)::before {
          content: '';
          display: none;
          position: absolute;
          top: 140px;
          left: 30px;
          width: 30px;
          height: 30px;
          background-color: #f5f6fa;
          transform: rotate(-120deg) skew(25deg);
          z-index: 565;
        }
        &:nth-of-type(3)::after {
          content: 'Following the discovery phase, we identify and plan for specific resources needed to meet your website’s unique requirements. This is time to set a project timeline and define website structure and content navigation.';
          display: none;
          position: absolute;
          top: 150px;
          left: 1vw;
          width: 40vw;
          max-height: 200px;
          background-color: #f5f6fa;
          padding: 30px;
          font-family: 'Poppins';
          font-size: 14px;
          line-height: 136%;
        }
        &:nth-child(3)::before {
          content: '';
          display: none;
          position: absolute;
          top: 140px;
          left: 30px;
          width: 30px;
          height: 30px;
          background-color: #f5f6fa;
          transform: rotate(-120deg) skew(25deg);
          z-index: 565;
        }
        &:nth-child(5)::after {
          content: 'At this stage, the great ideas come to life. The visual concept of the website starts to shape. Basing on it, we create an impactful User Interface that generates a customer-focused experience. To wrap up the design phase, we submit a project for the final client’s approval before advancing to the development stage.';
          display: none;
          position: absolute;
          top: 150px;
          width: 40vw;
          max-height: 200px;
          background-color: #f5f6fa;
          padding: 30px;
          font-family: 'Poppins';
          font-size: 14px;
          line-height: 136%;
        }
        &:nth-of-type(5)::before {
          content: '';
          display: none;
          position: absolute;
          top: 140px;
          left: 15px;
          width: 30px;
          height: 30px;
          background-color: #f5f6fa;
          transform: rotate(-120deg) skew(25deg);
          z-index: 565;
        }
        &:nth-of-type(7)::after {
          content: 'Code can bring your beautiful design concepts to life. From framework to security, development work is driven to achieve the best functionality based on requirements.';
          display: none;
          position: absolute;
          top: 150px;
          right: 1vw;
          width: 40vw;
          max-height: 200px;
          background-color: #f5f6fa;
          padding: 30px;
          font-family: 'Poppins';
          font-size: 14px;
          line-height: 136%;
        }
        &:nth-child(7)::before {
          content: '';
          display: none;
          position: absolute;
          top: 140px;
          left: 10px;
          width: 30px;
          height: 30px;
          background-color: #f5f6fa;
          transform: rotate(-120deg) skew(25deg);
          z-index: 565;
        }
        &:nth-child(9)::after {
          content: 'By doing all the necessary testing, we make sure your website will look great on computers, smartphones, and tablets. We give the final touches and the website is ready to upload online.';
          display: none;
          position: absolute;
          top: 150px;
          right: 1vw;
          width: 40vw;
          max-height: 200px;
          background-color: #f5f6fa;
          padding: 30px;
          font-family: 'Poppins';
          font-size: 14px;
          line-height: 136%;
        }
        &:nth-of-type(9)::before {
          content: '';
          display: none;
          position: absolute;
          top: 140px;
          left: 15px;
          width: 30px;
          height: 30px;
          background-color: #f5f6fa;
          transform: rotate(-120deg) skew(25deg);
          z-index: 565;
        }
      }
      @media (max-width: 1300px) {
        width: 80%;
        height: 80%;
      }
      @media (max-width: 1150px) {
        width: 50%;
        height: 50%;
      }
      @media (max-width: 1200px) {
        max-width: 100px;
        max-height: 100px;
        width: 100px;
        height: 100px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
//services/brandingSteps.jsx

export const BrandingStepsWrapper = styled(StepsWrapper)`
  background-image: url(${BGBranding});
  .icon {
    @media (min-width: 1200px) and (hover: hover) {
      &:nth-of-type(1)::after {
        content: 'Our process begins with getting to know your business. We start by identifying your long-term goals and related challenges to thoroughly understand your industry and competitors. In-depth analysis allows us to create the best possible picture of your brand.';
      }
      &:nth-of-type(3)::after {
        content: 'We develop a detailed plan of action upon which we will base an effective brand strategy. With an in-depthmarket analysis and audience definition, our team maps out the key points that will help create a cohesive presence for your brand.';
      }
      &:nth-child(5)::after {
        content: "This is our favorite part of the process. It's where we use our knowledge, imagination, and creativity to develop the strategy into a visual image of the brand. When designing a brand identity, we look at touchpoints and see if they accurately represent the values and personality identified in the strategy.";
      }
      &:nth-of-type(7)::after {
        content: 'The brand is now ready for prime time! We gather all the information and identify the assets needed to implement the brand - from business cards to packaging to advertising. Our efforts are designed to get your brand seen by as many eyes as possible.';
      }
      &:nth-child(9)::after {
        content: 'This is the final step in which we monitor the feedback received from the market. What are consumers saying about our brand? Have we increased awareness and interest? We test all assumptions and review the project for optimization.';
      }
    }
  }
`;
//services/marketingSteps.jsx

export const MarketingStepsWrapper = styled(StepsWrapper)`
  background-image: url(${BGMarketing});
  .icon {
    @media (min-width: 1200px) and (hover: hover) {
      &:nth-of-type(1)::after {
        content: 'Great things are built on research. The first phase oscillate around meetings to learn about your business goals and challenges. Once we have a better understanding of your needs we begin multi-platform research including target audience analysis, user journey analysis, keyword data & market condition.';
      }
      &:nth-of-type(3)::after {
        content: "Once we’redone with research and identifying tasks, it's time to develop your digital marketing strategy. This is where we will develop a thorough action plan that aligns with your goals. A detailed strategy will include all the components and tools needed to reach your audience.";
      }
      &:nth-child(5)::after {
        content: 'This is our favorite stage, where we use all our grey cells to deliver creative and engaging content for your future customer. We use knowledge and techniques to create creations geared towards conversions that are ultimately meant to "close the deal".';
      }
      &:nth-of-type(7)::after {
        content: "It's showtime.  At this moment, we introduce you and your value proposition to clients. We focus on meeting specific objectives and tailoring activities to maximize the effect. We make sure the campaign runs smoothly, we test the content, and analyze the results.";
      }
      &:nth-child(9)::after {
        content: 'At this stage, we monitor campaigns and study customer behavior. We also evaluate the effectiveness of the campaign and the resources created. We create reports and discussing future steps.';
      }
    }
  }
`;
//navigation/contactUs.jsx

export const PageButton = styled.div`
  width: 180px;
  height: 44px;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: 'Poppins';
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  transition: all 0.1s ease-in;
  cursor: pointer;
  &:hover {
    color: #404040;
    font-weight: 600;
    letter-spacing: 3px;
    background: #fff;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.3s ease 0s;
  }
`;

export const ContactUsButton = styled(PageButton)`
  background-image: linear-gradient(#4c65ff 0%, #263380 180%);
  color: ${({ text }) => (text ? text : '#fff')};
`;

export const AboutUsButton = styled(PageButton)`
  background: ${colors.neutral80};
  color: ${colors.neutral00};
  &:hover {
  }
`;

//navigation/desktop.jsx

export const DesktopNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
  background: transparent;
  z-index: 100;
  width: 100%;
  .logo-link {
    margin-left: 80px;
  }
  a {
    text-decoration: none;
  }
  .desktop__cnt {
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1300px) {
      width: 30%;
    }
    &:first-of-type {
      width: 336px;
    }
    &:last-of-type {
      width: 256px;
    }
  }
`;
export const BlogTitle = styled.div`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  text-decoration: none;
  color: #000000;
  span {
    color: #4b66ff;
    margin: 0 3px;
  }
`;

//navigation/menuIcon.jsx

export const Burger = styled.div`
  width: ${({ customWidth }) => customWidth};
  height: ${({ customHeight }) => customHeight};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  border: none;
  padding: 0;
`;
//navigation/logoImg.jsx

export const LogoImageComponent = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ImageSvg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-width: 160px;
`;
export const LogoImageWrapper = styled.div`
  width: ${({ customWidth }) => customWidth};
  height: ${({ customHeight }) => customHeight};
`;
//navigation/menu.jsx

export const MenuWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background: ${colors.neutral90};
  z-index: 999;
  overflow-y: auto;
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
  .cnt {
    width: 367px;
    display: flex;
    justify-content: space-between;
  }
`;

export const ExitMenu = styled.div`
  background: transparent;
  outline: none;
  cursor: pointer;
  width: 22px;
  height: 22px;
  padding: 0;
  position: relative;
  z-index: 100;
  &:after {
    content: '';
    height: 100%;
    border-left: 2px solid #fff;
    position: absolute;
    transform: rotate(45deg);
    left: 10px;
  }
  :before {
    content: '';
    height: 100%;
    border-left: 2px solid #fff;
    position: absolute;
    transform: rotate(-45deg);
    left: 10px;
  }
  .sr {
    display: none;
  }
`;
export const MenuImage = styled(Img)`
  width: 30%;
`;
export const LinksWrapper = styled.ul`
  padding: 5%;
  font-size: 16px;
  @media (max-height: 1720px) {
    font-size: 14px;
  }
  @media (max-width: 1520px) {
    font-size: 12px;
  }
  @media (max-width: 1350px) {
    font-size: 8px;
  }
  @media (max-width: 1120px) and (min-height: 1300px) {
    font-size: 16px;
  }
  .dropdown.active {
    display: block;
  }
  .longdash.active {
    display: inline-block;
  }
  .dropLink {
    cursor: pointer;
  }
  li {
    margin-bottom: 1%;
    position: relative;
    span {
      margin-right: 5%;
    }
    a {
      text-decoration: none;
      color: ${colors.neutral00};
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 2.75em;
      line-height: 272.72%;
      span {
        color: ${colors.neutral40};
        font-size: calc(1em / 2.3);
        font-style: normal;
        font-weight: 600;
      }
    }
    .dropdown {
      position: absolute;
      display: none;
      top: 3vh;
      right: 50%;
      z-index: 1000;
      @media (max-width: 1350px) {
        top: 0;
      }
      @media (max-width: 1366px) and (min-height: 1024px) {
        right: 40%;
      }
      @media (max-width: 1024px) {
        right: 45%;
        top: 0;
      }
      a {
        font-size: 1.5625em;
        line-height: 61px;
      }
    }
    .longdash {
      width: 100px;
      height: 1px;
      background: ${colors.neutral00};
      margin-left: 10%;
    }
  }
`;

export const MenuFooterWrapper = styled.div`
  padding: 0 10%;
  color: #fff;
  font-size: 16px;
  margin-top: auto;
  @media (max-height: 1720px) {
    font-size: 16px;
  }
  @media (max-width: 1520px) {
    font-size: 15px;
  }
  @media (max-width: 1350px) {
    font-size: 14px;
  }
  @media (max-width: 1120px) {
    font-size: 13px;
  }
  @media (max-width: 1120px) and (min-height: 768px) {
    margin: 15% 0 5%;
    font-size: 14px;
  }
  @media (max-width: 1120px) and (min-height: 1300px) {
    margin: 40% 0 10%;
    font-size: 16px;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  .main {
    display: flex;
    justify-content: space-between;
    position: relative;
    align-content: flex-start;
    .social {
      width: 25%;
      display: flex;
      justify-content: space-between;
      .row {
        display: flex;
        flex-direction: column;
        a {
          font-family: 'Poppins';
          font-size: 1.0625em;
          font-style: normal;
          font-weight: 300;
          line-height: 2.8125em;
          letter-spacing: 0em;
          text-align: left;
        }
      }
    }
    .contact {
      font-family: 'Poppins';
      position: absolute;
      right: 0;
      bottom: 10%;
      .header {
        font-style: normal;
        font-weight: 600;
        font-size: 1.5625em;
        line-height: 7.5em;
      }
      a {
        display: block;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 1.1875em;
        margin-bottom: 5%;
      }
    }
  }
  .copy {
    display: flex;
    justify-content: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 0.9375em;
    line-height: 3.625em;
  }
`;
//navigation/menuLanguage.jsx

export const LangMenu = styled.div`
  display: flex;
  align-items: center;
  color: ${({ color }) => (color ? color : '#9498B2')};

  .line {
    width: 40px;
    height: 1px;
    background: ${({ color }) => (color ? color : colors.neutral40)};
  }
`;
export const LangButton = styled.button`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 1.0625em;
  line-height: 119.5%;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0;
  border: none;
  background: transparent;
  outline: none;
  color: #9498b2;
  &:first-of-type {
    margin-right: 10px;
  }
  &:last-of-type {
    margin-left: 10px;
  }
  ${({ isActive }) => isActive && 'color: #fff;'}
`;
//navigation/langSwitch.jsx

export const SwitchLangButton = styled.button`
  font-family: 'Poppins';
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  outline: none;
  background: transparent;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  color: ${({ color }) => (color ? color : '#000')};
`;

//navigation/mobile.jsx

export const MobileNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6%;
  height: 75px;
  background: ${colors.neutral10};
  .contact-icon {
    border: none;
    background: transparent;
    outline: none;
  }
  .dec {
    width: 1px;
    height: 70px;
    background: ${colors.neutral30};
  }
`;
//navigation/mobileMenu.jsx

export const MobileMenuWrapper = styled.div`
  background: ${colors.neutral90};
  width: 100%;
  height: 100%;
  padding: 5%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  overflow-y: auto;
  .cnt {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;
export const MobileHeaderMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
    width: 22px;
    height: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    span {
      display: block;
      width: 100%;
      height: 2.3px;
      background: #fff;
      &:first-of-type {
        transform: rotate(45deg) translateY(-1px) translateX(-1px);
      }
      &:last-of-type {
        transform: rotate(-45deg) translateX(2.2px) translateY(-2px);
      }
    }
  }
`;
export const MobileMenuLinks = styled.ul`
  padding: 10% 10% 5%;
  font-size: 16px;
  .dropdown.active {
    display: block;
  }
  .dropLink {
    cursor: pointer;
  }
  li {
    padding: 6% 0;
    position: relative;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    span {
      margin-right: 5%;
    }
    a {
      text-decoration: none;
      color: #fff;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 1.5em;
      line-height: 36px;
      span {
        color: #9498b2;
      }
    }
    .dropdown {
      display: none;
      z-index: 1000;
      li {
        border: none;
      }
      a {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 1.125em;
        line-height: 27px;
      }
    }
  }
`;
export const MobileFooterMenu = styled.div`
  padding: 10% 0 0;
  padding-left: 5%;
  color: #fff;
  z-index: 500;
  margin: 30% 0 10%;
  .contact {
    margin-bottom: 15%;
    .header {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
      margin-bottom: 10%;
    }
    a {
      color: #fff;
      text-decoration: none;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      display: block;
    }
  }
  .social {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-size: 13px;
      line-height: 19px;
      color: #fff;
      text-decoration: none;
    }
  }
`;
export const MobileMenuImage = styled(Img)`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -25%;
`;

//navigation/menuMobile.jsx

export const MobileMenuHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8%;
`;

export const MenuLinksMobile = styled.div`
  width: 100%;
  padding: 8%;
  .item {
    padding: 8% 0;
    width: 100%;
    font-weight: 600;
    font-size: 1.5em;
    line-height: 150%;
    color: ${colors.neutral00};
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    .item-link {
      display: flex;
    }
    &:last-of-type {
      border-bottom: none;
    }
    a {
      width: 100%;
      text-decoration: none;
      display: block;
      color: ${colors.neutral00};
    }
    .number {
      color: ${colors.neutral40};
      margin-right: 0.8em;
    }
  }
`;
export const MobileSubMenu = styled.div`
  width: 100%;
  padding: 5% 0;
  font-family: 'Poppins';
  font-style: normal;
  display: block;
  a {
    padding: 2% 0;
    width: 100%;
    display: block;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.8em;
    line-height: 150%;
    color: ${colors.neutral00};
  }
`;

export const MobileMenuFooter = styled.div`
  width: 100%;
  padding: 8%;
  h3 {
    color: ${colors.neutral00};
    font-weight: 600;
    font-size: 1.5em;
    line-height: 150%;
    margin-bottom: 5%;
  }
  a {
    text-decoration: none;
    color: ${colors.neutral00};
    font-weight: 300;
    font-size: 1em;
    line-height: 150%;
    display: block;
  }
  .socials {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10%;
    a {
      text-decoration: none;
      color: ${colors.neutral00};
      font-weight: 300;
      font-size: 0.8125em;
      line-height: 146.15%;
    }
  }
`;

export const MobileMenuContainer = styled(motion.div)`
  background: ${colors.neutral90};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  overflow-y: auto;
  font-family: 'Poppins';
  font-style: normal;
  transition: all 0.5s ease-in;
  .cnt {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }
`;

export const Exit = styled.div`
  background: transparent;
  outline: none;
  cursor: pointer;
  width: 22px;
  height: 22px;
  padding: 0;
  position: relative;
  z-index: 100;
  &:after {
    content: '';
    height: 100%;
    border-left: 2px solid #fff;
    position: absolute;
    transform: rotate(45deg);
    left: 10px;
  }
  :before {
    content: '';
    height: 100%;
    border-left: 2px solid #fff;
    position: absolute;
    transform: rotate(-45deg);
    left: 10px;
  }
  .sr {
    display: none;
  }
`;
//navigation/menuDesktop.jsx

export const DesktopMenu = styled(motion.div)`
  background: ${colors.neutral90};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const DesktopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3%;
`;

export const DesktopLinks = styled.div`
  padding: 0 10%;
  width: 100%;
  display: flex;
  @media (max-width: 1650px) {
    font-size: 12px;
  }
  @media (max-width: 1050px) {
    font-size: 10px;
  }
  @media (width: 1024px) and (height: 1366px) {
    font-size: 16px;
  }
  .main:hover .item:not(:hover) a {
    color: ${({ subMenuIsOn }) => !subMenuIsOn && 'grey'};
  }
  .main {
    width: 40em;
    font-family: 'Poppins';
    font-style: normal;
    .item {
      cursor: pointer;
      display: block;
      text-decoration: none;
      color: ${colors.neutral00};
      font-weight: 600;
      font-size: 32px;
      line-height: 220%;
      display: flex;
      &:nth-of-type(2) a {
        color: ${({ subMenuIsOn }) => subMenuIsOn && colors.neutral00};
      }
      a {
        display: block;
        text-decoration: none;
        color: ${({ subMenuIsOn }) =>
          subMenuIsOn ? 'grey' : colors.neutral00};
        transition: all 0.3s ease-in-out;
      }
      .number {
        color: ${colors.neutral40};
        font-size: calc(1em / 2.3);
        font-style: normal;
        font-weight: 600;
        margin-top: 0.7%;
        margin-right: 4%;
      }
    }
  }
  .line {
    display: block;
    width: 0%;
    height: 1px;
    background: ${colors.neutral00};
    margin-left: -12em;
    margin-top: 12em;
  }
  .sub-menu:hover .sub-item:not(:hover) a {
    color: grey;
  }
  .sub-menu {
    width: 30%;
    font-family: 'Poppins';
    font-style: normal;
    margin-top: 10em;
    margin-left: 8em;
    .sub-item {
      display: block;
      a {
        text-decoration: none;
        color: ${colors.neutral00};
        display: block;
        font-weight: 600;
        font-size: 1.5625em;
        line-height: 244%;
      }
    }
  }
`;

export const DesktopMenuFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
  font-family: 'Poppins';
  font-style: normal;
  color: ${colors.neutral00};
  .social {
    display: flex;
    margin-top: 50px;
    align-self: flex-end;
    .row {
      flex-grow: 1;
      &:first-of-type {
        margin-right: 12em;
      }
      a {
        display: block;
        color: #aaa;
        text-decoration: none;
        font-size: 16px;
        line-height: 265%;
        transition: 0.3s ease-in;
        &:hover {
          color: #fff;
        }
      }
    }
  }
  .contact {
    position: relative;
    @media (max-width: 1650px) {
      font-size: 12px;
    }
    @media (max-width: 1050px) {
      font-size: 10px;
    }
    bottom: -20px;
    h3 {
      font-weight: 600;
      font-size: 22px;
      line-height: 180%;
    }
    a {
      display: block;
      color: ${colors.neutral00};
      text-decoration: none;
      font-weight: 300;
      font-size: 16px;
      line-height: 168%;
    }
  }
`;

export const Copy = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1650px) {
    font-size: 12px;
  }
  @media (max-width: 1050px) {
    font-size: 10px;
  }
  p {
    color: ${colors.neutral30};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 386.66%;
  }
`;
//pages/marketing.jsx

export const ServiceWrapper = styled.div`
  font-family: 'Poppins';
`;

export const ServicesTopSection = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media ${deviceMax.tabletL} {
    justify-content: flex-end;
    padding: 0 16px;
    padding-bottom: 120px;
    flex-direction: column-reverse;
    min-height: 100%;
    align-items: baseline;
  }
`;

export const ServicesScrollLink = styled(ScLink)`
  width: 100px;
  position: absolute;
  bottom: 20px;
  left: calc(50% - 50px);
  cursor: pointer;
  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .title {
      transform: translate(0, 25px);
      color: #cccccc;
    }
  }
`;

export const ServicesContent = styled.div`
  max-width: 500px;
  padding-right: 15px;
`;

export const ServicesMainHeader = styled.h1`
  color: #000;
  font-weight: 600;
  font-size: 66px;
  line-height: 120%;
  margin-bottom: 32px;
  @media ${deviceMax.mobileL} {
    font-size: 44px;
  }
`;

export const ServicesMainDescription = styled.p`
  width: 90%;
  font-size: 16px;
  line-height: 136%;
  color: #000;
  font-weight: 300;
  @media ${deviceMax.laptop} {
    width: 100%;
  }
  @media ${deviceMax.mobileL} {
    font-size: 14px;
  }
`;

export const ServicesImgContainer = styled.div`
  & img {
    max-width: 530px;
    height: 100%;
    object-fit: cover;
  }
`;

export const SentenceSection = styled.div`
  width: 100%;
  background-image: url(${Section3Bg});
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 120px 0;
`;

export const SentenceSectionContent = styled.div`
  width: 100%;
  padding: 0 180px;
  @media (max-width: 1500px) {
    max-width: 800px;
  }
  @media (max-width: 1024px) {
    padding: 5% 10%;
  }
  h2 {
    max-width: 1000px;
    font-size: 44px;
    line-height: 138%;
    font-weight: 600;
    color: #000;
    @media (max-width: 650px) {
      font-size: 36px;
    }
    @media (max-width: 450px) {
      font-size: 28px;
    }
    span {
      color: ${({ section }) => {
        switch (section) {
          case 'branding':
            return '#e36860';
          case 'development':
            return '#571ab6';
          case 'marketing':
            return '#4096ea';
        }
      }};
    }
  }
  .decoration {
    background-color: ${({ section }) => {
      switch (section) {
        case 'branding':
          return '#e36860';
        case 'development':
          return '#571ab6';
        case 'marketing':
          return '#4096ea';
      }
    }};
    height: 6px;
    width: 98.5px;
    margin: 90px 0;
  }
  .text-cnt {
    display: flex;
    justify-content: flex-start;
    font-weight: 300;
    font-size: 16px;
    line-height: 136%;
    @media (max-width: 1024px) {
      flex-direction: column;
    }
    p {
      max-width: 512px;
      &:first-of-type {
        margin-right: 15%;
        @media (max-width: 1024px) {
          margin-right: 0;
          margin-bottom: 15%;
        }
      }
      @media (max-width: 1024px) {
        width: 100%;
      }
    }
  }
`;

export const BenefitsSection = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 80px 180px;
  background: ${({ light }) => (light ? '#fff' : '#f5f6fa')};
  h2 {
    max-width: 740px;
    font-size: 44px;
    line-height: 138%;
    margin-bottom: 15px;
    font-weight: 600;
    @media (max-width: 600px) {
      width: 100%;
    }
  }
  p {
    max-width: 532px;
    font-size: 16px;
    line-height: 136%;
    margin-bottom: 90px;
    font-weight: 300;
  }

  & .item {
    width: 100%;
    display: flex;
    align-items: flex-start;
    @media (max-width: 450px) {
      flex-direction: column;
    }
    & .item-icon {
      margin-right: 20px;
      @media (max-width: 450px) {
        margin: 0 0 20px 0;
      }
      &.res img {
        width: 100%;
        height: 100%;
        margin-top: 22px;
        padding-right: 10px;
      }
      &.sca img {
        width: 100%;
        height: 100%;
        margin-top: 22px;
        padding-right: 10px;
      }
      &.fun img {
        width: 100%;
        height: 100%;
        margin-top: 22px;
        padding-right: 10px;
      }
      &.sec img {
        width: 100%;
        height: 100%;
        margin-top: 22px;
        padding-right: 10px;
      }
    }
    & .item-content {
      margin-top: 30px;
      h4 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
      }
      p {
        font-size: 16px;
        line-height: 136%;
        font-weight: 300;
      }
    }
  }
`;

export const BenefitsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 556px);
  column-gap: 200px;
  row-gap: 60px;
  @media (max-width: 1600px) {
    grid-template-columns: repeat(2, 450px);
    column-gap: 160px;
  }
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 400px);
    column-gap: 120px;
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 100%);
    column-gap: 120px;
  }
`;

//pages/development.jsx

export const TechnologySection = styled.div`
  width: 100%;
  background: #f5f6fa;
  padding: 80px 180px;
  display: flex;
  justify-content: space-between;
  font-family: 'Poppins';
  @media (max-width: 1300px) {
    flex-direction: column;
  }
  & .info {
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 1300px) {
      width: 100%;
    }
    h2 {
      font-size: 44px;
      line-height: 138%;
      margin-bottom: 60px;
      font-weight: 600;
      @media (max-width: 450px) {
        font-size: 44px;
      }
    }
    p {
      font-weight: 300;
      line-height: 136%;
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
  & .icons {
    width: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
      width: 100%;
    }
    .cnt {
      display: grid;
      column-gap: 70px;
      row-gap: 90px;
      grid-template-columns: repeat(4, 80px);
      @media (max-width: 700px) {
        grid-template-columns: repeat(3, 80px);
      }
      @media (max-width: 500px) {
        grid-template-columns: repeat(2, 80px);
      }
    }
    .icon-cnt {
      .icon {
        width: 74px;
        height: 74px;
        margin-bottom: 30px;
        transition: all 0.2s ease-in;
        @media (hover: hover) {
          &:hover {
            transform: scale(1.2);
          }
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      h4 {
        font-size: 16px;
        font-weight: 300;
        text-align: center;
      }
    }
  }
`;

//pages/blog.jsx

export const BlogWrapper = styled.div`
  font-family: 'Poppins';
  width: 100%;
  margin: 28vh 0;
  @media (max-width: 900px) {
    margin: 5vh 0;
  }
  .main-title {
    font-weight: 600;
    font-size: 55px;
    color: #000000;
    @media (max-width: 1100px) {
      margin-left: 5%;
    }
    position: absolute;
    left: 0;
  }
`;

export const BlogContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48.44px;
  margin: 0 auto;
  max-width: 1500px;
  position: relative;
  padding-top: 10vh;
  @media (max-width: 1700px) {
    max-width: 1200px;
  }
  @media (max-width: 1300px) {
    max-width: 1050px;
  }
  @media (max-width: 1024px) {
    padding: 10vh 5% 0;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 680px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;
export const BlogPost = styled(Link)`
  box-shadow: 0px 0px 40px #00000014;
  text-decoration: none;
  min-height: 637px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  @media (max-width: 680px) {
    min-height: 500px;
  }
  @media (hover: hover) {
    &:hover .img .overlay {
      opacity: 0.19;
    }
    &:hover .btn-cnt {
      opacity: 1;
    }
  }
  .img {
    height: 50%;
    width: 100%;
    position: relative;
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #4c65ff;
      opacity: 0;
      z-index: 5;
      transition: all 0.3s ease-in;
    }
  }
  .content {
    width: 100%;
    padding: 10%;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
      font-size: 1.875rem;
      line-height: 166.66%;
      color: #000;
      @media (max-width: 1700px) {
        font-size: 1.675rem;
      }
      @media (max-width: 1300px) {
        font-size: 1.475rem;
      }
      @media (max-width: 1024px) {
        font-size: 1.875rem;
      }
      @media (max-width: 680px) {
        font-size: 1.875rem;
      }
    }
    .categories {
      font-size: 0.75rem;
      letter-spacing: 1.36px;
      line-height: 150%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 30px;
      @media (max-width: 1700px) {
        flex-direction: column;
      }
      @media (max-width: 1024px) {
        flex-direction: row;
      }
      .cat {
        color: #4c65ff;
      }
      .read {
        color: #868686;
      }
    }
  }
  .btn-cnt {
    font-size: 0.75rem;
    color: #4c65ff;
    display: flex;
    justify-content: flex-end;
    padding: 0% 10% 0;
    opacity: 0;
    transition: all 0.3s ease-in;
    @media (max-width: 1024px) {
      display: none;
    }
  }
`;
//templates/postTemplate.js

export const PostTemplateWrapper = styled.section`
  position: relative;
  width: 100%;
  overflow: visible !important;
  .container {
    max-width: 1720px;
    background: #fff;
    z-index: 40;
    transform: translateY(-10%);
    margin: 0 auto;
    padding: 5% 5% 0;
    overflow: visible !important;
    padding-right: 0;
    @media (max-width: 1800px) {
      max-width: 1420px;
    }
    @media (max-width: 1500px) {
      max-width: 1220px;
    }
    @media (max-width: 1300px) {
      transform: translateY(0%);
      padding-right: 5%;
    }
    .post-header {
      padding-right: 20%;
      @media (max-width: 800px) {
        padding-right: 0;
      }
      h1 {
        color: #000000;
        font-family: 'Poppins';
        font-weight: 400;
        font-size: 61px;
        font-size: 69px;
        margin-bottom: 10px;
        @media (max-width: 550px) {
          font-size: 51px;
          line-height: 59px;
        }
      }
      .info {
        span {
          margin-right: 50px;
          display: inline-block;
          font-size: 12px;
          line-height: 18px;
          letter-spacing: 1.36px;
          font-weight: 600;
          font-family: 'Poppins';
          text-transform: uppercase;
          &.categories {
            color: #4c65ff;
          }
          &.read-time {
            text-transform: uppercase;
            color: #868686;
          }
        }
      }
    }
    main {
      display: flex;
      margin-top: 60px;
      width: 100%;
      overflow: visible !important;
      @media (max-width: 985px) {
        display: flex;
        flex-direction: column;
      }
      article {
        width: 900px;
        margin-right: 184px;
        @media (max-width: 980px) {
          width: 100%;
          margin-right: 0;
        }
        ul li {
          line-height: 140%;
        }
        ol li {
          line-height: 140%;
          list-style: circle;
          margin-left: 6%;
        }
        .lead {
          font-family: 'Poppins';
          margin: 128px 0;
          color: #4c65ff;
          font-size: 18px;
          line-height: 29px;
          letter-spacing: 0.05px;
          @media (max-width: 668px) {
            margin: 80px 0;
          }
        }
        .content {
          width: 100%;
          font-family: 'Poppins';
          img {
            width: 100%;
            object-fit: cover;
            margin-bottom: 20px;
          }
          h1,
          h2,
          h3,
          h4,
          h5 {
            font-size: 30px;
            line-height: 50px;
            margin-bottom: 40px;
            color: #000;
          }
          p {
            font-size: 18px;
            line-height: 29px;
            letter-spacing: 0.05px;
            margin-bottom: 30px;
          }
        }
      }
    }
  }
  .related-cnt {
    .title {
      display: inline-block;
      font-family: 'Poppins';
      font-size: 3rem;
      font-weight: 600;
    }
  }
`;
export const PostTemplateLandingScreen = styled(BackgroundImage)`
  background-position: ${({ framing }) => (framing ? framing : 'center')};
  background-size: cover;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;
//templates/servicesTemplate.js

export const ServicesWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: ${colors.neutral00};
  display: flex;
  align-items: center;
  padding-left: 17%;
  font-size: 16px;
  position: relative;
  @media (max-height: 1720px) {
    font-size: 13px;
  }
  @media (max-width: 1520px) {
    font-size: 12px;
  }
  @media (max-width: 1350px) {
    font-size: 11px;
  }
  @media (max-width: 1120px) {
    font-size: 10px;
  }
  @media (max-width: 950px) {
    padding: 0 5%;
    font-size: 12px;
    flex-direction: column-reverse;
    justify-content: center;
  }
  .text {
    max-width: 50%;
    font-family: 'Poppins';
    font-style: normal;
    color: ${colors.neutral100};
    margin-bottom: 10%;
    @media (max-width: 950px) {
      max-width: 80%;
      margin-bottom: 30%;
    }
    @media (orientation: landscape) {
      margin-bottom: 0;
    }
    h2 {
      font-weight: 600;
      font-size: 5.125em;
      line-height: 119.5%;
      margin-bottom: 4%;
      @media (max-width: 600px) {
        font-size: 3em;
      }
    }
    p {
      max-width: 55%;
      font-weight: 300;
      font-size: 1.375em;
      line-height: 163.63%;
      @media (max-width: 950px) {
        max-width: 100%;
      }
    }
  }
`;

export const ServicesLogo = styled.div`
  width: 250px;
  height: 100%;
  margin-right: 200px;
  @media (max-width: 950px) {
    margin-right: 100px;
    align-self: flex-start;
  }
  @media (max-width: 600px) {
    margin-bottom: 10%;
  }
  @media (orientation: landscape) {
    margin-bottom: 0;
  }
`;

export const ServicesSection = styled.section`
  background: ${colors.neutral90};
  display: flex;
  padding: 140px 180px;
  justify-content: space-between;
  color: ${colors.neutral00};
  font-family: 'Poppins';
  font-style: normal;
  font-size: 16px;
  position: relative;
  @media (max-width: 1500px) {
    font-size: 14px;
  }
  @media (max-width: 1250px) {
    font-size: 12px;
  }
  @media (max-width: 1100px) {
    font-size: 10px;
  }
  @media (max-width: 950px) {
    font-size: 14px;
    flex-direction: column;
  }
  @media (max-width: 650px) {
    font-size: 12px;
  }
  @media (max-width: 450px) {
    font-size: 10px;
    padding: 15% 5%;
  }
  .triangle {
    width: 159px;
    height: 205px;
    position: absolute;
    left: 3%;
    bottom: -11%;
    z-index: 5;
    @media (max-width: 1450px) {
      bottom: -13%;
    }
    @media (max-width: 1250px) {
      bottom: -16%;
    }
    @media (max-width: 950px) {
      bottom: -11%;
    }
    @media (max-width: 700px) {
      bottom: -15%;
      width: 119px;
      height: 165px;
    }
    @media (max-width: 450px) {
      bottom: -15%;
      width: 89px;
      height: 135px;
    }
  }
`;

export const DemandLeftSection = styled.div`
  max-width: 480px;
  @media ${deviceMax.tabletL} {
    width: 100%;
  }
  & h2 {
    font-weight: 600;
    font-size: 44px;
    line-height: 138%;
    margin-bottom: 40px;
    max-width: 300px;
  }
  & p {
    font-weight: 300;
    font-size: 16px;
    line-height: 168%;
    color: ${colors.neutral30};
  }
`;

export const DemandList = styled.ul`
  list-style: none;
  @media ${deviceMax.tabletL} {
    width: 100%;
    margin-top: 60px;
  }
  & li {
    font-weight: 600;
    font-size: 22px;
    line-height: 350%;
    border-bottom: 1px solid ${colors.neutral60};
    span {
      margin-right: 10px;
      color: ${colors.neutral30};
    }
  }
`;

export const QuoteSection = styled.div`
  padding: 100px 180px;
  color: ${colors.neutral80};
  position: relative;
  background: ${colors.neutral10};
  @media (max-width: 1600px) {
    font-size: 14px;
  }
  @media (max-width: 1180px) {
    font-size: 12px;
  }
  @media (max-width: 850px) {
    font-size: 10px;
  }
  @media (max-width: 650px) {
    font-size: 8px;
    padding: 15%;
  }
  @media (max-width: 450px) {
    font-size: 6px;
    padding: 15% 10%;
  }
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 44px;
    line-height: 138%;
    max-width: 1100px;
  }
  .quote {
    width: 3.875em;
    height: 3.875em;
    position: relative;
    right: 5%;
  }
  .square {
    width: 14.6875em;
    height: 14.5625em;
    position: absolute;
    top: 20%;
    right: 23%;
  }
  .half-circle {
    width: 11.25em;
    height: 10.5625em;
    position: absolute;
    bottom: -6%;
    right: 15%;
  }
`;
