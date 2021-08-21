import { SiteLink } from "../components/SiteClickable"
import React from "react"
import { Layout } from "../components/Layout"
import { SiteSEO } from "../components/SiteSEO"

const IndexPage = () => (
  <Layout>
    <SiteSEO title="404!!" />
    <section style={{ flexGrow: 1, display: "flex" }}>
      <div className="text-center container" style={{ alignSelf: "center" }}>
        <h1 className="display-1">404</h1>
        <p>
          You have reached a dead end. <SiteLink to="/">Go home?</SiteLink>
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
