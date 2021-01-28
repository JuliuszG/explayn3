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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
