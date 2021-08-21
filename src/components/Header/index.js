import { Link } from "gatsby"
import React from "react"
import logoDark from "../../assets/images/logo/hackaway-logo-text-dark-theme.svg"
import logo from "../../assets/images/logo/rh.svg"
import { CombineStyles } from "../../helpers/CombineStyles"
import { SiteLink } from "../SiteClickable"
import * as styles from "./index.module.scss"

export const Header = ({ parentData }) => {
  const sponsor_document = parentData?.frontmatter?.sponsor_document
  const navigation = parentData?.frontmatter?.navigation

  return (
    <header className={styles.header}>
      <nav className={CombineStyles(styles.navBar, "container")}>
        <div className={styles.navBarLeftSide}>
          <Link to="/">
            <img
              className="hackaway-light-theme-only"
              src={logo}
              alt="RoyalHackaway"
            />
            <img
              className="hackaway-dark-theme-only"
              src={logoDark}
              alt="RoyalHackaway"
            />
          </Link>
        </div>
        <div className={styles.navBarRightSide}>
          <Link to="/">Home</Link>
          {navigation &&
            navigation.map((link, i) => (
              <SiteLink key={i} {...link}>
                {link.label}
              </SiteLink>
            ))}
        </div>
      </nav>
    </header>
  )
}
