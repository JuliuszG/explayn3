import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
const Style = styled.div`
display: flex;
justify-content: center;
align-content: center;
margin-bottom: 10%;
transform: translateY(-20%);
@media (max-width: 1300px) {
    transform: translateY(0%);
}
    .keen-slider {
        .keen-slider__slide {
            box-shadow: 0 0 40px #00000014;
            font-family: "Poppins";
            img {
                width: 100%;
                height: 50%;
                object-fit: cover;
            }
            .content {
                padding: 60px;
                h3 {
                font-size: 30px;
                line-height: 50px;
                }
            }
        }
    }
`
const PostSlider = ({ filters }) => {
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        slidesPerView: 3,
        spacing: 100,
        controls: true,
        breakpoints: {
            '(max-width: 1024px)': {
                slidesPerView: 1,
            },
          },
    })
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
        currentPost: false,
        category: false
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
        if(filter.category) {
            newPosts = newPosts.filter(post => {
                const { categories } = JSON.parse(post.categories)
                return categories.includes(filter.category)
            })
        }
        newPosts = newPosts.filter((post, index) => index <= 6)
        setPosts(newPosts)
    }, [filter])
    const sliderCnt = (
        <div className="keen-slider" ref={sliderRef}>
            {posts.map((post, index) => (
                <div key={index} className="keen-slider__slide">
                    <Image fluid={post.bigScreen.fluid} alt="post" />
                        <div className="content">
                            <h3>
                                {post.blogTitle}
                            </h3>
                        </div>
                </div>
            ))}
        </div>
    )
    return (
        <Style>
            {posts.length > 3 && sliderCnt}
        </Style>
    )
}

export default PostSlider