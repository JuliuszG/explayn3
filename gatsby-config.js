module.exports = {
  siteMetadata: {
    title: `Explayn`,
    description: `Kompleksowa obsługa w świecie digitalu i nie tylko.
    Spersonalizowane strony, sklepy, aplikacje. Branding, foto, wideo, SM. Podeślij brief lub zadzwoń.`,
    author: `explayn`,
  },
  plugins: [
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
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

