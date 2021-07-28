import React, { useState, useEffect } from "react"
import "pure-react-carousel/dist/react-carousel.es.css"
import { useStaticQuery, graphql } from "gatsby"
import {
  PostSliderWrapper,
  Trending,
  PostSliderItems,
  Slide,
  SlideImageContainer,
  SlideImageOverlay,
  SlideImage,
  SlideContent,
  SlideContentDetails,
  SliderLink,
} from "../styled"

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
    `
  )

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({
    currentPost: false,
  })

  useEffect(() => {
    setFilter(prevState => ({ ...prevState, ...filters }))
  }, [filters])

  useEffect(() => {
    const {
      allDatoCmsBlog: { nodes },
    } = data
    let newPosts = nodes
    if (filter.currentPost) {
      newPosts = newPosts.filter(post => post.id !== filter.currentPost)
    }
    newPosts = newPosts.filter((post, index) => index <= 2)
    setPosts(newPosts)
  }, [filter])

  return (
    <PostSliderWrapper>
      {posts.length > 2 && (
        <Trending>
          <h3>Related articles</h3>
          <PostSliderItems>
            {posts.map((post, index) => {
              const { categories } = JSON.parse(post.categories)
              return (
                <Slide index={index} key={index}>
                  <SlideImageContainer>
                    <SlideImageOverlay />
                    <SlideImage fluid={post.bigScreen.fluid} alt="post" />
                  </SlideImageContainer>
                  <SlideContent>
                    <h3>{post.blogTitle}</h3>
                    <SlideContentDetails>
                      {categories.map(el => (
                        <span>{el.toUpperCase()}</span>
                      ))}
                      <span>{post.timeToRead}</span>
                    </SlideContentDetails>
                    <SliderLink>
                      <a href={`/blog/${post.slug}`}>READ THIS ARTICLE {">"}</a>
                    </SliderLink>
                  </SlideContent>
                </Slide>
              )
            })}
          </PostSliderItems>
        </Trending>
      )}
    </PostSliderWrapper>
  )
}

export default PostSlider
