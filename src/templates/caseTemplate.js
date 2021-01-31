import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Desktop from "../components/navigation/desktop"
import Mobile from "../components/navigation/mobile"
import CaseStudy from "../components/landingPage/caseStudy"
import { useMediaQuery } from 'react-responsive'
import Layout from '../components/layout'
import Footer from '../components/footer'
import SEO from "../components/seo"
import { colors } from '../styles/colors'

const CaseTemplate = ({ pageContext }) => {
    const isMobile = useMediaQuery({
        query: '(max-device-width: 950px)'
    })
    return (
        <Layout>
            <SEO title="Home" />
            { isMobile ? <Mobile /> : <Desktop /> }
            <CaseStudy triangle={ false } />
            <Footer />
        </Layout>
    )
}

export default CaseTemplate