import React from 'react'
import { graphql } from 'gatsby'
import Desktop from "../components/navigation/desktop"
import Mobile from "../components/navigation/mobile"
import CaseStudy from "../components/landingPage/caseStudy"
import { useMediaQuery } from 'react-responsive'
import Layout from '../components/layout'
import Footer from '../components/footer'
import SEO from "../components/seo"
import CaseLanding from '../components/cases/caseLanding'
import CaseData from '../components/cases/caseData'
import CaseScreen from '../components/cases/caseScreen'
import CaseBigScreen from '../components/cases/caseBigScreen'
import CaseDescription from '../components/cases/caseDescription'
import CaseDoubleImage from '../components/cases/caseDoubleImage'
import CaseList from '../components/cases/caseList'

export const query = graphql`
query MyQuery($id: String!) {
    datoCmsRealizacja(id: {eq: $id}) {
        landingimage {
          fluid {
            src
            srcSet
            base64
            aspectRatio
            sizes
          }
        }
        component2Title
        component2Paragraph
        component2Data
        link
        screens {
          fluid {
            base64
            aspectRatio
            sizes
            src
            srcSet
          }
        }
        bigScreen {
          fluid {
            aspectRatio
            base64
            srcSet
            src
            sizes
          }
        }
        component4Title
        article4Paragraphs
        doubleImageComponent {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
        screen2 {
          fluid {
            aspectRatio
            base64
            src
            sizes
            srcSet
          }
        }
        component7Title
        component7Paragraph
        component7List
      }
  }
`

const CaseTemplate = ({ data }) => {
    const isMobile = useMediaQuery({
        query: '(max-device-width: 950px)'
    })
    console.log(data);
    return (
        <Layout>
            <SEO title="Home" />
            { isMobile ? <Mobile color="#fff"/> : <Desktop color="#fff"/> }
            <CaseLanding src={ data.datoCmsRealizacja.landingimage.fluid }/>
            {/* <CaseData 
                title={ data.datoCmsRealizacja.component2Title }
                paragraph={ data.datoCmsRealizacja.component2Paragraph }
                link={ data.datoCmsRealizacja.link }
                data={ JSON.parse(data.datoCmsRealizacja.component2Data) }
            /> */}
            <CaseScreen src={ data.datoCmsRealizacja.screens.fluid } />
            <CaseBigScreen src={ data.datoCmsRealizacja.bigScreen.fluid } decorations={ true } />
            <CaseDescription title={ data.datoCmsRealizacja.component4Title } paragraphs={ data.datoCmsRealizacja.article4Paragraphs } />
            <CaseDoubleImage arr={ data.datoCmsRealizacja.doubleImageComponent } />
            <CaseList title={ data.datoCmsRealizacja.component7Title } paragraph={ data.datoCmsRealizacja.component7Paragraph } arrObj={ JSON.parse(data.datoCmsRealizacja.component7List) } />
            <CaseScreen src={ data.datoCmsRealizacja.screen2.fluid } />
            <CaseStudy triangle={ false } />
            <Footer />
        </Layout>
    )
}

export default CaseTemplate