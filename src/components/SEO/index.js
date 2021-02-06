/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title, description, image }) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {description && <meta name="description" content={description} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="og:image" content={image}></meta>}
    </Helmet>
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.string,
}

export { SEO }
