import { MDXProvider } from "@mdx-js/react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { FaGithub } from "react-icons/fa"
import { EventContextProvider } from "../../components/EventContext"
import { Layout } from "../../components/Layout"
import { SiteLink } from "../../components/SiteClickable"
import { SiteCodeBlock } from "../../components/SiteCodeBlock"
import { SiteImage } from "../../components/SiteImage"
import { SiteSEO } from "../../components/SiteSEO"
import { CombineStyles } from "../../helpers/CombineStyles"
import {
  childLink as childLinkClass,
  header as headerClass,
  mdx as mdxClass,
  peopleContainerContainer as peopleContainerContainerClass,
  personContainer as personContainerStyle,
  personImage as personImageStyle,
  sidebarContainer as sidebarContainerClass,
  subheading as subheadingClass,
  toc as tocClass,
  tocHeader as tocHeaderClass,
} from "./index.module.scss"

const HomePage = ({ data }) => {
  const { githubUrl } = data.site.siteMetadata
  const { frontmatter, fields, tableOfContents, timeToRead } = data.mdx

  const { relativePath } = fields
  const {
    name,
    short_name,
    short_description,
    parent,
    children,
    page_edited,
    page_created,
    people,
  } = frontmatter

  let title = name

  if (parent?.frontmatter?.short_name)
    title = parent.frontmatter.name + " :: " + title

  return (
    <Layout parentData={parent || data.mdx}>
      <SiteSEO title={title} description={short_description} />
      <EventContextProvider data={data}>
        <div className="container">
          <div className="row">
            <div className="col">
              <SiteLink to={parent.fields.slug} className={headerClass}>
                {parent?.frontmatter?.short_name}
              </SiteLink>
              <h2 className={subheadingClass}>{short_name}</h2>
            </div>
          </div>
          <div className="row">
            <div
              className={CombineStyles(
                "col col-12 col-md-12 order-1 col-lg-4 order-lg-2",
                sidebarContainerClass
              )}
            >
              {(page_created || page_edited) && (
                <p>
                  {page_created && (
                    <>
                      Created {new Date(page_created).toLocaleDateString()}
                      <br />
                    </>
                  )}
                  {page_edited && (
                    <>
                      Last Edited {new Date(page_edited).toLocaleDateString()}
                      <br />
                    </>
                  )}
                </p>
              )}

              <p>About a {timeToRead} minute read.</p>

              {people && (
                <div className={peopleContainerContainerClass}>
                  {people.map(({ person }, i) => (
                    <div key={i} className={personContainerStyle}>
                      <SiteImage
                        fluid={{ aspectRatio: 1 }}
                        image={person.frontmatter.image}
                        className={personImageStyle}
                        title={person.frontmatter.description}
                        alt={`A picture of ${person.frontmatter.name}`}
                      />
                      <span>{person.frontmatter.name}</span>
                    </div>
                  ))}
                </div>
              )}

              {tableOfContents.items && (
                <>
                  <h3 className={tocHeaderClass}>Table of Contents</h3>
                  <ol className={tocClass}>
                    {tableOfContents.items.map(item => (
                      <li key={item.url}>
                        <SiteLink to={item.url}>{item.title}</SiteLink>
                      </li>
                    ))}
                  </ol>
                </>
              )}

              <p>
                <FaGithub />{" "}
                <SiteLink
                  href={`${githubUrl}/tree/master/src/pages/${relativePath}`}
                >
                  Edit this page on GitHub
                </SiteLink>
              </p>
            </div>
            <div className="col col-12 col-md-12 order-2 col-lg-8 order-lg-1">
              {children?.map(child => (
                <div key={child.fields.slug} className={childLinkClass}>
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
                <MDXProvider
                  components={{
                    pre: SiteCodeBlock,
                  }}
                >
                  <MDXRenderer>{data.mdx.body}</MDXRenderer>
                </MDXProvider>
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
    site {
      siteMetadata {
        githubUrl
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      tableOfContents
      timeToRead
      frontmatter {
        full_description
        name
        page_created
        page_edited
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
                    fluid(maxWidth: 64) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                dark {
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 64) {
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
        relativePath
      }
    }
  }
`
