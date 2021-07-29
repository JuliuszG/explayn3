import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { CaseLandingWrapper, CaseLandingCircle } from '../styled';

const CaseLanding = ({ background }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "landing/landingCircle.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <CaseLandingWrapper fluid={background} Tag="section">
      <CaseLandingCircle>
        <Img fluid={data.file.childImageSharp.fluid} alt="decoration" />
      </CaseLandingCircle>
    </CaseLandingWrapper>
  );
};

export default CaseLanding;
