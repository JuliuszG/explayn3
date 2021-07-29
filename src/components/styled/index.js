import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"
import { Link as ScLink } from "react-scroll"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { motion } from "framer-motion"
import { colors } from "../../styles/colors"

const spin = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

`

//blog/author.jsx
export const AuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Poppins";
  @media (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
  }
`
export const AuthorImageWrapper = styled.div`
  width: 151px;
  height: 151px;
  margin-right: 53px;
  @media (max-width: 550px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`
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
`

export const AboutAuthor = styled.p`
  font-size: 18px;
  line-height: 29px;
  letter-spacing: 0.05px;
  color: #000;
  width: 100%;
  @media (max-width: 550px) {
    width: 100%;
  }
`

export const AuthorPic = styled(Img)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

//blog/postSLider.js
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
    font-family: "Poppins";
    font-size: 3rem;
    transform: translateY(-10px);
  }
`

export const Trending = styled.div`
  width: 1500px;
  position: relative;
  margin: 0 auto;
  h3 {
    font-family: "Poppins";
    font-size: 3rem;
    margin-bottom: 80px;
    text-align: center;
  }
  @media (max-width: 1400px) {
    padding: 2%;
    justify-content: center;
  }
`

export const PostSliderItems = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: stretch;
`

export const SlideImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #4c65ff;
  opacity: 0;
  transition: all 0.5s ease-in;
`

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
`

export const Slide = styled.div`
  width: 400px;
  box-shadow: 0 0 40px #00000014;
  font-family: "Poppins";
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
`

export const SlideImageContainer = styled.div`
  width: 100%;
  height: 50%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

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
`

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
`

export const SlideImage = styled(Img)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

//blog/sidebar.jsx
export const SideBarWrapper = styled.aside`
  font-family: "Poppins";
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
`

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
`

export const SideBarTrendingFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
`

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
    isActive && "border-color: #5163f6; background: #5163f6; color: #fff;"}
`

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
`

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
      font-family: "Poppins";
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
        font-family: "Poppins";
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
      font-family: "Poppins";
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
`

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
`

export const NewsletterDescription = styled.div`
  display: flex;
  align-items: flex-start;
  img {
    margin-top: 10px;
    margin-right: 20px;
  }
`

//cases/caseBigScreen.jsx
export const BigScreenWrapper = styled.div`
  position: relative;
  height: 100vh;
  margin-top: 25%;
`

export const BigScreenImage = styled(Img)`
  width: 100%;
  height: 100%;
`

//cases/caseData.jsx
export const CaseDataWrapper = styled.section`
  display: flex;
  padding: 15%;
  font-family: "Poppins";
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
`

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
`

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
`

//cases/caseDescription.jsx
export const CaseDescriptionWrapper = styled.section`
  position: relative;
  padding: 15% 15% 5%;
  font-family: "Poppins";
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
`

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
`

export const ZigZag = styled.div`
  width: 227px;
  height: 113px;
  position: absolute;
  top: 20%;
  right: 10%;
  @media (max-width: 950px) {
    width: 147px;
    height: 33px;
    top: 5%;
    right: 5%;
  }
  @media (max-width: 650px) {
    width: 127px;
    height: 13px;
    top: 3%;
    left: 3%;
  }
`

//cases/caseDoubleImage.jsx
export const CaseDoubleImageWrapper = styled.div`
  display: flex;
  margin: 5% 0;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`

export const DoubleImageWrapper = styled.div`
  width: 50%;
  height: 80vh;
  @media (max-width: 950px) {
    width: 100%;
  }
`

export const CaseDoubleImageImage = styled(Img)`
  height: 100%;
  object-fit: contain;
`

//case/caseLanding.jsx
export const CaseLandingWrapper = styled(BackgroundImage)`
  width: 100%;
  background-color: #040e18;
  background-position: center;
  background-size: cover;
  height: 100vh;
  position: relative;
`

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
`

//case/caseLanding.jsx
export const CaseListWrapper = styled.section`
  padding: 15%;
  font-family: "Poppins";
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
`

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
`

//case/caseScreen.jsx
export const CaseScreenWrapper = styled.div`
  padding: 0 15% 5%;
  width: 100%;
  @media (max-width: 450px) {
    padding: 0 5%;
  }
`

export const CaseScreenImage = styled(Img)`
  width: 100%;
  height: 100%;
`

//case/caseScreen.jsx
export const CaseVideoWrapper = styled.div`
  padding: 0 10%;
  @media (max-width: 960px) {
    padding: 10% 0;
  }
`

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
`
//thankyoucard.jsx

