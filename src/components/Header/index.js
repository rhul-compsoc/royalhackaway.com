import { graphql, Link, StaticQuery } from "gatsby"
import React, { useState } from "react"
import { CombineStyles } from "../../helpers/CombineStyles"
import logo from "../../assets/images/logo/rh.svg"
import styles from "./index.module.scss"
// import sponsorHandout from "../../assets/pdf/sponsorhandout.pdf"
import { MajorLeagueHackingBadge } from "../MajorLeagueHackingBadge"

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
                    sort: { fields: frontmatter___start, order: DESC }
                    limit: 1
                  ) {
                    nodes {
                      frontmatter {
                        show_sponsor_button
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
                  show_sponsor_button,
                } = data.allMarkdownRemark.nodes[0].frontmatter

                if (!show_sponsor_button) return null

                return (
                  <li>
                    <a href={sponsor_document?.publicURL}>Sponsor Us</a>
                  </li>
                )
              }}
            />
          </ul>
          {/* <MajorLeagueHackingBadge /> */}
        </div>
      </nav>
    </header>
  )
}
