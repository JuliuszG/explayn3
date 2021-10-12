import React from 'react';
import ContactForm from './contactForm';
import { ConsultationContainer, ConsultationText } from './styled';
import landingCircle from '../../images/landing/landing-multi-circle.svg';
import Icon from '../../images/landingPL/icon.svg';

const Consultation = () => {
    return (
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
    );
};

export default Consultation;