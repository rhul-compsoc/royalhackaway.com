/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"

interface Props {
  title?: string
  description?: string
  image?: string
}

const SiteSEO = ({ title, description, image }: Props) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {description && <meta name="description" content={description} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta property="og:image" content={image}></meta>}
      {image && <meta name="twitter:card" content="summary_large_image"></meta>}
      {image && <meta name="twitter:image" content={image}></meta>}
    </Helmet>
  )
}

export { SiteSEO }
