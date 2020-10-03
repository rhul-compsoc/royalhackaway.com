import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { HackathonDefinition } from "../components/HackathonDefinition"
import { HackathonTitle } from "../components/HackathonTitle"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    {/* Insert elements here! */}
    <HackathonTitle />
    <HackathonDefinition />
  </Layout>
)

export default HomePage
