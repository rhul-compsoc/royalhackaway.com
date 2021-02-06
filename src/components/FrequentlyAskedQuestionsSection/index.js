import React, { Component } from "react"
import { CombineStyles } from "../../helpers/CombineStyles"
import { partition } from "../../helpers/partition"
import { Collapsable } from "../Collapsable"
import styles from "./index.module.scss"

class FrequentlyAskedQuestionsSection extends Component {
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
      <section className={styles.faq}>
        <div className="container">
          <div
            className={CombineStyles(
              "row justify-content-center",
              styles.title
            )}
          >
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold">Frequently Asked Questions</h2>
              <p>Answers to some questions we get a lot of!</p>
            </div>
          </div>

          <div className="row">
            {partition(this.props.faq, 2).map((column, index) => (
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
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export { FrequentlyAskedQuestionsSection }
