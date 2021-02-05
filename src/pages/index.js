import { graphql } from "gatsby"
import React from "react"
import { EventFrequentlyAskedQuestions } from "../components/EventFrequentlyAskedQuestions"
import { EventSponsors } from "../components/EventSponsors"
import { HackathonCountdown } from "../components/HackathonCountdown"
import { HackathonDefinition } from "../components/HackathonDefinition"
import { HackathonTitle } from "../components/HackathonTitle"
import { Layout } from "../components/Layout"
import { People } from "../components/People"
import { SEO } from "../components/SEO"

const HomePage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { frontmatter } = allMarkdownRemark.nodes[0]

  const {
    show_sponsors_list,
    sponsors,
    show_sponsor_button,
    sponsor_document,
    short_name,
  } = frontmatter

  return (
    <Layout>
      <SEO title="Home" />
      <HackathonTitle frontmatter={frontmatter} />
      <HackathonCountdown frontmatter={frontmatter} />
      <HackathonDefinition />
      <EventFrequentlyAskedQuestions />
      {show_sponsors_list && (
        <EventSponsors
          sponsors={sponsors}
          sponsor_document={sponsor_document}
          show_sponsor_button={show_sponsor_button}
        />
      )}
      <People name={short_name} />
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
          enable_livestream_button
          livestream_type
          livestream_link
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
              image {
                publicURL
              }
              link
              name
              style {
                height
              }
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
