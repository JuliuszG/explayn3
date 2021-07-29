import React, { useState } from 'react';
import ContactUs from './contactUs';
import { colors } from '../../styles/colors';
import MenuLanguage from './menuLanguage';
import { graphql, useStaticQuery, Link } from 'gatsby';
import {
  MenuWrapper,
  MenuFooterWrapper,
  LinksWrapper,
  MenuImage,
  ExitMenu,
  MenuHeader,
} from '../styled';

const MenuFooter = () => {
  return (
    <MenuFooterWrapper>
      <div className="main">
        <div className="social">
          <div className="row">
            <a href="http://www.facebook.com">Facebook</a>
            <a href="http://www.dribble.com">Dribble</a>
          </div>
          <div className="row">
            <a href="http://www.instagram.com">Instagram</a>
            <a href="http://www.linkedin.com">LinkedIn</a>
          </div>
        </div>
        <div className="contact">
          <h3 className="header">Skontaktuj się z nami</h3>
          <a href="tel:+123456789">+48 881 772 030</a>
          <a href="mailto:we@explayn.it">we@explayn.it</a>
        </div>
      </div>
      <span className="copy">&copy; explayn.it All rights reserved</span>
    </MenuFooterWrapper>
  );
};

const Header = ({ toggle }) => {
  return (
    <MenuHeader>
      <ExitMenu onClick={toggle} color={colors.neutral00}>
        <span className="sr" role="button">
          exit button
        </span>
      </ExitMenu>
      <div className="cnt">
        <ContactUs color={colors.neutral00} />
        <MenuLanguage />
      </div>
    </MenuHeader>
  );
};

const LinksMenu = () => {
  const [dropOn, setDropOn] = useState(false);
  const handleDrop = () => setDropOn(prevState => !prevState);
  return (
    <nav>
      <LinksWrapper>
        <li>
          <Link to="/">
            <span>01.</span>Strona główna
          </Link>
        </li>
        <li onClick={handleDrop} className="dropLink">
          <Link>
            <span>02.</span>Co robimy
          </Link>
          <span className={dropOn ? 'longdash active' : 'longdash'}></span>
          <ul className={dropOn ? 'dropdown active' : 'dropdown'}>
            <li>
              <Link to="/development">Development</Link>
            </li>
            <li>
              <Link to="/visual">Visual</Link>
            </li>
            <li>
              <Link to="/branding">Branding</Link>
            </li>
            <li>
              <Link to="/ecommerce">eCommerce</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/marketing">Marketing</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/">
            <span>03.</span>Nasze prace
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>04.</span>Kontakt
          </Link>
        </li>
      </LinksWrapper>
    </nav>
  );
};

const Menu = ({ toggle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "menuLogo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <MenuWrapper>
      <Header toggle={toggle} />
      <LinksMenu />
      <MenuFooter />
      <MenuImage
        fluid={data.file.childImageSharp.fluid}
        alt="logo"
        style={{ position: 'absolute', right: 0, bottom: 0 }}
      />
    </MenuWrapper>
  );
};

export default Menu;
