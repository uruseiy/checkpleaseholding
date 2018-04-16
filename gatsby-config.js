module.exports = {
  siteMetadata: {
    title: 'checkplease.io',
    description: "there's no place like home"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // This plugin exposes helper functions for processing
    // images with the NPM package “sharp”. It's used by
    // several other plugins.
    `gatsby-plugin-sharp`,
    // This plugin identifies file nodes that are images and
    // transforms these to create new “ImageSharp” nodes.
    // With them you can resize images and
    // generate responsive image thumbnails.
    `gatsby-transformer-sharp`,
    
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "img",
    //     path: `${__dirname}/src/images`
    //   }
    // },
    // "gatsby-transformer-sharp",
    // "gatsby-plugin-sharp",
  ],
}
