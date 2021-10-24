import React, { useState, useRef, useEffect } from 'react';
import SurmaLogo from '../../images/landingPL/surma.svg';
import landingCircle from '../../images/landing/landing-multi-circle.svg';
import chartGray from '../../images/landingPL/chart-gray.svg';
import explaynLogo from '../../images/landingPL/logo.svg';
import line from '../../images/landingPL/line.svg';

import {
    SurmaContent
  } from './styled';

import {
  ClientWrapper,
  SurmaWrapper
} from './styled';


const Client = () => {
  const ref = useRef();
  const [open, setOpen] = useState(false)
  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      [ref, handler]
    );
  }
  useOnClickOutside(ref, () => setOpen(false));

  if (open) {
    document.querySelector('html').style.overflow = 'hidden'
  } else {
    document.querySelector('html').style.overflow = 'scroll'
  }

  return (
    <>
      <ClientWrapper>
        <h2>Zobacz wyniki naszych klientów</h2>
        <img src={SurmaLogo} alt='surma logo' />
        <button onClick={() => setOpen(true)}>Zobacz case study</button>
        <SurmaWrapper>
        <div id="surma" className={open ? 'show' : 'none'} >
        <SurmaContent ref={ref}>
            <button onClick={() => setOpen(false)}>x</button>
            <img src={SurmaLogo} alt='surma logo' className="logo"/>
            <h3>Zakres pracy</h3>
            <p className="strategy">Strategia reklamowa / Facebook Ads / Instagram Ads</p>
            <h3>Efekty</h3>
            <div className="number-wrapper">
                <div className="number-flex">
                    <p className="number">132</p>
                    <p>Zapytania ofertowe<br/> z formularza</p>
                </div>
                <div className="number-flex">
                    <p className="number">77</p>
                    <p>zapytań o wycenę realizacji<br/> poprzez pozostałe formy<br/> kontaktu </p>
                </div>
                <div className="number-flex">
                    <p className="number">900%</p>
                    <p>ROAS</p>
                </div>
            </div>
            <div className="challenge-wrapper">
                <div>
                    <h3>Wyzwania</h3>
                    <p>Analizując specyfikę branży i to w jaki sposób przebiega proces zakupowy, maksymalnie dostosowaliśmy działania do wymagań rynkowych i oczekiwań klienta.</p>
                    <p>Razem z klientem opracowaliśmy założenia:</p>
                </div>
                <img src={landingCircle} alt="decoration" className="circle"/>
            </div>
            <div className="number-wrapper">
                <div className="number-flex">
                    <p className="text">edu</p>
                    <p>stworzenie kampanii <br/>świadomościowo-edukacyjnej</p>
                </div>
                <div className="number-flex">
                    <img src={chartGray} alt="icon" />
                    <p>zwiększenie ilości zapytań<br/> ofertowych sprzedaży detalicznej </p>
                </div>
                <div className="number-flex">
                    <p className="text">HoReCa</p>
                    <p>stworzenie dedykowanej <br/> kampanii dla segmentu HoReCa</p>
                </div>
            </div>
            <div className="challenge-wrapper">
                <div>
                    <h3>Rozwiązanie</h3>
                    <p>Analizując specyfikę branży i to w jaki sposób przebiega proces zakupowy, maksymalnie dostosowaliśmy działania do wymagań rynkowych i oczekiwań klienta.</p>
                </div>
                <img src={landingCircle} alt="decoration" className="circle"/>
            </div>
            <div className="solutions">
            <img src={line} alt="decoration" className="decoration decoration-up" />
                <div className="solutions-flex">
                    <p className="number">1.</p>
                    <div className="solutions-text">
                        <p className="bold">Przeanalizowaliśmy proces zakupowy i zaprojektowaliśmy lej marketingowy zgodny z procesem.</p>
                        <p>Ze względu na wysoką cenę produktu, proces zakupowy znacznie wydłużony. Do rozwiązanie tego problemu zastosowaliśmy treści dopasowane do miejsca w procesie zakupowym, w którym znajduje się klient.</p>
                    </div>  
                </div>
                <img src={landingCircle} alt="decoration" className="decoration decoration-top" />
                <div className="solutions-flex right">
                    <p className ="number">2.</p>
                    <div className="solutions-text">
                        <p className="bold">Stworzyliśmy strukturę reklamową zgodną z lejem marketingowym </p>
                        <p>Poprzez dopasowanie treści (artykuły na blogu, kreacje reklamowe) do odpowiedniego miejsca w procesie zakupowym, efektywnie zwiększyliśmy ilość zapytań ofertowych.</p>
                    </div>  
                </div>
                <img src={line} alt="decoration" className="decoration decoration-bottom"/>
                <div className="solutions-flex bottom">
                    <p className="number">3.</p>
                    <div className="solutions-text">
                        <p className="bold">Uruchomienie kampanii nastawionej na pozyskiwanie klientów B2B.</p>
                        <p>Treści  i komunikaty oddziałujące na klienta biznesowego znacznie zwiększyły konwersje zapytań ofertowych.</p>
                    </div>  
                </div>
            </div>
            <img src={explaynLogo} alt="logo" className="logo-small"/>
            <p className="data">&#9426; 2021</p>
        </SurmaContent>
        </div>
      </SurmaWrapper>
      </ClientWrapper>
    </>
  );
};

export default Client;