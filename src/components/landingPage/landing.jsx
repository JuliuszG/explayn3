import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';
import ScrollDownIcon from '../../images/scrolldown.svg';
import {
  LandingWrapper,
  LandingScroll,
  LandingScrollWrapper,
  LandingZigZag,
} from '../styled';

export const H2Variant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.2,
      ease: 'easeIn',
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.2,
      delay: 0.2,
      ease: 'easeInOut',
    },
  },
};

export const PVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.4,
      ease: 'easeInOut',
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.3,
      delay: 0.4,
      ease: 'easeIn',
    },
  },
};

const ScrollDown = () => {
  return (
    <LandingScroll to={'aboutUs'} smooth duration={500}>
      <LandingScrollWrapper
        whileHover={{ rotate: 360, transition: { duration: 0.3 } }}
      >
        <img src={ScrollDownIcon} alt="scroll down button" />
      </LandingScrollWrapper>
    </LandingScroll>
  );
};

const ZigZag = ({ src }) => {
  return (
    <LandingZigZag>
      <Img fluid={src} alt="zigzag" />
    </LandingZigZag>
  );
};

const Landing = () => {
  const data = useStaticQuery(graphql`
    {
      circle: file(relativePath: { eq: "landing/landingCircle.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      scroll: file(relativePath: { eq: "landing/scrollDown.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      zigzag: file(relativePath: { eq: "landing/ZigZag.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <LandingWrapper>
      <div className="text">
        <motion.h1 variants={H2Variant} initial="hidden" animate="visible">
          New ways to develop your brand.
        </motion.h1>
        <motion.p variants={PVariant} initial="hidden" animate="visible">
          A full service web design and digital marketing agency powered by
          growth solutions.
        </motion.p>
      </div>
      <ZigZag src={data.zigzag.childImageSharp.fluid} />
      <ScrollDown src={data.scroll.childImageSharp.fluid} />
    </LandingWrapper>
  );
};

export default Landing;
