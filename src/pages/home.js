import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { HackathonDefinition } from "../components/HackathonDefinition"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    {/* Insert elements here! */}
    <HackathonDefinition />
  </Layout>
)

export default HomePage
