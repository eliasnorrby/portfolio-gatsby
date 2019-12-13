require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteTitle: `Elias Norrby`,
    siteTitleAlt: `Elias Norrby - Portfolio`,
    siteHeadline: `Elias Norrby - Portfolio`,
    siteUrl: `https://eliasnorrby.com`,
    siteDescription: `Portfolio for Elias Norrby, developer, musician & photographer`,
    siteLanguage: `en`,
    siteImage: `/banner.png`,
    author: `@eliasnorrby`,
    basePath,
    siteTitleAlt: `Elias Norrby - Portfolio`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elias Norrby - Portfolio`,
        short_name: `Elias Norrby`,
        description: `Portfolio for Elias Norrby, developer, musician & photographer`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};
