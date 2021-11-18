/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Image from '../images/ogimage.jpeg';


function SEO({ description, meta, title, ogTitle, ogImage, ogDescription }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en-US',
      }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: ogTitle || `Explayn Digital Agency`,
        },
        {
          property: `og:description`,
          content: ogDescription || metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: ogImage || `https://explayn.it${Image}`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: ogTitle || `Explayn Digital Agency`
        },
        {
          name: `twitter:description`,
          content: ogDescription || metaDescription,
        },
        {
          name: `facebook-domain-verification`,
          content: 'unzltx8djbdepuatq93uodu9snxhrd',
        },
       
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en-US`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
