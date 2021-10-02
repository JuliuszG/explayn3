import React from 'react';
import { ContactContainer } from './styled';

const ContactForm = () => {
    return (
        <ContactContainer>
            <form>
            <div className="input">
                <label for="name" className="label">Imię</label>
                <input type="name" className="text" id="name" required></input>
            </div>
            <div className="input">
                <label for="email" className="label">Firmowy adres e-mail</label>
                <input type="email" className="text" id="email" required></input>
            </div>
            <div className="input">
                <label for="email"  className="label">Telefon kontaktowy</label>
                <input type="phone" className="text" id="phone" required></input>
            </div>
            <div class="checkbox">
                <label/>
                <input type="checkbox" class="checkbox-item"/>
                <span>Wyrażasz zgodę na kontakt telefoniczny w celu obsługi niniejszego zgłoszenia. Wyrażasz zgodę na otrzymywanie informacji handlowych środkami komunikacji elektronicznej wysyłanymi przez www.explayn.it oraz na wykorzystanie komunikacji email w celach marketingowych (Polityka Prywatności).</span>
            </div>
            <button type="submit" value="Wyślij">Wyślij</button>
            </form>
        </ContactContainer>
    );
};

export default ContactForm;