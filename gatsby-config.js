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
    githubUrl: "https://github.com/rhul-compsoc/royalhackaway.com",
  },
  mapping: {
    "Mdx.frontmatter.people.person": "Mdx.fields.id",
    "Mdx.frontmatter.faq": "Mdx.fields.id",
    "Mdx.frontmatter.sponsors.companies": "Mdx.fields.id",
    "Mdx.frontmatter.parent": "Mdx.fields.id",
    "Mdx.frontmatter.children": "Mdx.fields.slug",
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
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {},
          },
        ],
      },
    },
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
    // {
    //   resolve: "gatsby-plugin-gdpr-cookies",
    //   options: {
    //     googleAnalytics: {
    //       trackingId: "G-YHVZ8QBQYD",
    //     },
    //   },
    // },
  ],
}
