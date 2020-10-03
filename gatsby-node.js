const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const fs = require("fs")

const getTemplate = templateName => {
  const template = path.resolve(
    __dirname,
    "src",
    "templates",
    templateName,
    "index.js"
  )

  if (fs.existsSync(template)) {
    return template
  } else {
    throw new Error(`Could not find the specified template file at ${template}`)
  }
}

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
              create_hacking_countdown_timer
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
      // If public, create the page based on the folder it is in.
      if (node.frontmatter.is_public) {
        const template = node.fields.template
        createPage({
          path: node.fields.slug,
          component: getTemplate(template),
          context: node.fields,
        })
      }

      // If requested, create a countdown timer for pages that request it.
      if (node.frontmatter.create_hacking_countdown_timer) {
        createPage({
          path: node.fields.slug + "timer/",
          component: getTemplate("timer"),
          context: node.fields,
        })
      }
    })
  })
}
