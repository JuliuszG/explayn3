import styled from "styled-components"
import Image from "gatsby-image"

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
