import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { H2Variant, PVariant } from './landing';
import { items, imageVariant, imageColorVariant } from '../../lib/aboutUs';
import {
  AboutUsWrapper,
  AboutUsHeaderWrapper,
  AboutUsButton,
  BoxWrapper,
  BoxImageWrapper,
  BoxImage,
} from '../styled';

const Box = ({ content }) => {
  const [hovered, setHovered] = useState(false);
  const renderImage = () => {
    return (
      <BoxImageWrapper>
        <AnimatePresence initial={false}>
          {hovered ? (
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              key="fwefefewf2ee"
              variants={imageColorVariant}
              initial="initial"
              exit="exit"
              animate="visible"
            >
              <BoxImage src={content.image[1].src} alt={content.image[1].alt} />
            </motion.div>
          ) : (
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              key="hdw7hwd"
              variants={imageVariant}
              initial="initial"
              exit="exit"
              animate="visible"
            >
              <BoxImage src={content.image[0].src} alt={content.image[0].alt} />
            </motion.div>
          )}
        </AnimatePresence>
      </BoxImageWrapper>
    );
  };
  const handleHover = () =>
    window?.matchMedia('(hover: hover)').matches &&
    setHovered(prevState => !prevState);
  return (
    <BoxWrapper onMouseOver={handleHover} onMouseOut={handleHover}>
      {renderImage()}
      <h3>{content.name}</h3>
      <ul>
        {content.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Link to={content.url}>Show more</Link>
    </BoxWrapper>
  );
};

const Header = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  return (
    <AboutUsHeaderWrapper ref={ref}>
      <div className="text">
        <motion.h2
          variants={H2Variant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Every day we take on significant challenges to build results driven
          brands.
        </motion.h2>
        <motion.p
          variants={PVariant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          We craft the best digital experience from a brand strategy to web
          development to digital marketing.
        </motion.p>
      </div>
    </AboutUsHeaderWrapper>
  );
};

const AboutUs = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const data = useStaticQuery(graphql`
    {
      main: allFile(filter: { relativeDirectory: { eq: "landing/about" } }) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `);

  const renderSecond = () => {
    if (!isCollapsed) {
      return (
        <div className="cnt second">
          {items.map(
            (item, index) =>
              index > 2 && (
                <a key={index} href={item.url}>
                  <Box isCollapsed={isCollapsed} content={item} />
                </a>
              )
          )}
        </div>
      );
    }
  };
  return (
    <AboutUsWrapper id="aboutUs">
      <Header src={data.main.nodes[0].childImageSharp.fluid} />
      <div className="cnt first">
        {items.map(
          (item, index) =>
            index < 3 && (
              <a key={index} href={item.url}>
                <Box isCollapsed={isCollapsed} content={item} />
              </a>
            )
        )}
      </div>
      {renderSecond()}
      <div className="btn__cnt">
        <AboutUsButton onClick={() => setIsCollapsed(prevState => !prevState)}>
          {isCollapsed ? 'Show more' : 'Show less'}
        </AboutUsButton>
      </div>
    </AboutUsWrapper>
  );
};

export default AboutUs;
