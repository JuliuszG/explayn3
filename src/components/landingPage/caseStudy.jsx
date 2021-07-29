import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonNext,
} from "pure-react-carousel"
import { useMediaQuery } from "react-responsive"
import { motion } from "framer-motion"
import { AnimatedHeader, AnimatedParagraph } from "../util/animations"
import { useInView } from "react-intersection-observer"
import ScrollRight from "../../images/scrollright.svg"
import {
  CaseStudyWrapper,
  CaseStudyHeaderWrapper,
  CaseStudySliderWrapper,
  CaseStudySliderImageWrapper,
} from "../styled"

export const SliderContent = ({ item }) => {
  return (
    <CaseStudySliderWrapper to={`/case/${item.slug}`}>
      <CaseStudySliderImageWrapper>
        <Img
          style={{ height: "100%" }}
          fluid={item.landingimage.fluid}
          alt="logo"
        />
      </CaseStudySliderImageWrapper>
      <div className="text__cnt">
        <h3>{item.component2Client}</h3>
        <p>{item.component2Services}</p>
      </div>
    </CaseStudySliderWrapper>
  )
}

const Header = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  return (
    <CaseStudyHeaderWrapper ref={ref}>
      <div className="text">
        <AnimatedHeader inView={inView}>Case studies</AnimatedHeader>
        <AnimatedParagraph inView={inView}>
          Let our work to the talking. Projects we've been working on recently.
        </AnimatedParagraph>
      </div>
      <ButtonNext className="next">
        <motion.div style={{ width: "100%", height: "100%" }}>
          <img src={ScrollRight} alt="scroll right button" />
        </motion.div>
      </ButtonNext>
    </CaseStudyHeaderWrapper>
  )
}

const CaseStudy = ({ refProp, triangle = true }) => {
  const data = useStaticQuery(graphql`
    {
      cases: allDatoCmsRealizacja(
        limit: 6
        sort: { fields: meta___createdAt, order: DESC }
      ) {
        nodes {
          component2Client
          component2Services
          slug
          landingimage {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
      triangle: file(relativePath: { eq: "caseStudy/triangle.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const isMobile = useMediaQuery({
    query: "(max-device-width: 1080px)",
  })
  if (isMobile) triangle = false
  const renderSlider = (
    <Slider style={{ outline: "none" }}>
      {data.cases.nodes.map((item, index) => (
        <Slide className="slide" key={index} index={index}>
          <SliderContent item={item} />
        </Slide>
      ))}
    </Slider>
  )
  const mobile = (
    <>
      {data.cases.nodes.map(
        (item, index) => index < 3 && <SliderContent item={item} key={index} />
      )}
    </>
  )
  const content = (
    <CaseStudyWrapper ref={refProp} id="caseStudy">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={data.cases.nodes.length + 1}
        className="carousel__cnt"
        visibleSlides={
          data.cases.nodes.length >= 3 ? 3 : data.cases.nodes.length
        }
        infinite={true}
        step={3}
      >
        <Header />
        {!isMobile && renderSlider}
      </CarouselProvider>
      {isMobile && mobile}
    </CaseStudyWrapper>
  )
  return data && content
}

export default CaseStudy
