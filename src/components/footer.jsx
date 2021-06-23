import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Dots from '../images/footer-dots.svg'
import emailjs from 'emailjs-com';

const Style = styled.footer`
width: 100%;
min-height: 100vh;
background: #272727;
font-family: "Poppins";
padding: 5% 0;
position: relative;
.decoration {
    position: absolute;
    right: 0;
    bottom: 15%;
    width: 258px;
    @media (max-width: 1024px) {
        position: static;
        margin-left: auto;
    }
    @media (max-width: 600px) {
        width: 90px;
        height: 155px;
    }
}
@media (max-width: 1024px) {
    padding: 10%;
}
    h3 {
        color: #FFFFFF;
        font-size: 1.575rem;
        font-weight: 600;
        line-height: 153%;
        @media (max-width: 600px) {
            font-size: 1.3rem;
        }
    }
    a {
        color: #AAAAAA;
        font-size: 1.2rem;
        line-height: 145%;
        text-decoration: none;
        transition: 0.3s ease-in;
        @media (hover: hover) {
            &:hover {
                color: #fff;
            }
        }
        @media (max-width: 600px) {
            font-size: 1rem;
        }
    }
    .cnt {
        max-width: 1500px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-template-rows: auto;
        row-gap: 60px;
        grid-template-areas:
        "contact contact . . sl1 . sl2 . sl3"
        "newsletter newsletter newsletter . sl1 . sl2 . sl3"
        "social social social social . . . . ."
        ;
        @media (max-width: 1500px) {
            max-width: 1100px;
            grid-template-columns: repeat(10, 1fr);
            grid-template-areas:
            "contact contact . . . sl1 . sl2 . sl3"
            "newsletter newsletter newsletter newsletter . sl1 . sl2 .sl3"
            "social social social social . . . ."
            ;
        }
        @media (max-width: 1200px) {
            max-width: 800px;
            grid-template-columns: repeat(4, 1fr);
            grid-template-areas:
            "contact contact . ."
            "newsletter newsletter newsletter newsletter"
            "social social . ."
            "sl1 sl1 . ."
            "sl2 sl2 . ."
            "sl3 sl3 . ."
            ;
        }
        @media (max-width: 1024px) {
            max-width: 100%;
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas:
            "newsletter newsletter"
            "sl1 sl2"
            "sl3 sl3"
            "social ."
            "contact contact"
            ;
        }
        @media (max-width: 650px) {
            grid-template-areas:
            "newsletter newsletter"
            "sl1 sl2"
            "sl3 sl3"
            "social social"
            "contact contact"
            ;
        }
        @media (max-width: 600px) {
            column-gap: 20px;
        }
    }
    .contact-us {
        grid-area: contact;
        .tel {
            margin: 24px 0;
        }
    }
    .newsletter {
        grid-area: newsletter;
        p {
            color: #AAAAAA;
            font-size: 1.2rem;
            line-height: 145%;
            margin-bottom: 40px;
            @media (max-width: 600px) {
                font-size: 1rem;
            }
        }
        .form-grp {
            display: flex;
            align-items: center;
            form {
                max-width: 600px;
                display: flex;
                align-items: center;
            }
            input {
                width: 100%;
                height: 40px;
                outline: none;
                border: none;
                border-bottom: 3px solid white;
                background: transparent;
                color: #AAAAAA;
                font-size: 1.2rem;
                line-height: 145%;
                font-weight: 300;
                @media (max-width: 600px) {
                    width: 70%;
                }
                &::placeholder {
                    color: #AAAAAA;
                    font-size: 1.2rem;
                    line-height: 145%;
                    font-weight: 300;
                }
            }
            button {
                background: transparent;
                outline: none;
                border: none;
                color: #fff;
                font-size: 2.2rem;
                cursor: pointer;
                margin-left: 4%;
            }
        }
    }
    .social-media {
        grid-area: social;
        width: 100%;
        .mini-cnt {
            margin-top: 23px;
            max-width: 300px;
            display: flex;
            flex-wrap: wrap;
            @media (max-width: 650px) {
                max-width: 250px;
            }
            a {
                width: 50%;
                margin-bottom: 32px;
                &:nth-child(even) {
                    text-align: end;
                }
            }
        }
    }
    .site-links-column {
        display: flex;
        flex-direction: column;
        h3 {
            margin-bottom: 33px;
        }
        a {
            margin-bottom: 33px;
        }
    }
    .sl1 {
        grid-area: sl1;
    }
    .sl2 {
        grid-area: sl2;
    }
    .sl3 {
        grid-area: sl3;
    }
`
const Footer = () => {
    const [value, setValue] = useState("")
    const [mailSend, setMailSend] = useState(false)
    const handleSubmit = e => {
        e.preventDefault()
        emailjs.send('default_service', 'template_qhdmgng', {email: value}, 'user_VfGpMuhECXdgJOEm13gzv')
            .then(response => {
                setMailSend(true)
            })
    }
    return(
        <Style id="footer">

            <div className="cnt">

                <div className="contact-us">
                    <h3>
                        Contact us
                    </h3>
                    <div className="tel">
                        <a href="tel:+48 881 772 030">+48 881 772 030</a>
                    </div>
                    <div className="mail">
                        <a href="mailto:we@explayn.it">we@explayn.it</a>
                    </div>
                </div>

                <div className="newsletter">
                    <h3>
                        NEWSLETTER
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.
                    </p>
                    <div className="form-grp">
                        <form onSubmit={e => handleSubmit(e)}>
                            <input 
                                type="email" 
                                placeholder="Email adress"
                                value={value}
                                onChange={e => setValue(e.target.value)}
                            />
                            <button type="submit">
                                {">"}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="social-media">
                    <h3>
                        Follow us on social media
                    </h3>
                   <div className="mini-cnt">
                        <a href="https://www.facebook.com/explayn.it">Facebook</a>
                        <a href="https://www.youtube.com/channel/UCQE3VnneDB6U3oy-3R7Xyvw">Youtube</a>
                        <a href="https://www.instagram.com/explayn.it/">Instagram</a>
                        <a href="https://www.linkedin.com/company/explayn-digital-agency/about/?viewAsMember=true">LinkedIn</a>
                   </div>
                </div>

                <div className="site-links-column sl1">
                    <h3>
                        Service
                    </h3>
                    <Link to="/development">
                        Development
                    </Link>
                    <Link to="/visual">
                        Visual
                    </Link>
                    <Link to="/branding">
                        Branding
                    </Link>
                    <Link to="/ecommerce">
                        eCommerce
                    </Link>
                    <Link to="/events">
                        Events
                    </Link>
                    <Link to="/marketing">
                        Marketing
                    </Link>
                </div>

                <div className="site-links-column sl2">
                    <h3>
                        About
                    </h3>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/#caseStudy">
                        Case studies
                    </Link>
                    <Link to="/blog">
                        Blog
                    </Link>
                </div>

                
                <div className="site-links-column sl3">
                    <h3>
                        Support
                    </h3>
                    <Link to="/privacy">
                        Privacy policy
                    </Link>
                    <Link to="/cookies">
                        Cookie policy
                    </Link>
                </div>

            </div>
            <div className="decoration">
                <img src={ Dots } alt="decoration" />
            </div>
        </Style>
    )
}

export default Footer