import React from "react"
import { background, letters } from "./index.module.scss"
import letterImage from "./logo_var_orange_2_game_jam.png"
import darkLetterImage from "./logo_var_orange_game_jam.png"
import { CombineStyles } from "../../helpers/CombineStyles"

const FreshersJam = ({ style }) => {
  return (
    <div className={background} style={style}>
      <img
        src={letterImage}
        className={CombineStyles(letters, "hackaway-light-theme-only")}
      />
      <img
        src={darkLetterImage}
        className={CombineStyles(letters, "hackaway-dark-theme-only")}
      />
    </div>
  )
}

export { FreshersJam }
