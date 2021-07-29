import React from "react"
import Layout from "../components/layout"
import Desktop from "../components/navigation/desktop"
import Mobile from "../components/navigation/mobile"
import Footer from "../components/footer"
import SEO from "../components/seo"
import { useMediaQuery } from "react-responsive"
import HeaderImg from "../images/ikonki marketing/Main.svg"
import MarketingSteps from "../components/services/marketingSteps"
import Discovery from "../images/ikonki marketing/process_1discovery.svg"
import Planning from "../images/ikonki marketing/process_2planning.svg"
import Design from "../images/ikonki marketing/process_3design.svg"
import DevelopmentStepIcon from "../images/ikonki marketing/launch.svg"
import Launch from "../images/ikonki marketing/linijki.svg"
import Responsive from "../images/ikonki marketing/omnichanel.svg"
import Functional from "../images/ikonki marketing/relevant.svg"
import Scalable from "../images/ikonki marketing/insightful.svg"
import More from "../images/landing/more.svg"
import {
  MarketingWrapper,
  MarketingTopSection,
  MarketingScrollLink,
  MarketingContent,
  ServicesSection,
} from "../components/styled"

const Marketing = () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 950px)",
  })
  return (
    <Layout>
      <SEO title="Home" />
      {isMobile ? <Mobile /> : <Desktop mainPage={true} />}
      <MarketingWrapper>
        <MarketingTopSection>
          <MarketingContent>
            <h1>Marketing</h1>
            <p>
              At a time when no company can afford not to have a digital
              marketing strategy, we are committed to offering 360˚ digital
              marketing services focused on delivering results.
            </p>
          </MarketingContent>
          <div className="landing-image">
            <img src={HeaderImg} alt="dev icon" />
          </div>
          <MarketingScrollLink to={"aboutUs"} smooth duration={500}>
            <div className="content">
              <div className="title">learn more</div>
              <img src={More} alt="scroll down" />
            </div>
          </MarketingScrollLink>
        </MarketingTopSection>
        <ServicesSection id="services-section">
          <div className="left">
            <h2>Marketing on demand.</h2>
            <p>
              Everything begins with the recognition of the customer’s needs, a
              thorough market analysis and defining a marketing strategy, which
              will be the foundation of a consistent and multidimensional
              communication with your clients.
            </p>
          </div>
          <ul className="right">
            <li>
              <span>01.</span>
              Marketing strategies
            </li>
            <li>
              <span>02.</span>
              Social media
            </li>
            <li>
              <span>03.</span>
              Content marketing
            </li>
            <li>
              <span>04.</span>
              Marketing campains
            </li>
          </ul>
        </ServicesSection>
        <div className="section-3">
          <div className="cnt">
            <h2>
              Focusing on the methods for driving profitable customer action is
              the key to our work.
            </h2>
            <div className="decoration"></div>
            <div className="text-cnt">
              <p>
                Attracting customers is just the first step. We make sure you
                retain them by putting together all the methods that allow
                understanding your audience better. All our decisions are based
                on thorough research that guarantees measurable results. We test
                different solutions to choose the most beneficial ones for your
                business.
              </p>
              <p>
                To provide you with the highest level of consistency, we offer a
                one-stop service. From visual identity to complex marketing
                strategy and its implementation - with us, you can count on a
                coherent result. It's a perfect solution for emerging companies
                but also those with an established position on the market.
              </p>
            </div>
          </div>
        </div>
        <MarketingSteps
          arr={[
            { img: Discovery, text: "Discovery" },
            { img: Planning, text: "Planning" },
            { img: Design, text: "Design" },
            { img: DevelopmentStepIcon, text: "Launch" },
            { img: Launch, text: "Measure" },
          ]}
        />
        <div className="section-5">
          <h2>How we work</h2>
          <p>
            We use best practices to deliver comprehensive digital marketing
            services and provide a compelling message that sticks in the minds
            of those yYou’re trying to reach.
          </p>
          <div className="section-5-cnt">
            <div className="section-5-item">
              <div className="section-5-item-icon res">
                <img src={Responsive} alt="responsive icon" />
              </div>
              <div className="section-5-item-content">
                <h4>Omnichannel</h4>
                <p>
                  From social media to email campaigns to digital ads, we create
                  a path that leads your future customers to profitable actions.
                </p>
              </div>
            </div>
            <div className="section-5-item">
              <div className="section-5-item-icon fun">
                <img src={Functional} alt="Functional icon" />
              </div>
              <div className="section-5-item-content">
                <h4>Relevant</h4>
                <p>
                  We make sure the content is perfectly tailored to the target
                  audience, compelling, easy to read, as well as credible and
                  accurate.
                </p>
              </div>
            </div>
            <div className="section-5-item">
              <div className="section-5-item-icon sca">
                <img src={Scalable} alt="Scalable icon" />
              </div>
              <div className="section-5-item-content">
                <h4>Insightful</h4>
                <p>
                  Defining the audience is a big part of a successful campaign.
                  Through accurate segmentation and target group analysis, we
                  achieve the best possible results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MarketingWrapper>
      <Footer />
    </Layout>
  )
}

export default Marketing
