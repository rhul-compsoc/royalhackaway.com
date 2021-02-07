module.exports = {
  siteMetadata: {
    title: "Royal Hackaway",
    description:
      "Royal Hackaway is a student-run group that hosts hackathons at Royal Holloway, University of London.",
    author: "rhul-compsoc",
    twitter: "RHULCompSoc",
    github: "rhul-compsoc",
    email: "hello@royalhackaway.com",
    siteUrl: "https://royalhackaway.com",
  },
  mapping: {
    "MarkdownRemark.frontmatter.people.person": "MarkdownRemark.fields.id",
    "MarkdownRemark.frontmatter.faq": "MarkdownRemark.fields.id",
    "MarkdownRemark.frontmatter.sponsors.companies": "MarkdownRemark.fields.id",
  },
  plugins: [
    "gatsby-plugin-meta-redirect",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          includePaths: ["src/scss"],
        },
        implementation: require("sass"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    "gatsby-plugin-eslint",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Royal Hackathon",
        short_name: "RoyalHackathon",
        start_url: "/",
        background_color: "#f48c42",
        theme_color: "#f48c42",
        display: "minimal-ui",
        icon: "src/assets/images/logo/rh-small-1024.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-gdpr-cookies",
      options: {
        googleAnalytics: {
          trackingId: "G-YHVZ8QBQYD",
        },
      },
    },
  ],
}
