import React, { useState, useContext } from 'react';
import { appContext } from '../context';
import { ContactContainer } from './styled';
import emailjs from 'emailjs-com';
import {
    FormErrorMessage,
  } from '../styled';
  

const ContactForm = () => {

    const { changeContactFormStatus } = useContext(appContext);
    const [formData, setFormData] = useState({
        email: null,
        phone: null,
        checkbox: null,
    });

    const [errorData, setErrorData] = useState({
        email: null,
        phone: null,
        checkbox: null,
    });;

    const sendEmail = e => {
        e.preventDefault();
        const body = {
            ...formData,
        };
        emailjs
            .send(
                'default_service',
                'template_fyltbjj',
                body,
                'user_VfGpMuhECXdgJOEm13gzv'
            )
            .then(response => {
                changeContactFormStatus(2);
            });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (checkAll()) {
            sendEmail(e);
        }
    };

    const handleBlur = (name, value) => {
        if (name === 'email') {
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regex.test(value)) {
                setErrorData(prevState => ({
                    ...prevState,
                    email: 'Niepoprawny Email',
                }));
            } else {
                setErrorData(prevState => ({
                    ...prevState,
                    email: null,
                }));
            }
        }

        if (name === 'phone') {
            const regex = /^(?:\(?\?)?(?:[-\.\(\)\s]*(\d)){9}\)?$/
            if (!regex.test(value)) {
                setErrorData(prevState => ({
                    ...prevState,
                    phone: "Niepoprawny numer telefonu"
                }))
            } else {
                setErrorData(prevState => ({
                    ...prevState,
                    phone: null
                }))
            }
        }
        if (name === 'checkbox'){
            const checkbox = document.querySelector('.checkbox-item')
            if (checkbox.checked != true){
                console.log(checkbox.checked )
                setErrorData(prevState => ({
                    ...prevState,
                    checkbox: "Pole musi być zaznaczone"
                }))
            } else {
                setErrorData(prevState => ({
                    ...prevState,
                    checkbox: false
                }))
            }
        }
    };

    const handleChange = ({ value, name }) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const checkAll = () => {
        handleBlur('email', formData.email);
        handleBlur('phone', formData.phone);
        handleBlur('name', formData.name);
        handleBlur('checkbox', formData.checkbox);

        const checkbox = document.querySelector('.checkbox-item')
        if (
            errorData.email ||
            errorData.phone ||
            !formData.email ||
            !formData.phone ||
            !checkbox.checked 
        ) {
            return false;
        }
        return true;
    };

    return (
        <ContactContainer>
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label htmlFor="name" className="label">Imię</label>
                    <input className="text" id="name" 
                      onChange={event => handleChange(event.target)}
                      type="name"
                      onBlur={event => handleBlur(event.target.name, event.target.value)}
                      name="name"
                    ></input>
                    <FormErrorMessage>{errorData.name}</FormErrorMessage>
                </div>
                <div className="input">
                    <label htmlFor="email" className="label">Firmowy adres e-mail</label>
                    <input className="text" id="email" 
                        onChange={event => handleChange(event.target)}
                        onBlur={event => handleBlur(event.target.name, event.target.value)}
                        type="email"
                        name="email"></input>
                    <FormErrorMessage>{errorData.email}</FormErrorMessage>

                </div>
                <div className="input">
                    <label htmlFor="phone" className="label">Telefon kontaktowy</label>
                    <input className="text" id="phone" 
                        onChange={event => handleChange(event.target)}
                        onBlur={event => handleBlur(event.target.name, event.target.value)}
                        type="number"
                        name="phone"
                    ></input>
                    <FormErrorMessage>{errorData.phone}</FormErrorMessage>

                </div>
                <div className="checkbox">
                    <label />
                    <input type="checkbox" name='checkbox' className="checkbox-item" onBlur={event => handleBlur(event.target.name, event.target.value)}/>
                    <span>Wyrażasz zgodę na kontakt telefoniczny w celu obsługi niniejszego zgłoszenia. Wyrażasz zgodę na otrzymywanie informacji handlowych środkami komunikacji elektronicznej wysyłanymi przez www.explayn.it oraz na wykorzystanie komunikacji email w celach marketingowych (Polityka Prywatności).</span>
                    <FormErrorMessage>{errorData.checkbox}</FormErrorMessage>
                </div>
                <button type="submit" value="Wyślij">Wyślij</button>
            </form>
        </ContactContainer>
    );
};

export default ContactForm;