import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { EventContextProvider } from "../../components/EventContext"
import { Layout } from "../../components/Layout"
import { SiteSEO } from "../../components/SiteSEO"
import { mdx as mdxClass } from "./index.module.scss"

const HomePage = ({ data }) => {
  const { name, short_description } = data.mdx.frontmatter

  return (
    <Layout parentData={data.mdx}>
      <SiteSEO title={name} description={short_description} />
      <EventContextProvider data={data}>
        <div class={mdxClass}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </EventContextProvider>
    </Layout>
  )
}
export default HomePage

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        faq {
          fields {
            slug
          }
          frontmatter {
            name
          }
          body
        }
        full_description
        name
        navigation {
          label
          to
          href
          file {
            publicURL
          }
        }
        people {
          person {
            frontmatter {
              name
              description
              short_description
              is_public
              handles {
                service
                handle
              }
              image {
                light {
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 512) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                dark {
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 512) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
          role
        }
        short_description
        short_name
        schedule {
          name
          events {
            time
            activity
          }
        }
        sponsor_document_enable
        sponsor_document {
          publicURL
        }
        sponsors {
          colour
          name
          tier
          companies {
            frontmatter {
              name
              link
              image {
                light {
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 512) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                dark {
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 512) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
        event_start
        event_end
        subtitle
      }
      fields {
        slug
      }
    }
  }
`
