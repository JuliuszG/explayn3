import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { CaseLandingWrapper } from '../styled';

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
    </CaseLandingWrapper>
  );
};

export default CaseLanding;
