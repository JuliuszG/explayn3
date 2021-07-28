import styled from "styled-components"
import Image from "gatsby-image"
import { colors } from "../../styles/colors"
import BackgroundImage from "gatsby-background-image"

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

export const AuthorPic = styled(Image)`
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
export const SlideImage = styled(Image)`
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

export const BigScreenImage = styled(Image)`
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

export const CaseDoubleImageImage = styled(Image)`
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
