/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Clarity Hub Documentation`,
    siteUrl: `https://docs.clarityhub.io`,
    description: `Clarity Hub documentation, API explorer, and guides`,
    phoneNumber: '1-855-83-CLAIR',
    email: 'support@clarityhub.io',
    facebookUsername: 'clarityhubinc',
    twitterUsername: 'clarityhubinc',
    mediumUsername: 'clarityhub',
    linkedinUsername: 'clarityhubinc',
    googleUsername: '110681130273789633766',
  },
  plugins: [

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/guides`,
        name: `guides`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              // defaults to false
              usePrefix: true,
              providers: {
                // Important to exclude providers
                // that adds js to the page.
                // If you do not need them.
                exclude: ["Reddit"]
              }
            }
          },
          '@weknow/gatsby-remark-twitter',
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
  ]
}
