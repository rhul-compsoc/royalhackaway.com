import { graphql, Link, StaticQuery } from "gatsby"
import React, { useState } from "react"
import logo from "../../assets/images/logo/rh.svg"
import logoDark from "../../assets/images/logo/hackaway-logo-text-dark-theme.svg"
import { CombineStyles } from "../../helpers/CombineStyles"
import * as styles from "./index.module.scss"

export const Header = ({ sponsor_document }) => {
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
          {sponsor_document && <a href={sponsor_document}>Sponsor Us</a>}
        </div>
      </nav>
    </header>
  )
}
