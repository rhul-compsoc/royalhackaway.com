/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Location } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"
import logo from "../../assets/images/logo/rh-small-1024.png"
import favicon from "../../assets/images/logo/rh-small-64.png"

const SiteDefaultSEO = ({ lang = "en-GB" }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            twitter
          }
        }
      }
    `
  )

  return (
    <Location>
      {locationProps => {
        const metaTags = []

        metaTags.push(
          {
            name: `description`,
            content: site.siteMetadata.description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: "og:url",
            content: `${site.siteMetadata.siteUrl}${locationProps.location.pathname}`,
          },
          {
            property: "og:site_name",
            content: site.siteMetadata.title,
          },
          {
            property: `og:description`,
            content: site.siteMetadata.description,
          },
          {
            property: "og:image",
            content: logo,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.twitter,
          },
          {
            name: `twitter:title`,
            content: site.siteMetadata.title,
          },
          {
            name: `twitter:description`,
            content: site.siteMetadata.description,
          }
        )

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            titleTemplate={`${site.siteMetadata.title} :: %s`}
            defaultTitle={site.siteMetadata.title}
            meta={metaTags}
          >
            <link rel="shortcut icon" type="image/png" href={favicon} />
          </Helmet>
        )
      }}
    </Location>
  )
}

SiteDefaultSEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export { SiteDefaultSEO }
