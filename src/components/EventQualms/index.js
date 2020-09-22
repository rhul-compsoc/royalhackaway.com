import { graphql, StaticQuery } from "gatsby"
import React, { Component } from "react"
import { CombineStyles } from "../../helpers/CombineStyles"
import styles from "./index.module.scss"

class EventQualms extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                email
              }
            }
          }
        `}
        render={data => (
          <section className={CombineStyles("text-center", styles.eventQualms)}>
            <p>Questions, queries or qualms about this event?</p>
            <a
              className="btn btn-hackaway-orange text-white"
              href={`mailto:${data.site.siteMetadata.email}`}
            >
              Get in touch
            </a>
          </section>
        )}
      />
    )
  }
}

export { EventQualms }
