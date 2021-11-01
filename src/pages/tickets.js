import { SiteLink } from "../components/SiteClickable"
import React from "react"
import { Layout } from "../components/Layout"
import { SiteSEO } from "../components/SiteSEO"
import { TitoWidget } from "../components/TitoWidget"

const GetTicketsPage = () => (
  <Layout>
    <SiteSEO title="Get Tickets" />
      <section style={{ flexGrow: 1, display: "flex" }}>
        <div className="text-center container" style={{ alignSelf: "center" }}>
          <h1 className="display-1">Get Tickets</h1>
          <TitoWidget event_name="royal-hackaway/v5" releases="hacker" />
      </div>
    </section>
  </Layout>
)

export default GetTicketsPage
