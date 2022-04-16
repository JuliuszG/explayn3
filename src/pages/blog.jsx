import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Desktop from '../components/navigation/desktop';
import Mobile from '../components/navigation/mobile';
import SEO from '../components/seo';
import { useMediaQuery } from 'react-responsive';
import Layout from '../components/layout';
import Image from 'gatsby-image';
import Footer from '../components/footer';
import { BlogWrapper, BlogContent, BlogPost } from '../components/styled';
import { useIntl } from 'gatsby-plugin-intl';

export const query = graphql`
{
  allWpArticle(limit: 6) {
    nodes {
      article {
        en {
          bigScreen {
            localFile {
              childImageSharp {
                fluid(maxWidth: 800) {
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
                fluid(maxWidth: 800) {
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
`;

const Card = ({ post }) => {
  const locale = useIntl().locale;
  const postLang = locale === 'pl' ? post.article.pl : post.article.en;

  const { categories } = JSON.parse(postLang.categories);
  return (
    <BlogPost to={`/blog/${postLang.slug}`}>
      <div className="img">
        <div className="overlay"></div>
        <Image
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          fluid={postLang.bigScreen.localFile.childImageSharp.fluid}
          alt="post picture"
        />
      </div>
      <div className="content">
        <h2>{postLang.blogTitle}</h2>
        <div className="categories">
          {categories.map((category, index) => (
            <span className="cat" key={index}>
              {category}
            </span>
          ))}
          <span className="read">{postLang.timeToRead}</span>
        </div>
      </div>
      <div className="btn-cnt">
        <div className="read-more">{useIntl().formatMessage({ id: 'blog.read-more' })} {'>'}</div>
      </div>
    </BlogPost>
  );
};
const Blog = ({ data: { allWpArticle } }) => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 950px)',
  });
  return (
    <>
      <SEO title="Explayn Digital Agency" />
      <Layout>
        {isMobile ? <Mobile /> : <Desktop />}
        <BlogWrapper>
          <BlogContent>
            <h1 className="main-title">{useIntl().formatMessage({ id: 'blog.article' })}</h1>
            {allWpArticle.nodes.map(post => (
              <Card key={post.id} post={post} />
            ))}
          </BlogContent>
        </BlogWrapper>
        <Footer />
      </Layout>
    </>
  );
};

export default Blog;