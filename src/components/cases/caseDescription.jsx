import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
  CaseDescriptionWrapper,
  ZigZag,
  CaseDescriptionDescription,
} from "../styled"

const CaseDescription = ({ title, paragraphs }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "landing/ZigZag.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <CaseDescriptionWrapper>
      <ZigZag>
        <Img fluid={data.file.childImageSharp.fluid} alt="decoration" />
      </ZigZag>
      <h2>{title}</h2>
      <CaseDescriptionDescription
        dangerouslySetInnerHTML={{ __html: paragraphs }}
      ></CaseDescriptionDescription>
    </CaseDescriptionWrapper>
  )
}

export default CaseDescription