export const ThankYouCardWrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  padding: 5% 15%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Poppins", sans-serif;
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
`
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
    content: "";
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
`

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
    font-family: "Poppins";
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
`

//footer.jsx
export const FooterWrapper = styled.footer`
  width: 100%;
  min-height: 100vh;
  background: #272727;
  font-family: "Poppins";
  padding: 5% 0;
  position: relative;
  overflow: hidden;
  @media (max-width: 1024px) {
    padding: 10%;
  }
  h3 {
    color: #ffffff;
    font-size: 1.575rem;
    font-weight: 600;
    line-height: 153%;
    @media (max-width: 600px) {
      font-size: 1.3rem;
    }
  }
  a {
    color: #aaaaaa;
    font-size: 1rem;
    line-height: 145%;
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
      margin-bottom: 33px;
    }
    a {
      margin-bottom: 33px;
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
`

export const FooterContent = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: auto;
  row-gap: 60px;
  grid-template-areas:
    "contact contact . . sl1 . sl2 . sl3"
    "newsletter newsletter newsletter . sl1 . sl2 . sl3"
    "social social social social . . . . .";
  @media (max-width: 1500px) {
    max-width: 1100px;
    grid-template-columns: repeat(10, 1fr);
    grid-template-areas:
      "contact contact . . . sl1 . sl2 . sl3"
      "newsletter newsletter newsletter newsletter . sl1 . sl2 .sl3"
      "social social social social . . . .";
  }
  @media (max-width: 1200px) {
    max-width: 800px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "contact contact . ."
      "newsletter newsletter newsletter newsletter"
      "social social . ."
      "sl1 sl1 . ."
      "sl2 sl2 . ."
      "sl3 sl3 . .";
  }
  @media (max-width: 1024px) {
    max-width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "newsletter newsletter"
      "sl1 sl2"
      "sl3 sl3"
      "social ."
      "contact contact";
  }
  @media (max-width: 650px) {
    grid-template-areas:
      "newsletter newsletter"
      "sl1 sl2"
      "sl3 sl3"
      "social social"
      "contact contact";
  }
  @media (max-width: 600px) {
    column-gap: 20px;
  }
`

export const FooterContactUs = styled.div`
  grid-area: contact;
  & div {
    margin: 12px 0;
  }
`

export const FooterNewsletter = styled.div`
  grid-area: newsletter;
  p {
    color: #aaaaaa;
    font-size: 1rem;
    line-height: 145%;
    margin-bottom: 40px;
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
`

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
    font-size: 1.2rem;
    line-height: 145%;
    font-weight: 300;
    @media (max-width: 600px) {
      width: 70%;
    }
    &::placeholder {
      color: #aaaaaa;
      font-size: 1.2rem;
      line-height: 145%;
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
`

export const FotterSocialMedia = styled.div`
  grid-area: social;
  width: 100%;
`

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
`

export const FooterDecoration = styled.div`
  position: absolute;
  right: 0;
  bottom: 15%;
  width: 258px;
  @media (max-width: 1024px) {
    position: static;
    margin-left: auto;
  }
  @media (max-width: 600px) {
    width: 90px;
    height: 155px;
  }
`
//contactForm.jsx

export const ContactFormWrapper = styled(motion.div)`
  min-height: 100%;
  padding: 5% 16%;
  z-index: 999;
  font-size: 15px;
  background-color: #fff;
  font-family: "Poppins", sans-serif;
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
`

export const ContactCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 55%;
  margin-bottom: 0.99vh;
  @media (max-width: 1024px) {
    width: 100%;
  }
`
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
    isActive && " border-color: #5163f6; background: #5163f6; color: #fff;"}
  @media (hover: hover) {
    &:hover {
      border-color: #5163f6;
      background: #5163f6;
      color: #fff;
    }
  }
`

export const FormErrorMessage = styled.small`
  color: red;
  display: block;
  ${({ space }) => space && "margin-bottom: 3vh;"}
`
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
`
export const FormButtonContainer = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    margin: 2vh 0 0 0;
  }
`
export const FormSubmitButton = styled.button`
  padding: 13px 70px;
  font-family: "Poppins";
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
`
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
`
export const ContactDecoration = styled.img`
  position: absolute;
  top: 30%;
  right: 20%;
  @media (max-width: 1024px) {
    display: none;
  }
`
//landingPage/team.jsx

export const TeamWrapper = styled.section`
  font-size: 16px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`

export const TeamDescription = styled.div`
  font-family: "Poppins";
  font-style: normal;
  padding: 0% 18% 10%;
  @media (max-width: 650px) {
    padding: 18% 12%;
  }
  h2 {
    font-size: 3.4375em;
    font-weight: 600;
    line-height: 138.18%;
    text-align: left;
    margin-bottom: 4%;
    @media (max-width: 650px) {
      font-size: 2.5em;
    }
  }
  p {
    width: 65%;
    font-size: 1.1875em;
    font-weight: 300;
    line-height: 168.42%;
    text-align: left;
    @media (max-width: 950px) {
      width: 100%;
    }
  }
`
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
`
export const CardWrapper = styled.div`
  width: 25%;
  height: 443px;
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
  .logo {
  }
  a {
    text-decoration: none;
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 32px;
    color: ${colors.neutral60};
    .arrow {
      @media (max-width: 968px) {
        display: none;
      }
    }
  }
`
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
    width: 60%;
    height: 40%;
  }
`
export const CardLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
`
//landingPage/landing2.jsx

export const Landing2Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Poppins";
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
`
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
    font-family: "Poppins";
    font-style: normal;
    color: ${colors.neutral100};
    @media (max-width: 950px) {
      max-width: 100%;
      margin-top: 10%;
    }
    h1 {
      font-weight: 600;
      font-size: 5.125em;
      line-height: 119.5%;
      margin-bottom: 4%;
      @media (max-width: 650px) {
        line-height: 125%;
      }
    }
    p {
      max-width: 55%;
      font-weight: 300;
      font-size: 19px;
      line-height: 163.63%;
      @media (max-width: 950px) {
        max-width: 100%;
      }
    }
  }
`

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
`
export const LandingScrollWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
`
export const LandingZigZag = styled.div`
  width: 17.5em;
  height: 3.5em;
  position: absolute;
  top: 30%;
  right: 10%;
  @media (max-width: 950px) {
    display: none;
  }
`

//landingPage/abuotUs.jsx
export const AboutUsWrapper = styled(motion.section)`
  background: ${colors.neutral90};
  padding: 10% 0;
  a {
    text-decoration: none;
  }
  .cnt {
    padding-left: 5%;
    display: flex;
    justify-content: center;
    width: 100%;
    @media (max-width: 956px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &.first {
      margin-top: 10%;
    }
  }
  button {
    width: 219px;
    height: 58px;
    display: inline-block;
    background: ${colors.neutral80};
    color: ${colors.neutral00};
    cursor: pointer;
    border: none;
    border-radius: 33px;
    outline: none;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 29px;
    transition: all 0.1s ease-in;
    &:hover {
      transform: scale(1.1);
      filter: brightness(120%);
    }
  }
  .btn__cnt {
    margin-top: 2%;
    display: flex;
    justify-content: center;
  }
`
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
    font-family: "Poppins";
    font-style: normal;
    width: 70%;
    @media (max-width: 956px) {
      width: 100%;
    }
    h2 {
      font-weight: 600;
      font-size: 3.4375em;
      line-height: 138%;
    }
    p {
      width: 60%;
      margin-top: 3%;
      font-weight: 300;
      font-size: 1.1875em;
      line-height: 168%;
      @media (max-width: 956px) {
        width: 100%;
      }
    }
  }
