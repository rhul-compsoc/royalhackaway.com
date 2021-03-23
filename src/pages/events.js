import { graphql, Link } from "gatsby"
import React from "react"
import { Layout } from "../components/Layout"
import { Section } from "../components/Section"
import { SiteSEO } from "../components/SiteSEO"

const HomePage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { nodes } = allMarkdownRemark

  return (
    <Layout>
      <SiteSEO
        title="All Events"
        description="A list of all current and past events"
      />

      <Section title="Events">
        <div className="text-center container" style={{ alignSelf: "center" }}>
          {nodes
            .filter(node => node.frontmatter.is_public)
            .map(node => {
              const { frontmatter: event, fields } = node

              const start = new Date(event.start)
              const end = new Date(event.end)
              const link = event.homepage ? "/" : fields.slug

              return (
                <div key={node.id} className="py-4">
                  <h2>{event.name}</h2>
                  <p>
                    {start.toLocaleDateString()} - {end.toLocaleDateString()}
                  </p>
                  <Link
                    to={link}
                    className="btn btn-hackaway-orange text-white px-4"
                  >
                    {event.short_name}
                  </Link>
                </div>
              )
            })}
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
      sort: { fields: frontmatter___start, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          name
          is_public
          short_name
          homepage
          start
          end
        }
        fields {
          slug
        }
      }
    }
  }
`
