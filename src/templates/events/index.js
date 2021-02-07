import { graphql } from "gatsby"
import React from "react"
import { FrequentlyAskedQuestionsSection } from "../../components/FrequentlyAskedQuestionsSection"
import { EventSponsors } from "../../components/EventSponsors"
import { HackathonCountdown } from "../../components/HackathonCountdown"
import { HackathonDefinition } from "../../components/HackathonDefinition"
import { HackathonTitle } from "../../components/HackathonTitle"
import { Layout } from "../../components/Layout"
import { PeopleSection } from "../../components/PeopleSection"
import { ScheduleSection } from "../../components/ScheduleSection"
import { GoogleMaps } from "../../components/GoogleMaps"
import { SEO } from "../../components/SEO"
import { MajorLeagueHackingBadge } from "../../components/MajorLeagueHackingBadge"

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  const {
    sponsors_list_enable,
    sponsors,
    sponsor_document_enable,
    sponsor_document,
    short_name,
    people_enable,
    people,
    faq,
    faq_enable,
    schedule_enable,
    schedule,
    start,
    start_timer_enable,
    hackathon_definition_enable,
    location_embed_enable,
    location_embed_link,
    mlh_badge_enable,
    mlh_badge_year,
  } = frontmatter

  return (
    <Layout>
      <SEO title={short_name} />
      <HackathonTitle frontmatter={frontmatter} />
      {start_timer_enable && <HackathonCountdown start={start} />}
      {hackathon_definition_enable && <HackathonDefinition />}
      {location_embed_enable && <GoogleMaps map={location_embed_link} />}
      {faq_enable && <FrequentlyAskedQuestionsSection faq={faq} />}
      {sponsors_list_enable && (
        <EventSponsors
          sponsors={sponsors}
          sponsor_document={sponsor_document}
          sponsor_document_enable={sponsor_document_enable}
        />
      )}
      {people_enable && (
        <PeopleSection event_name={short_name} people={people} />
      )}
      {schedule_enable && <ScheduleSection schedule={schedule} />}

      {mlh_badge_enable && <MajorLeagueHackingBadge year={mlh_badge_year} />}
    </Layout>
  )
}
export default HomePage

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        chat_link
        chat_link_enable
        display_date
        faq_enable
        faq {
          fields {
            slug
          }
          frontmatter {
            name
          }
          html
        }
        full_description
        hackathon_definition_enable
        livestream_button_enable
        livestream_embed_enable
        livestream_link
        livestream_type
        location
        location_embed_enable
        location_embed_link
        mlh_badge_enable
        mlh_badge_year
        name
        people_enable
        people {
          person {
            frontmatter {
              name
              description
              short_description
              is_public
              handles {
                service
                handle
              }
              image {
                childImageSharp {
                  fluid(maxWidth: 512) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          role
        }
        schedule_enable
        short_name
        schedule {
          name
          events {
            time
            activity
          }
        }
        sponsor_document_enable
        sponsor_document {
          publicURL
        }
        sponsors_list_enable
        sponsors {
          colour
          name
          tier
          companies {
            frontmatter {
              name
              link
              image {
                publicURL
                childImageSharp {
                  fluid(maxHeight: 256) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        start
        start_timer_enable
        subtitle
        ticket_button_enable
        ticket_button_label
        ticket_button_link
      }
      fields {
        slug
      }
    }
  }
`
