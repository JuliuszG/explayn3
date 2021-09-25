import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../../styles/colors';
import { Link } from 'gatsby';
import ContactUs from '../contactUs';
import { Link as ScLink } from 'react-scroll';
import {
  Exit,
  DesktopMenu,
  DesktopHeader,
  DesktopLinks,
  DesktopMenuFooter,
  Copy,
} from '../../styled';
import { useLocation } from '@reach/router';

const menuAnimation = {
  visible: {
    top: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
  hidden: {
    top: '-100vh',
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
      ease: 'easeInOut',
      duration: 0.3,
    },
  },
};

const itemAnimation = {
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeIn',
      duration: 0.2,
    },
  },
  hidden: {
    x: -300,
    opacity: 0,
  },
};

const subItemAnimation = {
  visible: i => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      ease: 'easeIn',
      duration: 0.2,
    },
  }),
  hidden: {
    x: 200,
    opacity: 0,
  },
};

const lineAnimation = {
  visible: {
    width: '5%',
    opacity: 1,
    transition: {
      ease: 'easeIn',
      duration: 0.2,
    },
  },
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      ease: 'easeIn',
      duration: 0.1,
    },
  },
};

const MenuDesktop = ({ toggle }) => {
  const location = useLocation();
  const [subMenuIsOn, setSubMenuIsOn] = useState(false);
  const menuSwitch = () => {
    toggle();
    setSubMenuIsOn(false);
  };
  return (
    <DesktopMenu
      variants={menuAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      key="efwefwweffewfefewf"
    >
      <DesktopHeader>
        <Exit onClick={menuSwitch} color={colors.neutral00}>
          <span className="sr" role="button">
            exit button
          </span>
        </Exit>
        <div className="cnt">
          <ContactUs mainPage={false} color={colors.neutral00} />
        </div>
      </DesktopHeader>
      <DesktopLinks subMenuIsOn={subMenuIsOn}>
        <div className="main">
          <motion.div variants={itemAnimation} className="item">
            <div className="number">01.</div>
            <Link to="/">Home</Link>
          </motion.div>
          <motion.div
            variants={itemAnimation}
            className="item"
            onClick={() => setSubMenuIsOn(prevState => !prevState)}
          >
            <div className="number">02.</div>
            <a href="#">
              <div>What we do</div>
            </a>
          </motion.div>
          <motion.div variants={itemAnimation} className="item">
            <div className="number">03.</div>
            {location.pathname === '/' ? (
              <ScLink
                to={'caseStudy'}
                smooth
                duration={1000}
                onClick={menuSwitch}
              >
                Case studies
              </ScLink>
            ) : (
              <Link to={'/'} state={{ scrollAnchor: '#caseStudy' }}>
                Case studies
              </Link>
            )}
          </motion.div>
          <motion.div variants={itemAnimation} className="item">
            <div className="number">04.</div>
            <Link to="/blog">Blog</Link>
          </motion.div>
        </div>
        <motion.div
          variants={lineAnimation}
          animate={subMenuIsOn ? 'visible' : 'hidden'}
          className="line"
        ></motion.div>
        {subMenuIsOn && (
          <div className="sub-menu">
            <motion.div
              className="sub-item"
              variants={subItemAnimation}
              custom={1}
            >
              <Link to="/marketing">Marketing </Link>
            </motion.div>
            <motion.div
              className="sub-item"
              variants={subItemAnimation}
              custom={2}
            >
              <Link to="/development">Development </Link>
            </motion.div>
            <motion.div
              className="sub-item"
              variants={subItemAnimation}
              custom={3}
            >
              <Link to="/branding">Branding</Link>
            </motion.div>
            <motion.div
              className="sub-item"
              variants={subItemAnimation}
              custom={4}
            >
              <Link to="/ecommerce">eCommerce</Link>
            </motion.div>
            <motion.div
              className="sub-item"
              variants={subItemAnimation}
              custom={5}
            >
              <Link to="/events">Events</Link>
            </motion.div>
            <motion.div
              className="sub-item"
              variants={subItemAnimation}
              custom={6}
            >
              <Link to="/visual">Visual </Link>
            </motion.div>
          </div>
        )}
      </DesktopLinks>
      <div style={{ width: '100%' }}>
        <DesktopMenuFooter>
          <div className="social">
            <div className="row">
              <a href="https://www.facebook.com/explayn.it">Facebook</a>
              <a href="https://www.instagram.com/explayn.it/">Instagram</a>
            </div>
            <div className="row">
              <a href="https://www.youtube.com/channel/UCQE3VnneDB6U3oy-3R7Xyvw">
                Youtube
              </a>
              <a href="https://www.linkedin.com/company/explayn-digital-agency">
                Linkedin
              </a>
            </div>
          </div>
          <div className="contact">
            <h3>Contact us</h3>
            <a href="tel:+48881772030">+48 881 772 030</a>
            <a href="mailto:we@explayn.it">we@explayn.it</a>
          </div>
        </DesktopMenuFooter>
        <Copy>
          <p>© explayn.it All rights reserved</p>
        </Copy>
      </div>
    </DesktopMenu>
  );
};

export default MenuDesktop;
