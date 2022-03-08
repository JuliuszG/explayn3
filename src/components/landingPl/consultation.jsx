import React from 'react';
import { Link } from 'gatsby-plugin-intl';
import ContactForm from './contactForm';
import { ConsultationContainer, ConsultationText, ConsultationContainerThank } from './styled';
import landingCircle from '../../images/landing/landing-multi-circle.svg';
import Icon from '../../images/landingPL/icon.svg';

const Consultation = () => {
    return (
        <>
            <ConsultationContainer id="consultation">
                <ConsultationText>
                    <div className="decoration">
                        <img src={landingCircle} alt="decoration" />
                    </div>
                    <h2>Umów się na<br /> bezpłatną konsultację</h2>
                    <p>Zostaw nam swoje dane, a my jak najszybciej do Ciebie wrócimy, żeby umówić rozmowę w dogodnym dla obu stron terminie.</p>
                    <p>Podczas rozmowy, możesz bezpłatnie skonsultować dowolny temat związany z marketingiem, a my zadbamy o najwyższy poziom udzielanych odpowiedzi. </p>
                    <div className="quote-wrapper">
                        <img src={Icon} alt="decoration" />
                        <p className="quote">Explayn poszerzył naszą perspektywę na digital marketing. Dzięki współpracy poznaliśmy alternatywne i precyzyjne sposoby pozyskiwania partnerów biznesowych.</p>
                    </div>
                    <div className="referal-wrapper">
                        <div className="circle"></div>
                        <div>
                            <p className="name bold">JOANNA WIŚNIEWSKA</p>
                            <p className="name">Chief Marketing Officer</p>
                            <p className="name bold">Fundusz Inwestycyjny AVALLON</p>
                        </div>
                    </div>
                </ConsultationText>
                <ContactForm />
            </ConsultationContainer>
            <ConsultationContainerThank id="thankYouPage">
                <ConsultationText className="thankText">
                    <div className="decoration-center">
                        <img src={landingCircle} alt="decoration" />
                    </div>
                    <h2 className="center">Gratulacje!<br/>Zamówiłeś bezpłatną konsultacje</h2>
                    <p>Wkrótce odezwie się do Ciebie jeden z naszych specjalistów.</p>
                    <p>Przygotuj wszystkie nurtujące Cię pytania, a jeżeli masz trochę wolnego czasu, przejrzyj nasze ostatnie realizacje. </p>
                    <button className="button"> <Link to={'/'} state={{ scrollAnchor: '#caseStudy' }}>Przejdź do case studies</Link></button>
                </ConsultationText>
            </ConsultationContainerThank>
        </>
    );
};

export default Consultation;