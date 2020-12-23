import React, { Component } from "react"
import styles from "./index.module.scss"
import compsoc from "../../assets/images/logo/rh-white.svg"
import { graphql, StaticQuery } from "gatsby"

class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-light">
        <div className="row justify-content-center py-4">
          <div className="col-md-4">
            <img src={compsoc} className={styles.logo} />
            <p>
              Royal Hackaway is a student-run group that hosts hackathons at
              Royal Holloway, University of London.
            </p>
            <p>
              The Computing Society exists to create a setting where like-minded
              computing enthusiasts can interact and socialise. Our core aim is
              to make the student experience more enjoyable for those with even
              the slightest interest.
            </p>
          </div>
          <div className="col-md-4">
            <h2>Links</h2>
            <ul className={styles.links}>
              <li>
                <a href="https://computingsociety.co.uk">Computing Society</a>
              </li>
              <li>
                <a href="/sitemap.xml">Sitemap</a>
              </li>
              <li>
                <a href="https://github.com/rhul-compsoc/royalhackaway.com">
                  royalhackaway.com on GitHub
                </a>
              </li>
              <li>
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
                    <a href={`mailto:${data.site.siteMetadata.email}`}>
                      {data.site.siteMetadata.email}
                    </a>
                  )}
                />
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footer}>
          <span className={styles.footerContent}>
            Brought to you by the{" "}
            <a
              href="https://computingsociety.co.uk/"
              className={styles.footerLink}
            >
              Royal Holloway, Computing Society
            </a>
          </span>
        </div>
      </footer>
    )
  }
}

export { Footer }
