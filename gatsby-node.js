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

    const { name } = path.parse(
      createFilePath({ node, getNode, trailingSlash: false })
    )

    createNodeField({
      name: "id",
      node,
      value: name,
    })

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
  const { createPage, createRedirect } = actions

  graphql(`
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
              render
              homepage
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

    result.data.allMarkdownRemark.edges
      .filter(
        // If public, create the page based on the folder it is in.
        ({ node }) => node.frontmatter.render && node.frontmatter.is_public
      )
      .forEach(({ node }) => {
        const template = node.fields.template

        let slug = node.fields.slug

        if (node.frontmatter.homepage) {
          createRedirect({
            fromPath: slug,
            toPath: "/",
            isPermanent: false,
          })

          slug = "/"
        }

        createPage({
          path: slug,
          component: getTemplate(template),
          context: node.fields,
        })
      })
  })
}
