import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import Desktop from '../components/navigation/desktop';
import Mobile from '../components/navigation/mobile';
import { useMediaQuery } from 'react-responsive';
import { appContext } from '../components/context';
import Layout from '../components/layout';
import Author from '../components/blog/author';
import SideBar from '../components/blog/sidebar';
import PostSlider from '../components/blog/postSlider';
import Footer from '../components/footer';
import SEO from '../components/seo';
import { useIntl } from 'gatsby-plugin-intl';

import {
  PostTemplateLandingScreen,
  PostTemplateWrapper,
  ContentArticle,
} from '../components/styled';

export const query = graphql`
query BlogQuery($id: String!) {
  wpArticle(id: { eq: $id }) {
    id
    article {
      en {
        blogTitle
        slug
        aboutTheAuthor
        authorName
        bigScreen {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1750) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        bigScreenFraming
        categories
        content
        leadText
        personalPhoto {
          localFile {
            childImageSharp {
              fluid(maxWidth: 151) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        timeToRead
      }
      pl {
        blogTitle
        slug
        aboutTheAuthor
        authorName
        bigScreen {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1750) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        bigScreenFraming
        categories
        content
        leadText
        personalPhoto {
          localFile {
            childImageSharp {
              fluid(maxWidth: 151) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        timeToRead
      }
    }
  }
}
`;
const PostTemplate = ({ data }) => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 950px)',
  });
  const locale = useIntl().locale;
  const postLang = locale === 'pl' ? data.wpArticle.article.pl : data.wpArticle.article.en;
  
  const { id } = data.wpArticle;
  const {
    bigScreen,
    bigScreenFraming,
    content,
    timeToRead,
    authorName,
    aboutTheAuthor,
    personalPhoto,
    leadText,
    blogTitle,
    slug,
  } = postLang;
  const { categories } = JSON.parse(postLang.categories);
  const { changeContactFormStatus } = useContext(appContext);
  return (
    <>
    <SEO title="Explayn Digital Agency" ogTitle={blogTitle} ogImage={bigScreen.url} ogDescription={leadText}/>
    <Layout>
      {isMobile ? <Mobile /> : <Desktop mainPage={false} />}
      <PostTemplateWrapper>
        <PostTemplateLandingScreen
          fluid={bigScreen.localFile.childImageSharp.fluid}
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
                photo={personalPhoto.localFile.childImageSharp.fluid}
              />
              <p className="lead">{leadText}</p>
              <ContentArticle
                className="content"
                dangerouslySetInnerHTML={{ __html: content }}
              >
              </ContentArticle>
              <ContentArticle >
                <p style={{ fontSize: '18px', marginBottom: '30px'}} className="content"><span className="blue" onClick={() => changeContactFormStatus(1)}>Contact us</span> to talk about your idea or get a quote.</p>
              </ContentArticle>
            </article>
            <SideBar title={blogTitle} slug={slug} id={id} />
          </main>
          {/* <div className="related-cnt">
            <PostSlider showFrom={2} filters={{ currentPost: id }} />
          </div> */}
        </div>
        {/* <div className="related-cnt">
          <div className="title">Related Articles</div>
          <PostSlider showFrom={2} filters={{ currentPost: id }} />
        </div> */}
      </PostTemplateWrapper>
      <Footer />
    </Layout>
    </>
  );
};

export default PostTemplate;