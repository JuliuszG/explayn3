import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { CaseListWrapper, CaseListContentWrapper } from '../styled';

const CaseList = ({ title, paragraph, arrObj }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "casesTemp/checkmark.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const list = useMemo(() => [...arrObj.List], [arrObj.List]);
  return (
    <CaseListWrapper>
      <h2>{title}</h2>
      <CaseListContentWrapper>
        <p>{paragraph}</p>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <span>
                <Img fluid={data.file.childImageSharp.fluid} alt="checkmark" />
              </span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </CaseListContentWrapper>
    </CaseListWrapper>
  );
};

export default CaseList;
