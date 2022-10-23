import { GatsbyImage } from "gatsby-plugin-image"
import React, { ReactNode } from "react"
import { CombineStyles } from "../../helpers/CombineStyles"

import {
  hackawayDarkThemeOnly,
  hackawayLightThemeOnly,
} from "./index.module.scss"

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
    if (image.light.childImageSharp?.gatsbyImageData) {
      const data = image.light.childImageSharp.gatsbyImageData
      width = fixedHeight * (data.width / data.height) + fixedHeightMeasurement
    }

    console.log(image.light.childImageSharp, width, height)
  }

  return (
    <>
      {image.light &&
        forcedTheme !== "dark" &&
        (image.light.publicURL.endsWith(".svg") ||
        image.dark.publicURL.endsWith(".gif") ? (
          <img
            {...other}
            src={image.light.publicURL}
            style={{
              ...style,
              height,
            }}
            className={CombineStyles(
              className,
              !forcedTheme && hackawayLightThemeOnly
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
              !forcedTheme && hackawayLightThemeOnly
            )}
            alt=""
          />
        ))}

      {image.dark &&
        forcedTheme !== "light" &&
        (image.dark.publicURL.endsWith(".svg") ||
        image.dark.publicURL.endsWith(".gif") ? (
          <img
            {...other}
            src={image.dark.publicURL}
            style={{
              ...style,
              height,
            }}
            className={CombineStyles(
              className,
              !forcedTheme && hackawayDarkThemeOnly
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
              !forcedTheme && hackawayDarkThemeOnly
            )}
            alt=""
          />
        ))}
    </>
  )
}

export { SiteImage }
