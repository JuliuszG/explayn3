import React, { useState, useEffect } from 'react';
import { ContactContainer } from './styled';
import emailjs from 'emailjs-com';
import {
    FormErrorMessage,
} from '../styled';


const ContactForm = () => {
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
        console.log(JSON.stringify(body))
        emailjs
            .send(
                'default_service',
                'template_fyltbjj',
                body,
                'user_VfGpMuhECXdgJOEm13gzv'
            )
            .then(response => {
                const contactForms = document.querySelector('#consultation')
                contactForms.style.display = 'none';
                thankYouPage.style.display = 'block';
                thankYouPage.scrollIntoView();
            });
            const requestOptions = {
                method: 'POST',
                mode: 'no-cors',
                headers: { 
                    'Content-Type': 'application/json',
                    'Acces-Control-Allow-Origin': '*',
                    'Acces-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE'
                 },
                body: JSON.stringify(body)
            };
            fetch("https://hooks.zapier.com/hooks/catch/11421623/bm8k2u6/", requestOptions)
            
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (checkAll()) {
            document.querySelector('#advSendButton').innerHTML=`<div style='transition: max-width 1s linear'
            >Trwa wysyłanie</div>`
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
        if (name === 'checkbox') {
            const checkbox = document.querySelector('.checkbox-item')
            if (checkbox.checked != true) {
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
            if (document.querySelector('#advSendButton').classList.contains('clicked')) {
                 document.querySelector('#advSendButton').classList.remove('clicked')
            }
            return false;
        } else {
            document.querySelector('#advSendButton').classList.add('clicked')
            return true;
        }
    };

    return (
        <ContactContainer>
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label htmlFor="name" className="label">Imię</label>
                    <input className="text" id="name"
                        onChange={event => {
                            handleChange(event.target)
                            checkAll()
                        }}                        
                        type="name"
                        onBlur={event => {
                            handleBlur(event.target.name, event.target.value)
                        }}
                        name="name"
                    ></input>
                    <FormErrorMessage>{errorData.name}</FormErrorMessage>
                </div>
                <div className="input">
                    <label htmlFor="email" className="label">Firmowy adres e-mail</label>
                    <input className="text" id="email"
                        onChange={event => {
                            handleChange(event.target)
                            checkAll()
                        }}                        
                        onBlur={event => handleBlur(event.target.name, event.target.value)}
                        type="email"
                        name="email"></input>
                    <FormErrorMessage>{errorData.email}</FormErrorMessage>

                </div>
                <div className="input">
                    <label htmlFor="phone" className="label">Telefon kontaktowy</label>
                    <input className="text" id="phone"
                        onChange={event => {
                            handleChange(event.target)
                            checkAll()
                        }}
                        onBlur={event => handleBlur(event.target.name, event.target.value)}
                        type="number"
                        name="phone"
                    ></input>
                    <FormErrorMessage>{errorData.phone}</FormErrorMessage>

                </div>
                <div className="checkbox">
                    <label />
                    <input type="checkbox" name='checkbox' className="checkbox-item" onBlur={event => handleBlur(event.target.name, event.target.value)} onClick={()=>{checkAll()}}/>
                    <span>Wyrażasz zgodę na kontakt telefoniczny w celu obsługi niniejszego zgłoszenia. Wyrażasz zgodę na otrzymywanie informacji handlowych środkami komunikacji elektronicznej wysyłanymi przez www.explayn.it oraz na wykorzystanie komunikacji email w celach marketingowych (<a href="/policy">Polityka Prywatności</a>).</span>
                </div>
                <FormErrorMessage>{errorData.checkbox}</FormErrorMessage>
                <button type="submit" id="advSendButton" value="Wyślij" >
                <div className="send">Wyślij</div></button>
            </form>
        </ContactContainer>
    );
};

export default ContactForm;