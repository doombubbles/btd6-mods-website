module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "BTD6 Mods Website",
  },
  pathPrefix: "/btd6-mods-website",
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
