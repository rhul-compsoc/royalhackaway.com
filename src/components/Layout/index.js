import React from "react"
import "../../scss/main.scss"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { SiteDefaultSEO } from "../SiteDefaultSEO"
import * as styles from "./index.module.scss"
// import { CookieCutter } from "../CookieCutter"

const Layout = ({ children, parentData }) => {
  return (
    <div>
      <SiteDefaultSEO />
      <div className={styles.layout}>
        <Header parentData={parentData} />
        <main className={styles.content}>{children}</main>
        <Footer parentData={parentData} />
      </div>
      {/* <CookieCutter /> */}
    </div>
  )
}

export { Layout }
