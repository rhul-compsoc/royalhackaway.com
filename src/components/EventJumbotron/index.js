import React from "react"
import { CombineStyles } from "../../helpers/CombineStyles"
import { hackathonTitle } from "./index.module.scss"

const EventJumbotron = ({ children, className, style }) => {
  return (
    <section style={style} className={CombineStyles(hackathonTitle, className)}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-7">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export { EventJumbotron }
