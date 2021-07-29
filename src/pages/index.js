import React, { useRef, useEffect } from "react"
import Layout from "../components/layout"
// import Landing from "../components/landingPage/landing"
import Desktop from "../components/navigation/desktop"
import Mobile from "../components/navigation/mobile"
import SEO from "../components/seo"
import { useMediaQuery } from "react-responsive"
import AboutUs from "../components/landingPage/aboutUs"
import CaseStudy from "../components/landingPage/caseStudy"
import Team from "../components/landingPage/team"
import Partners from "../components/landingPage/partners"
import Footer from "../components/footer"
import Landing2 from "../components/landingPage/landing2"

const IndexPage = ({ location }) => {
  const caseStudyRef = useRef(null)

  const isMobile = useMediaQuery({
    query: "(max-device-width: 950px)",
  })

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      if (
        location?.state?.scrollAnchor === "#caseStudy" &&
        caseStudyRef.current !== null
      ) {
        caseStudyRef.current.scrollIntoView()
      }
    }, 500)
    return () => {
      clearTimeout(scrollTimeout)
    }
  }, [location.state, caseStudyRef.current])

  return (
    <Layout>
      <SEO title="" />
      {isMobile ? <Mobile /> : <Desktop />}
      <Landing2 />
      {/* <Landing /> */}
      <AboutUs />
      <CaseStudy refProp={caseStudyRef} />
      <Team />
      <Partners />
      <Footer />
    </Layout>
  )
}

export default IndexPage
