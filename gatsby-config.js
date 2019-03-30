module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brandon Stinson`,
        short_name: `BS`,
        start_url: `/`,
        display: `standalone`,
        background_color: `#1b85b8`,
        theme_color: `#1b85b8`,
        icon: `src/utils/images/favicon-1024.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
  ],
};
