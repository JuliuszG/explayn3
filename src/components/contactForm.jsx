import React, {useState} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Style = styled(motion.div)`
    width: 100vw;
    min-height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 2% 16%;
    z-index: 999;
    font-size: 15px;
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
    @media (max-width: 1600px) {
        font-size: 9.5px;
        padding: 2% 14%;
    }
    @media (max-width: 1024px) {
        font-size: 14px;
        padding: 2% 14%;
        position: absolute;
        height: auto;
        padding: 5% 10%;
        box-shadow: 2px 0 6px;
    }
    @media (max-width: 450px) {
        font-size: 12px;
        padding: 2% 14%;
        position: absolute;
        height: auto;
        padding: 5% 10%;
        box-shadow: 2px 0 6px;
    }
    @media (max-width: 450px) and (orientation: landscape) {
        font-size: 14.5px;
    }
    h1 {
        font-style: normal;
        font-weight: 400;
        font-size: 5.25em;
        letter-spacing: -1.34px;
        color: #000000;
        line-height: 148%;
        margin-bottom: 2.38vh;
    }
    p, h4 {
        font-size: 1.5em;
        letter-spacing: -1.08px;
        color: #000000;
        line-height: 145%;
    }
    p {
        margin-bottom: 3vh;
        width: 50%;
        @media (max-width: 1600px) {
            width: 50%;
        }
        @media (max-width: 1024px) {
            width: 100%;
        }
    }
    h4 {
        margin-bottom: 15px;
    }
    .boxes-cnt {
        display: flex;
        flex-wrap: wrap;
        width: 50%;
        margin-bottom: 0.99vh;
        @media (max-width: 1600px) {
            width: 60%;
        }
        @media (max-width: 1024px) {
            width: 100%;
        }
    }
    .error-msg {
        color: red;
        display: block;
        &.cat {
            margin-bottom: 3vh;
        }
    }
    .box {
        margin-right: 5px;
        margin-bottom: 10px;
        font-weight: 300;
        padding: 3px;
        color: #1a1a1a;
        background-color: #fff;
        border: 1px solid #333;
        cursor: pointer;
        outline: none;
        transition: all 0.3s ease-in;
        font-size: 1.2em;
        span {
            font-weight: 700;
        }
        &.active {
            background: #5163F6;
            color: #fff;
        }
        &:hover {
            background: #5163F6;
            color: #fff;
        }
    }
    form {
        width: 50%;
        @media (max-width: 1600px) {
            width: 65%;
        }
        @media (max-width: 1024px) {
            width: 100%;
        }
    }
    .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 3vh;
        &:last-of-type {
            margin-bottom: 0;
        }
        label {
            font-size: 1.5em;
            line-height: 148%;
        }
        input {
            border: none;
            border-bottom: 1px solid #D3D3D3;
            outline: none;
            font-size: 1.2em;
        }
        textarea {
            resize: none;
            outline: none;
            height: 11.7vh;
            border: none;
            border-bottom: 1px solid #D3D3D3;
        }
    }
    .btn-cnt {
        @media (max-width: 1024px) {
                display: flex;
                justify-content: center;
                margin:  2vh 0 0 0;
            }
    }
    .form-submit {
            border-radius: 37px;
            width: 260px;
            height: 60px;
            background: #4C64FF;
            color: #fff;
            outline: none;
            border: none;
            font-family: "Poppins", sans-serif;
            font-size: 29px;
            cursor: pointer;
            transition: all 0.3s ease-in;
            &:hover {
                background: transparent;
                color: #4C64FF;
                border: 1px solid #4C64FF;
                transform: scale(0.95)
            }
            
        }
`
export const ContactForm = () => {
    const [list, setList] = useState([])
    const [formData, setFormData] = useState({
        email: null,
        phone: null,
        message: null
    })
    const [errorData, setErrorData] = useState({
        email: null,
        phone: null,
        message: null,
        cat: null
    })
    const handleAddingCategories = (category) => {
        if(list.indexOf(category) === -1) {
            setList(prevState => [...prevState, category])
            setErrorData(prevState => ({
                ...prevState,
                cat: null
            }))
        } else {
            setList(prevState => prevState.filter(el => el !== category))
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(checkAll()) {
            console.log('wysylam formularz');
        }
    }
    const handleBlur = (name, value) => {

        if(name === 'email') {
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if(!regex.test(value)) {
                setErrorData(prevState => ({
                    ...prevState,
                    email: "Incorrect Email"
                }))
            } else {
                setErrorData(prevState => ({
                    ...prevState,
                    email: null
                }))
            }
        }

        if(name === 'phone') {
            const regex = /^(?:\(?\?)?(?:[-\.\(\)\s]*(\d)){9}\)?$/
            if(!regex.test(value)) {
                setErrorData(prevState => ({
                    ...prevState,
                    phone: "Incorrect Phone Number"
                }))
            } else {
                setErrorData(prevState => ({
                    ...prevState,
                    phone: null
                }))
            }
        }

        if(name === 'message') {
            if(!value || value?.length < 10) {
                setErrorData(prevState => ({
                    ...prevState,
                    message: "Message must contain at least 10 letters"
                }))
            } else {
                setErrorData(prevState => ({
                    ...prevState,
                    message: null
                }))
            }
        }
    }
    const handleChange = ({ value, name }) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const checkAll = () => {
        handleBlur('email', formData.email)
        handleBlur('phone', formData.phone)
        handleBlur('message', formData.message)
        if(list.length === 0) {
            setErrorData(prevState => ({
                ...prevState,
                cat: "Select at least one category"
            }))
        } else {
            setErrorData(prevState => ({
                ...prevState,
                cat: null
            }))
        }
        if(errorData.email || errorData.phone || errorData.message || !formData.email || !formData.phone || !formData.message || list.length === 0) {
            return false
        }
        return true
    }
    const categories = [
        'BRANDING', 
        'ANIMATIONS/3D',
        'VIDEO',
        'APPS',
        'eCOMMERCE',
        'UI/UX',
        'MARKETING STRATEGY',
        'SOCIAL MEDIA',
        'CONTENT MARKETING',
        'e-EVENTS',
        'SOFTWARE',
        'OTHER'
    ]
    return (
        <Style>
            <h1>Let’s talk</h1>
            <p>We find inspiration to create in your challenges. Let us know what your brand needs.</p>
            <h4>How can we help you?</h4>
                <div className="boxes-cnt">
                { categories.map((category, index) => (
                    <button 
                        onClick={() => handleAddingCategories(category)} 
                        className={list.includes(category) ? "box active" : "box"}
                        key={ index }
                    >
                        <span>+</span> { category }
                    </button>
                )) }
            </div>
            <small className="error-msg cat">{ errorData.cat && errorData.cat}</small>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={event => handleChange(event.target)} onBlur={event => handleBlur(event.target.name, event.target.value)} type="email" name="email" />
                    <small className="error-msg">{ errorData.email && errorData.email}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone number</label>
                    <input onChange={event => handleChange(event.target)} onBlur={event => handleBlur(event.target.name, event.target.value)} type="tel" name="phone" />
                    <small className="error-msg">{ errorData.phone && errorData.phone}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea onChange={event => handleChange(event.target)} type="text" onBlur={event => handleBlur(event.target.name, event.target.value)} name="message"></textarea>
                    <small className="error-msg">{ errorData.message && errorData.message}</small>
                </div>
                <div className="btn-cnt">
                <button type="submit" className="form-submit">
                    Submit
                </button>
                </div>
            </form>
        </Style>
    )
}