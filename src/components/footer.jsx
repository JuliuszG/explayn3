import React, { useState } from "react"
import { Link } from "gatsby"
import Dots from "../images/footer-dots.svg"
import Arrow from "../images/footer-arrow.svg"
import emailjs from "emailjs-com"
import {
  FooterWrapper,
  FooterContent,
  FooterContactUs,
  FooterNewsletter,
  FooterFormWrapper,
  FotterSocialMedia,
  FooterSocialMediaContent,
  FooterDecoration,
} from "./styled"

const Footer = () => {
  const [value, setValue] = useState("")
  const [mailSend, setMailSend] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    emailjs
      .send(
        "default_service",
        "template_qhdmgng",
        { email: value },
        "user_VfGpMuhECXdgJOEm13gzv"
      )
      .then(response => {
        setMailSend(true)
      })
  }
  return (
    <FooterWrapper id="footer">
      <FooterContent>
        <FooterContactUs>
          <h3>Contact us</h3>
          <div>
            <a href="tel:+48 881 772 030">+48 881 772 030</a>
          </div>
          <div className="mail">
            <a href="mailto:we@explayn.it">we@explayn.it</a>
          </div>
        </FooterContactUs>
        <FooterNewsletter>
          <h3>NEWSLETTER</h3>
          <p>
            Join our community and get our best insights, tips and strategies
            delivered straight to your inbox.
          </p>
          <FooterFormWrapper>
            <form onSubmit={e => handleSubmit(e)}>
              <input
                type="email"
                placeholder="Email adress"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
              <button type="submit">
                <img src={Arrow} alt="submit button" />
              </button>
            </form>
          </FooterFormWrapper>
        </FooterNewsletter>
        <FotterSocialMedia>
          <h3>Follow us on social media</h3>
          <FooterSocialMediaContent>
            <a href="https://www.facebook.com/explayn.it">Facebook</a>
            <a href="https://www.youtube.com/channel/UCQE3VnneDB6U3oy-3R7Xyvw">
              Youtube
            </a>
            <a href="https://www.instagram.com/explayn.it/">Instagram</a>
            <a href="https://www.linkedin.com/company/explayn-digital-agency/about/?viewAsMember=true">
              LinkedIn
            </a>
          </FooterSocialMediaContent>
        </FotterSocialMedia>
        <div className="site-links-column sl1">
          <h3>Service</h3>
          <Link to="/development">Development</Link>
          <Link to="/visual">Visual</Link>
          <Link to="/branding">Branding</Link>
          <Link to="/ecommerce">eCommerce</Link>
          <Link to="/events">Events</Link>
          <Link to="/marketing">Marketing</Link>
        </div>
        <div className="site-links-column sl2">
          <h3>About</h3>
          <Link to="/">Home</Link>
          <Link to="/#caseStudy">Case studies</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="site-links-column sl3">
          <h3>Support</h3>
          <Link to="/privacy">Privacy policy</Link>
          <Link to="/cookies">Cookie policy</Link>
        </div>
      </FooterContent>
      <FooterDecoration>
        <img src={Dots} alt="decoration" />
      </FooterDecoration>
    </FooterWrapper>
  )
}

export default Footer
