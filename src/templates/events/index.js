import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/Layout"
import { EventJumbotron } from "../../components/EventJumbotron"
import { EventDescription } from "../../components/EventDescription"
import { GoogleMaps } from "../../components/GoogleMaps"
import { EventSchedule } from "../../components/EventSchedule"
import { EventSponsors } from "../../components/EventSponsors"
import { EventFrequentlyAskedQuestions } from "../../components/EventFrequentlyAskedQuestions"
import { EventQualms } from "../../components/EventQualms"
import { SEO } from "../../components/SEO"
import { EventInternetConnectivity } from "../../components/EventInternetConnectivity"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const {
    color,
    name,
    full_description,
    show_map,
    map_src,
    schedule,
    show_sponsors_list,
    jumbotron_image,
    show_wifi_details,
    internet,
    show_schedule,
    show_faq,
  } = frontmatter
  return (
    <Layout>
      <SEO
        title={name}
        description={full_description}
        image={jumbotron_image?.publicURL}
      />

      <EventJumbotron data={data} />
      {full_description && (
        <EventDescription colour={color} description={full_description} />
      )}
      {show_map && <GoogleMaps map={map_src} />}

      {
        // Page content!
        html && (
          <div className="container">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        )
      }

      {show_schedule && <EventSchedule schedule={schedule} />}
      {show_sponsors_list && <EventSponsors data={data} />}
      {show_faq && <EventFrequentlyAskedQuestions />}
      {show_wifi_details && <EventInternetConnectivity internet={internet} />}
      <EventQualms />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        name
        jumbotron_image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 2160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        small_logo {
          publicURL
        }
        display_logo
        logo_width
        start
        location
        short_description
        show_ticket_button
        ticket_button_text
        full_description
        tickets
        color
        show_map
        map_src
        show_faq
        show_schedule
        schedule {
          name
          events {
            activity
            time
          }
        }
        show_sponsors_list
        sponsors {
          colour
          name
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
        show_wifi_details
        internet {
          username
          ssid
          password
        }
      }
    }
  }
`
