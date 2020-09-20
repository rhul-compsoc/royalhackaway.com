import React, { Component } from "react"
import styles from "./index.module.scss"
import smallLogo from "../../assets/images/logo/rh-small-light.svg"
import { CombineStyles } from "../../helpers/CombineStyles"
import sponsorHandout from "../../assets/pdf/sponsorhandout.pdf"
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
                        name
                        start
                      }
                    }
                  }
                }
              `}
              render={data => {
                const latest = data.allMarkdownRemark.nodes[0]?.frontmatter
                const date = new Date(latest.start).toLocaleDateString(
                  undefined,
                  {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                  }
                )

                if (!latest) return null

                return (
                  <>
                    <h1 className={styles.comingSoonTitle}>{latest.name}</h1>
                    <h2>{date}</h2>
                  </>
                )
              }}
            />
            <p>More information coming soon!</p>
            <div className={styles.comingSoonButtons}>
              {/*
              <a className="btn btn-outline-light" href="https://">
                Get Updates
              </a>

              // TODO: Get updates!
              
              */}
              <a className="btn btn-hackaway btn-lg" href={sponsorHandout}>
                Sponsor Us
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export { ComingSoon }
