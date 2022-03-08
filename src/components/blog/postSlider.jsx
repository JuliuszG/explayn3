import React, { useState, useEffect } from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useStaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import {
  PostSliderWrapper,
  Trending,
  PostSliderItems,
  Slide,
  SlideInfinity,
  SlideImageContainer,
  SlideImageContainerInfinity,
  SlideImageOverlay,
  SlideImage,
  SlideContent,
  SlideContentInfinity,
  SlideContentDetails,
  SliderLink,
  SliderBottomContainer,
  SliderTime,
  SliderContainer,
} from '../styled';
import arrowLeft from '../../images/Icon_ionic-ios-arrow-back.svg';
import arrowRight from '../../images/Icon_ionic-ios-arrow-backa.svg';
import { useIntl } from 'gatsby-plugin-intl';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  lazyLoad: true,
  adaptiveHeight: false,
  arrows: true,
  nextArrow: (
    <motion.div style={{ width: '50px', height: '50px' }}>
      <img src={arrowLeft} alt="scroll right button" />
    </motion.div>
  ),
  prevArrow: (
    <motion.div style={{ width: '50px', height: '50px' }}>
      <img src={arrowRight} alt="scroll right button" />
    </motion.div>
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
};

const PostSlider = ({ filters, showFrom }) => {
  const data = useStaticQuery(
    graphql`
    {
      allWpArticle {
        nodes {
          article {
            en {
              bigScreen {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1750) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
              categories
              timeToRead
              slug
              blogTitle
            }
            pl {
              bigScreen {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1750) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
              categories
              timeToRead
              slug
              blogTitle
            }
          }
          id
        }
      }
    }
    `
  );

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({
    currentPost: false,
  });

  useEffect(() => {
    setFilter(prevState => ({ ...prevState, ...filters }));
  }, [filters]);

  useEffect(() => {
    const {
      allWpArticle: { nodes },
    } = data;
    let newPosts = nodes;
    if (filter.currentPost) {
      newPosts = newPosts.filter(post => post.id !== filter.currentPost);
    }
    newPosts = newPosts.filter((post, index) => index <= 2);
    setPosts(newPosts);
  }, [filter]);

  return (
    <>
      {posts.length > showFrom && (
        <>
          <Helmet>
            <link
              rel="stylesheet"
              type="text/css"
              charset="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
          </Helmet>
          <PostSliderWrapper>
            <Trending>
              <h3>Related articles</h3>
              <SliderContainer>
                <Slider {...settings}>
                  {posts.map((post, index) => {
                    const locale = useIntl().locale;
                    const postLang = locale === 'pl' ? post.article.pl : post.article.en;

                    const { categories } = JSON.parse(postLang.categories);
                    const { fluid } = postLang.bigScreen.localFile.childImageSharp.fluid;
                    const {
                      blogTitle,
                      slug,
                      timeToRead,
                    } = postLang;
                    return (
                      <div key={post.id}>
                        <SlideInfinity index={index}>
                          <SlideImageContainerInfinity>
                            <SlideImageOverlay />
                            <SlideImage
                              fluid={fluid}
                              alt="post"
                            />
                          </SlideImageContainerInfinity>
                          <SlideContentInfinity>
                            <h3>{blogTitle}</h3>
                            <div style={{ width: '100%' }}>
                              <SlideContentDetails>
                                {categories.map(el => (
                                  <span key={post.id}>{el.toUpperCase()}</span>
                                ))}
                              </SlideContentDetails>
                              <SliderBottomContainer>
                                <SliderTime className="slider-time">
                                  <span>{timeToRead}</span>
                                </SliderTime>
                                <SliderLink>
                                  <a href={`blog/${slug}`}>
                                    READ THIS ARTICLE {'>'}
                                  </a>
                                </SliderLink>
                              </SliderBottomContainer>
                            </div>
                          </SlideContentInfinity>
                        </SlideInfinity>
                      </div>
                    );
                  })}
                </Slider>
              </SliderContainer>
            </Trending>
          </PostSliderWrapper>
        </>
      )}
      {/* <PostSliderWrapper>
        {posts.length > showFrom && (
          <Trending>
            <h3>Related articles</h3>
            <PostSliderItems>
              {posts.map((post, index) => {
                const { categories } = JSON.parse(post.categories);
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
                      </SlideContentDetails>
                      <SliderBottomContainer>
                        <SliderTime>
                          <span>{post.timeToRead}</span>
                        </SliderTime>
                        <SliderLink>
                          <a href={`/blog/${post.slug}`}>
                            READ THIS ARTICLE {'>'}
                          </a>
                        </SliderLink>
                      </SliderBottomContainer>
                      <SliderLink>
                        <a href={`/blog/${post.slug}`}>
                          READ THIS ARTICLE {'>'}
                        </a>
                      </SliderLink>
                    </SlideContent>
                  </Slide>
                );
              })}
            </PostSliderItems>
          </Trending>
        )}
      </PostSliderWrapper> */}
    </>
  );
};

export default PostSlider;