import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Desktop from "../components/navigation/desktop"
import Mobile from "../components/navigation/mobile"
import SEO from "../components/seo"
import { useMediaQuery } from 'react-responsive'
import Layout from "../components/layout"
import Image from 'gatsby-image'
export const query = graphql`
{
    allDatoCmsBlog(limit: 6) {
        nodes {
            bigScreen {
          fluid(maxWidth: 800) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
        bigScreenFraming
        personalPhoto {
            fluid(maxWidth: 151) {
                ...GatsbyDatoCmsFluid_tracedSVG
            }
        }
        aboutTheAuthor
        authorName
        categories
        timeToRead
        blogTitle
        leadText
        content
        slug
        id
        }
    }
}
`
const Style = styled.div`
    font-family: 'Poppins';
    width: 100%;
    margin: 28vh 0;
    @media (max-width: 900px) {
        margin: 5vh 0;
    }
    .cnt {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 48.44px;
        margin: 0 auto;
        max-width: 1500px;
        @media (max-width: 1700px) {
            max-width: 1200px;
        }
        @media (max-width: 1300px) {
            max-width: 1050px;
        }
        @media (max-width: 1024px) {
            padding: 0 5%;
            width: 100%;
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 680px) {
            width: 100%;
            grid-template-columns: 1fr;
        }
        .post {
            box-shadow: 0px 0px 40px #00000014;
            text-decoration: none;
            min-height: 637px;
            display: flex;
            flex-direction: column;
            align-content: space-between;
            @media (max-width: 680px) {
                min-height: 500px;
            }
            @media (hover: hover) {
                &:hover .img .overlay {
                    opacity: 0.19;
                }
                &:hover .btn-cnt {
                    opacity: 1;
                }
            }
            .img {
                height: 50%;
                width: 100%;
                position: relative;
                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #4C65FF;
                    opacity: 0;
                    z-index: 5;
                    transition: all 0.3s ease-in;
                }
            }
            .content {
               width: 100%;
               padding: 10%;
               h2 {
                font-size: 1.875rem;
                line-height: 166.66%;
                color: #000;
                @media (max-width: 1700px) {
                    font-size: 1.675rem;
                }
                @media (max-width: 1300px) {
                    font-size: 1.475rem;
                }
                @media (max-width: 1024px) {
                    font-size: 1.875rem;
                }
                @media (max-width: 680px) {
                    font-size: 1.875rem;
                }
               }
               .categories {
                    font-size: 0.75rem;
                    letter-spacing: 1.36px;
                    line-height: 150%;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    margin-top: 30px;
                    @media (max-width: 1700px) {
                        flex-direction: column;
                    }
                    @media (max-width: 1024px) {
                        flex-direction: row;
                    }
                    .cat {
                        color: #4C65FF;
                    }
                    .read {
                        color: #868686;
                    }
               }
              
            }
            .btn-cnt {
                font-size: 0.75rem;
                color: #4C65FF;
                display: flex;
                justify-content: flex-end;
                padding: 0% 10% 0;
                opacity: 0;
                transition: all 0.3s ease-in;
                @media (max-width: 1024px) {
                    display: none;
                }
            }
        }
    }
    .main-title {
        font-weight: 600;
        font-size: 55px;
        color: #000000;
        margin-left: 6.5%;
        margin-bottom: 62px;
    }
`

const Card = ({post}) => {
    const { categories } = JSON.parse(post.categories)
    return (
        <Link to={post.slug} className="post">
            <div className="img">
                <div className="overlay"></div>
                <Image style={{ height: "100%", width: '100%', objectFit: "cover" }} fluid={post.bigScreen.fluid} alt="post picture"/>
            </div>
            <div className="content">
                <h2>
                    { post.blogTitle }
                </h2>
                <div className="categories">
                    {categories.map((category, index) => <span className="cat" key={index}>{ category }</span>)}
                    <span className="read">{ post.timeToRead }</span>
                </div>
            </div>
            <div className="btn-cnt">
                <div className="read-more">READ THIS ARTICLE {">"}</div>
            </div>
        </Link>
    )
}
const Blog = ({data: { allDatoCmsBlog }}) => {
    const isMobile = useMediaQuery({
        query: '(max-device-width: 950px)'
      })
    return (
        <Layout>
            <SEO title=""/>
            { isMobile ? <Mobile /> : <Desktop /> }
            <Style>
                <h1 className="main-title">Articles</h1>
                <div className="cnt">
                    {allDatoCmsBlog.nodes.map(post => <Card key={ post.id } post={ post } />)}
                </div>
            </Style>
        </Layout>
    )
}

export default Blog