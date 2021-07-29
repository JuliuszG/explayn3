import React from 'react';
import { graphql } from 'gatsby';
import Desktop from '../components/navigation/desktop';
import Mobile from '../components/navigation/mobile';
import { useMediaQuery } from 'react-responsive';
import Layout from '../components/layout';
import Author from '../components/blog/author';
import SideBar from '../components/blog/sidebar';
import PostSlider from '../components/blog/postSlider';
import Footer from '../components/footer';
import {
  PostTemplateLandingScreen,
  PostTemplateWrapper,
} from '../components/styled';

export const query = graphql`
  query BlogQuery($id: String!) {
    datoCmsBlog(id: { eq: $id }) {
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
`;
const PostTemplate = ({ data }) => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 950px)',
  });
  const {
    bigScreen,
    bigScreenFraming,
    blogTitle,
    content,
    timeToRead,
    authorName,
    aboutTheAuthor,
    personalPhoto,
    leadText,
    slug,
    id,
  } = data.datoCmsBlog;
  const { categories } = JSON.parse(data.datoCmsBlog.categories);
  return (
    <Layout>
      {isMobile ? <Mobile /> : <Desktop mainPage={false} />}
      <PostTemplateWrapper>
        <PostTemplateLandingScreen
          fluid={bigScreen.fluid}
          framing={bigScreenFraming}
          Tag="header"
        />
        <div className="container">
          <header className="post-header">
            <h1>{blogTitle}</h1>
            <div className="info">
              {categories.map((cat, index) => (
                <span key={index} className="categories">
                  {cat}
                </span>
              ))}
              <span className="read-time">{timeToRead}</span>
            </div>
          </header>
          <main>
            <article>
              <Author
                name={authorName}
                about={aboutTheAuthor}
                photo={personalPhoto.fluid}
              />
              <p className="lead">{leadText}</p>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </article>
            <SideBar title={blogTitle} slug={slug} id={id} />
          </main>
        </div>
        <div className="related-cnt">
          {/* <div className="title">
                        Related Articles
                    </div> */}
          <PostSlider filters={{ currentPost: id }} />
        </div>
      </PostTemplateWrapper>
      <Footer />
    </Layout>
  );
};

export default PostTemplate;
