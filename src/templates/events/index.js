import { graphql } from "gatsby"
import React from "react"
import { Layout } from "../../components/Layout"
import { SiteSEO } from "../../components/SiteSEO"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { EventContextProvider } from "../../components/EventContext"

const HomePage = ({ data }) => {
  const {
    short_name,
    short_description,
    sponsor_document_enable,
    sponsor_document,
  } = data.mdx.frontmatter

  return (
    <Layout
      sponsor_document={sponsor_document_enable && sponsor_document.publicURL}
    >
      <SiteSEO title={short_name} description={short_description} />
      <EventContextProvider data={data}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
        subtitle
      }
      fields {
        slug
      }
    }
  }
`
