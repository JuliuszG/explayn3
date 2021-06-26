import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import emailjs from 'emailjs-com';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import Item from './item';
import Mail from '../../images/blog/mail.svg'
const Style = styled.aside`
    font-family: "Poppins";
    width: 412px;
    padding-right: 20px;
    @media (max-width: 450px) {
        width: 100%;
    }
    h3 {
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 1.36px;
            color: #868686;
            margin-bottom: 20px;
            font-weight: 600;
    }
    .social {
        margin-bottom: 59px;
        a {
            width: 34px;
            height: 34px;
            display: inline-block;
            margin-right: 40px;
            &:last-of-type {
                margin-right: 0;
            }
            @media (hover: hover) {
                &:hover svg path{
                    fill: #636363;
                }
            }
            svg path {
                    transition: 0.3s ease-in
                }
        }
    }
    .newsletter {
        margin-bottom: 59px;
        background-color: #4A62F7;
        border: 1px solid #707070;
        border-radius: 16px;
        padding: 50px;
        @media (max-width: 1480px) {
            padding: 25px;
        }
        .thanks {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            text-align: center;
            img {
                width: 40px;
                margin-bottom: 40px;
            }
        }
        h3 {
            color: #FFFFFF;
        }
        .para-cnt {
            display: flex;
            align-items: flex-start;
            img {
                margin-top: 10px;
                margin-right: 20px;
            }
        }
        p {
            font-size: 18px;
            line-height: 29px;
            letter-spacing: 0.05px;
            color: #fff;
            margin-bottom: 30px;
            @media (max-width: 1480px) {
                font-size: 12px;
            }
        }
        form {
            input {
                display: block;
                outline: none;
                border: none;
                border-bottom: 1px solid #FFFFFF;
                width: 100%;
                color: #FFFFFF;
                font-family: "Poppins";
                font-weight: 600px;
                color: #000;
                font-size: 12px;
                line-height: 18px;
                letter-spacing: 1.36px;
                margin-bottom: 32px;
                background: transparent;
                @media (max-width: 1480px) {
                    font-size: 10px;
                }
                &::placeholder {
                    font-family: "Poppins";
                    padding-left: 22px;
                    font-weight: 600px;
                    color: #FFFFFF;
                    font-size: 12px;
                    line-height: 18px;
                    @media (max-width: 1480px) {
                        font-size: 10px;
                    }
                    letter-spacing: 1.36px;
                }
            }
            button {
                font-family: "Poppins";
                font-size: 12px;
                line-height: 18px;
                letter-spacing: 1.36px;
                font-weight: 600;
                outline: none;
                border: none;
                cursor: pointer;
                background: #E8EBFB;
                width: 147px;
                height: 31px;
                border-radius: 16px;
                color: #4A62F7;
                transition: 0.1s;
                &:hover {
                    transform: scale(1.05);
                }
            }
        }
    }
    .trending {
        .categories {
                a {
                    color: #4C65FF;
                    margin-right: 20px;
                    font-size: 12px;
                    line-height: 18px;
                    letter-spacing: 1.36px;
                    font-weight: 600;
                    text-transform: uppercase;
                    text-decoration: none;
                    display: inline;
                    &:last-of-type {
                        margin-right: 0;
                    }
                }
            }
        a {
            text-decoration: none;
            margin-bottom: 20px;
            display: block;
            h2 {
                font-size: 30px;
                line-height: 50px;
                color: #000;
            }
        }
        .filters {
            display: flex;
            flex-wrap: wrap;
            .filter {
                margin-bottom: 10px;
                margin-right: 10px;
                padding: 0 25px;
                font-weight: 300;
                font-size: 18px;
                line-height: 27px;
                letter-spacing: -0.22px;
                color: #000;
                border: 1px solid #333333;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                cursor: pointer;
                transition: all 0.3s ease-in;
                @media (hover: hover) {
                    &:hover {
                        border-color: #5163F6;
                        background: #5163F6;
                        color: #fff;
                    }
                }
                &.active {
                    border-color: #5163F6;
                    background: #5163F6;
                    color: #fff;
                }
            }
        }
    }
`
const SideBar = ({ title, slug, id }) => {
    const [email, setEmail] = useState('')
    const [filters, setFilters] = useState([])
    const [trending, setTrending] = useState([])
    const [mailSend, setMailSend] = useState(false)
    const data = useStaticQuery(
    graphql`
        {
            allDatoCmsBlog {
                nodes {
                    slug
                    blogTitle
                    id
                    categories
                }
        }
    }
`)
    useEffect(() => {
        if(filters.length === 0) {
            const filteredPosts = data.allDatoCmsBlog.nodes.filter((item, key) => item.id !== id && key <= 3)
            setTrending(filteredPosts)
        } else {
            const categoryFilter = data.allDatoCmsBlog.nodes.filter((post) => {
                const { categories } = JSON.parse(post.categories)
                let isIn = false
                categories.forEach(cat => {
                    if(filters.includes(cat.toUpperCase())) {
                        isIn = true
                    }
                })
                return isIn
            })
            const filteredPosts = categoryFilter.filter((item, key) => item.id !== id && key <= 3)
            setTrending(filteredPosts)
        }
    }, [filters])
    const handleSubmit = e => {
        e.preventDefault()
        emailjs.send('default_service', 'template_qhdmgng', {email}, 'user_VfGpMuhECXdgJOEm13gzv')
            .then(response => {
                setMailSend(true)
            })
    }
    const handleAddingCategories = (category) => {
        if(filters.indexOf(category) === -1) {
            setFilters(prevState => [...prevState, category])
        } else {
            setFilters(prevState => prevState.filter(el => el !== category))
        }
    }
    const filterList = [
        "BRANDING",
        "ANIMATIONS/3D",
        "VIDEO",
        "MARKETING STRATEGY",
        "SOCIAL MEDIA",
        "SOFTWARE",
        "OTHER"
    ]
    return (
        <Style>
            <div className="social">
                <h3>
                    SHARE THIS ARTICLE
                </h3>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=http://www.explayn.it/blog/${ slug }`}>
                    <svg id="Icon_awesome-facebook" data-name="Icon awesome-facebook" xmlns="http://www.w3.org/2000/svg" width="33.744" height="33.54" viewBox="0 0 33.744 33.54">
                        <path id="Icon_awesome-facebook-2" data-name="Icon awesome-facebook" d="M34.306,17.434A16.872,16.872,0,1,0,14.8,34.1V22.312H10.512V17.434H14.8V13.717c0-4.228,2.517-6.564,6.373-6.564a25.965,25.965,0,0,1,3.777.329v4.15H22.82a2.439,2.439,0,0,0-2.749,2.635v3.167H24.75L24,22.312H20.071V34.1A16.878,16.878,0,0,0,34.306,17.434Z" transform="translate(-0.563 -0.563)" fill="#7e7e7e"/>
                    </svg>
                </a>
                <a href={`http://twitter.com/share?text=${ title }&url=http://www.explayn.it/blog/${ slug }`}>
                    <svg id="Icon_awesome-twitter" data-name="Icon awesome-twitter" xmlns="http://www.w3.org/2000/svg" width="38.767" height="31.486" viewBox="0 0 38.767 31.486">
                        <path id="Icon_awesome-twitter-2" data-name="Icon awesome-twitter" d="M34.783,11.228c.025.344.025.689.025,1.033,0,10.5-7.995,22.606-22.606,22.606A22.453,22.453,0,0,1,0,31.3a16.437,16.437,0,0,0,1.919.1A15.912,15.912,0,0,0,11.783,28a7.959,7.959,0,0,1-7.429-5.51,10.019,10.019,0,0,0,1.5.123,8.4,8.4,0,0,0,2.091-.271,7.946,7.946,0,0,1-6.371-7.8v-.1a8,8,0,0,0,3.591,1.008A7.957,7.957,0,0,1,2.706,4.832a22.584,22.584,0,0,0,16.383,8.314,8.969,8.969,0,0,1-.2-1.82A7.953,7.953,0,0,1,32.642,5.89a15.643,15.643,0,0,0,5.043-1.919A7.924,7.924,0,0,1,34.192,8.35a15.928,15.928,0,0,0,4.575-1.23,17.079,17.079,0,0,1-3.985,4.108Z" transform="translate(0 -3.381)" fill="#7e7e7e"/>
                    </svg>
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=http://www.explayn.it/blog/${ slug }`}>
                    <svg id="Icon_awesome-linkedin-in" data-name="Icon awesome-linkedin-in" xmlns="http://www.w3.org/2000/svg" width="32.349" height="32.348" viewBox="0 0 32.349 32.348">
                        <path id="Icon_awesome-linkedin-in-2" data-name="Icon awesome-linkedin-in" d="M7.241,32.349H.534v-21.6H7.241ZM3.884,7.806A3.9,3.9,0,1,1,7.768,3.885,3.917,3.917,0,0,1,3.884,7.806ZM32.342,32.349H25.65V21.836c0-2.506-.051-5.719-3.487-5.719-3.487,0-4.021,2.722-4.021,5.538V32.349h-6.7v-21.6h6.432V13.7h.094a7.047,7.047,0,0,1,6.346-3.488c6.788,0,8.035,4.47,8.035,10.275V32.349Z" transform="translate(0 -0.001)" fill="#7e7e7e"/>
                    </svg>
                </a>
            </div>
            <div className="newsletter">
                {mailSend ? (
                    <div className="thanks">
                        <img src={Mail} alt="mail icon" />
                        <h3>Thank You for subscribing to our newsletter.</h3>
                    </div>
                ) : (
                    <>
                        <h3>
                            SUBSCRIBE TO OUR NEWSLETTER
                        </h3>
                        <div className="para-cnt">
                            <img src={Mail} alt="mail icon" />
                            <p>
                                Join our community and get our best insights, tips and strategies delivered straight to your inbox.
                            </p>
                        </div>
                        <form onSubmit={ e => handleSubmit(e) }>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="enter your email address" />
                            <button type="submit">
                            {"Get updated >"}
                            </button>
                        </form>
                    </>
                )}
            </div>
            <div className="trending">
                <h3>
                    TRENDING ARTICLES
                </h3>      
                <AnimateSharedLayout>
                    <motion.div layout>
                        <AnimatePresence layout>
                        {trending.map((post, index) => <Item key={index} post={post} />)}   
                        </AnimatePresence>
                    </motion.div>   
                </AnimateSharedLayout>   
                    <h3>
                        POPULAR TAGS
                    </h3>
                <div className="filters">
                            { filterList.map((filter, index) => (
                                <div 
                                    className={filters.includes(filter) ? "filter active" : "filter"}
                                    key={ index }
                                    onClick={() => handleAddingCategories(filter)}
                                >
                                    { filter }
                                </div>
                            )) }
                        </div>
            </div>
        </Style>
    )
}

export default SideBar