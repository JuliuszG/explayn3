import React, { useState } from 'react';
import { Link } from 'gatsby-plugin-intl';
import { Link as ScLink } from 'react-scroll';
import Dots from '../images/footer-dots.svg';
import Arrow from '../images/footer-arrow.svg';
import emailjs from 'emailjs-com';
import {
  FooterWrapper,
  FooterContent,
  FooterContactUs,
  FooterNewsletter,
  FooterFormWrapper,
  FotterSocialMedia,
  FooterSocialMediaContent,
  FooterDecoration,
} from './styled';
import { useLocation } from '@reach/router';

const FooterPl = () => {
  const location = useLocation();
  const url = location.pathname;
  const [value, setValue] = useState('');
  const [mailSend, setMailSend] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    emailjs
      .send(
        'default_service',
        'template_qhdmgng',
        { email: value },
        'user_VfGpMuhECXdgJOEm13gzv'
      )
      .then(response => {
        setMailSend(true);
      });
  };
  return (
    <FooterWrapper id="footer">
      <FooterContent>
        <FooterContactUs>
          <h3>Kontakt</h3>
          <div>
            <a href="tel:+48 881 772 030">+48 881 772 030</a>
          </div>
          <div className="mail">
            <a href="mailto:we@explayn.it">we@explayn.it</a>
          </div>
        </FooterContactUs>
        {!mailSend ?<FooterNewsletter>
          <h3>NEWSLETTER</h3>
          <p>
            Dołącz do społeczności Explayn i otrzymuj<br/> najlepsze wskazkówki.
          </p>
          <FooterFormWrapper>
            <form onSubmit={e => handleSubmit(e)}>
              <input
                type="email"
                placeholder="Email adress"
                minLength={2}
                required={true}
                value={value}
                onChange={e => setValue(e.target.value)}
              />
              <button type="submit">
                <img src={Arrow} alt="submit button" />
              </button>
            </form>
          </FooterFormWrapper>
        </FooterNewsletter>: 
         <FooterNewsletter>
          <h3>Dziękujemy za dodanie się do Explaynlettera.<br/>Pozostajemy w kontakcie!</h3>
       </FooterNewsletter>
        }
        <FotterSocialMedia>
          <h3>Social media</h3>
          <FooterSocialMediaContent>
            <a href="https://www.facebook.com/explayn.it">Facebook</a>
            <a href="https://www.youtube.com/channel/UCQE3VnneDB6U3oy-3R7Xyvw">
              Youtube
            </a>
            <a href="https://www.instagram.com/explayn.it/">Instagram</a>
            <a href="https://www.linkedin.com/company/explayn-digital-agency/about/?viewAsMember=true">
              LinkedIn
            </a>
          </FooterSocialMediaContent>
        </FotterSocialMedia>
        <div className="site-links-column sl1">
          <h3>Usługi</h3>
          <Link to="/development">Development</Link>
          <Link to="/visual">Visual</Link>
          <Link to="/branding">Branding</Link>
          <Link to="/marketing">Marketing</Link>
        </div>
        <div className="site-links-column sl2">
          <h3>O nas</h3>
          <Link to="/">Strona główna</Link>
          {location.pathname === '/' ? (
            <ScLink to={'caseStudy'} smooth duration={1000}>
              Case studies
            </ScLink>
          ) : (
            <Link to={'/'} state={{ scrollAnchor: '#caseStudy' }}>
              Case studies
            </Link>
          )}
          <Link to="/blog">Blog</Link>
          { url == '/reklama-platna' &&
          <ScLink to={'consultation'} smooth duration={1000}>
              Kontakt
            </ScLink>
            }
        </div>
        <div className="site-links-column sl3">
          <h3>Informacje</h3>
          <Link to="/policy">Polityka prywatności</Link>
          <Link to="/policy#cookie">Ciasteczka</Link>
        </div>
      </FooterContent>
      <FooterDecoration>
        <img src={Dots} alt="decoration" />
      </FooterDecoration>
    </FooterWrapper>
  );
};

export default FooterPl;
