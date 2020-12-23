import { graphql, StaticQuery } from "gatsby"
import React, { Component } from "react"
import styles from "./index.module.scss"
import { Collapsable } from "../Collapsable"
import { partition } from "../../helpers/partition"

class EventFrequentlyAskedQuestions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: null,
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle(id) {
    this.setState(prev => ({
      opened: prev.opened === id ? null : id,
    }))
  }
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
                fields {
                  slug
                }
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
            <div className="container">
              <div className="row justify-content-center">
                <div id="faq-title-wrapper" className="col-sm-4 text-center">
                  <h2 className="display-4">FAQ</h2>
                  <p>Questions people usually have.</p>
                </div>
              </div>

              <div className="row">
                {partition(data.allMarkdownRemark.nodes, 2).map(
                  (column, index) => (
                    <div className="col-12 col-md-6" key={index}>
                      {column.map(faq => (
                        <div
                          key={faq.fields.slug}
                          onClick={() => this.toggle(faq.fields.slug)}
                        >
                          <Collapsable
                            title={faq.frontmatter.name}
                            html={faq.html}
                            collapsed={this.state.opened !== faq.fields.slug}
                          />
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        )}
      />
    )
  }
}

export { EventFrequentlyAskedQuestions }
