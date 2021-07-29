import React from 'react';
import { motion } from 'framer-motion';
import { H2Variant, PVariant } from '../landingPage/landing';

const linkVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.6,
      ease: 'easeInOut',
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.3,
      delay: 0.6,
      ease: 'easeIn',
    },
  },
};

export const AnimatedHeader = ({ children, inView }) => {
  return (
    <motion.h2
      variants={H2Variant}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.h2>
  );
};

export const AnimatedParagraph = ({ children, inView }) => {
  return (
    <motion.p
      variants={PVariant}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.p>
  );
};

export const AnimatedLink = ({ children, inView, url }) => {
  return (
    <motion.a
      variants={linkVariant}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      href={url}
    >
      {children}
    </motion.a>
  );
};