`

export const BoxWrapper = styled.div`
  font-family: "Poppins";
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
    font-size: 1.875em;
    line-height: 168.42%;
    padding-bottom: 3%;
    border-bottom: 1px solid ${colors.neutral60};
    margin-bottom: 3%;
  }
  ul {
    list-style: none;
    margin-bottom: 5%;
    li {
      font-weight: normal;
      font-size: 1em;
      line-height: 181.25%;
      color: ${colors.neutral30};
    }
  }
  a {
    font-weight: 600;
    font-size: 1em;
    line-height: 181.25%;
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
`

export const BoxImageWrapper = styled.div`
  width: 65px;
  height: 65px;
  padding: 0;
  position: relative;
  .hidden {
    opacity: 0;
  }
`

export const BoxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top;
`

//landingPage/caseStudy.jsx
export const CaseStudyWrapper = styled.section`
  position: relative;
  margin-bottom: 10%;
  .carousel__cnt {
    .slide:nth-of-type(even) {
      margin: 0 0.5%;
      @media (max-width: 650px) {
        margin: 25% 0;
      }
    }
  }
`

export const CaseStudyHeaderWrapper = styled.div`
  font-family: "Poppins";
  font-style: normal;
  padding: 10% 22% 10% 10%;
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
    font-size: 5em;
    line-height: 95%;
    margin-bottom: 3%;
  }
  p {
    width: 60%;
    font-weight: 300;
    font-size: 19px;
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
`

export const CaseStudySliderWrapper = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  font-family: "Poppins";
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
    font-size: 1.875em;
    line-height: 153.33%;
    color: ${colors.neutral100};
  }
  p {
    font-weight: normal;
    font-size: 1em;
    line-height: 181.25%;
    color: ${colors.neutral50};
  }
`

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
`

//landingPage/caseStudyMobile.jsx

export const MobileStudyWrapper = styled.section`
  position: relative;
  margin-bottom: 10%;
  font-family: "Poppins";
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
`
