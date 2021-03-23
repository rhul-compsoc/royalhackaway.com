import GatsbyImage, { FluidObject } from "gatsby-image"
import React, { ReactNode } from "react"

interface GatsbyGraphqlImageResponse {
  publicURL: string
  childImageSharp: {
    fluid: FluidObject
    [key: string]: unknown
  }
}

/**
 * A renderer of images from a GraphQL query, accepting vector or bitmap graphics.
 */
const SiteImage = ({
  image,
  ...other
}: {
  image: GatsbyGraphqlImageResponse
}): ReactNode => {
  if (image.publicURL.endsWith(".svg")) {
    return <img {...other} src={image.publicURL} />
  } else {
    return (
      <GatsbyImage
        {...other}
        fluid={image.childImageSharp.fluid}
        imgStyle={{ objectFit: "contain" }}
      />
    )
  }
}

export { SiteImage }
