import { Link } from "gatsby"
import React, { Component } from "react"
import { CombineStyles } from "../../helpers/CombineStyles"
import logo from "../../assets/images/logo/rh.svg"
import styles from "./index.module.scss"
import sponsorHandout from "../../assets/pdf/sponsorhandout.pdf"

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
          <div className="container">
            <Link
              className={CombineStyles("navbar-brand", styles.logoLink)}
              to="/"
            >
              <img
                src={logo}
                className={CombineStyles(
                  "d-inline-block",
                  "align-top",
                  styles.logo
                )}
                alt="RoyalHackaway"
              />
            </Link>

            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav">
                <li>
                  <Link to="/" className="nav-link text-dark">
                    Home
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li>
                  <a href={sponsorHandout} className="nav-link text-dark">
                    Sponsor Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export { Header }
