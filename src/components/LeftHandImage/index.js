import React, { Component } from "react"
import {
  jumbotron as jumbotronClass,
  background as backgroundClass,
  renderLayer as renderLayerClass,
  image as imageClass,
  definition,
  leftText,
  link,
  pronunciation,
  word,
} from "./index.module.scss"
import { Parallax, Background } from "react-parallax"
import { StaticImage } from "gatsby-plugin-image"
import { Section } from "../Section"

const LeftHandImage = ({ children }) => {
  return (
    <div className="row">
      <div className="col-12 col-xs-1 col-sm-2 col-md-2 col-lg-4">
        <StaticImage
          src="./IMG_3933.JPG"
          className={imageClass}
          layout="fullWidth"
        />
      </div>
      <div className="col-12 col-xs-11 col-sm-10 col-md-10 col-lg-8">
        {children}
      </div>
    </div>
  )
}

export { LeftHandImage }
