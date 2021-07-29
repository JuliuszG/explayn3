import React, { useState } from 'react';
import MenuLanguage from './menuLanguage';
import { graphql, useStaticQuery, Link } from 'gatsby';
import {
  MenuExit,
  MobileMenuWrapper,
  MobileHeaderMenuWrapper,
  MobileMenuLinks,
  MobileFooterMenu,
  MobileMenuImage,
} from '../styled';

const MenuFooter = () => {
  return (
    <MobileFooterMenu>
      <div className="contact">
        <h3 className="header">Skontaktuj się z nami</h3>
        <a href="tel:+123456789">+48 881 772 030</a>
        <a href="mailto:we@explayn.it">we@explayn.it</a>
      </div>
      <div className="social">
        <a href="http://www.facebook.com">Facebook</a>
        <a href="http://www.dribble.com">Dribble</a>
        <a href="http://www.instagram.com">Instagram</a>
        <a href="http://www.linkedin.com">LinkedIn</a>
      </div>
    </MobileFooterMenu>
  );
};

const MenuLinks = () => {
  const [dropOn, setDropOn] = useState(false);
  const handleDrop = () => setDropOn(prevState => !prevState);
  return (
    <MobileMenuLinks>
      <li>
        <Link to="/">
          <span>01.</span>Strona główna
        </Link>
      </li>
      <li onClick={handleDrop} className="dropLink">
        <Link>
          <span>02.</span>Co robimy
        </Link>
        <ul className={dropOn ? 'dropdown active' : 'dropdown'}>
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
          <li>
            <Link to="/development">Development</Link>
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
    </MobileMenuLinks>
  );
};

const MobileHeader = ({ toggle }) => {
  return (
    <MobileHeaderMenuWrapper>
      <MenuExit onClick={toggle}>
        <span className="sr" role="button">
          exit button
        </span>
      </MenuExit>
      <MenuLanguage />
    </MobileHeaderMenuWrapper>
  );
};

const MobileMenu = ({ toggle }) => {
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
    <MobileMenuWrapper>
      <div className="cnt">
        <MobileHeader toggle={toggle} />
        <MenuLinks />
        <MenuFooter />
        <MobileMenuImage fluid={data.file.childImageSharp.fluid} alt="logo" />
      </div>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
