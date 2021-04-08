import React, { Component, useContext, useState } from "react"
import "../../scss/main.scss"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { SiteDefaultSEO } from "../SiteDefaultSEO"
import * as styles from "./index.module.scss"
// import { CookieCutter } from "../CookieCutter"

const Layout = ({ children, sponsor_document }) => {
  return (
    <div>
      <SiteDefaultSEO />
      <div className={styles.layout}>
        <Header sponsor_document={sponsor_document} />
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
      {/* <CookieCutter /> */}
    </div>
  )
}

export { Layout }
