import React, { useState, useContext } from 'react';
import MenuIcon from './menuIcon';
import LogoImg from './logoImg';
import { MobileNav, MobileNavWrapper } from '../styled';
import MenuMobile from './nav2/menuMobile';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'gatsby';
import Phone from '../../images/call-phone.svg';
import { appContext } from '../context';

const Mobile = () => {
  const [menuOn, setMenuOn] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleToggle = () => setMenuOn(prevState => !prevState);
  const { changeContactFormStatus } = useContext(appContext);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 700) {
      setScroll(true)
    } else if (window.scrollY < 700) {
      setScroll(false)
    }
  })
  return (
    <MobileNavWrapper>
      <MobileNav className={scroll && 'sticky'}>
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
