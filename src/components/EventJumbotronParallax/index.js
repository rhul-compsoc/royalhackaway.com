import React from "react"
import {
  jumbotron as jumbotronClass,
  background as backgroundClass,
  renderLayer as renderLayerClass,
  image as imageClass,
} from "./index.module.scss"
import { Parallax, Background } from "react-parallax"
import { StaticImage } from "gatsby-plugin-image"

const EventJumbotronParallax = ({ children, className, style }) => {
  return (
    <Parallax strength={300} className={jumbotronClass}>
      <Background className={backgroundClass}>
        <StaticImage
          src="./IMG_3962.blur.jpg"
          className={imageClass}
          layout="fullWidth"
        />
      </Background>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-7">
            {children}
          </div>
        </div>
      </div>
    </Parallax>
  )
}

export { EventJumbotronParallax }
