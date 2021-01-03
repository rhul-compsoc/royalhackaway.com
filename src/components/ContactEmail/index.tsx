import { graphql, StaticQuery } from "gatsby"
import React, { ReactNode } from "react"

interface Props {
  className: string
}

const ContactEmail = ({ className }: Props): ReactNode => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            email
          }
        }
      }
    `}
    render={data => (
      <a className={className} href={`mailto:${data.site.siteMetadata.email}`}>
        {data.site.siteMetadata.email}
      </a>
    )}
  />
)

export { ContactEmail }
