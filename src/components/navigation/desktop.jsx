import React, { useState } from 'react';
import MenuIcon from './menuIcon';
import LogoImg from './logoImg';
import ContactUs from './contactUs';
import MenuDesktop from './nav2/menuDesktop';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import { DesktopNav, BlogTitle } from '../styled';

const Desktop = ({ darkMode, mainPage }) => {
  const location = useLocation();
  const url = location.pathname;
  const [menuIsOn, setMenuIsOn] = useState(false);
  const handleToggle = () => setMenuIsOn(prevState => !prevState);
  const renderMenu = () => {
    if (menuIsOn) {
      return <MenuDesktop toggle={handleToggle} />;
    } else {
      return null;
    }
  };
  return (
    <DesktopNav>
      <div className="desktop__cnt">
        <MenuIcon
          mainPage={mainPage}
          darkMode={darkMode}
          customWidth="40px"
          customHeight="23px"
          toggle={handleToggle}
        />
        <Link
          to="/"
          className="logo-link"
          style={
            url === '/blog' ? { display: 'flex', alignItems: 'flex-end' } : {}
          }
        >
          <LogoImg
            mainPage={mainPage}
            darkMode={darkMode}
            customWidth="194px"
            customHeight="41px"
          />
          {url === '/blog' && (
            <BlogTitle>
              <span>.</span>Blog
            </BlogTitle>
          )}
        </Link>
      </div>
      {url !== '/ads' && <ContactUs mainPage={mainPage} darkMode={darkMode} />}
      <div style={{ position: 'absolute' }}>
        <AnimatePresence>{renderMenu()}</AnimatePresence>
      </div>
    </DesktopNav>
  );
};

export default Desktop;
