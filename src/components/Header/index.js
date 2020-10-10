import { Link } from "gatsby"
import React, { useState } from "react"
import { CombineStyles } from "../../helpers/CombineStyles"
import logo from "../../assets/images/logo/rh.svg"
import styles from "./index.module.scss"
import sponsorHandout from "../../assets/pdf/sponsorhandout.pdf"
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
            <li>
              <a href={sponsorHandout}>Sponsor Us</a>
            </li>
          </ul>
          <MajorLeagueHackingBadge />
        </div>
      </nav>
    </header>
  )
}
