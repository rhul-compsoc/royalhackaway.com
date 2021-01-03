import React, { Component } from "react"
import "../../scss/main.scss"
import { DefaultSEO } from "../DefaultSEO"
import { Footer } from "../Footer"
import { Header } from "../Header"
import styles from "./index.module.scss"
import { CookieCutter } from "../CookieCutter"

class Layout extends Component {
  render() {
    return (
      <div>
        <DefaultSEO />
        <div className={styles.layout}>
          <Header />
          <main className={styles.content}>{this.props.children}</main>
          <Footer />
        </div>
        <CookieCutter />
      </div>
    )
  }
}

export { Layout }
