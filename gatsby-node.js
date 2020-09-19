const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const fs = require("fs")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type == "MarkdownRemark") {
    const parent = getNode(node.parent)
    const directoryParts = parent.relativeDirectory.split(/[\\/]/)

    const folderName = directoryParts[0]
    const slug = createFilePath({ node, getNode })

    createNodeField({
      name: "slug",
      node,
      value: slug,
    })

    createNodeField({
      node,
      name: "template",
      value: folderName,
    })
  }
}

exports.createPages = ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___start] }) {
        edges {
          node {
            fields {
              template
              slug
            }
            frontmatter {
              is_public
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      reporter.panicOnBuild("Error while running GraphQL query")
      return
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const template = node.fields.template
      let templatePath = path.resolve(
        __dirname,
        "src",
        "templates",
        template,
        "index.js"
      )

      if (fs.existsSync(templatePath) && node.frontmatter.is_public) {
        createPage({
          path: node.fields.slug,
          component: templatePath,
          context: node.fields,
        })
      }
    })
  })
}
