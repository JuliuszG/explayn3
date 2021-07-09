import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import e from 'cors';
const Style = styled.div`
display: flex;
justify-content: center;
align-content: center;
margin-bottom: 10%;
.ttr {
    color: #868686;
    text-transform: uppercase;
}
@media (max-width: 1300px) {
    transform: translateY(0%);
    margin-bottom: 5%;
    margin-top: 5%;
}
    .trending {
        width: 1500px;
        position: relative;
        margin: 0 auto;
        h3{
            font-family: "Poppins";
            font-size: 3rem;
            margin-bottom: 80px;
            text-align: center;
        }
        @media (max-width: 1400px) {
            padding: 2%;
            justify-content: center;
        }
        .post-cnt {
            width: 100%;
            flex-wrap: wrap;
            display: flex;
            justify-content: center;
            align-items: stretch;
        }
        .slide {
            width: 400px;
            box-shadow: 0 0 40px #00000014;
            font-family: "Poppins";
            cursor: pointer;
            margin-right: 50px;
            &:last-of-type {
                margin-right: 0;
            }
            @media (max-width: 1480px) {
                margin: 20px;
                width: 300px;
                height: 450px;
            }
            @media (max-width: 1100px) {
                margin: 20px;
                width: 60%;
                height: 650px;
            }
            @media (max-width: 750px) {
                margin: 20px;
                width: 100%;
                height: 450px;
            }
            &:hover .img .overlay {
                opacity: 0.2;
                z-index: 10;
            }
            &:hover .content .link {
                opacity: 1;
            }
            .img {
                width: 100%;
                height: 50%;
                position: relative;
                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #4C65FF;
                    opacity: 0;
                    transition: all 0.5s ease-in;
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .content {
                height: 50%;
                width: 100%;
                padding: 20px 20px 40px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                @media (max-width: 1480px) {
                    padding: 20px;
                }
                @media (max-width: 1024px) {
                    padding: 60px;
                }
                @media (max-width: 600px) {
                    padding: 20px;
                }
                h3 {
                    font-size: 25px;
                    line-height: 40px;
                    text-align: left;
                    @media (max-width: 1480px) {
                        font-size: 20px;
                        line-height: 30px;
                    }
                    @media (max-width: 1024px) {
                        font-size: 30px;
                        line-height: 50px;
                    }
                    @media (max-width: 600px) {
                        font-size: 20px;
                        line-height: 30px;
                    }
                }
                .details {
                    width: 100%;
                    display: flex;
                    font-size: 12px;
                    color: #4C65FF;
                    @media (max-width: 1500px) {
                        font-size: 10px;
                    }
                    span {
                        margin-right: 50px;
                        @media (max-width: 1500px) {
                            margin-right: 20px;
                        }
                        &:last-of-type {
                            margin-right: 0;
                        }
                    }
                }
                .link {
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    margin-top: 20px;
                    @media (hover: hover) {
                        opacity: 0;
                    }
                    a {
                        color: #4C65FF;
                        text-decoration: none;
                        font-size: 12px;
                        letter-spacing: 1.36px;
                        font-weight: 600;
                    }
                }
            }
        }
    }
    .title {
       display: block;
       font-family: "Poppins";
       font-size: 3rem;
       transform: translateY(-10px);
    }
`
const PostSlider = ({ filters }) => {

    const data = useStaticQuery(
        graphql`
            {
                allDatoCmsBlog {
                    nodes {
                        bigScreen {
                        fluid(maxWidth: 1750) {
                            ...GatsbyDatoCmsFluid_tracedSVG
                            }
                        }
                        slug
                        blogTitle
                        id
                        categories
                        timeToRead
                    }
            }
        }
    `)
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({
        currentPost: false
    })
    useEffect(() => {
        setFilter(prevState => ({ ...prevState, ...filters }))
    }, [filters])
    useEffect(() => {
        const { allDatoCmsBlog: { nodes } } = data
        let newPosts = nodes
        if(filter.currentPost) {
            newPosts = newPosts.filter(post => post.id !== filter.currentPost)
        }
        newPosts = newPosts.filter((post, index) => index <= 2)
        setPosts(newPosts)
    }, [filter])
    const sliderCnt = (
            <div className="trending">
                <h3>Related articles</h3>
                <div className="post-cnt">
                {posts.map((post, index) => {
                    const { categories } = JSON.parse(post.categories)
                    return(
                    <div index={index} key={index} className="slide">
                        <div className="img">
                            <div className="overlay"></div>
                            <Image style={{objectFit: "cover", width: "100%", height: "100%"}} fluid={post.bigScreen.fluid} alt="post" />
                        </div>
                            <div className="content">
                                <h3>
                                    {post.blogTitle}
                                </h3>
                                <div className="details">
                                        {categories.map(el => <span>{el.toUpperCase()}</span>)}
                                        <span className="ttr">{post.timeToRead}</span>
                                </div>
                                <div className="link">
                                     <a href={`/blog/${post.slug}`}>READ THIS ARTICLE {'>'}</a>
                                </div>
                            </div>
                    </div>
                )})}
                </div>
        </div>
    )
    return (
        <Style>
            {posts.length > 2 && sliderCnt}
        </Style>
    )
}

export default PostSlider