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
            ) {
              nodes {
                frontmatter {
                  name
                  short_description
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
            <div className="row justify-content-md-center">
              <div className="col-sm-4 text-center">
                <h2 className="display-4">People</h2>
                <p className="text-muted">The team that makes this possible.</p>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                {data.allMarkdownRemark.nodes.map((person, index) => (
                  <div className="col-6 col-sm-4 col-md-3" key={index}>
                    <Img
                      fluid={
                        person.frontmatter.jumbotron_image.childImageSharp.fluid
                      }
                    />
                    <div className="text-center">
                      <h3 className={styles.name}>{person.frontmatter.name}</h3>
                      {
                        person.frontmatter.short_description &&
                        <p className={CombineStyles(styles.description, 'text-muted')}>{person.frontmatter.short_description}</p>
                      }
                      <div
                        className={styles.body}
                        dangerouslySetInnerHTML={{ __html: person.html }}
                      ></div>
                      {
                        person.frontmatter.handles.map(handle => <PersonHandle key={handle.handle} handle={handle.handle} service={handle.service} />)
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      />
    )
  }
}

export { People }
