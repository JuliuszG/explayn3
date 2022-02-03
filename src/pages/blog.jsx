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
export const query = graphql`
{
    allWpArticle(limit: 6) {
      nodes {
        article {
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
        id
      }
    }
  }
`;

const Card = ({ post }) => {
  const { categories } = JSON.parse(post.article.categories);
  return (
    <BlogPost to={post.article.slug}>
      <div className="img">
        <div className="overlay"></div>
        <Image
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          fluid={post.article.bigScreen.localFile.childImageSharp.fluid}
          alt="post picture"
        />
      </div>
      <div className="content">
        <h2>{post.article.blogTitle}</h2>
        <div className="categories">
          {categories.map((category, index) => (
            <span className="cat" key={index}>
              {category}
            </span>
          ))}
          <span className="read">{post.article.timeToRead}</span>
        </div>
      </div>
      <div className="btn-cnt">
        <div className="read-more">READ THIS ARTICLE {'>'}</div>
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
            <h1 className="main-title">Articles</h1>
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