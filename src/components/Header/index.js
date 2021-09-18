import React from "react"
import logoDark from "../../assets/images/logo/hackaway-logo-text-dark-theme.svg"
import logo from "../../assets/images/logo/rh.svg"
import { CombineStyles } from "../../helpers/CombineStyles"
import { SiteLink } from "../SiteClickable"
import { SiteImage } from "../SiteImage"
import * as styles from "./index.module.scss"

export const Header = ({ parentData }) => {
  const navigation = parentData?.frontmatter?.navigation

  return (
    <header className={styles.header}>
      <nav className={CombineStyles(styles.navBar, "container")}>
        <div className={styles.navBarLeftSide}>
          <SiteLink to="/">
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
          </SiteLink>
        </div>
        <div className={styles.navBarRightSide}>
          <SiteLink to="/">Home</SiteLink>
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
