import React, { useState } from "react"
import emailjs from "emailjs-com"
import Mail from "../../images/blog/mail.svg"

import {
  NewsletterWrapper,
  NewsletterThanks,
  NewsletterDescription,
} from "../styled"

const Newsletter = ({}) => {
  const [email, setEmail] = useState("")
  const [mailSend, setMailSend] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    emailjs
      .send(
        "default_service",
        "template_qhdmgng",
        { email },
        "user_VfGpMuhECXdgJOEm13gzv"
      )
      .then(response => {
        setMailSend(true)
      })
  }

  return (
    <NewsletterWrapper>
      {mailSend ? (
        <NewsletterThanks>
          <img src={Mail} alt="mail icon" />
          <h3>Thank You for subscribing to our newsletter.</h3>
        </NewsletterThanks>
      ) : (
        <>
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <NewsletterDescription>
            <img src={Mail} alt="mail icon" />
            <p>
              Join our community and get our best insights, tips and strategies
              delivered straight to your inbox.
            </p>
          </NewsletterDescription>
          <form onSubmit={e => handleSubmit(e)}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="enter your email address"
            />
            <button type="submit">{"Get updated >"}</button>
          </form>
        </>
      )}
    </NewsletterWrapper>
  )
}

export default Newsletter
