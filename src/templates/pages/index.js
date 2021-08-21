import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { EventContextProvider } from "../../components/EventContext"
import { Layout } from "../../components/Layout"
import { SiteLink } from "../../components/SiteClickable"
import { SiteSEO } from "../../components/SiteSEO"
import {
  header as headerClass,
  mdx as mdxClass,
  subheading as subheadingClass,
  toc as tocClass,
} from "./index.module.scss"

const HomePage = ({ data }) => {
  const { frontmatter, tableOfContents } = data.mdx

  const { name, short_name, short_description, parent, children } = frontmatter

  let title = name

  if (parent?.frontmatter?.short_name)
    title = parent.frontmatter.name + " :: " + title

  return (
    <Layout parentData={parent || data.mdx}>
      <SiteSEO title={title} description={short_description} />
      <EventContextProvider data={data}>
        <div className="container">
          <div className="row">
            <div className="col col-12 col-md-12 order-1 col-lg-4 order-lg-2">
              {tableOfContents.items && (
                <>
                  <h3>Table of Contents</h3>
                  <ol className={tocClass}>
                    {tableOfContents.items.map(item => (
                      <li key={item.url}>
                        <SiteLink to={item.url}>{item.title}</SiteLink>
                      </li>
                    ))}
                  </ol>
                </>
              )}
            </div>
            <div className="col col-12 col-md-12 order-2 col-lg-8 order-lg-1">
              <SiteLink to={parent.fields.slug} className={headerClass}>
                {parent?.frontmatter?.short_name}
              </SiteLink>
              <h2 className={subheadingClass}>{short_name}</h2>

              {children?.map(child => (
                <div key={child.fields.slug}>
                  <h3>
                    <SiteLink to={child.fields.slug}>
                      {child.frontmatter.name}
                    </SiteLink>
                  </h3>
                  <p>
                    <i>{child.frontmatter.short_description}</i>
                  </p>
                </div>
              ))}

              <div className={mdxClass}>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </div>
            </div>
          </div>
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
      tableOfContents
      frontmatter {
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
        parent {
          fields {
            slug
          }
          frontmatter {
            name
            short_name
            sponsor_document {
              publicURL
            }
            sponsor_document_enable
            navigation {
              label
              to
              href
              file {
                publicURL
              }
            }
          }
        }
        children {
          fields {
            slug
          }
          frontmatter {
            name
            short_name
            short_description
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
      }
      fields {
        slug
      }
    }
  }
`
