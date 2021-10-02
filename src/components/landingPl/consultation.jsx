import React from 'react';
import ContactForm from './contactForm';
import { ConsultationContainer, ConsultationText } from './styled';

const Consultation = () => {
    return (
        <ConsultationContainer>
            <ConsultationText>
                <h2>Umów się na bezpłatną konsultację</h2>
                <p>Zostaw nam swoje dane, a my jak najszybciej do Ciebie wrócimy, żeby umówić rozmowę w dogodnym dla obu stron terminie.</p>
                <p>Podczas rozmowy, możesz bezpłatnie skonsultować dowolny temat związany z marketingiem, a my zadbamy o najwyższy poziom udzielanych odpowiedzi. </p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
                <p>JOANNA WIŚNIEWSKA</p>
                <p>Chief Marketing Officer</p>
                <p>Fundusz Inwestycyjny AVALLON</p>
            </ConsultationText>
            <ContactForm/>
        </ConsultationContainer>
    );
};

export default Consultation;