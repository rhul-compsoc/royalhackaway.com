import { graphql, StaticQuery } from "gatsby"
import React, { Component } from "react"
import styles from "./index.module.scss"

class EventFrequentlyAskedQuestions extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              filter: {
                fields: { template: { eq: "faq" } }
                frontmatter: { is_public: { eq: true } }
              }
            ) {
              nodes {
                frontmatter {
                  name
                }
                html
              }
            }
          }
        `}
        render={data => (
          <section className={styles.faq}>
            <div className="row justify-content-md-center">
              <div id="faq-title-wrapper" className="col-sm-4 text-center">
                <h2 className="display-4">FAQ</h2>
                <p className="text-muted">Questions people usually have.</p>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {data.allMarkdownRemark.nodes.map((faq, index) => (
                  <div className="col-sm-4" key={index}>
                    <h3 className="text-left text-muted">
                      {faq.frontmatter.name}
                    </h3>
                    <div dangerouslySetInnerHTML={{ __html: faq.html }}></div>
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

export { EventFrequentlyAskedQuestions }
