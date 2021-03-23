import React, { Component } from "react"
import "../../scss/main.scss"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { SiteDefaultSEO } from "../SiteDefaultSEO"
import * as styles from "./index.module.scss"
// import { CookieCutter } from "../CookieCutter"

class Layout extends Component {
  render() {
    return (
      <div>
        <SiteDefaultSEO />
        <div className={styles.layout}>
          <Header />
          <main className={styles.content}>{this.props.children}</main>
          <Footer />
        </div>
        {/* <CookieCutter /> */}
      </div>
    )
  }
}

export { Layout }
