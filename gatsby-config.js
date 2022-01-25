module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "Ahmed Hossam's Website",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "ChannelsJson",
        imagePath: "imageUrl",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          // placeholder: "blurred",
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-remark-images",
    "gatsby-plugin-postcss",
  ],
};
