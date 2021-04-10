import { graphql } from "gatsby"
import React from "react"
import { Layout } from "../components/Layout"
import { Section } from "../components/Section"
import { SiteSEO } from "../components/SiteSEO"
import { EventInformationCard } from "../components/EventInformationCard"
import { eventsSection } from "./events.module.scss"

const HomePage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { nodes } = allMarkdownRemark

  const future = nodes
    .filter(({ frontmatter }) => frontmatter.is_public && !frontmatter.is_over)
    .sort(
      ({ frontmatter: a }, { frontmatter: b }) =>
        new Date(a.event_start) - new Date(b.event_start)
    )

  const past = nodes
    .filter(({ frontmatter }) => frontmatter.is_public && frontmatter.is_over)
    .sort(
      ({ frontmatter: a }, { frontmatter: b }) =>
        new Date(b.event_start) - new Date(a.event_start)
    )

  return (
    <Layout>
      <SiteSEO
        title="All Events"
        description="A list of all current and past events"
      />

      <Section title="Events" className={eventsSection}>
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3>Future Events</h3>
              {future.length ? (
                future.map(node => (
                  <EventInformationCard key={node.id} node={node} />
                ))
              ) : (
                <p>
                  We don&apos;t have any future events planned yet...
                  <br />
                  Check back with us soon!
                </p>
              )}
            </div>
            <div className="col-12 col-md-6">
              <h3>Past Events</h3>
              {past.length ? (
                past.map(node => (
                  <EventInformationCard key={node.id} node={node} />
                ))
              ) : (
                <p>There aren&apos;t any past events for you to see.</p>
              )}
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
export default HomePage

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fields: { template: { eq: "events" } } }
      sort: { fields: frontmatter___event_start, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          name
          is_public
          is_over
          short_name
          homepage
          event_start
          event_end
        }
        fields {
          slug
        }
      }
    }
  }
`
