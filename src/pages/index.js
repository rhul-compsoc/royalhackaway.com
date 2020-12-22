import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { HackathonDefinition } from "../components/HackathonDefinition"
import { HackathonTitle } from "../components/HackathonTitle"
import { HackathonCountdown } from "../components/HackathonCountdown"
import { graphql } from "gatsby"
import { EventSponsors } from "../components/EventSponsors"
import { People } from "../components/People"

const HomePage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { fields, frontmatter } = allMarkdownRemark.nodes[0]

  const {
    show_sponsors_list,
    sponsors,
    show_sponsor_button,
    sponsor_document,
  } = frontmatter
  const { slug } = fields

  return (
    <Layout>
      <SEO title="Home" />
      <HackathonTitle frontmatter={frontmatter} />
      <HackathonCountdown frontmatter={frontmatter} />
      <HackathonDefinition />
      {show_sponsors_list && (
        <EventSponsors
          sponsors={sponsors}
          sponsor_document={sponsor_document}
          show_sponsor_button={show_sponsor_button}
        />
      )}
      <People />
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
          name
          short_name
          start
          full_description
          enable_ticket_button
          show_sponsors_list
          show_sponsor_button
          show_livestream_embed
          livestream_youtube
          display_date
          ticket_button_text
          tickets
          location
          enable_chat_link
          chat_link
          sponsor_document {
            publicURL
          }
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
        fields {
          slug
        }
      }
    }
  }
`
