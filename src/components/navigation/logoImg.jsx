import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Logo from '../../images/explaynLogo.svg';
import { LogoImageComponent, ImageSvg, LogoImageWrapper } from '../styled';

const LogoImg = ({ mainPage = true, darkMode, customWidth, customHeight }) => {
  const data = useStaticQuery(graphql`
    query {
      dark: file(relativePath: { eq: "explaynLogo.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      light: file(relativePath: { eq: "explaynLogoLight.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <LogoImageWrapper customWidth={customWidth} customHeight={customHeight}>
      {mainPage ? (
        <ImageSvg src={Logo} alt="logo" />
      ) : !darkMode ? (
        <LogoImageComponent
          fluid={data.light.childImageSharp.fluid}
          alt="logo"
        />
      ) : (
        <ImageSvg src={Logo} alt="logo" />
      )}
    </LogoImageWrapper>
  );
};

export default LogoImg;
