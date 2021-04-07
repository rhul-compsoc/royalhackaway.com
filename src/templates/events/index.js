import { graphql } from "gatsby"
import React from "react"
import { EventCountdownSection } from "../../components/EventCountdownSection"
import { EventFrequentlyAskedQuestionsSection } from "../../components/EventFrequentlyAskedQuestionsSection"
import { EventJumbotron } from "../../components/EventJumbotron"
import { EventLocationSection } from "../../components/EventLocationSection"
import { EventPeopleSection } from "../../components/EventPeopleSection"
import { EventScheduleSection } from "../../components/EventScheduleSection"
import { EventSponsorsSection } from "../../components/EventSponsorsSection"
import { HackathonDefinitionSection } from "../../components/HackathonDefinitionSection"
import { Layout } from "../../components/Layout"
import { MajorLeagueHackingBadge } from "../../components/MajorLeagueHackingBadge"
import { SiteSEO } from "../../components/SiteSEO"

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  const {
    event_widescreen_logo,
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
    event_start,
    countdown_timer_enable,
    hackathon_definition_enable,
    location_embed_enable,
    location_embed_link,
    mlh_badge_enable,
    mlh_badge_year,
    short_description,
  } = frontmatter

  return (
    <Layout>
      <SiteSEO title={short_name} description={short_description} />
      {event_widescreen_logo && (
        <SiteSEO image={event_widescreen_logo.publicURL} />
      )}
      <EventJumbotron frontmatter={frontmatter} />
      {countdown_timer_enable && <EventCountdownSection start={event_start} />}
      {hackathon_definition_enable && <HackathonDefinitionSection />}
      {location_embed_enable && (
        <EventLocationSection map={location_embed_link} />
      )}
      {faq_enable && <EventFrequentlyAskedQuestionsSection faq={faq} />}
      {sponsors_list_enable && (
        <EventSponsorsSection
          sponsors={sponsors}
          sponsor_document={sponsor_document}
          sponsor_document_enable={sponsor_document_enable}
        />
      )}
      {people_enable && (
        <EventPeopleSection event_name={short_name} people={people} />
      )}
      {schedule_enable && <EventScheduleSection schedule={schedule} />}

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
        event_widescreen_logo {
          publicURL
          childImageSharp {
            fluid(maxHeight: 256) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
        jumbotron_enable_title
        jumbotron_enable_widescreen_logo
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
                light {
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 512) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                dark {
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 512) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
          role
        }
        schedule_enable
        short_description
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
                light {
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 512) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                dark {
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 512) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
        event_start
        countdown_timer_enable
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
