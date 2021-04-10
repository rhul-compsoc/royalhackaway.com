import React, { Component } from "react"
import { partition } from "../../helpers/partition"
import { Collapsable } from "../Collapsable"
import { Section } from "../Section"
import * as styles from "./index.module.scss"

class EventFrequentlyAskedQuestionsSection extends Component {
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
      <Section
        className={styles.faq}
        title="Frequently Asked Questions"
        subtitle="Answers to some questions we get a lot of!"
      >
        <div className="container">
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
      </Section>
    )
  }
}

export { EventFrequentlyAskedQuestionsSection }
