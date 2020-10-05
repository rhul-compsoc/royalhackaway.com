import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { HackathonDefinition } from "../components/HackathonDefinition"
import { HackathonTitle } from "../components/HackathonTitle"
import { EventFrequentlyAskedQuestions } from "../components/EventFrequentlyAskedQuestions"
import DropdownFrequentlyAskedQuestions from "../components/DropdownFrequentlyAskedQuestions"
const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    {/* Insert elements here! */}
    <HackathonTitle />
    <HackathonDefinition />
    <EventFrequentlyAskedQuestions />
    <DropdownFrequentlyAskedQuestions />
  </Layout>
)

export default HomePage
