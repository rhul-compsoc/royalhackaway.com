import { Link } from "gatsby"
import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="404!!" />
    <section style={{ flexGrow: 1, display: "flex" }}>
      <div className="text-center container" style={{ alignSelf: "center" }}>
        <h1 className="display-1">404</h1>
        <p>
          You have reached a dead end. <Link to="/">Go home?</Link>
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
