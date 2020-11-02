import React, { Component } from "react"
import styles from "./index.module.scss"
import smallLogo from "../../assets/images/logo/rh-small-light.svg"
import { CombineStyles } from "../../helpers/CombineStyles"
import { graphql, StaticQuery } from "gatsby"

class ComingSoon extends Component {
  render() {
    return (
      <section className={CombineStyles(styles.comingSoon)}>
        <div className={styles.comingSoonContainer}>
          <div className={styles.comingSoonLogo}>
            <img src={smallLogo} alt="Royal Hackaway Logo" />
          </div>
          <div className={styles.comingSoonContent}>
            <StaticQuery
              query={graphql`
                {
                  allMarkdownRemark(
                    filter: {
                      fields: { template: { eq: "events" } }
                      frontmatter: { is_public: { eq: true } }
                    }
                    sort: { fields: frontmatter___start, order: DESC }
                    limit: 1
                  ) {
                    nodes {
                      frontmatter {
                        show_sponsor_button
                        sponsor_document {
                          publicURL
                        }
                        name
                        start
                      }
                    }
                  }
                }
              `}
              render={data => {
                if (!data.allMarkdownRemark.nodes[0]) return null

                const {
                  name,
                  start,
                  sponsor_document,
                  show_sponsor_button,
                } = data.allMarkdownRemark.nodes[0].frontmatter
                const date = new Date(start).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                })

                return (
                  <>
                    <h1 className={styles.comingSoonTitle}>{name}</h1>
                    <h2>{date}</h2>
                    <p>More information coming soon!</p>
                    <div className={styles.comingSoonButtons}>
                      {show_sponsor_button && (
                        <a
                          className="btn btn-hackaway-white"
                          href={sponsor_document?.publicURL}
                        >
                          Sponsor Us
                        </a>
                      )}
                    </div>
                  </>
                )
              }}
            />
          </div>
        </div>
      </section>
    )
  }
}

export { ComingSoon }
