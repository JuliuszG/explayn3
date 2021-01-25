import React from "react"
import Landing from "../components/landingPage/landing"

import Layout from "../components/layout"
import Desktop from "../components/navigation/desktop"
import Mobile from "../components/navigation/mobile"
import SEO from "../components/seo"
import { useMediaQuery } from 'react-responsive'
import AboutUs from "../components/landingPage/aboutUs"
import CaseStudy from "../components/landingPage/caseStudy"
import Team from "../components/landingPage/team"
import Partners from "../components/landingPage/partners"
import Footer from "../components/footer"

const IndexPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 950px)'
  })
  return(
    <Layout>
      <SEO title="Home" />
      { isMobile ? <Mobile /> : <Desktop /> }
      <Landing />
      <AboutUs />
      <CaseStudy />
      <Team />
      <Partners />
      <Footer />
    </Layout>
  )
}

export default IndexPage
