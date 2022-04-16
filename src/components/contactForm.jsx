import React, { useState, useContext, useEffect } from 'react';
import { appContext } from './context';
import ContactFormImage from '../images/contactFormImage.svg';
import emailjs from 'emailjs-com';
import {
  ContactFormWrapper,
  ContactCategories,
  ContactCategory,
  FormErrorMessage,
  FormGroup,
  FormButtonContainer,
  FormSubmitButton,
  ExitButton,
  ContactDecoration,
} from './styled';
import { useIntl } from 'gatsby-plugin-intl';

const categories = [
  'BRANDING',
  'MARKETING STRATEGY',
  'MARKETING AUTOMATION',
  'PAID ADS',
  'SOCIAL MEDIA',
  'CONTENT MARKETING',
  'DEVELOPMENT',
  'LANDING PAGE',
  'UX / UI',
  'APPS',
  'ECOMMERCE',
  'VIDEO',
  'GRAPHIC DESIGN',
  'OTHER',
];

const contactVariant = {
  in: {
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  out: {
    y: '-100vh',
  },
  exit: {
    x: '-100vw',
  },
};

export const ContactForm = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  
  const [list, setList] = useState([]);
  const { changeContactFormStatus } = useContext(appContext);
  const [formData, setFormData] = useState({
    email: null,
    phone: null,
    message: null,
  });

  const [errorData, setErrorData] = useState({
    email: null,
    phone: null,
    message: null,
    cat: null,
  });

  const handleAddingCategories = category => {
    if (list.indexOf(category) === -1) {
      setList(prevState => [...prevState, category]);
      setErrorData(prevState => ({
        ...prevState,
        cat: null,
      }));
    } else {
      setList(prevState => prevState.filter(el => el !== category));
    }
  };

  const hashtagify = () => {
    const newList = list.map(el => '#' + el);
    return newList.join(' ');
  };

  const sendEmail = e => {
    e.preventDefault();
    const tags = hashtagify();
    const body = {
      ...formData,
      tags: tags,
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
          email: 'Incorrect Email',
        }));
      } else {
        setErrorData(prevState => ({
          ...prevState,
          email: null,
        }));
      }
    }

    // if(name === 'phone') {
    //     const regex = /^(?:\(?\?)?(?:[-\.\(\)\s]*(\d)){9}\)?$/
    //     if(!regex.test(value)) {
    //         setErrorData(prevState => ({
    //             ...prevState,
    //             phone: "Incorrect Phone Number"
    //         }))
    //     } else {
    //         setErrorData(prevState => ({
    //             ...prevState,
    //             phone: null
    //         }))
    //     }
    // }

    if (name === 'message') {
      if (!value || value?.length < 10) {
        setErrorData(prevState => ({
          ...prevState,
          message: 'Message must contain at least 10 letters',
        }));
      } else {
        setErrorData(prevState => ({
          ...prevState,
          message: null,
        }));
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
    handleBlur('message', formData.message);
    if (list.length === 0) {
      setErrorData(prevState => ({
        ...prevState,
        cat: 'Select at least one category',
      }));
    } else {
      setErrorData(prevState => ({
        ...prevState,
        cat: null,
      }));
    }
    if (
      errorData.email ||
      errorData.phone ||
      errorData.message ||
      !formData.email ||
      !formData.phone ||
      !formData.message ||
      list.length === 0
    ) {
      return false;
    }
    return true;
  };

  return (
    <ContactFormWrapper
      variants={contactVariant}
      animate="in"
      initial="out"
      exit="exit"
    >
      <h1>{useIntl().formatMessage({ id: "contact-form-wrapper.h1"})}</h1>
      <p>{useIntl().formatMessage({ id: "contact-form-wrapper.p"})}</p>
      <h4>{useIntl().formatMessage({ id: "contact-form-wrapper.h4"})}</h4>
      <ContactCategories>
        {categories.map((category, index) => (
          <ContactCategory
            htmlFor={`checkbox${index}`}
            key={index}
            isActive={document.getElementById(`checkbox${index}`)?.checked}
          >
            <input
              type="checkbox"
              value={category}
              name={`checkbox${index}`}
              id={`checkbox${index}`}
              onChange={() => handleAddingCategories(category)}
            />
            {category}
          </ContactCategory>
        ))}
      </ContactCategories>
      <FormErrorMessage space>{errorData.cat}</FormErrorMessage>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <input
            onChange={event => handleChange(event.target)}
            onBlur={event => handleBlur(event.target.name, event.target.value)}
            type="email"
            name="email"
          />
          <FormErrorMessage>{errorData.email}</FormErrorMessage>
        </FormGroup>
        <FormGroup>
          <label htmlFor="phone">Phone number</label>
          <input
            onChange={event => handleChange(event.target)}
            onBlur={event => handleBlur(event.target.name, event.target.value)}
            type="number"
            name="phone"
          />
          <FormErrorMessage>{errorData.phone}</FormErrorMessage>
        </FormGroup>
        <FormGroup>
          <label htmlFor="message">Message</label>
          <textarea
            onChange={event => handleChange(event.target)}
            type="text"
            onBlur={event => handleBlur(event.target.name, event.target.value)}
            name="message"
          ></textarea>
          <FormErrorMessage>{errorData.message}</FormErrorMessage>
        </FormGroup>
        <FormButtonContainer>
          <FormSubmitButton type="submit">Submit</FormSubmitButton>
        </FormButtonContainer>
      </form>
      <ExitButton onClick={() => changeContactFormStatus(0)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <span className="sr-only">Close</span>
      </ExitButton>
      <ContactDecoration src={ContactFormImage} alt="decoration" />
    </ContactFormWrapper>
  );
};

// Thank You Card
