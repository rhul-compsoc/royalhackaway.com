import { GatsbyImage } from "gatsby-plugin-image"
import React, { ReactNode } from "react"
import { CombineStyles } from "../../helpers/CombineStyles"

interface GatsbyGraphqlImageResponse {
  publicURL: string
  childImageSharp: any
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
  fixedHeightMeasurement = "em",
  aspectRatio,
  forcedTheme,
  ...other
}: {
  image: ThemedGatsbyGraphqlImageResponse
  fluid?: object
  style?: object
  className?: string
  fixedHeight?: number
  fixedHeightMeasurement?: string
  aspectRatio?: number
  forcedTheme?: "light" | "dark"
}): ReactNode => {
  let width
  let height

  if (fixedHeight) {
    height = fixedHeight + fixedHeightMeasurement

    // If there's a bitmap, calculate the appropriate width
    // so that it can fit in perfectly.
    if (image.light.childImageSharp?.gatsbyImageData.aspectRatio) {
      width =
        fixedHeight * image.light.childImageSharp.gatsbyImageData.aspectRatio +
        fixedHeightMeasurement
    }
  }

  return (
    <>
      {image.light &&
        forcedTheme !== "dark" &&
        (image.light.publicURL.endsWith(".svg") ? (
          <img
            {...other}
            src={image.light.publicURL}
            style={{
              ...style,
              height,
            }}
            className={CombineStyles(
              className,
              !forcedTheme && "hackaway-light-theme-only"
            )}
          />
        ) : (
          <GatsbyImage
            image={image.light.childImageSharp.gatsbyImageData}
            {...other}
            style={{
              ...style,
              width,
              height,
            }}
            className={CombineStyles(
              className,
              !forcedTheme && "hackaway-light-theme-only"
            )}
            alt=""
          />
        ))}

      {image.dark &&
        forcedTheme !== "light" &&
        (image.dark.publicURL.endsWith(".svg") ? (
          <img
            {...other}
            src={image.dark.publicURL}
            style={{
              ...style,
              height,
            }}
            className={CombineStyles(
              className,
              !forcedTheme && "hackaway-dark-theme-only"
            )}
          />
        ) : (
          <GatsbyImage
            image={image.dark.childImageSharp.gatsbyImageData}
            {...other}
            style={{
              ...style,
              width,
              height,
            }}
            className={CombineStyles(
              className,
              !forcedTheme && "hackaway-dark-theme-only"
            )}
            alt=""
          />
        ))}
    </>
  )
}

export { SiteImage }
