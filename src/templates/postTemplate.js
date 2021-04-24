import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Desktop from "../components/navigation/desktop"
import Mobile from "../components/navigation/mobile"
import { useMediaQuery } from 'react-responsive'
import Layout from '../components/layout'
import Author from '../components/blog/author'
import SideBar from '../components/blog/sidebar'
import PostSlider from '../components/blog/postSlider'
import Footer from '../components/footer'

export const query = graphql`
query BlogQuery($id: String!) {
    datoCmsBlog(id: {eq: $id}) {
        bigScreen {
          fluid(maxWidth: 1750) {
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
`
const Style = styled.section`
    position: relative;
    width: 100%;
    .container {
        max-width: 1720px;
        background: #fff;
        z-index: 40;
        transform: translateY(-10%);
        margin: 0 auto;
        padding: 5%;
        padding-right: 0;
        @media (max-width: 1800px) {
            max-width: 1420px;
        }
        @media (max-width: 1500px) {
            max-width: 1220px;
        }
        @media (max-width: 1300px) {
            transform: translateY(0%);
            padding-right: 5%;
        }
        .post-header {
            padding-right: 20%;
            @media (max-width: 800px) {
                padding-right: 0;
            }
            h1 {
                color: #000000;
                font-family: "Poppins";
                font-weight: 400;
                font-size: 61px;
                font-size: 69px;
                margin-bottom: 10px;
                @media (max-width: 550px) {
                    font-size: 51px;
                    line-height: 59px;
                }
            }
            .info {
                span {
                    margin-right: 50px;
                    display: inline-block;
                    font-size: 12px;
                    line-height: 18px;
                    letter-spacing: 1.36px;
                    font-weight: 600;
                    font-family: "Poppins";
                    text-transform: uppercase;
                    &.categories {
                        color: #4C65FF;
                    }
                    &.read-time {
                        text-transform: uppercase;
                        color: #868686;
                    }
                }
            }
        }
        main {
            display: flex;
            margin-top: 60px;
            width: 100%;
            height: auto;
            @media (max-width: 985px) {
                display: flex;
                flex-direction: column;
            }
            article {
                width: 900px;
                margin-right: 184px;
                @media (max-width: 980px) {
                    width: 100%;
                    margin-right: 0;
                }
                .lead {
                    font-family: "Poppins";
                    margin: 128px 0;
                    color: #4C65FF;
                    margin-left: 126px; 
                    font-size: 18px;
                    line-height: 29px;
                    letter-spacing: 0.05px;
                    @media(max-width: 668px) {
                        margin: 80px 0;

                    }
                }
                .content {
                    width: 100%;
                    font-family: "Poppins";
                    img {
                        width: 100%;
                        object-fit: cover;
                        margin-bottom: 20px;
                    }
                    h1, h2, h3, h4, h5 {
                        font-size: 30px;
                        line-height: 50px;
                        margin-bottom: 40px;
                        color: #000;
                    }
                    p {
                        font-size: 18px;
                        line-height: 29px;
                        letter-spacing: 0.05px;
                        margin-bottom: 30px;
                    }
                }
            }
        }
    }
`
const LandingScreen = styled(BackgroundImage)`
    background-position: ${({ framing }) => framing ? framing : 'center'};
    background-size: cover;
    width: 100%;
    height: 100vh;
    z-index: -1;
`
const PostTemplate = ({ data }) => {
    const isMobile = useMediaQuery({
        query: '(max-device-width: 950px)'
    })
    const { bigScreen, bigScreenFraming, blogTitle, content, timeToRead, authorName, aboutTheAuthor, personalPhoto, leadText, slug, id } = data.datoCmsBlog
    const { categories } = JSON.parse(data.datoCmsBlog.categories)
    return (
        <Layout>
            { isMobile ? <Mobile/> : <Desktop mainPage={false}/> }
            <Style>
                <LandingScreen
                    fluid={ bigScreen.fluid }
                    framing={ bigScreenFraming }
                    Tag="header" 
                />
                <div className="container">
                    <header className="post-header">
                        <h1>
                            { blogTitle }
                        </h1>
                        <div className="info">
                            { categories.map((cat, index) => (
                                <span key={ index } className="categories">
                                { cat }
                            </span>
                            )) }
                            <span className="read-time">
                                { timeToRead }
                            </span>
                        </div>
                    </header>
                    <main>
                        <article>
                            <Author
                                name={ authorName }
                                about={ aboutTheAuthor }
                                photo={ personalPhoto.fluid }
                            />
                            <p className="lead">
                                { leadText }
                            </p>
                            <div className="content"
                                dangerouslySetInnerHTML={ {__html: content} }
                            >
                            </div>
                        </article>
                        <SideBar title={ blogTitle } slug={ slug } id={ id }/>
                    </main>
                </div>
                {/* <PostSlider filters={{ currentPost: id}} /> */}
            </Style>
            <Footer />
        </Layout>
    )
}

export default PostTemplate