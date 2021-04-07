import GatsbyImage, { FluidObject } from "gatsby-image"
import React, { ReactNode } from "react"
import { CombineStyles } from "../../helpers/CombineStyles"

interface GatsbyGraphqlImageResponse {
  publicURL: string
  childImageSharp: {
    fluid: FluidObject
    [key: string]: unknown
  }
}

interface ThemedGatsbyGraphqlImageResponse {
  light: GatsbyGraphqlImageResponse
  dark: GatsbyGraphqlImageResponse
}

/**
 * A renderer of images from a GraphQL query, accepting vector or bitmap graphics.
 */
const SiteImage = ({
  image,
  fluid = {},
  style = {},
  className,
  fixedHeight,
  ...other
}: {
  image: ThemedGatsbyGraphqlImageResponse
  fluid?: object
  style?: object
  className?: string
  fixedHeight?: number
}): ReactNode => {
  let width
  let height

  if (fixedHeight) {
    height = fixedHeight + "em"

    // If there's a bitmap, calculate the appropriate width
    // so that it can fit in perfectly.
    if (image.light.childImageSharp?.fluid.aspectRatio) {
      width = fixedHeight * image.light.childImageSharp.fluid.aspectRatio + "em"
    }
  }

  return (
    <>
      {image.light.publicURL.endsWith(".svg") ? (
        <img
          {...other}
          src={image.light.publicURL}
          style={{
            ...style,
            height,
          }}
          className={CombineStyles(className, "hackaway-light-theme")}
        />
      ) : (
        <GatsbyImage
          {...other}
          fluid={{
            ...image.light.childImageSharp.fluid,
            ...fluid,
          }}
          style={{
            ...style,
            width,
            height,
          }}
          className={CombineStyles(className, "hackaway-light-theme")}
        />
      )}

      {image.dark.publicURL.endsWith(".svg") ? (
        <img
          {...other}
          src={image.dark.publicURL}
          style={{
            ...style,
            height,
          }}
          className={CombineStyles(className, "hackaway-dark-theme")}
        />
      ) : (
        <GatsbyImage
          {...other}
          fluid={{
            ...image.dark.childImageSharp.fluid,
            ...fluid,
          }}
          style={{
            ...style,
            width,
            height,
          }}
          className={CombineStyles(className, "hackaway-dark-theme")}
        />
      )}
    </>
  )
}

export { SiteImage }
