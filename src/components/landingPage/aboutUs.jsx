import React, { useState, useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby-plugin-intl';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { H2Variant, PVariant } from './landing';
import { itemsEn, itemsPl, imageVariant, imageColorVariant } from '../../lib/aboutUs';
import {
  AboutUsWrapper,
  AboutUsHeaderWrapper,
  AboutUsButton,
  BoxWrapper,
  BoxImageWrapper,
  BoxImage,
} from '../styled';
import { useIntl } from 'gatsby-plugin-intl';

const Box = ({ content }) => {
  const [hovered, setHovered] = useState(false);
  const isDesktop = window.matchMedia('(min-width: 450px)').matches
  const renderImage = useMemo(() => {
    return (
      <BoxImageWrapper>
        <AnimatePresence initial={false}>
          {(hovered && isDesktop) ? (
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
  }, [hovered]);
  const handleHover = () => setHovered(true);
  const handleLeave = () => setHovered(false);
  return (
    <BoxWrapper onMouseOver={handleHover} onMouseOut={handleLeave}>
      {renderImage}
      <h3>{content.name}</h3>
      <ul>
        {content.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Link to={content.url}>
        {useIntl().formatMessage({ id: "about-us.more" })}
      </Link>
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
          {useIntl().formatMessage({ id: "about-us.motion-h2" })}
        </motion.h2>
        <motion.p
          variants={PVariant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {useIntl().formatMessage({ id: "about-us.motion-p" })}
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
          {(useIntl().locale === 'pl' ? itemsPl : itemsEn).map(
            (item, index) =>
              index > 2 && (
                <Link key={index} to={item.url}>
                  <Box isCollapsed={isCollapsed} content={item} />
                </Link>
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
        {(useIntl().locale === 'pl' ? itemsPl : itemsEn).map(
          (item, index) =>
            index < 4 && (
              <Link key={index} to={item.url}>
                <Box isCollapsed={isCollapsed} content={item} />
              </Link>
            )
        )}
      </div>
      {renderSecond()}
      {/* <div className="btn__cnt">
        <AboutUsButton onClick={() => setIsCollapsed(prevState => !prevState)}>
          {isCollapsed ? 'Show more' : 'Show less'}
        </AboutUsButton>
      </div> */}
    </AboutUsWrapper>
  );
};

export default AboutUs;
