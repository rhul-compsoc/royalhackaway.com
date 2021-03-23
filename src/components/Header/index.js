import { graphql, Link, StaticQuery } from "gatsby"
import React, { useState } from "react"
import logo from "../../assets/images/logo/rh.svg"
import { CombineStyles } from "../../helpers/CombineStyles"
import * as styles from "./index.module.scss"

export const Header = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleIsActive = () => {
    setIsActive(prevState => !prevState)
  }

  return (
    <header>
      <nav className={CombineStyles(styles.navBar, "container")}>
        <div className={styles.navBarLeftSide}>
          <button type="button" onClick={() => toggleIsActive()}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Link to="/">
            <img src={logo} alt="RoyalHackaway" />
          </Link>
        </div>
        <div
          className={
            isActive
              ? CombineStyles(
                  styles.navBarRightSide,
                  styles.navBarRightSideActive
                )
              : styles.navBarRightSide
          }
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <StaticQuery
              query={graphql`
                {
                  allMarkdownRemark(
                    filter: {
                      fields: { template: { eq: "events" } }
                      frontmatter: { is_public: { eq: true } }
                    }
                    sort: { fields: frontmatter___event_start, order: DESC }
                    limit: 1
                  ) {
                    nodes {
                      frontmatter {
                        sponsor_document_enable
                        sponsor_document {
                          publicURL
                        }
                      }
                    }
                  }
                }
              `}
              render={data => {
                if (!data?.allMarkdownRemark?.nodes) return null

                const {
                  sponsor_document,
                  sponsor_document_enable,
                } = data.allMarkdownRemark.nodes[0].frontmatter

                if (!sponsor_document_enable) return null

                return (
                  <li>
                    <a href={sponsor_document?.publicURL}>Sponsor Us</a>
                  </li>
                )
              }}
            />
          </ul>
        </div>
      </nav>
    </header>
  )
}
