import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { Link as ScLink } from 'react-scroll';
import {
  Exit,
  MenuLinksMobile,
  MobileSubMenu,
  MobileMenuHeader,
  MobileMenuContainer,
  MobileMenuFooter,
} from '../../styled';
import { useLocation } from '@reach/router';

const menuAnimation = {
  visible: {
    top: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      ease: 'easeInOut',
      duration: 0.3,
    },
  },
  hidden: {
    top: '-100vh',
    transition: {
      duration: 0,
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
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  hidden: {
    x: -500,
    opacity: 0,
  },
};

const subItemAnimation = {
  visible: i => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.05 * i,
      ease: 'easeIn',
      duration: 0.1,
    },
  }),
  hidden: {
    x: -300,
    opacity: 0,
  },
};

const MenuMobile = ({ toggle }) => {
  const location = useLocation();
  const [subMenuIsOn, setSubMenuIsOn] = useState(false);
  const menuSwitch = () => {
    toggle();
    setSubMenuIsOn(false);
  };
  const renderSubMenu = () => (
    <MobileSubMenu>
      <motion.a variants={subItemAnimation} custom={1} href="/marketing">
        Marketing
      </motion.a>
      <motion.a variants={subItemAnimation} custom={2} href="/development">
        Development
      </motion.a>
      <motion.a variants={subItemAnimation} custom={3} href="/branding">
        Branding
      </motion.a>
      <motion.a variants={subItemAnimation} custom={6} href="/visual">
        Visual
      </motion.a>
    </MobileSubMenu>
  );
  return (
    <MobileMenuContainer
      variants={menuAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      key="efwefwweffewfefewf"
    >
      <div className="cnt">
        <MobileMenuHeader>
          <Exit onClick={toggle}>
            <span className="sr" role="button">
              exit button
            </span>
          </Exit>
        </MobileMenuHeader>
        <MenuLinksMobile>
          <motion.div variants={itemAnimation} className="item">
            <div className="item-link">
              <div className="number">01.</div>
              <Link to="/">Home</Link>
            </div>
          </motion.div>
          <motion.div
            variants={itemAnimation}
            className="item"
            onClick={() => setSubMenuIsOn(prevState => !prevState)}
          >
            <div className="item-link">
              <div className="number">02.</div>
              <div>What we do</div>
            </div>
            {subMenuIsOn && renderSubMenu()}
          </motion.div>
          <motion.div variants={itemAnimation} className="item">
            <div className="item-link">
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
            </div>
          </motion.div>
          <motion.div variants={itemAnimation} className="item">
            <div className="item-link">
              <div className="number">04.</div>
              <Link to="/blog">Blog</Link>
            </div>
          </motion.div>
        </MenuLinksMobile>
        <MobileMenuFooter>
          <h3>Contact us</h3>
          <a href="tel:+48881772030">+48 881 772 030</a>
          <a href="mailto:we@explayn.it">we@explayn.it</a>
          <div className="socials">
            <a href="https://www.facebook.com/explayn.it">Facebook</a>
            <a href="https://www.youtube.com/channel/UCQE3VnneDB6U3oy-3R7Xyvw">
              Youtube
            </a>
            <a href="https://www.instagram.com/explayn.it/">Instagram</a>
            <a href="https://www.linkedin.com/company/explayn-digital-agency">
              Linkedin
            </a>
          </div>
        </MobileMenuFooter>
      </div>
    </MobileMenuContainer>
  );
};

export default MenuMobile;
