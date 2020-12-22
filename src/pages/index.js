import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { HackathonDefinition } from "../components/HackathonDefinition"
import { HackathonTitle } from "../components/HackathonTitle"
import { graphql } from "gatsby"
import { EventSponsors } from "../components/EventSponsors"
import { People } from "../components/People"

const HomePage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { fields, frontmatter } = allMarkdownRemark.nodes[0]

  const {
    name,
    enable_ticket_button,
    show_sponsors_list,
    sponsors,
    show_sponsor_button,
    sponsor_document,
    show_livestream_embed,
    livestream_youtube,
    full_description,
    display_date,
    ticket_button_text,
    start,
    tickets,
  } = frontmatter
  const { slug } = fields

  return (
    <Layout>
      <SEO title="Home" />
      {/* Insert elements here! */}
      <HackathonTitle
        enable_ticket_button={enable_ticket_button}
        show_sponsor_button={show_sponsor_button}
        show_livestream_embed={show_livestream_embed}
        sponsor_document={sponsor_document}
        ticket_button_text={ticket_button_text}
        livestream_youtube={livestream_youtube}
        full_description={full_description}
        display_date={display_date}
        tickets={tickets}
        name={name}
        slug={slug}
        start={start}
      />
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
