import { graphql, StaticQuery } from "gatsby"
import React, { Component } from "react"
import styles from "./index.module.scss"
import Img from "gatsby-image"
import { PersonHandle } from "../PersonHandle"
import { CombineStyles } from "../../helpers/CombineStyles"

class People extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              filter: {
                fields: { template: { eq: "people" } }
                frontmatter: { is_public: { eq: true } }
              }
              sort: { fields: frontmatter___priority, order: DESC }
            ) {
              nodes {
                frontmatter {
                  name
                  description
                  short_description
                  is_public
                  handles {
                    service
                    handle
                  }
                  jumbotron_image {
                    childImageSharp {
                      fluid(maxWidth: 512) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                html
              }
            }
          }
        `}
        render={data => (
          <section className={styles.people}>
            <div className="row justify-content-center">
              <div className="col-sm-4 text-center">
                <h2 className="display-4 fw-bold">Team</h2>
                <p>
                  These are the people that make {this.props.name || "this"}{" "}
                  possible!
                </p>
              </div>
            </div>
            <div className="container py-5">
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-xl-8">
                  <div className="row justify-content-center">
                    {data.allMarkdownRemark.nodes
                      .filter(person => person.frontmatter.is_public)
                      .map(person => (
                        <div
                          className={CombineStyles(
                            "col-6 col-sm-4 col-md-3",
                            styles.card
                          )}
                          key={person.frontmatter.name}
                        >
                          <div className={styles.pictureContainer}>
                            <Img
                              fluid={{
                                ...person.frontmatter.jumbotron_image
                                  .childImageSharp.fluid,
                                aspectRatio: 1,
                              }}
                              className={styles.picture}
                              title={person.frontmatter.description}
                            />
                          </div>
                          <div className={styles.cardContent}>
                            <div className="text-center">
                              <span className={styles.name}>
                                {person.frontmatter.name}
                              </span>
                              <br />
                              <span
                                className={CombineStyles(
                                  styles.description,
                                  "text-muted"
                                )}
                              >
                                {person.frontmatter.short_description}
                              </span>
                              {/* <div
                                className={styles.body}
                                dangerouslySetInnerHTML={{
                                  __html: person.html,
                                }}
                              ></div> */}
                              <div className={styles.handles}>
                                {person.frontmatter.handles.map(handle => (
                                  <PersonHandle
                                    key={handle.handle}
                                    handle={handle.handle}
                                    service={handle.service}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      />
    )
  }
}

export { People }
