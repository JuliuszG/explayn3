module.exports = {
  siteMetadata: {
    title: `Explayn Digital Agency`,
    description: `A Full Service Web Design And Digital Marketing Agency Powered By Growth Solutions. If there's anything you need to know, We'll be happy to explayn.`,
    author: `Explayn`,
    siteUrl: `https://explayn.it/`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-M2CQZ3W',
        defaultDataLayer: { platform: 'gatsby' },
        enableWebVitalsTracking: true,
        includeInDevelopment: true,
      },
    },
    //sitemap
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
        minify: true,
        transpileTemplateLiterals: true,
        pure: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Explayn`,
        short_name: `Explayn`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon2.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // The full URL of the WordPress site's GraphQL API.
        url: `http://localhost/explayn/graphql`,
        // Use Advanced Custom Fields
        useACF: true,
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `pl`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/en` when connecting `/`
        redirect: true,
        // A list page paths that the plugin should ignore
        excludedPages: [`/src/blog`],
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
