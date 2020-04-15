module.exports = {
  siteMetadata: {
    title: `Ben Storry`,
    description: `Sports Science at Loughborough University. Surf instructor, football coach/referee, sports masseuse & tutor.`,
    author: `@lukestorry`,
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ben Storry`,
        short_name: `ben-storry`,
        start_url: `/`,
        background_color: `#424242`,
        theme_color: `#b794f4`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-postcss`,
  ],
}
