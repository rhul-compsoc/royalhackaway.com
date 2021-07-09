import React from "react"
import { background, letters } from "./index.module.scss"
import letterImage from "./logo_var.png"

const FreshersHack = ({ style }) => {
  return (
    <div className={background} style={style}>
      <img src={letterImage} className={letters} />
    </div>
  )
}

export { FreshersHack }
