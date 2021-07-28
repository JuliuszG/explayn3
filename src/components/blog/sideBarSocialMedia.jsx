import React from "react"

import { SocialMediaWrapper } from "../styled"

const SocialMedia = ({ title, slug }) => {
  return (
    <SocialMediaWrapper>
      <h3>SHARE THIS ARTICLE</h3>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=http://www.explayn.it/blog/${slug}`}
      >
        <svg
          id="Icon_awesome-facebook"
          data-name="Icon awesome-facebook"
          xmlns="http://www.w3.org/2000/svg"
          width="33.744"
          height="33.54"
          viewBox="0 0 33.744 33.54"
        >
          <path
            id="Icon_awesome-facebook-2"
            data-name="Icon awesome-facebook"
            d="M34.306,17.434A16.872,16.872,0,1,0,14.8,34.1V22.312H10.512V17.434H14.8V13.717c0-4.228,2.517-6.564,6.373-6.564a25.965,25.965,0,0,1,3.777.329v4.15H22.82a2.439,2.439,0,0,0-2.749,2.635v3.167H24.75L24,22.312H20.071V34.1A16.878,16.878,0,0,0,34.306,17.434Z"
            transform="translate(-0.563 -0.563)"
            fill="#7e7e7e"
          />
        </svg>
      </a>
      <a
        href={`http://twitter.com/share?text=${title}&url=http://www.explayn.it/blog/${slug}`}
      >
        <svg
          id="Icon_awesome-twitter"
          data-name="Icon awesome-twitter"
          xmlns="http://www.w3.org/2000/svg"
          width="38.767"
          height="31.486"
          viewBox="0 0 38.767 31.486"
        >
          <path
            id="Icon_awesome-twitter-2"
            data-name="Icon awesome-twitter"
            d="M34.783,11.228c.025.344.025.689.025,1.033,0,10.5-7.995,22.606-22.606,22.606A22.453,22.453,0,0,1,0,31.3a16.437,16.437,0,0,0,1.919.1A15.912,15.912,0,0,0,11.783,28a7.959,7.959,0,0,1-7.429-5.51,10.019,10.019,0,0,0,1.5.123,8.4,8.4,0,0,0,2.091-.271,7.946,7.946,0,0,1-6.371-7.8v-.1a8,8,0,0,0,3.591,1.008A7.957,7.957,0,0,1,2.706,4.832a22.584,22.584,0,0,0,16.383,8.314,8.969,8.969,0,0,1-.2-1.82A7.953,7.953,0,0,1,32.642,5.89a15.643,15.643,0,0,0,5.043-1.919A7.924,7.924,0,0,1,34.192,8.35a15.928,15.928,0,0,0,4.575-1.23,17.079,17.079,0,0,1-3.985,4.108Z"
            transform="translate(0 -3.381)"
            fill="#7e7e7e"
          />
        </svg>
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=http://www.explayn.it/blog/${slug}`}
      >
        <svg
          id="Icon_awesome-linkedin-in"
          data-name="Icon awesome-linkedin-in"
          xmlns="http://www.w3.org/2000/svg"
          width="32.349"
          height="32.348"
          viewBox="0 0 32.349 32.348"
        >
          <path
            id="Icon_awesome-linkedin-in-2"
            data-name="Icon awesome-linkedin-in"
            d="M7.241,32.349H.534v-21.6H7.241ZM3.884,7.806A3.9,3.9,0,1,1,7.768,3.885,3.917,3.917,0,0,1,3.884,7.806ZM32.342,32.349H25.65V21.836c0-2.506-.051-5.719-3.487-5.719-3.487,0-4.021,2.722-4.021,5.538V32.349h-6.7v-21.6h6.432V13.7h.094a7.047,7.047,0,0,1,6.346-3.488c6.788,0,8.035,4.47,8.035,10.275V32.349Z"
            transform="translate(0 -0.001)"
            fill="#7e7e7e"
          />
        </svg>
      </a>
    </SocialMediaWrapper>
  )
}

export default SocialMedia
