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
