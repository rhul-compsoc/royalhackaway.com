import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { HackathonDefinition } from "../components/HackathonDefinition"
import { HackathonTitle } from "../components/HackathonTitle"
import { graphql } from "gatsby"
import { EventSponsors } from "../components/EventSponsors"

const HomePage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { frontmatter } = allMarkdownRemark.nodes[0]

  const { show_ticket_button, show_sponsors_list, sponsors } = frontmatter

  return (
    <Layout>
      <SEO title="Home" />
      {/* Insert elements here! */}
      <HackathonTitle show_ticket_button={show_ticket_button} />
      <HackathonDefinition />
      {show_sponsors_list && <EventSponsors sponsors={sponsors} />}
    </Layout>
  )
}
export default HomePage

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: {
        fields: { template: { eq: "events" } }
        frontmatter: { is_public: { eq: true } }
      }
      sort: { fields: frontmatter___start, order: DESC }
      limit: 1
    ) {
      nodes {
        frontmatter {
          show_ticket_button
          show_sponsors_list
          sponsors {
            colour
            name
            tier
            tier_sponsors {
              colour
              image {
                publicURL
              }
              link
              name
              shadow_colour
            }
          }
        }
      }
    }
  }
`
