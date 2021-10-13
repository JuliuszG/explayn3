import React, { useState, useContext } from 'react';
import MenuIcon from './menuIcon';
import LogoImg from './logoImg';
import { MobileNav, MobileNavWrapper } from '../styled';
import MenuMobile from './nav2/menuMobile';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'gatsby';
import Phone from '../../images/call-phone.svg';
import { appContext } from '../context';
import {useScroll} from './scrollHook'


const Mobile = () => {
  const [menuOn, setMenuOn] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleToggle = () => setMenuOn(prevState => !prevState);
  const { changeContactFormStatus } = useContext(appContext);
  const { y, x, scrollDirection } = useScroll();  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 700 && window.scrollY < ((document.body.clientHeight - window.innerHeight) - 75)) {
      setScroll(true)
    } else if (window.scrollY < 700 || window.scrollY > ((document.body.clientHeight - window.innerHeight) - 75)) {
      setScroll(false)
    }
  })

  const styles =  scroll ? {
    active: {
      visibility: "visible",
      transition: "all 0.5s",
      position: "fixed",
      top: '0',
      width: '100%',
      zIndex:'99999'

    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)"
    }
  } : {
    active: {
    },
    hidden: {
    }
  }
  return (
    <MobileNavWrapper>
      <MobileNav style={scrollDirection === "down" ? styles.active: styles.hidden}>
        <MenuIcon customWidth="35px" customHeight="18px" toggle={handleToggle} />
        <div className="dec"></div>
        <Link to="/">
          <LogoImg customWidth="128px" customHeight="27px" />
        </Link>
        <div className="dec"></div>
        <button
          onClick={() => {
            changeContactFormStatus(1)
          }}
          className="contact-icon"
        >
          <img src={Phone} alt="phone" />
        </button>
        <div style={{ position: 'absolute' }}>
          <AnimatePresence>
            {menuOn && <MenuMobile toggle={handleToggle} />}
          </AnimatePresence>
        </div>
      </MobileNav>
    </MobileNavWrapper>
  );
};

export default Mobile;
