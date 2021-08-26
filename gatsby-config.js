module.exports = {
  siteMetadata: {
    title: `Explayn`,
    description: `A Full Service Web Design And Digital Marketing Agency Powered By Growth Solutions. If there's anything you need to know, We'll be happy to explayn.`,
    author: `Explayn`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-M2CQZ3W',
        defaultDataLayer: { platform: 'gatsby' },
        enableWebVitalsTracking: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `98d91db58ff0afd6969892884709f5`,
        preview: false,
        disableLiveReload: false,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
